<template>
    <span class="edit-cell">
        <textarea
            class="xiv-input noSelect"
            ref="editInput"
            rows="1"
            @change="onEditTaskValue($event)"
            @keydown="onResizeTextArea($event)"
            :value="task[taskKey]"
        />
    </span>
</template>

<script>
import { getPlayerStore } from "../../../../store/electronStore";

export default {
    name: 'edit-cell',
    props: {
        taskKey: '',
        task: null
    },
    mounted() {
        const textarea = this.$el.getElementsByTagName('textarea')[0];
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;

        //TODO: need to change where click is listened in TaskTableDataRow
        //TODO:  to know which input in a row to focus
        // this.$refs.editInput.focus();
    },
    methods: {
        onResizeTextArea: function($event) {
            if($event.which === 13) {
                $event.preventDefault();
                this.$emit('deselect-task', this.task);
                return;
            }

            $event.target.style.height = 'auto';
            $event.target.style.height = `${$event.target.scrollHeight}px`;
        },
        onEditTaskValue: function($event) {
            const value = $event.target.value;

            //TODO: any need to sanitize?
            if(!value) return;

            const customTask = getPlayerStore().get(`custom.x${this.task.id}`);
            customTask[this.taskKey] = value;
            this.task[this.taskKey] = value;

            getPlayerStore().set(`custom.x${this.task.id}`, customTask);
        }
    }
};
</script>

<style lang="scss">
.edit-cell {
    .xiv-input {
        box-sizing: border-box;
        overflow: hidden;
        font-family: unset;
        font-size: 16px;
        resize: none;
        width: 90%;

        margin: 0 0 -4px -2px;
    }
}
</style>
