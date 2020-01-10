<template>
    <td
        class="completed-cell"
        v-bind:class="{
            'completed-cell-y': task.complete === 'Y',
            'completed-cell-n': !task.complete || task.complete === 'N',
            'completed-cell-x': task.complete === 'X'
        }"
        v-on:click="onTaskCompleteClick(task)"
    >
        {{task.complete || 'N'}}
    </td>
</template>

<script>
    const Store = require('electron-store');
    const store = new Store();

    export default {
        name: 'complete-cell',
        props: {
            task: Object
        },
        methods: {
            onTaskCompleteClick: function () {
                switch (this.task.complete) {
                    case 'Y':
                        this.task.complete = 'X';
                        break;
                    case 'X':
                        this.task.complete = 'N';
                        break;
                    default:
                        this.task.complete = 'Y';
                }

                store.set(this.task.name, this.task.complete);
                // View current tasks status if set to complete or not
                console.log(store.get('task.name'));

                // View all tasks that have had their status changed
                console.log(store.get(this.task));

                this.$forceUpdate();
            },
        }
    };
</script>

<style>
    .completed-cell {
        cursor: pointer;
        text-align: center;
        user-select: none;
        width: 30px;
    }

    .completed-cell-y {
        background-color: #6aa84f;
    }

    .completed-cell-n {
        background-color: #e06666;
    }

    .completed-cell-x {
        background-color: #cccccc;
    }
</style>
