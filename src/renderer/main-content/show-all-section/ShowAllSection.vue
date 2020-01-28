<template>
    <div class="show-all-section">
        <task-table :group="allChildren" />
    </div>
</template>

<script>
    import TaskTable from "../task-table/TaskTable";

    export default {
        name: 'show-all-section',
        components: {
            'task-table': TaskTable
        },
        props: {
            group: Object
        },
        computed: {
            allChildren: function() {
                return Object.assign({}, this.group, {
                    columns: this.group.columns,
                    tasks: diveForTasks(this.group)
                });
            }
        },
    };

    function diveForTasks(group) {
        let tasks = [];

        if(group.tasks) tasks = tasks.concat(group.tasks);

        if(group.groupKeys) {
            for(let groupKey in group.groupKeys) {
                tasks = tasks.concat(diveForTasks(group[groupKey]));
            }
        }

        return tasks;
    }
</script>

<style>
    .show-all-section {

    }
</style>
