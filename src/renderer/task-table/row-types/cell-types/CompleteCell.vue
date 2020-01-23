<template>
    <td
        class="completed-cell"
        @click="onTaskCompleteClick"
        @contextmenu.prevent="onExcludeTaskClick"
        :class="{
            'completed-cell-y': completed === 'Y',
            'completed-cell-n': completed === 'N' || !completed,
            'completed-cell-x': completed === 'X'
        }"
    >
        {{completed}}
    </td>
</template>

<script>
    export default {
        name: 'complete-cell',
        data: () => ({
            completed: 'N'
        }),
        props: {
            task: Object,
            groupStorageKey: String,
        },
        mounted: function() {
            this.completed = this.$store.getters.getCompletionFlag(this.storageKey);
        },
        computed: {
            storageKey: function() {
                return `${this.groupStorageKey}.${this.task.name}`;
            }
        },
        methods: {
            onTaskCompleteClick: function() {
                const completed = this.completed === 'N' ? 'Y' : 'N';

                this.$store.dispatch('setCompletionFlag', {
                    storageKey: this.storageKey,
                    flag: completed
                });

                this.completed = completed;
            },
            onExcludeTaskClick: function() {
                this.$store.dispatch('setCompletionFlag', {
                    storageKey: this.storageKey,
                    flag: 'X'
                });

                this.completed = 'X';
            }
        }
    };
</script>

<style>
    .completed-cell {
        color: black;
        cursor: pointer;
        text-align: center;
        user-select: none;
        width: 30px;
    }

    .completed-cell-y {
        background-color: #0f7538;
    }

    .completed-cell-n {
        background-color: #75190f;
    }

    .completed-cell-x {
        background-color: #aaa;
    }
</style>
