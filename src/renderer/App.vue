<template>
    <div id="app">
        <div id="loading-modal" v-if="loading">
            {{modalText}}
        </div>

        <nav-drawer />

        <div id="right-container">
            <stat-bar />
            <breadcrumbs />

            <main-content />
        </div>
    </div>
</template>

<script>
import '../styles/global.scss';
import '../styles/button.scss';
import '../styles/dropdown.scss';
import '../styles/input.scss';
import '../styles/table.scss';
import '../styles/select.scss';

import NavDrawer from './main-content/nav-drawer/NavDrawer';
import StatBar from './main-content/StatBar';
import Breadcrumbs from './main-content/Breadcrumbs';
import MainContent from "./main-content/MainContent";

import { initializeData } from "../store/electronStore/initializeData";

export default {
    components: {
        'nav-drawer': NavDrawer,
        'stat-bar': StatBar,
        'breadcrumbs': Breadcrumbs,
        'main-content': MainContent,
    },
    data: () => ({
        loading: false,
        modalText: 'Loading...'
    }),
    mounted: function() {
        this.$nextTick(function() {
            this.loading = true;

            try {
                initializeData();
                this.loading = false;
            }
            catch(e) {
                this.modalText = 'An error has occurred...';
                console.error(e);
            }
        });
    }
};
</script>

<style lang="scss">
#app {
    height: 100%;
    width: 100%;

    white-space: nowrap;

    #loading-modal {
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 99999;

        text-align: center;
        padding: 25% 0;
    }

    #right-container {
        display: inline-block;
        height: 100%;
        margin: -1px 0 0 -4px;
        width: calc(100% - 250px);
        vertical-align: top;
    }
}
</style>
