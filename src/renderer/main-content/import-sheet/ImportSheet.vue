<template>
    <div id="import-sheet-container">
        <div>
            <ol style="display: inline-block;">
                <li>Open the tab you want to import from FFXIV Checklist</li>
                <li>Copy the entire sheet in that tab (at minimum every cell with a background color)</li>
                <li>Paste those contents into the text area next to the matching tab title on this page</li>
            </ol>

            <ul style="display: inline-block;">
                <li>Pulsing: Import is processing</li>
                <li>Green: Items were imported and saved</li>
                <li>Red: Some name/s in a row could not be found, successful matches still saved</li>
            </ul>

            <p>
                NOTE: Please PM me all unsuccessful import names grouped by section and tab for your sheets.
                <br/>
                I've tried to make matching as fuzzy as possible while maintaining certainty, but expect to see some issues
                <br/>
                Also, no tab import should take longer than 5 seconds, let me know if any do
            </p>
        </div>

        <div class="section-container">
            <span v-for="section in sheetSections">
                <p class="section-header">
                    {{section.name}}
                </p>

                <table class="import-table">
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
            </span>
        </div>
    </div>
</template>

<script>
    import { Sections } from './imports';

    export default {
        name: 'import-sheet',
        data: () => ({
            sheetSections: Sections
        }),
        methods: {
            onPasteInput: function($event, tab) {
                tab.status = 'active';
                tab.tooltip = 'Processing...';
                this.$forceUpdate();

                setTimeout(() => {
                    const importObj = tab.importCallback($event.target.value, this.$store);
                    tab.status = importObj.status;
                    tab.tooltip = importObj.tooltip;

                    // Clear textarea and update
                    $event.target.value = '';
                    this.$forceUpdate();
                }, 250);
            }
        }
    };
</script>

<style>
    #import-sheet-container {
        height: 100%;
        width: 100%;
    }

    .section-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;

        height: 920px;
        width: 100%;
    }

    .section-header {
        margin: 5px 0 0 0;
        text-decoration: underline;
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
