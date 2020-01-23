<template>
    <div id="stat-bar">
        <summary-line :group="allData" />
        <summary-line
            v-if="selectedGroup"
            :group="selectedGroup"
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
        padding: 10px;
    }
</style>
