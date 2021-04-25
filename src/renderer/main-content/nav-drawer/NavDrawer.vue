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
    import { data } from '../../../data';
    import { MainMenu } from './main-menu';
    import NavGroup from './NavGroup.vue';

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

<style lang="scss">
@import '../../../styles/colors';

#nav-drawer {
    background-color: $blue-3;
    display: inline-block;

    height: 100%;
    width: 250px;

    overflow-x: hidden;
}
</style>
