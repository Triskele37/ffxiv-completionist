<template>
    <span id="nav-drawer">
        <!---------------------- Main Menu ---------------------->
        <nav-group
            :show="true"
            :degree="1"
            :group="mainMenu"
        />

        <!---------------------- Data Nav ---------------------->
        <nav-group
            v-for="subGroup in allData.subGroups"
            :key="subGroup.name"
            :show="true"
            :degree="1"
            :group="subGroup"
        />
    </span>
</template>

<script>
    import { data } from '../../data';
    import { MainMenu } from './menu-items';
    import NavGroup from './nav-group/NavGroup.vue';

    export default {
        name: 'nav-drawer',
        data: () => ({
            allData: data,
            mainMenu: MainMenu,
        }),
        components: {
            'nav-group': NavGroup
        }
    }
</script>

<style>
    /*---------------------- Navigation Bar ----------------------*/
    #nav-drawer {
        background-color: #0F4C75;
        display: inline-block;

        height: 100%;
        width: 250px;

        overflow-x: hidden;
    }
</style>
