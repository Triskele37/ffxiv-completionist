<template>
    <td class="external-link-cell">
        <span
            title="Gamer Escape"
            @click="gotoGamerEscape()"
        >
            <img
                src="../../../assets/gamerescape.png"
                alt="Gamer Escape"
                height="20"
                width="20"
            >
        </span>
        <span
            title="Garland Tools"
            @click="gotoGarlandTools()"
        >
            <img
                src="../../../assets/Garland.png"
                alt="Garland Tools"
                height="20"
                width="20"
            >
        </span>
    </td>
</template>

<script>
    const { shell } = require('electron');

    export default {
        name: 'external-data',
        props: {
            taskName: String
        },
        methods: {
            gotoGamerEscape: function () {
                shell.openExternal('https://ffxiv.gamerescape.com/wiki/' + this.taskName.replace(/ /g, '_'));
            },
            gotoGarlandTools: function () {
                shell.openExternal('https://www.garlandtools.org/db/#search/' + this.taskName.replace(/ /g, '_'));
            }
        }
    };
</script>

<style>
    .external-link-cell {
        width: 45px;
    }

    .external-link-cell img {
        cursor: pointer;
    }
</style>
