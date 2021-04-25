<template>
    <div id="breadcrumbs">
        <span
            v-for="crumb, index in breadcrumbs"
            @click="onClickCrumb(index)"
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
                breadcrumbs: 'breadcrumbs',
            }),
        },
        methods: {
            onClickCrumb: function(index) {
                this.$store.commit('navigation/POP_CRUMBS_UNTIL', index);
            },
        }
    };
</script>

<style lang="scss">
#breadcrumbs {
    border-bottom: 1px solid;
    margin: 0 10px;
    height: 20px;

    .breadcrumb {
        cursor: pointer;
    }
}
</style>
