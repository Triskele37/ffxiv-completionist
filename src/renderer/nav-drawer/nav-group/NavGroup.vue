<template>
    <div
        class="nav-group"
        ref="container"
        :style="{ height }"
        :class="{ collapsed: !show }"
    >
        <div
            class="nav-bar-button"
            @click="selectGroup(degree)"
            :title="group.name"
            :style="buttonStyle"
        >
            {{group.name}}
        </div>

        <nav-group
            v-if="group.subGroups"
            v-for="subGroup in group.subGroups"
            :key="subGroup.name"
            :show="showChildren"
            :degree="degree + 1"
            :group="subGroup"
        />
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'nav-group',
        props: {
            show: Boolean,
            degree: Number,
            group: Object,
        },
        data: () => ({
            height: '',
            timeout: null
        }),
        methods: {
            selectGroup: function(degree) {
                this.$store.commit('navigation/SET_BREADCRUMBS', {
                    groupName: this.group.name,
                    degree
                });

                this.$store.commit('navigation/SET_SELECTED_GROUP', this.group);
            }
        },
        computed: {
            ...mapState('navigation', {
                breadcrumbs: 'breadcrumbs'
            }),
            showChildren: function() {
                return this.breadcrumbs[this.degree] === this.group.name;
            },
            buttonStyle: function() {
                return {
                    filter: `brightness(${100 - this.degree * 10}%)`,
                    'padding-left': `${(this.degree * 5) + 5}px`
                };
            }
        },
        watch: {
            show: function(newShow, oldShow) {
                this.height = `${this.$refs.container.scrollHeight}px`;
                clearTimeout(this.timeout);

                this.$nextTick(() => {
                    this.timeout = setTimeout(() => {
                        this.height = oldShow ? "0px" : "";
                    }, oldShow ? 0 : 500);
                });
            }
        }
    }
</script>

<style>
    .nav-group {
        transition: height 0.5s ease;
    }

    .nav-group.collapsed {
        height: 0;
        overflow: hidden;
    }

    .nav-bar-button {
        background-color: #7374A9;
        border-top: 1px solid;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
        user-select: none;
    }

    .nav-bar-button:hover {
        background-color: #9495B4;
        cursor: pointer;
    }

    .nav-bar-button:active {
        background-color: #BBB8D4;
    }
</style>
