<template>
    <div
        class="summary-line"
        :class="{
            big: big,
            excluded: displayedPercentComplete === 'N/A'
        }"
        :title="tooltip"
        @click="onClick"
    >
        <template v-if="big">
            <span class="summary-info big">
                {{group.name}}
                <br />
                {{displayedPercentComplete}}
            </span>
        </template>
        <template v-else>
            <span class="summary-info">
                <span>{{group.name}}</span>
                <span style="float: right;">
                    {{displayedPercentComplete}}
                </span>
            </span>
        </template>

        <span class="progress-line" :style="completeBarStyle" />
    </div>
</template>

<script>
    export default {
        name: 'summary-line',
        props: {
            group: Object,
            big: Boolean,
        },
        computed: {
            tooltip: function() {
                const remaining = (this.group.total - this.group.totalExcluded) - this.group.totalCompleted;

                let tooltip = `${parseInt(this.group.totalCompleted)}/${this.group.displayTotal}\n`;
                tooltip += `${this.group.totalCompleted} Completed\n`;
                tooltip += `${remaining} Remaining\n`;
                tooltip += `${this.group.totalExcluded} Excluded`;

                return tooltip;
            },
            displayedPercentComplete: function() {
                if(this.group.percentComplete) return `${this.group.percentComplete}%`;
                return 'N/A';
            },
            completeBarStyle: function() {
                return { width: `${this.group.percentComplete}%` };
            },
        },
        methods: {
            onClick: function() {
                // Don't allow the stat bar summaries to modify breadcrumbs
                if(!this.big) this.$store.commit('navigation/PUSH_CRUMB', this.group.name);
            }
        }
    }
</script>

<style lang="scss">
@import '../../styles/colors';

.summary-line {
    background-color: $state_incomplete;
    position: relative;
    margin: 5px 10px;

    border: 1px outset;
    overflow: hidden;

    &.excluded {
        background-color: #333;
    }

    &.big {
        border-radius: 20px;
        display: block;
        text-align: center;
        height: 40px;
        width: calc(100% - 20px);
    }

    &:not(.big) {
        border-radius: 7.5px;
        cursor: pointer;
        display: inline-block;
        height: 20px;
        width: calc(33% - 20px);
    }

    .summary-info {
        position: absolute;
        top: 1px;
        width: calc(100% - 10px);
        z-index: 10;

        &.big {
            left: unset;
            transform: translate(-50%, 0);
        }

        &:not(.big) {
            left: 5px;
        }
    }

    .progress-line {
        background-color: $state_completed;
        display: inline-block;
        position: relative;
        height: 100%;
        z-index: 5;
        float: left;
        transition: width 0.5s;
    }
}
</style>
