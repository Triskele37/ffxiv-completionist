<template>
    <tr>
        <th>&#10004;</th>

        <th v-for="column in columns">
            {{column.header}}
        </th>

        <th>Links</th>
    </tr>
</template>

<script>
    export default {
        name: 'column-header',
        props: {
            columns: Array
        }
    };
</script>

<style>
    .task-table th {
        background-color: #3282B8;
        max-width: 25vw;
        position: sticky;
        top: 0;

        user-select: none;
    }

    .task-table th:hover {
        /*background-color: rgba(0, 0, 0, 0.1);*/
    }
</style>
