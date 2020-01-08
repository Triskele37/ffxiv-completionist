<template>
    <div id="app">
        <!--------------------------------- Nav Bar --------------------------------->
        <div id="nav-bar">
            <nav-group
                v-bind:degree="0"
                v-bind:groups="groups"
                v-bind:breadcrumbs="breadcrumbs"
                v-on:select-group="onSelectedGroupChange"
            />
        </div>

        <!--------------------------------- Stat Bar --------------------------------->
        <div id="stat-bar">

        </div>

        <!--------------------------------- Breadcrumbs --------------------------------->
        <div id="breadcrumbs">
            {{breadcrumbs.join('&nbsp;&nbsp;>&nbsp;&nbsp;')}}
        </div>

        <!--------------------------------- Task List --------------------------------->
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
						    <img src="./assets/gamerescape.png" alt="Gamer Escape" height="20" width="20">
                        </span>
                        <span
                            title="Garland Tools"
                            v-on:click="gotoGarlandTools(task.name)"
                        >
                            <img src="./assets/Garland.png" alt="Garland Tools" height="20" width="20">
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    const {shell} = require('electron');
    const Store = require('electron-store');

    import { data } from '../data';

    import NavGroup from './nav-group/NavGroup.vue';

    const store = new Store();

    export default {
        data: () => ({
            groups: data,
            breadcrumbs: [],
            selectedGroup: null
        }),
        methods: {
            onSelectedGroupChange: function (group, degree) {
                // Update breadcrumbs
                let breadcrumbs = [];
                for(let i = 0; i < degree; i++) {
                    breadcrumbs.push(this.breadcrumbs[i]);
                }
                this.breadcrumbs = breadcrumbs.concat(group.name);

                // Update the selected group
                this.selectedGroup = group;
            },
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
        },
        components: {
            'nav-group': NavGroup
        }
    };
</script>

<style>
    /*---------------------- Element Styles ----------------------*/
    body {
        background-color: #8696a5;
        margin: 0;
    }

    button {
        user-select: none;
    }

    /*----------------------  ----------------------*/
    #app {
        display: grid;
        grid-template-columns: 10fr 90fr;
        grid-template-rows: 10fr 2fr 88fr;
        grid-column-gap: 10px;
        grid-row-gap: 10px;

        height: 100%;
        width: 100%;

        white-space: nowrap;
    }

    /*---------------------- Navigation Bar ----------------------*/
    #nav-bar {
        grid-area: 1 / 1 / 4 / 2;
        background-color: #fef2cb;

        margin: 50px 0;
        padding: 10px 0;

        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    /*---------------------- Status Bar ----------------------*/
    #stat-bar {
        grid-area: 1 / 2 / 2 / 3;
    }

    /*---------------------- Bread Crumbs ----------------------*/
    #breadcrumbs {
        grid-area: 2 / 2 / 3 / 3;
        border-bottom: 1px solid;
    }

    /*---------------------- Item List ----------------------*/
    #item-container {
        grid-area: 3 / 2 / 4 / 3;
        margin: 20px;
        margin-top: 0;
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
