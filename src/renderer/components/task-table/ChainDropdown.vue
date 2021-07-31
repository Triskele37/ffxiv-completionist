<template>
    <div
        class="chain-dropdown action-dropdown-container"
        :class="{ 'do-notify': doNotify }"
        @mouseenter="dropdownOpen = true; doNotify = false;"
        @mouseleave="dropdownOpen = false"
    >
        <div
            class="xiv-dropdown-arrow"
        >
            <icon name="chain" size="16"/>
        </div>
        <div
            class="xiv-dropdown-body"
            v-if="dropdownOpen"
        >
            <!-- Dropdown Content Header -->
            <button
                @click="onToggleChainingEnabled()"
                class="xiv-dropdown-li"
            >
                Chaining is: {{chainingEnabled ? 'Enabled' : 'Disabled'}}.
                &nbsp;Click here to toggle.
            </button>

            <template v-if="!!chainStart">
                <div class="xiv-dropdown-li">
                    Last action of marking "{{chainStart.task.name}}" as
                    "<span :class="[chainStart.task.completionFlag]">
                        {{chainStart.task.completionFlag}}
                    </span>" chained to {{chainedTaskCount}} other items
                </div>
                <button
                    @click="onUndoLastChain()"
                    class="xiv-dropdown-li"
                >
                    {{undoNotClicked ? 'Undo last action' : 'Are you sure?'}}
                </button>

                <!-- Dropdown Content Scroller -->
                <div class="chain-scroll-container">
                    <button
                        class="xiv-dropdown-li"
                        v-for="(group, path) in chainedTasks"
                    >
                        <!-- Group Content Header -->
                        <div>
                            <span
                                @click="onNavigateToGroup(path)"
                                title="Navigate to this group"
                            >
                                {{path}} ({{groupChainLength(group)}})
                            </span>
                            <span
                                @click="onToggleShowChainedGroup(group)"
                                title="Toggle this group's visibility"
                                class="group-show-hide"
                            >
                                {{group.show ? '&#8612' : '&#8614'}}
                            </span>
                        </div>

                        <!-- Group Content Items -->
                        <button
                            class="xiv-dropdown-li chained-task"
                            disabled
                            v-if="group.show"
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
            <template v-else>
                <button class="xiv-dropdown-li">
                    Previous action did not cause a chain
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
    data: () => ({
        dropdownOpen: false,
        chainingEnabled: eStore.get('chaining-enabled'),
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
        onToggleChainingEnabled: function() {
            eStore.set('chaining-enabled', !eStore.get('chaining-enabled'));
            this.chainingEnabled = eStore.get('chaining-enabled');
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
            this.$store.commit('navigation/SET_BREADCRUMBS', path.split(' > '))
        },
        onUndoLastChain: function() {
            // Allow for oopsie clicks
            if(this.undoNotClicked) {
                this.undoNotClicked = false;
                return;
            }
            this.undoNotClicked = true;

            // Do the actual undo
            this.chainStart.task.setCompletionFlag(this.chainStart.fromFlag);
            for(const groupPath in this.chainedTasks) {
                for(const id in this.chainedTasks[groupPath]) {
                    const change = this.chainedTasks[groupPath][id];
                    change.task.setCompletionFlag(change.fromFlag);
                }
            }

            // Commit the undo to Vuex and Estore
            this.$store.commit('chain/CLEAR_CHAIN');
            applyDataToStore(data);
        }
    },
    watch: {
        chainedTasks: function() {
            this.doNotify = !!this.chainedTasks;
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
    }

    .chain-scroll-container {
        overflow-y: auto;
        height: 50vh;
    }

    .group-show-hide {
        position: relative;
        margin-top: -7px;
        font-size: 24px;
        float: right;
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
