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
            task: Object,
            group: String,
        },
        mounted: function() {
            this.completed = store.get(this.storageKey) || 'N';
        },
        computed: {
            storageKey: function() {
                return `${this.group}.${this.task.name}`;
            }
        },
        methods: {
            onTaskCompleteClick: function() {
                const completed = this.completed === 'N' ? 'Y' : 'N';

                store.set(this.storageKey, completed);
                this.completed = completed;
                console.log(store.store);
            },
            onExcludeTaskClick: function() {
                store.set(this.storageKey, 'X');
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
