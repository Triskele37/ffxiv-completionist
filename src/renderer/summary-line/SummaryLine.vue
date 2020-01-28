<template>
    <div
        class="summary-line"
        :title="isNaN(completedPercentage) ? '' : tooltip"
    >
        <span class="summary-line-info">
            {{group.name}}
            <br/>
            {{isNaN(completedPercentage) ? 'N/A' : completedPercentage + '%'}}
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
    const Store = require('electron-store');
    const store = new Store();

    export default {
        name: 'summary-line',
        props: {
            group: Object
        },
        computed: {
            tooltip: function() {
                const { completed, excluded, total } = this.totals;

                return `${completed}/${total}\n${excluded} Excluded`;
            },
            completedPercentage: function() {
                return ((this.totals.completed / this.totals.total) * 100).toFixed(2);
            },
            totals: function() {
                return this.$store.getters.getTotals(this.group.storageKey);
            },
            completeBarStyle: function() {
                return { width: `${this.completedPercentage}%` };
            },
            incompleteBarStyle: function() {
                // -1px is to give some breathing room for the float calculation
                return { width: `calc(${100-this.completedPercentage}% - 1px)` };
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
