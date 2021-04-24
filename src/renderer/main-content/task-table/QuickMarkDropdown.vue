<template>
    <div class="action-dropdown-container">
        <div
            class="action-dropdown-arrow"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
        >
            &#10147;
        </div>
        <div
            class="action-dropdown"
            v-if="dropdownOpen"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
        >
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('N', 'Y')">
                <span class="incomplete">(&#10008</span> &#10147; <span class="complete">&#10004)</span>
                Mark Incomplete as Complete
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('N', 'X')">
                <span class="incomplete">(&#10008</span> &#10147; <span class="exclude">&#10006)</span>
                Mark Incomplete as Excluded
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('Y', 'N')">
                <span class="complete">(&#10004</span> &#10147; <span class="incomplete">&#10008)</span>
                Mark Complete as Incomplete
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('Y', 'X')">
                <span class="complete">(&#10004</span> &#10147; <span class="exclude">&#10006)</span>
                Mark Complete as Excluded
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('X', 'N')">
                <span class="exclude">(&#10006</span> &#10147; <span class="incomplete">&#10008)</span>
                Mark Excluded as Incomplete
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('X', 'Y')">
                <span class="exclude">(&#10006</span> &#10147; <span class="complete">&#10004)</span>
                Mark Excluded as Complete
            </button>
            <button class="action-dropdown-item" @click="onSelectChange(true)">Select All Tasks</button>
            <button class="action-dropdown-item" @click="onSelectChange(false)">Deselect All Tasks</button>
            <button class="action-dropdown-item" @click="onSelectChange(null)">Invert Selection</button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('$', 'Y')">
                <span class="selected">(&#9755;</span> &#10147; <span class="complete">&#10004)</span>
                Mark Selected as Complete
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('$', 'N')">
                <span class="selected">(&#9755;</span> &#10147; <span class="incomplete">&#10008)</span>
                Mark Selected as Incomplete
            </button>
            <button class="action-dropdown-item" @click="onChangeTaskCompletion('$', 'X')">
                <span class="selected">(&#9755;</span> &#10147; <span class="exclude">&#10006)</span>
                Mark Selected as Excluded
            </button>
        </div>
    </div>
</template>

<script>
import { data } from "../../../data";
import { applyDataToStore } from "../../../store/electronStore/applyDataToStore";

export default {
    name: 'quick-mark-dropdown',
    props: {
        filteredTasks: Array
    },
    data: () => ({
        dropdownOpen: false
    }),
    methods: {
        onChangeTaskCompletion: function(from, to) {
            this.filteredTasks.forEach((task) => {
                if (from === '$' && task.selected) task.changeCompletionFlag(to);
                else if (task.completionFlag === from) task.changeCompletionFlag(to);
            });

            applyDataToStore(data);
        },
        onSelectChange: function(select) {
            this.filteredTasks.forEach((task) => task.selected = select === null ? !task.selected : select);
            this.$emit('select-change');
        }
    }
};
</script>

<style>
/*---------------------- Dropdown Arrow ----------------------*/
.action-dropdown-arrow {
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
.action-dropdown {
    background-color: #3282B8;
    border-radius: 0 10px 10px 10px;
    border: 1px solid;
    color: #BBE1FA;
    position: absolute;
    margin-top: -6px;
    z-index: 1;
}

.action-dropdown-item {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: #BBE1FA;
    display: block;
    padding: 5px;
    text-align: left;
    width: 100%
}

.action-dropdown-item:last-child {
    border: none;
}

.action-dropdown-arrow:hover, .action-dropdown-item:hover {
    filter: brightness(125%);
    cursor: pointer;
}

.action-dropdown-arrow:active, .action-dropdown-item:active {
    filter: brightness(75%);
}

/*---------------------- Icons ----------------------*/
.action-dropdown-container .complete {
    font-size: 18px;
    color: #0f7538;
}

.action-dropdown-container .incomplete {
    font-size: 18px;
    color: #75190f;
}

.action-dropdown-container .exclude {
    font-size: 18px;
    color: #aaa;
}

.action-dropdown-container .selected {
    font-size: 18px;
    color: darkblue;
}
</style>