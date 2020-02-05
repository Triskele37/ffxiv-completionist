<template>
    <div id="import-sheet-container">
        <div>Copy entire sheets from FFXIV Checklist and paste them in the area next to the tab's title</div>

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
