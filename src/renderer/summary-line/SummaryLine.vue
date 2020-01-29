<template>
    <div
        class="summary-line"
        :title="tooltip"
    >
        <span class="summary-line-info">
            {{group.name}}
            <br/>
            {{`${group.percentComplete}%`}}
        </span>
        <span
            class="progress-line complete-progress"
            :style="completeBarStyle"
        />
        <span
            class="progress-line incomplete-progress"
            :style="incompleteBarStyle"
        />
    </div>
</template>

<script>
    export default {
        name: 'summary-line',
        props: {
            group: Object
        },
        computed: {
            tooltip: function() {
                let tooltip = `${this.group.totalCompleted}/${this.group.displayTotal}\n`;
                tooltip += `${this.group.totalExcluded} Excluded`;

                return tooltip;
            },
            completeBarStyle: function() {
                return { width: `${this.group.percentComplete}%` };
            },
            incompleteBarStyle: function() {
                // -1px is to give some breathing room for the float calculation
                return { width: `calc(${100-this.group.percentComplete}% - 1px)` };
            }
        }
    }
</script>

<style>
    .summary-line {
        position: relative;
        text-align: center;
        height: 38px;
        margin: 10px;

        border: 1px outset;
        border-radius: 19px;
        overflow: hidden;
    }

    .summary-line-info {
        position: absolute;
        z-index: 10;
        transform: translate(-50%, 0);
    }

    .progress-line {
        display: inline-block;
        position: relative;
        height: 100%;
        z-index: 5;
        float: left;
    }

    .complete-progress {
        background-color: #0f7538;
    }

    .incomplete-progress {
        background-color: #75190f;
    }
</style>
