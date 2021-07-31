<template>
    <div id="main-content">
        <!----------- Top-Level Summary ----------->
        <div v-if="selectedGroup.noContent || !selectedGroup">
            <landing-page/>
        </div>
        <!----------- Selected Custom Component ----------->
        <template v-else-if="selectedGroup.component">
            <component v-bind:is="selectedGroup.component"></component>
        </template>
        <template v-else-if="selectedGroup.text">
            {{selectedGroup.text}}
        </template>
        <!----------- Summary & Task Table ----------->
        <template v-else>
            <template v-if="!showAll">
                <div v-if="selectedGroup.subGroups" class="group-summary-section">
                    <summary-line
                        v-for="subGroup in selectedGroup.subGroups"
                        :key="subGroup.name"
                        :group="subGroup"
                    />
                </div>

                <div class="section-actions">
                    <button
                        class="xiv-button"
                        v-if="showShowAllButton"
                        @click="toggleShowAll"
                    >
                        {{showAll ? 'Hide All Tasks' : 'Show All Tasks'}}
                    </button>
                </div>
            </template>
            <template v-else>
                <button
                    class="xiv-button exit-all-button"
                    @click="toggleShowAll"
                >
                    Exit All Task View
                </button>
            </template>

            <!----------- Task Tables (base & show all) ----------->
            <template v-if="showShowAllButton && showAll">
                <show-all-section :group="selectedGroup" />
            </template>
            <template v-else-if="selectedGroup.taskCount !== null">
                <task-table
                    :group="selectedGroup"
                    :column-config="selectedGroup.columnConfig"
                />
            </template>
        </template>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import { data } from '../../data';
    import LandingPage from '../pages/landing-page';
    import SummaryLine from '../components/SummaryLine';
    import SearchData from '../pages/search-data/SearchData';
    import ShowAllSection from "./ShowAllSection";
    import TaskTable from '../components/task-table/TaskTable';

    export default {
        name: 'main-content',
        data: () => ({
            allData: data,
            showAll: false,
        }),
        components: {
            'landing-page': LandingPage,
            'summary-line': SummaryLine,
            'search-data': SearchData,
            'show-all-section': ShowAllSection,
            'task-table': TaskTable,
        },
        computed: {
            ...mapState('navigation', {
                selectedGroup: 'selectedGroup',
            }),
            showShowAllButton: function() {
                return (this.selectedGroup && this.selectedGroup.subGroups && this.selectedGroup.columnConfig);
            },
        },
        watch: {
            selectedGroup: function(oldGroup, newGroup) {
                if(oldGroup.name !== newGroup.name) this.showAll = false;
            }
        },
        methods: {
            toggleShowAll: function() {
                this.showAll = !this.showAll;
            }
        }
    };
</script>

<style lang="scss">
@import '../../styles/colors';

#main-content {
    height: calc(100% - 160px);
    margin: 10px;

    .group-summary-section {
        display: flex;
        flex-wrap: wrap;
    }

    .section-actions {
        text-align: center;
    }

    .exit-all-button {
        float: right;
        margin-right: 20px;
    }
}
</style>
