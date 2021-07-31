<template>
    <td
        class="completion-flag-cell noSelect"
        @click="onTaskCompleteClick"
        @contextmenu.prevent="onExcludeTaskClick"
        :class="`completion-flag-cell-${flag}`"
    >
        {{flag}}
    </td>
</template>

<script>
    import { data } from "../../../../data";
    import { applyDataToStore } from "../../../../store/electronStore/applyDataToStore";

    export default {
        name: 'completion-flag-cell',
        props: {
            task: Object,
            flag: String,
        },
        methods: {
            onTaskCompleteClick: function() {
                const flag = this.task.completionFlag === "Y" ? "N" : "Y";
                console.time("test");
                const chainedTasks = this.task.changeCompletionFlag(flag);
                console.timeEnd("test");

                // 3247ms pre change
                // 40ms post change

                console.log(chainedTasks.map(
                    (change) => `${change.task.name} > ${change.flag} (${change.task._parent.groupPath.join(' > ')})`
                ));

                applyDataToStore(data);
            },
            onExcludeTaskClick: function() {
                const flag = this.task.completionFlag === "X" ? "N" : "X";
                this.task.changeCompletionFlag(flag);
                applyDataToStore(data);
            }
        }
    };
</script>

<style lang="scss">
@import '../../../../styles/colors';

.completion-flag-cell {
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    text-align: center;
    user-select: none;
    width: 30px;

    &:hover {
        border: 1px solid white;
    }

    &.completion-flag-cell-Y {
        background-color: $state_completed;
    }

    &.completion-flag-cell-N {
        background-color: $state_incomplete;
    }

    &.completion-flag-cell-X {
        background-color: $state_excluded;
    }
}
</style>
