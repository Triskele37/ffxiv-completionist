<template>
    <div>
        <div class="helper-error" v-if="selectedGroup && selectedGroup.tasks && !selectedGroup.columns">
            Error: Tasks exist with no column config for {{selectedGroup.name}}
        </div>
        <div class="helper-error" v-if="selectedGroup && !selectedGroup.storageKey">
            Error: Missing storageKey for {{selectedGroup.name}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'helper-error',
        props: {
            selectedGroup: Object
        }
    };
</script>

<style>
    .helper-error {
        background-color: #75190f;
    }
</style>
