<template>
    <div id="breadcrumbs">
        {{output}}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('navigation', {
                breadcrumbs: 'breadcrumbs'
            }),
            output: function() {
                return this.breadcrumbs.join('  >  ');
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
</style>
