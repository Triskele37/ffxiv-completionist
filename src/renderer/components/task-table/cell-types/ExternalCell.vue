<template>
    <td class="external-link-cell noSelect">
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
        name: 'external-link-cell',
        props: {
            task: Object
        },
        methods: {
            gotoGamerEscape: function () {
                let name = this.task.name.replace(/ /g, '_');
                name = this.overrideForGamerEscape(name);

                shell.openExternal(`https://ffxiv.gamerescape.com/wiki/${name}`);
            },
            overrideForGamerEscape: function(name) {
                const match = (n, id) => this.task.name === n && this.task.id === id;

                if(match('Mending Fences', 143)) return `${name}_(Levequest)`

                return name;
            },
            gotoGarlandTools: function () {
                const name = this.task.name.replace(/ /g, '%20');
                shell.openExternal(`https://www.garlandtools.org/db/#search/${name}`);
            }
        }
    };
</script>

<style lang="scss">
.external-link-cell {
    width: 45px;

    .img {
        cursor: pointer;
    }
}
</style>
