<template>
    <td class="completion-flag-cell noSelect" :style="gradientBackground" :title="tooltip">
        <input
            class="numeric-input"
            type="number"
            :step="step"
            :value="value"
            @blur="onTaskValueChange($event)"
        />
        <span class="percentage">{{percentage}}%</span>
    </td>
</template>

<script>
    import { getPlayerStore } from "../../../../store/electronStore";

    export default {
        name: 'completion-number-cell',
        props: {
            task: Object,
            value: String,
        },
        computed: {
            step: function() {
                return 1 / (10 ** this.task._parent.numericDecimal);
            },
            gradientBackground: function() {
                const prog = parseInt(this.value) - parseInt(this.task.minValue);
                const tot = parseInt(this.task.maxValue) - parseInt(this.task.minValue);

                let weight1 = prog / tot;
                if(weight1 < 1) weight1 *= 0.77; // Make it obvious when values are close to max
                const weight2 = (1 - weight1);

                const r = Math.round(0x0f * weight1 + 0x75 * weight2);
                const g = Math.round(0x75 * weight1 + 0x19 * weight2);
                const b = Math.round(0x38 * weight1 + 0x0f * weight2);

                return {
                    backgroundColor: `rgb(${r},${g},${b})`
                }
            },
            percentage: function() {
                const totProg = this.task.maxValue - this.task.minValue;
                let prog = parseFloat(this.value) - this.task.minValue;
                if(prog < 0) prog = 0;

                return ((prog / totProg) * 100).toFixed(2);
            },
            tooltip: function() {
                return `${this.task.minValue} - ${this.task.maxValue}`;
            }
        },
        methods: {
            onTaskValueChange: function(event) {
                let newValue = parseFloat(event.target.value || this.task.minValue).toFixed(this.task._parent.numericDecimal);

                // Validate the new value
                if(newValue < this.task.minValue) newValue = this.task.minValue;
                if(newValue > this.task.maxValue) newValue = this.task.maxValue;

                // Update the new value
                this.task.changeCompletionNumber(newValue);
                getPlayerStore().set(this.task.fullStorageKey, newValue.toString());

                // Force validation changes to update the UI
                this.$forceUpdate();
            }
        }
    };
</script>

<style lang="scss">
@import '../../../../styles/colors';

.completion-flag-cell {
    border: 1px solid transparent;
    color: black;
    cursor: pointer;
    text-align: center;
    user-select: none;
    width: 99px;

    &:hover {
        border: 1px solid white;
    }

    .numeric-input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid;
        color: $blue-1;
        margin: 5px 2.5% 10px 2.5%;
        width: 95%;
    }

    .percentage {
        color: $blue-1;
        float: right;
        font-size: 8pt;
        margin-top: -8px;
    }
}
</style>
