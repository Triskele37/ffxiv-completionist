<template>
    <div>
        <h1>Version 0.5.3 - (Beta)</h1>

        <h2>Functionality</h2>
        <ul>
            <li>Temporarily removed importing, working on a drastically simplified single input interface</li>
        </ul>

        <h2>Data</h2>
        <ul>
            <li>Added 5.3 content</li>
            <li>Ingesting data via XIVAPI
                <ul>
                    <li>Achievements & Quests using XIVAPI</li>
                    <li>Working on recipes</li>
                </ul>
            </li>
        </ul>

        <h3>Known Issues (planned to be resolved)</h3>
        <ul>
            <li>exe is not signed</li>
            <li>Fishing/Spearfishing Log only tracks one form of completion</li>
            <li>Mount Speed tasks track as completion with one form</li>
            <li>Quest restrictions based on starting zone are not automatic</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'version-0-5-3',
    }
</script>
