<template>
    <div
        class="chain-dropdown action-dropdown-container"
        :class="{ 'do-notify': doNotify }"
        @mouseenter="dropdownOpen = true; doNotify = false;"
        @mouseleave="dropdownOpen = false"
    >
        <div class="xiv-dropdown-arrow">
            <icon name="chain" size="16"/>
        </div>
        <div
            class="xiv-dropdown-body"
            v-if="dropdownOpen"
        >
            <!-- Dropdown Content Body with Data -->
            <template v-if="!!chainStart">
                <!-- Undo Button -->
                <button
                    v-if="!disableUndo"
                    @click="onUndoLastChain()"
                    class="xiv-dropdown-li"
                >
                    {{undoNotClicked ? 'Undo last action' : 'Are you sure?'}}
                </button>

                <!-- Recent Action Info -->
                <div
                    class="xiv-dropdown-li"
                    @click="onNavigateToGroup(chainStart.path)"
                    title="Navigate to this group"
                >
                    {{chainStart.path}}
                    <br/>
                    Marking "{{chainStart.task.name}}" as
                    "<span :class="[chainStart.toFlag]">
                        {{chainStart.toFlag}}
                    </span>" chained to {{chainedTaskCount}} other items
                    <span class="group-nav-arrow arrows-adjust">
                        &#8614;
                    </span>
                </div>

                <!-- Dropdown Content Scroller -->
                <div class="chain-scroll-container">
                    <button
                        class="xiv-dropdown-li"
                        v-for="(group, path) in chainedTasks"
                    >
                        <!-- Group Content Header -->
                        <div>
                            <span
                                @click="onToggleShowChainedGroup(group)"
                                title="Toggle this group's visibility"
                            >
                                {{path.replace('Overall > ', '')}} ({{groupChainLength(group)}})
                            </span>
                            <span
                                @click="onNavigateToGroup(path)"
                                title="Navigate to this group"
                                class="group-nav-arrow"
                            >
                                &#8614;
                            </span>
                        </div>

                        <!-- Group Content Items -->
                        <button
                            class="xiv-dropdown-li chained-task"
                            disabled
                            v-if="group.show && !!change.task"
                            v-for="(change, id) in group"
                        >
                            <span :class="[change.fromFlag]">
                                {{change.fromFlag}}
                            </span>
                            &nbsp;>&nbsp;
                            <span :class="[change.task.completionFlag]">
                                {{change.task.completionFlag}}
                            </span>
                            &nbsp;-&nbsp;
                            {{change.task.name}}
                        </button>
                    </button>
                </div>
            </template>

            <!-- Dropdown Content Body with no Data -->
            <template v-else>
                <button class="xiv-dropdown-li">
                    No chain information to display
                </button>
            </template>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

import { applyDataToStore } from "../../../store/electronStore/applyDataToStore";
import { eStore } from "../../../store/electronStore";
import { data } from "../../../data";

export default {
    name: 'chain-dropdown',
    props: {
        disableUndo: Boolean
    },
    data: () => ({
        dropdownOpen: false,
        undoNotClicked: true,
        doNotify: false
    }),
    computed: {
        ...mapState('chain', {
            chainedTaskCount: 'chainedTaskCount',
            chainedTasks: 'chainedTasks',
            chainStart: 'chainStart'
        })
    },
    methods: {
        groupChainLength: function(group) {
            return !group ? 0 : Object.keys(group).length;
        },
        onToggleShowChainedGroup: function(group) {
            if(group.show === undefined) {
                Object.defineProperty(group, 'show', {
                    enumerable: false,
                    writable: true,
                    value: true
                });
            }
            else {
                group.show = !group.show;
            }

            this.$forceUpdate();
        },
        onNavigateToGroup: function(path) {
            let safePath = path.split(' > ');
            if(safePath[0] !== 'Overall') safePath = ['Overall', ...safePath]

            this.$store.commit('navigation/SET_BREADCRUMBS', safePath)
        },
        onUndoLastChain: function() {
            // Allow for oopsie clicks
            if(this.undoNotClicked) {
                this.undoNotClicked = false;
                return;
            }
            this.undoNotClicked = true;
            this.dropdownOpen = false;

            // Do the actual undo
            this.chainStart.task.setCompletionFlag(this.chainStart.fromFlag);
            for(const groupPath in this.chainedTasks) {
                for(const id in this.chainedTasks[groupPath]) {
                    const change = this.chainedTasks[groupPath][id];
                    change.task.setCompletionFlag(change.fromFlag);
                }
            }

            // Commit the undo to Vuex and store
            this.$store.commit('chain/CLEAR_CHAIN');
            applyDataToStore(data);
        }
    },
    watch: {
        chainedTasks: function() {
            this.undoNotClicked = true;
            this.doNotify = !!Object.keys(this.chainedTasks).length;

            // Auto-open small chains
            if(this.chainedTaskCount < eStore.get('chain-min-threshold')) {
                for(let key in this.chainedTasks) {
                    Object.defineProperty(this.chainedTasks[key], 'show', {
                        enumerable: false,
                        writable: true,
                        value: true
                    });
                }
            }
        }
    }
};
</script>

<style lang="scss">
@import '../../../styles/colors';

.chain-dropdown {
    button:focus {
        outline: none;
    }

    &.do-notify {
        animation: chainNotificationPulse 2s infinite;

        // Fixes issue where popup goes behind table header
        position: relative;
        z-index: 1;
    }

    .xiv-dropdown-body {
        overflow: hidden;
    }

    .chain-scroll-container {
        overflow-y: auto;
        height: 50vh;
        width: 30vw;
    }

    .group-nav-arrow {
        position: relative;
        margin-top: -6px;
        font-size: 24px;
        float: right;

        &.arrows-adjust {
            margin-right: 20px;
            margin-top: -11px;
        }
    }

    .chained-task {
        border: none;
        margin-left: 25px;
        padding: 0;
        width: fit-content;
    }

    .Y, .N, .X {
        display: inline-block;
        padding: 3px;
    }

    .Y { background-color: $state_completed; }
    .N { background-color: $state_incomplete; }
    .X {
        background-color: $state_excluded;
        color: black;
    }
}

@keyframes chainNotificationPulse {
    0% {
        transform: scale(0.8);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0.8);
    }
}
</style>
