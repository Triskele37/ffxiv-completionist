<template>
    <div id="app">
        <nav-drawer />

        <span id="right-container">
            <stat-bar />
            <breadcrumbs />
            <task-table />
        </span>
    </div>
</template>

<script>
    import NavDrawer from './nav-drawer/NavDrawer';
    import StatBar from './stat-bar/StatBar';
    import Breadcrumbs from './breadcrumbs/Breadcrumbs';
    import TaskTable from './task-table/TaskTable';

    export default {
        components: {
            'nav-drawer': NavDrawer,
            'stat-bar': StatBar,
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
