<template>
    <div id="app">
        <nav-drawer />

        <div id="right-container">
            <stat-bar />
            <breadcrumbs />

            <div id="right-content">
                <!----------- Summary on no selected group ----------->
                <template v-if="!selectedGroup">
                    <summary-line
                        v-for="subGroup in allData.subGroups"
                        :key="subGroup.name"
                        :group="subGroup"
                    />
                </template>

                <!----------- Summary when a group is selected ----------->
                <template v-if="selectedGroup && selectedGroup.subGroups">
                    <summary-line
                        v-for="subGroup in selectedGroup.subGroups"
                        :key="subGroup.name"
                        :group="subGroup"
                    />
                </template>

                <!----------- Task Table ----------->
                <task-table v-if="selectedGroup && selectedGroup.tasks"/>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    import { data } from '../data';
    import NavDrawer from './nav-drawer/NavDrawer';
    import StatBar from './stat-bar/StatBar';
    import Breadcrumbs from './breadcrumbs/Breadcrumbs';
    import SummaryLine from './summary-line/SummaryLine';
    import TaskTable from './task-table/TaskTable';

    export default {
        data: () => ({
            allData: data
        }),
        components: {
            'nav-drawer': NavDrawer,
            'stat-bar': StatBar,
            'breadcrumbs': Breadcrumbs,
            'summary-line': SummaryLine,
            'task-table': TaskTable,
        },
        computed: {
            ...mapState('navigation', {
                selectedGroup: 'selectedGroup'
            }),
        },
    };
</script>

<style>
    /*---------------------- Element Styles ----------------------*/
    /* https://colorhunt.co/palette/167893 */
    body {
        background-color: #1B262C;
        color: #BBE1FA;
        height: 100vh;
        width: 100vw;
        margin: 0;
        overflow: hidden;
    }

    button {
        user-select: none;
    }

    /*----------------------  ----------------------*/
    #app {
        height: 100%;
        width: 100%;

        white-space: nowrap;
    }

    #right-container {
        display: inline-block;
        height: 100%;
        margin: -1px 0 0 -4px;
        width: calc(100% - 250px);
        vertical-align: top;
    }

    #right-content {
        height: calc(100% - 160px);
        margin: 10px;
        overflow-y: auto;
    }

    /*---------------------- Scrollbar Override ----------------------*/
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #BBE1FA;
    }

    ::-webkit-scrollbar-thumb {
        background: #0F4C75;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #3282B8;
    }
</style>
