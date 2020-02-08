<template>
    <div class="show-all-section">
        <task-table
            :column-config="group.columnConfig"
            :tasks="allChildTasks"
        />
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
            allChildTasks: function() {
                return diveForTasks(this.group);
            },
        },
    };

    function diveForTasks(group) {
        let tasks = [];

        if(group.tasks) tasks = tasks.concat(group.tasks);

        if(group.subGroups) {
            group.subGroups.forEach((subGroup) => {
                tasks = tasks.concat(diveForTasks(subGroup));
            });
        }

        return tasks;
    }
</script>

<style>
    .show-all-section {
        width: calc(100% - 20px);
    }
</style>
