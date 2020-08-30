<template>
    <div>
        <h1>Task Table</h1>
        <p>Rejoice in the glory of combat!</p>

        <br/>

        <h2>Search Columns</h2>
        <p>If a column in the table is searchable, it will have the text field with 3 dots above the column header</p>
        <p>You can type into this field to search for items in that column</p>
        <p>This search is case-insensitive and matches anywhere within the text for that column</p>

        <br/>

        <h2>Filter Columns</h2>
        <p>If a column in the table is filterable, it will have a dropdown with a triangle above the column header</p>
        <p>You can click on this dropdown to get a unique list of items in that column to filter by</p>
        <p>Clicking on the dropdown again will remove the currently applied filter</p>

        <br/>

        <h2>Links (work in progress)</h2>
        <p>To the right of most items is a link to "Gamer Escape" and "Garland Tools"</p>
        <p>All these links do is fire a search at those sites, so not all items will come up with what you'd expect</p>

        <br/>

        <h4>Final Note</h4>
        <p>Your currently selected group is saved when closing the app to help you pick up where you left off :D</p>
    </div>
</template>

<script>
    export default {
        name: 'task-table-instructions',
    }
</script>
