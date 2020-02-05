<template>
    <div id="breadcrumbs">
        <span
            v-for="crumb, index in breadcrumbs"
            @click="onClickCrumb(crumb)"
        >
            <span class="breadcrumb">{{crumb}}</span>
            <span>{{index < breadcrumbs.length - 1 ? '  >  ' : ''}}</span>
        </span>

        <!----------- Buttons ----------->
        <span class="action-buttons" v-if="showSummaryButton">
            <span class="action-button" @click="toggleShowAllChildren()">
                {{`${showSummary ? 'Show All Tasks' : 'Show Summary'}`}}
            </span>
        </span>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: {
            ...mapState('navigation', {
                breadcrumbs: 'breadcrumbs',
                selectedGroup: 'selectedGroup',
                showSummary: 'showSummary'
            }),
            showSummaryButton: function() {
                if(!this.selectedGroup) return false;
                if(!this.selectedGroup.groupKeys) return false;
                if(!this.selectedGroup.columnConfig) return false;
                return true;
            }
        },
        methods: {
            onClickCrumb: function(crumb) {
                this.$store.commit('navigation/POP_CRUMBS_UNTIL', crumb);
            },
            toggleShowAllChildren: function() {
                this.$store.commit('navigation/TOGGLE_SHOW_SUMMARY');
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

    .action-buttons {
        float: right;
    }

    .action-button {
        background-color: #0F4C75;
        border-radius: 10px;
        border: 1px solid;
        color: #BBE1FA;
        text-align: center;
        user-select: none;

        margin: 5px;
        padding: 0 10px;
    }

    .action-button:hover {
        filter: brightness(125%);
        cursor: pointer;
    }

    .action-button:active {
        filter: brightness(75%);
    }
</style>
