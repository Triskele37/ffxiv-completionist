<template>
    <div class="add-custom-task-container">
        <div class="xiv-dropdown-arrow"
             @mouseenter="dropdownOpen = true"
             @mouseleave="dropdownOpen = false"
        >
            <icon name="plus" size="16"/>
        </div>
        <div class="xiv-dropdown-body"
             v-if="dropdownOpen && !mergingOpen"
             @mouseenter="dropdownOpen = true"
             @mouseleave="dropdownOpen = false"
        >
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
        filteredTasks: Array
    },
    data: () => ({
        customData: data.sg('Custom'),
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

            // Update store with custom name & notes
            const customTasks = getPlayerStore().get('custom') || [];
            getPlayerStore().set('custom', [...customTasks, {
                name: this.newTaskName,
                notes: this.newTaskNotes
            }]);

            // Update data with new custom task
            this.customData.tasks.push(new Task({
                name: this.newTaskName,
                notes: this.newTaskNotes
            }, this.customData));
            this.customData.updateTotal(1);
        },
        mergeCustomTasks: function() {
            // Don't merge without items
            if(this.customData.tasks.length < 1) return;

            // Replace dropdown with merge window
            this.mergingOpen = true;
            this.dropdownOpen = false;

            // Search for matches and filter out the matching itself
            this.mergeTask = this.customData.tasks[this.mergeIndex];

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

                const group = data.getChildGroupFromPath(match.path);
                const task = group.tasks.find((t) => t.name === this.mergeTask.name);
                task.changeCompletionFlag(this.mergeTask.completionFlag);
                this.removeCustomTask(this.mergeTask);
                this.mergeIndex--;
                this.goToNextMerge();
            }
        },
        goToNextMerge: function() {
            this.mergeIndex++;

            if(this.mergeIndex > this.customData.tasks.length - 1) {
                this.mergingOpen = false;
                this.mergeIndex = 0;
            }
            else {
                this.mergeCustomTasks();
            }
        },
        removeSelectedCustomTasks: function() {
            this.filteredTasks.forEach((task) => {
                if(task.selected) this.removeCustomTask(task);
            });
        },
        removeCustomTask: function(task) {
            const store = getPlayerStore();
            const customTasks = store.get('custom') || [];

            // Find & Remove from store
            const storeIndex = customTasks.findIndex((c) => c.name === task.name);
            customTasks.splice(storeIndex, 1);

            // Update Store
            store.delete(task._fullStorageKey);
            store.set('custom', customTasks);

            // Update displayed completion
            task.changeCompletionFlag('N');
            this.customData.updateTotal(-1);

            // Find & Remove from data
            const groupIndex = this.customData.tasks.findIndex((c) => c.name === task.name);
            this.customData.tasks.splice(groupIndex, 1);
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
