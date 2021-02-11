<template>
    <div id="import-sheet-container">
        <div>
            <p>This page helps you import your progress from the sheet into the app</p>

            <ol style="display: inline-block;">
                <li>Open the tab you want to import from FFXIV Checklist</li>
                <li>Copy the entire sheet in that tab (at minimum every cell with a background color)</li>
                <li>Paste those contents into the tiny text area below</li>
                <li>Results will be displayed when indicator icon stops pulsing</li>
            </ol>

            <ul style="display: inline-block;">
                <li>Pulsing: Import is processing</li>
                <li>Green: Items were imported and saved</li>
                <li>Red: Some name/s in a row could not be found, successful matches still saved</li>
            </ul>

            <p>Please note, Aether Current & Shared FATE sheets cannot currently be imported</p>
        </div>

        <div class="section-container">
            <div>
                <textarea
                    class="paste-textarea"
                    rows=1
                    cols=1
                    @paste="onPasteInput($event)"
                />
                <span class="status-indicator" :class="status"/>
            </div>
            <pre>{{info}}</pre>
        </div>
    </div>
</template>

<script>
    import { importCallback } from './importer';

    export default {
        name: 'import-sheet',
        data: () => ({
            status: '',
            info: ''
        }),
        methods: {
            onPasteInput: function($event) {
                this.status = 'active';
                this.info = 'Processing...';
                this.$forceUpdate();

                setTimeout(() => {
                    const importObj = importCallback($event.target.value);
                    this.status = importObj.status;
                    this.info = importObj.tooltip;

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
        width: 100%;
    }

    .paste-textarea {
        overflow: hidden;
        resize: none;
        vertical-align: text-bottom;
    }

    /* Dot Indicator */
    .status-indicator {
        display: inline-block;
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

    /* Dot Indicator Animation */
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
