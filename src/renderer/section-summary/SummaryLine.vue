<template>
    <div
        class="summary-line"
        :title="`${totals.completed}/${totals.total}\n${totals.excluded} Excluded`"
    >
        <span class="summary-line-info">
            {{group.name}}
            <br/>
            {{completedPercentage}}%
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
            completedPercentage: function() {
                return ((this.totals.completed / this.totals.total) * 100).toFixed(2);
            },
            totals: function() {
                return dive(this.group);
            },
            completeBarStyle: function() {
                const style = { width: `${this.completedPercentage}%` };

                if(this.completedPercentage === '0.00') {
                    style.display = 'none';
                }
                else if(this.completedPercentage === '100.00') {
                    style['border-top-right-radius'] = '19px';
                    style['border-bottom-right-radius'] = '19px';
                }

                return style;
            },
            incompleteBarStyle: function() {
                // -1px is to give some breathing room for the float calculation
                const style = { width: `calc(${100-this.completedPercentage}% - 1px)` };

                if(this.completedPercentage === '0.00') {
                    style['border-top-left-radius'] = '19px';
                    style['border-bottom-left-radius'] = '19px';
                }
                else if(this.completedPercentage === '100.00') {
                    style.display = 'none';
                }

                return style;
            }
        }
    }

    function dive(group) {
        const totals = {
            total: 0,
            excluded: 0,
            completed: 0,
        };

        // Count total/completed/excluded in tasks
        if(group.tasks) {
            group.tasks.forEach(function(task) {
                const taskCompleted = store.get(`${group.storageKey}.${task.name}`);

                if(taskCompleted !== 'X') totals.total++;
                else totals.excluded++;

                if(taskCompleted === 'Y') totals.completed++;
            });
        }

        // Dive into subGroups
        if(group.subGroups) {
            group.subGroups.forEach(function(subGroup) {
                const subTotals = dive(subGroup);
                totals.total += subTotals.total;
                totals.completed += subTotals.completed;
                totals.excluded += subTotals.excluded;
            });
        }

        return totals;
    }
</script>

<style>
    .summary-line {
        position: relative;
        text-align: center;
        height: 38px;
        margin: 10px;
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

        border: 1px outset;
        box-sizing: border-box;
        float: left;
    }

    .complete-progress {
        background-color: #0f7538;
        border-top-left-radius: 19px;
        border-bottom-left-radius: 19px;
        border-right: none;
    }

    .incomplete-progress {
        background-color: #75190f;
        border-top-right-radius: 19px;
        border-bottom-right-radius: 19px;
        border-left: none;
    }
</style>
