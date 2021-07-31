<template>
    <div
        class="add-custom-task-container"
        @mouseenter="dropdownOpen = true"
        @mouseleave="dropdownOpen = false"
    >
        <div class="xiv-dropdown-arrow">
            <icon name="plus" size="16"/>
        </div>
        <div v-if="dropdownOpen && !mergingOpen" class="xiv-dropdown-body">
            <div class="xiv-dropdown-li new-task-dropdown-li">
                <input class="xiv-input" v-model="newTaskName" placeholder="Enter Custom Task Name Here"/>
            </div>
            <div class="xiv-dropdown-li new-task-dropdown-li">
                <input class="xiv-input" v-model="newTaskNotes" placeholder="Enter Custom Task Notes Here"/>
            </div>
            <button class="xiv-dropdown-li" @click="addCustomTask">Add Custom Task</button>
            <button class="xiv-dropdown-li" @click="mergeCustomTasks">Merge Custom Tasks into App</button>
            <button class="xiv-dropdown-li" @click="removeSelectedCustomTasks">Remove Selected Tasks</button>
        </div>
        <div class="xiv-dropdown-body" v-if="mergingOpen">
            <div class="xiv-dropdown-li merge-custom-tasks-dropdown-item">
                {{mergeTask.name}}<br/>
                {{mergeTask.notes}}<br/><br/>
                {{mergeInfo}}
            </div>
            <button class="xiv-dropdown-li" @click="goToNextMerge">Skip</button>
            <button class="xiv-dropdown-li" @click="exitMerge">Exit</button>
            <template v-if="mergeMatches.length > 0">
                <button
                    v-for="match in mergeMatches"
                    class="xiv-dropdown-li"
                    @click="confirmCurrentMerge(match)"
                >
                    {{match.pathString}}
                </button>
            </template>
        </div>
    </div>
</template>

<script>
import { data } from "../../../data";
import { Task } from "../../../data/Task";
import { getPlayerStore } from "../../../store/electronStore";
import { searchData } from "../../pages/search-data";

export default {
    name: 'add-custom-task',
    props: {
        filteredTasks: Object
    },
    data: () => ({
        customData: data.getSubGroup("custom"),
        dropdownOpen: false,
        newTaskName: '',
        newTaskNotes: '',

        mergingOpen: false,
        mergeIndex: 0,
        mergeInfo: '',
        mergeMatches: [],
        mergeTask: {}
    }),
    methods: {
        addCustomTask: function() {
            // Prevent short names
            if(this.newTaskName.length < 3) return;
            const customTasks = getPlayerStore().get('custom') || {};

            // Get next safe ID
            let nextId = 0;
            while(!!customTasks[nextId]) nextId++;

            // Update store with custom name & notes
            getPlayerStore().set('custom', {
                ...customTasks,
                [nextId]: {
                    id: nextId,
                    name: this.newTaskName,
                    notes: this.newTaskNotes
                }
            });

            // Update data with new custom task
            this.customData.tasks[nextId] = new Task({
                id: nextId,
                name: this.newTaskName,
                notes: this.newTaskNotes
            }, this.customData);

            // Generate new object reference so reload triggers
            this.customData.tasks = Object.assign({}, this.customData.tasks);
        },
        mergeCustomTasks: function() {
            // Don't merge without items
            if(this.customData.taskCount < 1) return;

            // Replace dropdown with merge window
            this.mergingOpen = true;
            this.dropdownOpen = false;

            // Search for matches and filter out the matching itself
            this.mergeTask = this.customData.getTaskAtIndex(this.mergeIndex);

            this.mergeMatches = searchData(this.mergeTask.name, true);
            this.mergeMatches = this.mergeMatches.filter((m) => m.pathString !== 'Overall > Custom');

            if(this.mergeMatches.length) {
                this.mergeInfo = `${this.mergeMatches.length} matches found`;
            }
            else {
                this.mergeInfo = 'No match found';
            }
        },
        confirmCurrentMerge: function(match) {
            if(match.path[0] === 'Overall') {
                match.path.shift(); // Remove the 'Overall' step

                const group = data.getChildGroupFromPath(match.path, true);
                const task = group.tasks[this.mergeTask.id];
                task.setCompletionFlag(this.mergeTask.completionFlag);
                this.removeCustomTask(this.mergeTask);
                this.mergeIndex--;
                this.goToNextMerge();
            }
        },
        goToNextMerge: function() {
            this.mergeIndex++;

            if(this.mergeIndex > this.customData.taskCount - 1) this.exitMerge();
            else this.mergeCustomTasks();
        },
        exitMerge: function() {
            this.mergingOpen = false;
            this.mergeIndex = 0;
        },
        removeSelectedCustomTasks: function() {
            for(const id in this.filteredTasks) {
                if(this.filteredTasks[id].selected) {
                    this.removeCustomTask(this.filteredTasks[id]);
                }
            }
        },
        removeCustomTask: function(task) {
            const store = getPlayerStore();
            const customTasks = store.get('custom') || {};

            // Find & Remove from store
            for(const id in customTasks) {
                if(id === task.id.toString()) delete customTasks[id];
            }

            // Update Store
            store.delete(task.fullStorageKey);
            store.set('custom', customTasks);

            // Update displayed completion
            task.setCompletionFlag('N');

            // Find & Remove from data
            delete this.customData.tasks[task.id];

            // Generate new object reference so reload triggers
            this.customData.tasks = Object.assign({}, this.customData.tasks);
        }
    }
}
</script>

<style lang="scss">
.add-custom-task-container {
    .new-task-dropdown-li {
        padding: 5px 0;
    }

    .merge-custom-tasks-dropdown-item {
        width: unset;
    }

    .xiv-input {
        width: 300px;
    }
}
</style>
