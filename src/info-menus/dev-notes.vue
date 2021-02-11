<template>
    <div>
        <h1>Dev Notes</h1>
        <p>An in-app page for transparency on the state of the app</p>

        <br/>

        <h3>The Notes:</h3>
        <p>Working on a way to hit XIVAPI to pull new data without breaking existing data (such as quests and achievements in 0.5.25)</p>

        <br/>

        <h3>Features being considered, planned, or worked on</h3>
        <ul>
            <li>Further translation support</li>
            <li>Garland Tools & Teamcraft integration with crafting recipe groups</li>
            <li>Manual task entry section for the time between patch and app updates</li>
            <li>Auto-completion of related items</li>
            <li>Customizable themes</li>
        </ul>

        <br/>

        <h3>Known Issues</h3>
        <ul>
            <li>Many ARR quests have the wrong level (please provide feedback to help, there is a lot of em)</li>
            <li>Achievements missing "Patch" column</li>
            <li>"Unlock" column for many quests missing information</li>
            <li>"Show All Tasks" button laggy for groups with massive data sets</li>
            <li>application is not code signed</li>
            <li>Mount Speed tasks only allow a single mark when several speed upgrades can be received</li>
            <li>Fishing/Spearfishing Log only tracks being discovered, not completed</li>
            <li>Quest restrictions based on starting zone are not automatic</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'dev-notes',
    }
</script>
