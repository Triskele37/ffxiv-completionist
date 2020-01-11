<template>
    <span id="nav-drawer">
        <nav-group
            v-for="group in groups"
            :key="group.name"
            :show="true"
            :degree="0"
            :group="group"
        />
    </span>
</template>

<script>
    import { data } from '../../data';
    import NavGroup from './nav-group/NavGroup.vue';

    export default {
        name: 'nav-drawer',
        data: () => ({
            groups: data
        }),
        components: {
            'nav-group': NavGroup
        }
    }
</script>

<style>
    /*---------------------- Navigation Bar ----------------------*/
    #nav-drawer {
        background-color: #7374A9;
        display: inline-block;

        height: 100%;
        width: 250px;

        overflow-x: hidden;
        overflow-y: scroll;
    }
</style>
