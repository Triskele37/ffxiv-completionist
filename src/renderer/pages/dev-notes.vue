<template>
    <div>
        <h1>Dev Notes</h1>
        <p>An in-app page for transparency on the state of the app</p>

        <br/>

        <h3>Features being considered, planned, or worked on</h3>
        <ul>
            <li>Methods of pulling data from XIVAPI while maintaining app data integrity</li>
            <li>Further translation support</li>
            <li>Auto-completion of related items</li>
            <li>Customizable themes</li>
            <li>Syncing data available on your character from Lodestone</li>
        </ul>

        <br/>

        <h3>Known Issues</h3>
        <ul>
            <li>Many ARR quests have the wrong level (please provide feedback to help, there is a lot of em)</li>
            <li>Achievements missing "Patch" column</li>
            <li>"Show All Tasks" button laggy for groups with massive data sets</li>
            <li>application is not code signed</li>
            <li>Quest restrictions based on starting zone are not automatic</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'dev-notes',
    }
</script>
