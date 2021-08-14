<template>
    <div>
        <h1>Chaining</h1>
        <p>Over and over doth lightning strike thee!</p>

        <br/>

        <h2>Overview</h2>
        <p>"Chaining" is the term used for when the app auto-marks a related task to the one just marked</p>
        <ul>
            <li>Tasks are chained backwards if the marked task could not have been completed without the previous</li>
            <li>Tasks are chained together if it is not possible to have one without the other</li>
            <li>Tasks can chain to exclude another task if they are mutually exclusive</li>
            <li>Tasks can be chained to if each required task is completed</li>
            <li>Numeric tasks can be chained in the same way normal tasks can</li>
        </ul>

        <br/>

        <h2>Specifics</h2>
        <p>Items that you must use after acquiring them from another task are not chained</p>
        <p>Tasks that require "X" amount of another thing may not be chained if:</p>
        <ul>
            <li>X is something other than 1, all, or a contiguous range</li>
            <li>The other thing is not a numeric completion task</li>
        </ul>

        <br/>

        <h2>Interface</h2>
        <p>Any page with a table will have the chain dropdown available</p>
        <p>The dropdown will pulse if the most recently marked task chained to other tasks</p>
        <p>You can navigate to the group a chained task is in using the dropdown</p>
        <p>An undo is available for the most recently chained tasks</p>
        <p>NOTE: Undo is not available for chains from custom tasks or setting your starting class</p>

        <br/>

        <h2>Settings</h2>
        <p>Enable/Disable: Allows you to turn chaining on or off completely</p>
        <p>Min Threshold: Sets the number of chained tasks allowed before collapsing groups within the chain dropdown</p>

    </div>
</template>

<script>
    export default {
        name: 'chaining',
    }
</script>
