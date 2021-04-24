<template>
    <div>
        <div class="add-custom-task-dropdown-arrow"
             @mouseenter="dropdownOpen = true"
             @mouseleave="dropdownOpen = false"
        >
            &#10010;
        </div>
        <div class="add-custom-task-dropdown"
             v-if="dropdownOpen && !mergingOpen"
             @mouseenter="dropdownOpen = true"
             @mouseleave="dropdownOpen = false"
        >
            <div class="add-custom-task-dropdown-item">
                <input class="new-task-input" v-model="newTaskName" placeholder="Enter Custom Task Name Here"/>
            </div>
            <div class="add-custom-task-dropdown-item">
                <input class="new-task-input" v-model="newTaskNotes" placeholder="Enter Custom Task Notes Here"/>
            </div>
            <button class="add-custom-task-dropdown-item" @click="addCustomTask">Add Custom Task</button>
            <button class="add-custom-task-dropdown-item" @click="mergeCustomTasks">Merge Custom Tasks into App</button>
            <button class="add-custom-task-dropdown-item" @click="removeSelectedCustomTasks">Remove Selected Tasks</button>
        </div>
        <div class="add-custom-task-dropdown" v-if="mergingOpen">
            <div class="merge-custom-tasks-dropdown-item">
                {{mergeTask.name}}<br/>
                {{mergeTask.notes}}<br/><br/>
                {{mergeInfo}}
            </div>
            <button class="add-custom-task-dropdown-item" @click="goToNextMerge">Skip</button>
            <template v-if="mergeMatches.length > 0">
                <button
                    v-for="match in mergeMatches"
                    class="add-custom-task-dropdown-item"
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
import { searchData } from "../../../info-menus/search-data";

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

<style>
/*---------------------- Dropdown Arrow ----------------------*/
.add-custom-task-dropdown-arrow {
    background-color: #0F4C75;
    border-radius: 12px 12px 12px 0;
    border: 1px solid;
    color: #BBE1FA;
    height: 23px;
    width: 14px;
    user-select: none;

    margin-bottom: 5px;
    padding: 0 10px;
}

/*---------------------- Dropdown ----------------------*/
.add-custom-task-dropdown {
    background-color: #3282B8;
    border-radius: 0 10px 10px 10px;
    border: 1px solid;
    color: #BBE1FA;
    position: absolute;
    margin-top: -6px;
    z-index: 1;
}

.add-custom-task-dropdown-item {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    box-sizing: border-box;
    color: #BBE1FA;
    display: block;
    padding: 5px;
    text-align: left;
    width: 100%
}

.merge-custom-tasks-dropdown-item {
    border-bottom: 1px solid white;
    display: block;
    padding: 5px;
}

.add-custom-task-dropdown-item:last-child {
    border: none;
}

.add-custom-task-dropdown-arrow:hover, .add-custom-task-dropdown-item:hover {
    filter: brightness(125%);
    cursor: pointer;
}

.add-custom-task-dropdown-arrow:active, .add-custom-task-dropdown-item:active {
    filter: brightness(75%);
}

/*---------------------- Text Field ----------------------*/
.new-task-input {
    background-color: #3282B8;
    border: none;
    border-bottom: 1px solid;
    color: #BBE1FA;
    width: 300px;
}

.new-task-input::placeholder {
    color: #BBE1FA;
}
</style>
