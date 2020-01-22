<template>
    <div id="stat-bar">
        <summary-line :group="allData" />
    </div>
</template>

<script>
    import { data } from '../../data';
    import { mapState } from 'vuex';
    import SummaryLine from '../section-summary/SummaryLine';

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
            completed: function() {
                if(!this.selectedGroup || !this.selectedGroup.tasks) return 0;
                return this.selectedGroup.tasks.reduce((acc, item) => {
                    return acc + (item.completed === 'Y' ? 1 : 0);
                }, 0);
            },
            total: function() {
                if(!this.selectedGroup || !this.selectedGroup.tasks) return 0;
                return this.selectedGroup.tasks.reduce((acc, item) => {
                    return acc + (item.completed === 'Y' || item.completed === 'N' ? 1 : 0);
                }, 0);
            }
        }
    };
</script>

<style>
    #stat-bar {
        height: 100px;
        padding: 10px;
    }
</style>
