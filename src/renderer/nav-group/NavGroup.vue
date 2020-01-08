<template>
    <div>
        <div v-for="group in groups">
            <div
                class="nav-bar-button"
                v-on:click="emitSelect(group, degree)"
                v-bind:style="{
                    filter: 'brightness(' + (100 - degree * 10) + '%)',
                    'padding-left': (degree * 10) + 'px'
                }"
            >
                {{group.name}}
            </div>

            <nav-group
                v-if="group.subGroups && breadcrumbs[degree] === group.name"
                v-bind:degree="degree + 1"
                v-bind:groups="group.subGroups"
                v-bind:breadcrumbs="breadcrumbs"
                v-on:select-group="emitSelect"
            />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-group',
        props: {
            degree: Number,
            groups: Array,
            breadcrumbs: Array
        },
        methods: {
            emitSelect: function(group, degree) {
                this.$emit('select-group', group, degree);
            }
        }
    }
</script>

<style>
    .nav-bar-button {
        background-color: #fef2cb;
        border-bottom: 1px solid;
        height: 30px;
        line-height: 30px;
        padding: 0 5px;
        user-select: none;
    }

    .nav-bar-button:hover {
        background-color: #9b8cac;
        cursor: pointer;
    }

    .nav-bar-button:active {
        background-color: #5e447b;
    }
</style>
