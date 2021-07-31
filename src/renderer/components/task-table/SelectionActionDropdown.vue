<template>
    <div
        class="action-dropdown-container"
        @mouseenter="dropdownOpen = true"
        @mouseleave="dropdownOpen = false"
    >
        <div class="xiv-dropdown-arrow">
            <icon name="selected" size="16"/>
        </div>
        <div v-if="dropdownOpen" class="xiv-dropdown-body">
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
        filteredTasks: Object
    },
    data: () => ({
        dropdownOpen: false
    }),
    methods: {
        selectedIds: function() {
            const selectedIds = [];
            for(const id in this.filteredTasks) {
                if(this.filteredTasks[id].selected) selectedIds.push(id);
            }
            return selectedIds;
        },
        onSelectChange: function(select) {
            for(const id in this.filteredTasks) {
                if(select === null) {
                    this.filteredTasks[id].selected = !this.filteredTasks[id].selected;
                }
                else {
                    this.filteredTasks[id].selected = select;
                }
            }

            this.$emit('select-change');
        },
        openInGardland: function() {
            const ids = this.selectedIds();

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
            const ids = this.selectedIds();

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
