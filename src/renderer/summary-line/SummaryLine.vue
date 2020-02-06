<template>
    <div
        class="summary-line"
        :class="{big: big}"
        :title="tooltip"
        @click="onClick"
    >
        <template v-if="big">
            <span class="summary-info big">
                {{group.name}}
                <br />
                {{`${group.percentComplete}%`}}
            </span>
        </template>
        <template v-else>
            <span class="summary-info">
                <span>{{group.name}}</span>
                <span style="float: right;">
                    {{`${group.percentComplete}%`}}
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
                let tooltip = `${this.group.totalCompleted}/${this.group.displayTotal}\n`;
                tooltip += `${this.group.totalExcluded} Excluded`;

                return tooltip;
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

<style>
    /*--------------------------------- Container */
    .summary-line {
        background-color: #75190f;
        position: relative;
        margin: 5px 10px;

        border: 1px outset;
        overflow: hidden;
    }

    .summary-line.big {
        border-radius: 20px;
        display: block;
        text-align: center;
        height: 40px;
        width: calc(100% - 20px);
    }

    .summary-line:not(.big) {
        border-radius: 7.5px;
        cursor: pointer;
        display: inline-block;
        height: 20px;
        width: calc(33% - 20px);
    }

    /*--------------------------------- Summary Text */
    .summary-info {
        position: absolute;
        top: 1px;
        width: calc(100% - 10px);
        z-index: 10;
    }

    .summary-info.big {
        left: unset;
        transform: translate(-50%, 0);
    }

    .summary-info:not(.big) {
        left: 5px;
    }

    /*--------------------------------- Progress Line */
    .progress-line {
        background-color: #0f7538;
        display: inline-block;
        position: relative;
        height: 100%;
        z-index: 5;
        float: left;
        transition: width 0.5s;
    }
</style>
