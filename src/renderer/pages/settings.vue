<template>
    <div class="settings-page">
        <div class="settings-group">
            <label class="setting-header">Character</label>
            <div class="setting">
                <label>Save File Name:</label>
                <label>{{settings.storeName.value}}</label>
            </div>
            <div class="setting">
                <label>Save File Location:</label>
                <label>{{settings.storeLocation.value}}</label>
            </div>
            <div class="setting">
                <label title="Changing this value excludes innaccessible quests">
                    Starting Class:
                </label>
                <select
                    class="xiv-select"
                    :value="settings.startingClass.value"
                    @change="onChangeStartingClass($event, settings.startingClass.key)"
                >
                    <option>Gladiator</option>
                    <option>Marauder</option>
                    <option>Arcanist</option>
                    <option>Archer</option>
                    <option>Lancer</option>
                    <option>Pugilist</option>
                    <option>Rogue</option>
                    <option>Thaumaturge</option>
                    <option>Conjurer</option>
                </select>
                <chain-dropdown :disable-undo="true"></chain-dropdown>
            </div>
        </div>

        <div class="settings-group">
            <label class="setting-header">Table Filters</label>
            <div class="setting">
                <label>Show Completed:</label>
                <input
                    class="setting-input"
                    type="checkbox"
                    :checked="settings.tableFilters.completed.value"
                    @change="onChangeBoolSetting($event, settings.tableFilters.completed.key)"
                />
            </div>
            <div class="setting">
                <label>Show Incomplete:</label>
                <input
                    class="setting-input"
                    type="checkbox"
                    :checked="settings.tableFilters.incomplete.value"
                    @change="onChangeBoolSetting($event, settings.tableFilters.incomplete.key)"
                />
            </div>
            <div class="setting">
                <label>Show Excluded:</label>
                <input
                    class="setting-input"
                    type="checkbox"
                    :checked="settings.tableFilters.excluded.value"
                    @change="onChangeBoolSetting($event, settings.tableFilters.excluded.key)"
                />
            </div>
        </div>

        <div class="settings-group">
            <label class="setting-header">Chaining</label>
            <div
                class="setting"
                title="Allow or disallow tasks from auto-marking other related tasks"
            >
                <label>Chaining Enabled:</label>
                <input
                    class="setting-input"
                    type="checkbox"
                    :checked="settings.chainingEnabled.value"
                    @change="onChangeBoolSetting($event, settings.chainingEnabled.key)"
                />
            </div>
            <div
                class="setting"
                title="Chain window will auto-collapse groups when the total chain count hits this number"
            >
                <label>Chain Min Threshold:</label>
                <input
                    class="setting-input xiv-input"
                    type="number"
                    min="1"
                    max="999"
                    step="1"
                    :value="settings.chainMinThreshold.value"
                    @change="onChangeNumSetting($event, settings.chainMinThreshold)"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { eStore } from "../../store/electronStore";
    import { data } from "../../data";
    import { applyDataToStore } from "../../store/electronStore/applyDataToStore";
    import ChainDropdown from "../components/task-table/ChainDropdown";

    export default {
        name: 'settings',
        components: {
            'chain-dropdown': ChainDropdown
        },
        data: () => ({
            settings: {
                storeName: { key: 'store-name', value: null },
                storeLocation: { key: 'store-loc', value: null },
                startingClass: { key: 'starting-class', value: null },
                lang: { key: 'lang', value: null },
                tableFilters: {
                    completed: { key: 'table-filters.completed', value: null },
                    incomplete: { key: 'table-filters.incomplete', value: null },
                    excluded: { key: 'table-filters.excluded', value: null }
                },
                chainingEnabled: { key: 'chaining-enabled', value: null },
                chainMinThreshold: { key: 'chain-min-threshold', value: null }
            }
        }),
        created: function() {
            const diveSettings = (obj) => {
                for(let key in obj) {
                    if(obj[key].key) obj[key].value = eStore.get(obj[key].key);
                    else diveSettings(obj[key]);
                }
            };
            diveSettings(this.settings);
        },
        methods: {
            onChangeStringSetting: function($event, path) {
                eStore.set(path, $event.target.value);
            },
            onChangeBoolSetting: function($event, path) {
                eStore.set(path, $event.target.checked);
            },
            onChangeNumSetting: function($event, setting) {
                let newValue = parseInt($event.target.value);
                if(newValue < $event.target.min) newValue = $event.target.min;
                else if(newValue > $event.target.max) newValue = $event.target.max;

                eStore.set(setting.key, newValue);
                setting.value = newValue;

                this.$forceUpdate(); // Shows when invalid inputs are changed
            },
            onChangeStartingClass: function($event, path) {
                this.onChangeStringSetting($event, path);

                const startingClass = $event.target.value;
                const baseQuestPath = 'duty.quests.main-scenario.seventh-umbral-era';

                const getTask = (path, id) => data.getChildGroupFromPath(path).tasks[id];

                const gridania = getTask(`${baseQuestPath}.gridania`, 'x65660');
                const limsa = getTask(`${baseQuestPath}.limsa-lominsa`, 'x65645');
                const uldah = getTask(`${baseQuestPath}.uldah`, 'x66106');

                switch(startingClass) {
                    case 'Archer': case 'Lancer': case 'Conjurer':
                        gridania.changeCompletionFlag('Y', true);
                        gridania.setCompletionFlag('N');
                        break;
                    case 'Marauder': case 'Arcanist': case 'Rogue':
                        limsa.changeCompletionFlag('Y', true);
                        limsa.setCompletionFlag('N');
                        break;
                    case 'Gladiator': case 'Pugilist': case 'Thaumaturge':
                        uldah.changeCompletionFlag('Y', true);
                        uldah.setCompletionFlag('N');
                        break;
                    default:
                        gridania.changeCompletionFlag('Y', true);
                        gridania.changeCompletionFlag('N', true);
                }

                applyDataToStore(data);
            }
        }
    }
</script>

<style lang="scss">
    .settings-page {
        .setting-header {
            display: block;
            margin-top: 20px;
            font-weight: bold;
            text-decoration: underline;
        }

        .settings-group {
            width: fit-content;
        }

        .setting {
            height: 20px;

            .setting-input {
                float: right;
            }

            .xiv-select {
                width: unset;
            }

            .xiv-input {
                width: 50px;
            }

            .chain-dropdown {
                display: inline-block;
            }
        }
    }
</style>
