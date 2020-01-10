<template>
    <div id="item-container">
        <table v-if="selectedGroup && selectedGroup.tasks && selectedGroup.tasks.length > 0">
            <tr>
                <th>Complete</th>
                <th>Name</th>
                <th>Description</th>
                <th>Points</th>
                <th>Reward</th>
                <th>External Links</th>
            </tr>
            <tr v-for="task in selectedGroup.tasks">
                <td
                    class="task-column-completed"
                    v-bind:class="{
                        'task-column-completed-y': task.complete === 'Y',
                        'task-column-completed-n': !task.complete || task.complete === 'N',
                        'task-column-completed-x': task.complete === 'X'
                    }"
                    v-on:click="onTaskCompleteClick(task)"
                >
                    {{task.complete || 'N'}}
                </td>
                <td>
                    {{task.name}}
                </td>
                <td id="tbl-description">
                    {{task.description}}
                </td>
                <td>
                    {{task.points}}
                </td>
                <td v-if="task.Title">
                    Title: {{task.Title.name}}
                </td>
                <td v-else-if="task.Item">
                    Item: {{task.Item.name}}
                </td>
                <td v-else>
                    N/A
                </td>
                <td>
                    <span
                        title="Gamer Escape"
                        v-on:click="gotoGamerEscape(task.name)"
                    >
                        <img src="../assets/gamerescape.png" alt="Gamer Escape" height="20" width="20">
                    </span>
                    <span
                        title="Garland Tools"
                        v-on:click="gotoGarlandTools(task.name)"
                    >
                        <img src="../assets/Garland.png" alt="Garland Tools" height="20" width="20">
                    </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    const { shell } = require('electron');

    // Data persistence method
    const Store = require('electron-store');
    const store = new Store();

    // Export component
    export default {
        name: 'task-table',
        computed: {
            ...mapState('navigation', {
                selectedGroup: 'selectedGroup'
            })
        },
        methods: {
            onTaskCompleteClick: function (task) {
                switch (task.complete) {
                    case 'Y':
                        task.complete = 'X';
                        break;
                    case 'X':
                        task.complete = 'N';
                        break;
                    default:
                        task.complete = 'Y';
                }

                store.set(task.name, task.complete);
                // View current tasks status if set to complete or not
                console.log(store.get('task.name'));

                // View all tasks that have had their status changed
                console.log(store.get(task));

                this.$forceUpdate();
            },
            gotoGamerEscape: function (name) {
                shell.openExternal('https://ffxiv.gamerescape.com/wiki/' + name.replace(/ /g, '_'));
            },
            gotoGarlandTools: function (name) {
                shell.openExternal('https://www.garlandtools.org/db/#search/' + name.replace(/ /g, '_'));
            }
        }
    }
</script>

<style>
    /*---------------------- Item List ----------------------*/
    #item-container {
        height: calc(100% - 140px);
        margin: 0 20px 20px 20px;
        overflow-y: scroll;
    }

    .task-column-completed {
        cursor: pointer;
        text-align: center;
        user-select: none;
    }

    .task-column-completed-y {
        background-color: #6aa84f;
    }

    .task-column-completed-n {
        background-color: #e06666;
    }

    .task-column-completed-x {
        background-color: #cccccc;
    }

    #tbl-name, #tbl-description {
        text-align: center;
    }

    th, td{
        border: 1px solid black;
    }
</style>
