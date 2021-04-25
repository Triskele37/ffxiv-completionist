<template>
    <td
        class="completion-flag-cell"
        @click="onTaskCompleteClick"
        @contextmenu.prevent="onExcludeTaskClick"
        :class="`completion-flag-cell-${flag}`"
    >
        {{flag}}
    </td>
</template>

<script>
    import { getPlayerStore } from "../../../../store/electronStore";

    export default {
        name: 'completion-flag-cell',
        props: {
            task: Object,
            flag: String,
        },
        methods: {
            onTaskCompleteClick: function() {
                const newFlag = this.task.completionFlag === 'N' ? 'Y' : 'N';

                this.task.changeCompletionFlag(newFlag);
                getPlayerStore().set(this.task._fullStorageKey, newFlag);
            },
            onExcludeTaskClick: function() {
                this.task.changeCompletionFlag('X');
                getPlayerStore().set(this.task._fullStorageKey, 'X');
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
