<template>
    <td
        class="completion-flag-cell"
    >
        <input
            class="numeric-input"
            type="number"
            :step="step"
            :value="value"
            @blur="onTaskValueChange($event)"
        />
    </td>
</template>

<script>
    import { getPlayerStore } from "../../../../../store/electronStore";

    export default {
        name: 'completion-number-cell',
        props: {
            task: Object,
            value: String,
        },
        computed: {
            step: function() {
                return 1 / (10 ** this.task._parent.numericDecimal);
            }
        },
        methods: {
            onTaskValueChange: function(event) {
                let newValue = parseFloat(event.target.value).toFixed(this.task._parent.numericDecimal);

                // Validate the new value
                if(newValue < this.task.minValue) newValue = this.task.minValue;
                if(newValue > this.task.maxValue) newValue = this.task.maxValue;

                // Update the new value
                this.task.changeCompletionNumber(newValue);
                getPlayerStore().set(this.task._fullStorageKey, newValue.toString());

                // Force validation changes to update the UI
                this.$forceUpdate();
            }
        }
    };
</script>

<style>
    .completion-flag-cell {
        border: 1px solid transparent;
        color: black;
        cursor: pointer;
        text-align: center;
        user-select: none;
        width: 69px;
    }

    .completion-flag-cell:hover {
        border: 1px solid white;
        box-sizing: border-box;
    }

    .completion-flag-cell .numeric-input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid;
        color: #BBE1FA;
        margin: 10px 2.5%;
        width: 95%;
    }
</style>
