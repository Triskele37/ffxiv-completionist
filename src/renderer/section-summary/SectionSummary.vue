<template>
    <div id="summary-container">
        <summary-line
            v-for="subGroup in group.subGroups"
            :key="subGroup.name"
            :group="subGroup"
        />
    </div>
</template>

<script>
    import SummaryLine from './SummaryLine';

    export default {
        name: 'section-summary',
        components: {
            'summary-line': SummaryLine,
        },
        props: {
            group: Object
        }
    }
</script>

<style>
    #summary-container {
        height: calc(100% - 160px);
        margin: 0 10px;
        overflow-y: auto;
    }
</style>
