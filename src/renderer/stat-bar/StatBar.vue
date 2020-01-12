<template>
    <div id="stat-bar">
        <div v-if="selectedGroup && selectedGroup.tasks">
            Completed: {{completed}} / {{total}}
            <br/>
            Total: {{selectedGroup.tasks.length}}
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
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
