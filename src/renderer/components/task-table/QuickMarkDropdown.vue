<template>
    <div class="action-dropdown-container">
        <div
            class="xiv-dropdown-arrow"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
        >
            <icon name="arrow" size="16"/>
        </div>
        <div
            class="xiv-dropdown-body"
            v-if="dropdownOpen"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
        >
            <button :disabled="lastChanged.length === 0" class="xiv-dropdown-li" @click="onUndoLastChange()">
                <template v-if="lastChanged.length">Undo Last Quick-Mark</template>
                <template v-else>Quick-Mark Menu</template>
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('N', 'Y')">
                (<icon name="incomplete"/> <icon name="arrow"/> <icon name="complete"/>)
                Mark Incomplete as Complete
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('N', 'X')">
                (<icon name="incomplete"/> <icon name="arrow"/> <icon name="exclude"/>)
                Mark Incomplete as Excluded
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('Y', 'N')">
                (<icon name="complete"/> <icon name="arrow"/> <icon name="incomplete"/>)
                Mark Complete as Incomplete
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('Y', 'X')">
                (<icon name="complete"/> <icon name="arrow"/> <icon name="exclude"/>)
                Mark Complete as Excluded
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('X', 'N')">
                (<icon name="exclude"/> <icon name="arrow"/> <icon name="incomplete"/>)
                Mark Excluded as Incomplete
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('X', 'Y')">
                (<icon name="exclude"/> <icon name="arrow"/> <icon name="complete"/>)
                Mark Excluded as Complete
            </button>
            <button class="xiv-dropdown-li" @click="onSelectChange(true)">Select All Tasks</button>
            <button class="xiv-dropdown-li" @click="onSelectChange(false)">Deselect All Tasks</button>
            <button class="xiv-dropdown-li" @click="onSelectChange(null)">Invert Selection</button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('$', 'Y')">
                (<icon name="selected"/> <icon name="arrow"/> <icon name="complete"/>)
                Mark Selected as Complete
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('$', 'N')">
                (<icon name="selected"/> <icon name="arrow"/> <icon name="incomplete"/>)
                Mark Selected as Incomplete
            </button>
            <button class="xiv-dropdown-li" @click="onChangeTaskCompletion('$', 'X')">
                (<icon name="selected"/> <icon name="arrow"/> <icon name="exclude"/>)
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
        dropdownOpen: false,
        lastChanged: []
    }),
    methods: {
        onChangeTaskCompletion: function(from, to) {
            this.lastChanged = [];

            this.filteredTasks.forEach((task) => {
                if(from === '$' && task.selected || task.completionFlag === from) {
                    this.lastChanged.push({ task, oldFlag: task.completionFlag });

                    task.changeCompletionFlag(to)
                }
            });

            applyDataToStore(data);
        },
        onSelectChange: function(select) {
            this.filteredTasks.forEach((task) => task.selected = select === null ? !task.selected : select);
            this.$emit('select-change');
        },
        onUndoLastChange: function() {
            this.lastChanged.forEach((changed) => {
                changed.task.changeCompletionFlag(changed.oldFlag);
            });
            applyDataToStore(data);
            this.lastChanged = [];
        }
    }
};
</script>

<style lang="scss">

</style>