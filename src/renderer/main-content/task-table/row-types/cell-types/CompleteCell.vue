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
    export default {
        name: 'completion-flag-cell',
        props: {
            task: Object,
            flag: String,
        },
        methods: {
            onTaskCompleteClick: function() {
                this.task.changeCompletionFlag(this.task.completionFlag === 'N' ? 'Y' : 'N');
            },
            onExcludeTaskClick: function() {
                this.task.changeCompletionFlag('X');
            }
        }
    };
</script>

<style>
    .completion-flag-cell {
        color: black;
        cursor: pointer;
        text-align: center;
        user-select: none;
        width: 30px;
    }

    .completion-flag-cell-Y {
        background-color: #0f7538;
    }

    .completion-flag-cell-N {
        background-color: #75190f;
    }

    .completion-flag-cell-X {
        background-color: #aaa;
    }
</style>
