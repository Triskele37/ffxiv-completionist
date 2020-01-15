<template>
    <td
        class="completed-cell"
        @click="onTaskCompleteClick(task)"
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
            onTaskCompleteClick: function () {
                let newComplete;

                switch (this.completed) {
                    case 'Y': newComplete = 'X'; break;
                    case 'X': newComplete = 'N'; break;
                    default: newComplete = 'Y';
                }

                store.set(this.task.name, newComplete);
                this.completed = newComplete;
            },
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
