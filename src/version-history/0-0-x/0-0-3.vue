<template>
    <div>
        <h1>Version 0.0.3 - Alpha: The Second Coming</h1>

        <h3>Additions</h3>
        <h3>Changes</h3>

        <h3>Fixes</h3>
        <ul>
            <li>Fixed backward navigation with breadcrumbs not stepping back when sections had the same name (e.g. Achievements > Battle > Battle)</li>
        </ul>

        <h3>Data Fixes</h3>
        <ul>
            <li>
                Achievements
                <ul>
                    <li>Battle > Battle: Fixed rewards not displaying</li>
                    <li>Character > General: Fixed description not displaying</li>
                    <li>Quests > Quests: Fixed description not displaying</li>
                </ul>
            </li>
            <li>
                Gathering Logs
                <ul>
                    <li>Fishing > Guide: Fixed iLvl, Fishing Holes, and Usages not displaying</li>
                    <li>Spearfishing > Guide: Fixed iLvl, Fishing Holes, and Usages not displaying</li>
                </ul>
            </li>
            <li>
                General Logs > Hunting Log > Archer
                <ul>
                    <li>Log 18: Location to (20, 30)</li>
                    <li>Log 20: Wild Bear to Wild Boar</li>
                </ul>
            </li>
            <li>
                Quests > Levequests > Battlecraft
                <ul>
                    <li>"Whither the Morbol Goeth" spelling fix</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: '0.0.3',
    }
</script>
