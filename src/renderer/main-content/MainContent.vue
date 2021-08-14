<template>
    <div id="main-content" v-if="!!selectedGroup">
        <!----------- Top-Level Summary ----------->
        <div v-if="selectedGroup.noContent || !selectedGroup">
            <landing-page/>
        </div>
        <!----------- Selected Custom Component ----------->
        <div
            class="custom-group-component"
            v-else-if="selectedGroup.component"
        >
            <component v-bind:is="selectedGroup.component"></component>
        </div>
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

                <div class="section-actions" v-if="showShowAllButton">
                    <button
                        class="xiv-button"
                        @click="toggleShowAll"
                    >
                        {{showAll ? 'Hide All Tasks' : 'Show All Tasks'}}
                    </button>
                </div>
            </template>
            <template v-else>
                <div class="section-actions">
                    <button
                        class="xiv-button exit-all-button"
                        @click="toggleShowAll"
                    >
                        Exit All Task View
                    </button>
                </div>
            </template>

            <!----------- Task Tables (base & show all) ----------->
            <template v-if="showShowAllButton && showAll">
                <show-all-section :group="selectedGroup" />
            </template>
            <template v-else-if="selectedGroup.taskCount !== null">
                <task-table
                    :group="selectedGroup"
                    :column-config="selectedGroup.columnConfig"
                    :tasks="selectedGroup.tasks"
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
                if(!oldGroup || !newGroup) return;

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
    display: flex;
    flex-direction: column;

    height: calc(100% - 140px);
    margin: 10px;

    .custom-group-component {
        overflow-y: auto;
        white-space: normal;
    }

    .group-summary-section {
        // wraps summaries each 3
        display: flex;
        flex-wrap: wrap;

        // gives height so tables w/ summaries display properly
        min-height: fit-content;
    }

    .section-actions {
        align-self: flex-end;
        margin-bottom: -27px;
        text-align: center;
    }

    .exit-all-button {
        margin-right: 20px;
    }
}
</style>
