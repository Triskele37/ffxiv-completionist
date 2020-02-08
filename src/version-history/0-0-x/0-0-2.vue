<template>
    <div>
        <h1>Version 0.0.2 - First Alpha</h1>

        <h3>Additions</h3>
        <ul>
            <li>Version History</li>
            <li><b>Completion Summaries</b></li>
            <li>Ability to toggle to/from a <b>Show All Tasks</b> mode</li>
            <li>
                Navigation
                <ul>
                    <li>Backward navigation via clicking <b>Breadcrumbs</b></li>
                    <li>Forward navigation via clicking small <b>Summary Line</b> items</li>
                    <li><b>FFXIV Completionist</b> main menu item</li>
                    <li>Previously open navigation is now saved when app closes</li>
                </ul>
            </li>
            <li>
                <b>Task Table</b>
                <ul>
                    <li>Column search</li>
                    <li>Conditional styling mechanism</li>
                    <li>Completion filtering</li>
                </ul>
            </li>
            <li>
                Data
                <ul>
                    <li><b>Sheet Import</b> Functionality</li>
                    <li>Complete 5.18 sheet data ingestion</li>
                    <li>Pre-emptive ingestion of <b>Travel</b> section</li>
                </ul>
            </li>
        </ul>

        <h3>Changes</h3>
        <ul>
            <li>Right-click to exclude tasks</li>
            <li>POC rework of Weapon Quests into Collectables > Relic Gear</li>
        </ul>

        <h3>Fixes</h3>
        <ul>
            <li>Storage persistence issues</li>
            <li><b>BLU Spellbook</b> names missing</li>
            <li>Table <b>Filter</b> & <b>Search</b> not sticky on scroll</li>
            <li>Non-primitive data displayed in table columns</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '0.0.2',
    }
</script>
