<template>
    <div>
        <h1>Version 0.5.5 - (Beta)</h1>

        <h2>Functionality</h2>
        <ul>
            <li>Added app-wide Search functionality</li>
            <li>Added partial table selection</li>
            <li>Moved quick mark buttons to a dropdown at the top left of tables</li>
            <li>Changed quick mark options</li>
            <li>Fix for maximized state not carrying between loads (maybe)</li>
            <li>Fix for negative completion</li>
            <li>Fix for table freakout when hovering left cell with 1 item on the table</li>
            <li>Fixed "FFXIV Completionist" menu items not showing on reopen</li>
            <li>Removed sheet import (see below)</li>
        </ul>

        <h2>Data</h2>
        <ul>
            <li>Added 5.5 content</li>
            <li>Excluded event based titles by default</li>
            <li>Removed class level 1 & 10 duplicate quests</li>
            <li>Fixed issue with "Friends In Deed" achievement</li>
            <li>Various value fixes (spelling, counts, etc)</li>
        </ul>

        <h2>Sheet Import</h2>
        <p>
            The import function has been removed to prevent the sheet and app from being too closely coupled.<br/>
            In this context mainly because any change in the sheet or app's structure resulted in breaking that function.<br/>
            Several features have been added or modified to help with this change:
        </p>
        <ul>
            <li>An app-wide search has been added</li>
            <li>Additional and more refined "Quick-Mark" options have been added</li>
            <li>Partial selection of multiple tasks in a table</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'version-0-5-5',
    }
</script>
