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
    import Store from 'electron-store';
    const store = new Store();

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
                store.set(this.task._storageKey, newFlag);
            },
            onExcludeTaskClick: function() {
                this.task.changeCompletionFlag('X');
                store.set(this.task._storageKey, 'X');
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
