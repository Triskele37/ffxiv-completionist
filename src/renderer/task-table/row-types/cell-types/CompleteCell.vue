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
    const Store = require('electron-store');
    const store = new Store();

    export default {
        name: 'complete-cell',
        data: () => ({
            completed: 'N'
        }),
        props: {
            task: Object
        },
        mounted: function() {
            this.completed = store.get(this.task.name) || 'N';
        },
        methods: {
            onTaskCompleteClick: function() {
                const completed = this.completed === 'N' ? 'Y' : 'N';

                store.set(this.task.name, completed);
                this.completed = completed;
            },
            onExcludeTaskClick: function() {
                store.set(this.task.name, 'X');
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
