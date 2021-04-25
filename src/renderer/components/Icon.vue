<template>
    <span
        class="icon-container"
        :class="{ [this.name]: true }"
        :style="{ 'fontSize': `${this.size}px` }"
    >
        <span v-if="name === 'selected'">&#9755;</span>
        <span v-else-if="name === 'complete'">&#10004</span>
        <span v-else-if="name === 'exclude'">&#10006</span>
        <span v-else-if="name === 'incomplete'">&#10008</span>
        <span v-else-if="name === 'plus'">&#10010;</span>
        <span v-else-if="name === 'arrow'">&#10147;</span>
    </span>
</template>

<script>
export default {
    name: 'icon',
    props: {
        name: String,
        size: {
            type: String,
            default: '18'
        }
    }
};
</script>

<style lang="scss">
@import '../../styles/colors.scss';

.icon-container {
    &.complete { color: $state_completed; }
    &.incomplete { color: $state_incomplete; }
    &.exclude { color: $state_excluded; }
    &.selected { color: $state_selected; }
}
</style>