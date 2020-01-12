<template>
    <div id="app">
        <nav-drawer />

        <span id="right-container">
            <div id="stat-bar">

            </div>

            <breadcrumbs />
            <task-table />
        </span>
    </div>
</template>

<script>
    import NavDrawer from './nav-drawer/NavDrawer.vue';
    import Breadcrumbs from './breadcrumbs/Breadcrumbs.vue';
    import TaskTable from './task-table/TaskTable.vue';

    export default {
        components: {
            'nav-drawer': NavDrawer,
            'breadcrumbs': Breadcrumbs,
            'task-table': TaskTable,
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

    /*---------------------- Status Bar ----------------------*/
    #stat-bar {
        height: 100px;
    }
</style>
