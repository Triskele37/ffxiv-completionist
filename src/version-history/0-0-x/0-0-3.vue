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
                Achievements >
                <ul>
                    <li>
                        Battle > Battle
                        <ul>
                            <li>Fixed rewards not displaying</li>
                        </ul>
                    </li>
                    <li>
                        Character > General
                        <ul>
                            <li>Fixed description not displaying</li>
                        </ul>
                    </li>
                    <li>
                        Quests > Quests
                        <ul>
                            <li>Fixed description not displaying</li>
                        </ul>
                    </li>
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
