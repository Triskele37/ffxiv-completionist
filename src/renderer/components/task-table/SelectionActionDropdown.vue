<template>
    <div class="action-dropdown-container">
        <div
            class="xiv-dropdown-arrow"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
        >
            <icon name="selected" size="16"/>
        </div>
        <div
            class="xiv-dropdown-body"
            v-if="dropdownOpen"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
        >
            <button class="xiv-dropdown-li" :disabled="true">Selection Actions Menu</button>
            <button class="xiv-dropdown-li" @click="onSelectChange(true)">Select All Tasks</button>
            <button class="xiv-dropdown-li" @click="onSelectChange(false)">Deselect All Tasks</button>
            <button class="xiv-dropdown-li" @click="onSelectChange(null)">Invert Selection</button>

            <template v-if="group.isCraftingLogGroup">
              <button class="xiv-dropdown-li" @click="openInGardland()">Open Selected Recipes in Gardland Tools</button>
              <button class="xiv-dropdown-li" @click="openInTeamcraft()">Open Selected Recipes in Teamcraft</button>
            </template>
        </div>
    </div>
</template>

<script>
const { shell } = require('electron');

export default {
    name: 'selection-action-dropdown',
    props: {
        group: Object,
        filteredTasks: Array
    },
    data: () => ({
        dropdownOpen: false
    }),
    methods: {
        onSelectChange: function(select) {
            this.filteredTasks.forEach((task) => task.selected = select === null ? !task.selected : select);
            this.$emit('select-change');
        },
        openInGardland: function() {
            const ids = this.filteredTasks.filter((t) => t.selected).map((t) => t.id);

            if(ids.length) {
                const baseUrl = "https://www.garlandtools.org/db/#group";
                const idsString = ids.map((id) => `item/${id}`).join("|");

                // Create a pretty group name
                let parent = this.group._parent;
                while(parent._parent.isCraftingLogGroup) parent = parent._parent;
                const encodedGroupName = `${parent.name} > ${this.group.name}`.replace(" ", "%20");

                shell.openExternal(`${baseUrl}/${encodedGroupName}{${idsString}}`);
            }
        },
        openInTeamcraft: function() {
            const ids = this.filteredTasks.filter((t) => t.selected).map((t) => t.id);

            if(ids.length) {
                const baseUrl = "https://www.ffxivteamcraft.com/import";
                const idsString = ids.map((id) => `${id},null,1`).join(";");

                shell.openExternal(`${baseUrl}/${btoa(idsString)}`);
            }
        }
    }
};
</script>

<style lang="scss">

</style>