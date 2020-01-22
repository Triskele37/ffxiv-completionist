<template>
    <div id="breadcrumbs">
        <span
            v-for="crumb, index in breadcrumbs"
            @click="onClickCrumb(crumb)"
        >
            <span class="breadcrumb">{{crumb}}</span>
            <span>{{index < breadcrumbs.length - 1 ? '  >  ' : ''}}</span>
        </span>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('navigation', {
                breadcrumbs: 'breadcrumbs'
            })
        },
        methods: {
            onClickCrumb: function(crumb) {
                this.$store.commit('navigation/GOTO_CRUMB', crumb);
            }
        }
    };
</script>

<style>
    #breadcrumbs {
        border-bottom: 1px solid;
        margin: 0 10px;
        height: 20px;
    }

    .breadcrumb {
        cursor: pointer;
    }
</style>
