<template>
    <div id="stat-bar">
        <summary-line :group="allData" :big="true" />
        <summary-line
            v-if="showSelectedGroupLine"
            :group="selectedGroup"
            :big="true"
        />
    </div>
</template>

<script>
    import { data } from '../../data';
    import { mapState } from 'vuex';
    import SummaryLine from '../components/SummaryLine';

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
            showSelectedGroupLine: function() {
                if(!this.selectedGroup) return false;
                if(this.selectedGroup === this.allData) return false;
                if(this.selectedGroup.percentComplete === undefined) return false;
                if(this.selectedGroup.percentComplete === null) return false;

                return true;
            }
        }
    };
</script>

<style lang="scss">
#stat-bar {
    height: 100px;
    padding: 0 10px;
}
</style>
