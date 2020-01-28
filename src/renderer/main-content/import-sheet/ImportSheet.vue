<template>
    <div id="import-sheet-container">
        Copy entire sheets from FFXIV Checklist and paste them
        in the area next to the tab's title

        <div v-for="section in sheetSections">
            <h3
                class="section-header"
                @click="toggleSection($event, section)"
            >
                {{section.name}}
            </h3>

            <table
                class="import-table"
                v-if="section.visible"
            >
                <tr v-for="tab in section.tabs">
                    <td>
                        <textarea
                            class="paste-textarea"
                            rows=1
                            cols=1
                            @change="onPasteInput($event, tab)"
                        />
                    </td>
                    <td>
                        <div
                            class="status-indicator"
                            :class="tab.status"
                            :title="tab.tooltip"
                        />
                    </td>
                    <td>{{tab.title}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    import { Sections } from './sheet';

    export default {
        name: 'import-sheet',
        data: () => ({
            sheetSections: Sections
        }),
        methods: {
            toggleSection: function($event, section) {
                section.visible = !section.visible;
                this.$forceUpdate();
            },
            onPasteInput: function($event, tab) {
                tab.status = 'active';
                tab.tooltip = 'Processing...';
                this.$forceUpdate();

                setTimeout(() => {
                    const rowData = $event.target.value
                        .split('\n')                               // Turn into an array of each row
                        .map((row) => row.split('\t'))             // turn each row into columns
                        .filter((row) => !!row[0].match(/[YNX]/)); // Remove rows that don't contain Y, N, or X

                    const remainingRows = tab.importCallback(this.$store, rowData);

                    tab.status = remainingRows.length ? 'failure' : 'success';
                    tab.tooltip = remainingRows.length ? remainingRows : 'Successful';
                    this.$forceUpdate();
                }, 250);
            }
        }
    };
</script>

<style>
    #import-sheet-container {
        width: 100%;
    }

    .section-header {
        cursor: pointer;
        text-decoration: underline;
        width: fit-content;
    }

    .import-table td {
        padding: 0 5px;
    }

    .status-indicator {
        height: 15px;
        width: 15px;
        background-color: #CCC;
        border-radius: 50%;
    }

    .status-indicator.active {
        transform: scale(1);
        animation: pulse 2s infinite;
    }

    .status-indicator.success {
        background-color: green;
    }

    .status-indicator.failure {
        background-color: red;
    }

    .paste-textarea {
        overflow: hidden;
        resize: none;
        vertical-align: text-bottom;
    }

    @keyframes pulse {
    	0% {
    		transform: scale(0.75);
    		filter: brightness(75%);
    	}

    	50% {
    		transform: scale(1);
    		filter: brightness(100%);
    	}

    	100% {
    		transform: scale(0.75);
    		filter: brightness(75%);
    	}
    }
</style>
