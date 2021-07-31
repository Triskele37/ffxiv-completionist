<template>
    <div class="show-all-section">
        <task-table
            :group="group"
            :column-config="group.columnConfig"
            :tasks="allChildTasks"
        />
    </div>
</template>

<script>
    import TaskTable from "../components/task-table/TaskTable";

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
                // const fuck = diveForTasks(this.group, 'x0');
                // console.log(fuck);
                return diveForTasks(this.group);
            },
        },
    };

    function diveForTasks(group) {
        let tasks = {};

        // add current group's tasks
        for(const id in group.tasks) {
            tasks[id] = group.tasks[id];
        }

        // dive for more child tasks
        (group.subGroups || []).forEach((subGroup) => {
            const subGroupTasks = diveForTasks(subGroup);

            for(const id in subGroupTasks) {
                let prefix = 0;
                while(!!tasks[`x${prefix}${id}`]) prefix++;
                tasks[`x${prefix}${id}`] = subGroupTasks[id];
            }
        });

        return tasks;
    }
</script>

<style lang="scss">
.show-all-section {
    width: calc(100% - 20px);
}
</style>
