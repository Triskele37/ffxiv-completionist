<template>
    <span id="nav-drawer">
        <nav-group
            v-for="group in groups"
            :key="group.name"
            :show="true"
            :degree="1"
            :group="group"
        />
        <nav-group
            :show="true"
            :degree="1"
            :group="debug"
        />
    </span>
</template>

<script>
    import { data } from '../../data';
    import { Debug } from '../../data/debug';
    import NavGroup from './nav-group/NavGroup.vue';

    export default {
        name: 'nav-drawer',
        data: () => ({
            debug: Debug,
            groups: data.subGroups
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
