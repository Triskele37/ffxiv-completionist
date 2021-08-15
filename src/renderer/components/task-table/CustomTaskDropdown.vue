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
            <button class="xiv-dropdown-li" @click="autoMergeSingleMatches">Auto-Merge Tasks with One Match</button>
            <button class="xiv-dropdown-li" @click="goToNextMerge">Skip</button>
            <button class="xiv-dropdown-li" @click="exitMerge">Exit</button>
            <template v-if="mergeMatches.length > 0">
                <button
                    v-for="match in mergeMatches"
                    class="xiv-dropdown-li"
                    @click="confirmCurrentMerge(match)"
                >
                    {{match.path}}
                </button>
            </template>
        </div>
        <div
            class="auto-merge-modal"
            v-if="autoMerge"
            @click="modalNoNo"
        ></div>
    </div>
</template>

<script>
import { data } from "../../../data";
import { Task } from "../../../data/Task";
import { getPlayerStore } from "../../../store/electronStore";
import { searchData } from "../../pages/search-data";
import { applyDataToStore } from "../../../store/electronStore/applyDataToStore";

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
        autoMerge: false,
        mergeFirstInChain: false,
        mergeIndex: 0,
        mergeInfo: '',
        mergeMatches: [],
        mergeTask: {},
        tasksToRemove: []
    }),
    methods: {
        addCustomTask: function() {
            // Prevent short names
            if(this.newTaskName.length < 3) return;
            const customMeta = getPlayerStore().get('custom') || {};

            // Get next safe ID
            let nextId = 0;
            while(!!customMeta[`x${nextId}`]) nextId++;
            const nextKey = `x${nextId}`

            // Update store with custom name & notes
            getPlayerStore().set(`custom.${nextKey}`, {
                name: this.newTaskName,
                notes: this.newTaskNotes
            });

            // Update data with new custom task
            this.customData.tasks[nextKey] = new Task({
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
            this.mergeMatches = this.mergeMatches.filter(
                (m) => m.path.indexOf('Overall > Custom') === -1
            );

            if(this.mergeMatches.length) {
                this.mergeInfo = `${this.mergeMatches.length} matches found`;
            }
            else {
                this.mergeInfo = 'No match found';
            }

            if(this.autoMerge) {
                setTimeout(() => {
                    if(this.mergeMatches.length === 1) {
                        this.confirmCurrentMerge(this.mergeMatches[0]);
                    }
                    else {
                        this.goToNextMerge();
                    }
                }, 50);
            }
            else {
                this.mergeFirstInChain = true;
            }
        },
        autoMergeSingleMatches: function() {
            this.autoMerge = true;
            this.mergeFirstInChain = true;
            this.$store.commit('chain/CLEAR_CHAIN');
            this.mergeCustomTasks();
        },
        confirmCurrentMerge: function(match) {
            const pathSegments = match.path.split(' > ');

            if(pathSegments[0] === 'Overall') {
                pathSegments.shift(); // Remove the 'Overall' step

                // Should never end up with a duplicate match in the same group
                const task = data
                    .getChildGroupFromPath(pathSegments, true)
                    .getTaskByID(match.tasks[0].id);

                if(task.completionFlag !== this.mergeTask.completionFlag) {
                    task.changeCompletionFlag(
                        this.mergeTask.completionFlag,
                        this.mergeFirstInChain
                    );
                    this.mergeFirstInChain = false;
                }

                this.removeCustomTask_UI(this.mergeTask);
                this.tasksToRemove.push(this.mergeTask);

                // Offset index and goto next
                this.mergeIndex--;
                this.goToNextMerge();
            }
        },
        goToNextMerge: function() {
            this.mergeIndex++;

            if(this.mergeIndex > this.customData.taskCount - 1) {
                this.autoMerge = false;
                this.exitMerge();
            }
            else this.mergeCustomTasks();
        },
        exitMerge: function() {
            this.mergingOpen = false;
            this.mergeIndex = 0;
            applyDataToStore(data);
            this.syncCustomStore();
        },
        removeSelectedCustomTasks: function() {
            for(const id in this.filteredTasks) {
                if(this.filteredTasks[id].selected) {
                    this.removeCustomTask_UI(this.filteredTasks[id]);
                    this.removeCustomTask_Store(this.filteredTasks[id]);
                }
            }
        },
        removeCustomTask_UI: function(task) {
            // Update displayed completion
            task.setCompletionFlag('N');

            // Find & Remove from data
            console.log(task.id);
            delete this.customData.tasks[`x${task.id}`];

            // Generate new object reference so reload triggers
            this.customData.tasks = Object.assign({}, this.customData.tasks);
        },
        removeCustomTask_Store: function(task) {
            const store = getPlayerStore();
            const customTasks = store.get('custom') || {};

            // Find & Remove from store
            for(const id in customTasks) {
                if(id === `x${task.id}`) {
                    delete customTasks[id];
                    break;
                }
            }

            // Update Store
            store.delete(task.fullStorageKey);
            store.set('custom', customTasks);
        },
        modalNoNo: function($event) {
            $event.preventDefault();
            $event.stopPropagation();
        },
        syncCustomStore: function() {
            // Ugly shim to allow auto-merge not to run into locked files
            const store = getPlayerStore();
            const data = store.get();

            this.tasksToRemove.forEach((t) => {
                // Remove task meta
                for(const id in data.custom || {}) {
                    if(id === `x${t.id}`) {
                        delete data.custom[id];
                        break;
                    }
                }

                // Remove task flags
                delete data.overall.custom[t.id];
            });

            store.set('custom', data.custom);
            store.set('overall.custom', data.overall.custom)
        }
    }
}
</script>

<style lang="scss">
.add-custom-task-container {
    .auto-merge-modal {
        background-color: black;
        position: absolute;
        z-index: 9999;
        opacity: 0.25;
        height: 100vh;
        width: 100vw;
        left: 0;
        top: 0;
    }

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
