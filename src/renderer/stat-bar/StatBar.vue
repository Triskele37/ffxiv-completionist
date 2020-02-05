<template>
    <div id="stat-bar">
        <summary-line :group="allData" :big="true" />
        <summary-line
            v-if="selectedGroup && selectedGroup.percentComplete && selectedGroup !== allData"
            :group="selectedGroup"
            :big="true"
        />
    </div>
</template>

<script>
    import { data } from '../../data';
    import { mapState } from 'vuex';
    import SummaryLine from '../summary-line/SummaryLine';

    export default {
        data: () => ({
            allData: data
        }),
        components: {
            'summary-line': SummaryLine
        },
        computed: {
            ...mapState('navigation', {
                selectedGroup: 'selectedGroup'
            }),
        }
    };
</script>

<style>
    #stat-bar {
        height: 100px;
        padding: 0 10px;
    }
</style>
