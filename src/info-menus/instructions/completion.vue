<template>
    <div>
        <h1>Completion</h1>
        <p>Come and play! For the night is bright and you can sleep when you're dead!</p>

        <br/>

        <h2>Marking Completion</h2>
        <p>When you navigate down to a group that has items that can be marked for completion there will be a table.</p>
        <p>On the left of that table is the completion column</p>
        <ul>
            <li>Left Click: Toggle the item from "not done" to "done" or vise versa, also removes the "excluded" marking</li>
            <li>Right Click: Mark the item as "excluded"</li>
        </ul>

        <br/>

        <h2>Number Based Completion</h2>
        <p>Some sections may have completion based on a range of numbers</p>
        <p>In these tables the completion column will instead contain a text field to manually enter data</p>
        <p>These fields validate data entered into them, so data you enter may be changed to fit within validation</p>
        <p>These fields also only commit the data entered after you click away from them</p>

        <br/>

        <h2>Filtering Completion</h2>
        <p>At the top of the completion column are 3 icons that indicate "completed", "not completed", and "excluded"</p>
        <p>When you click on one of these icons, it will filter to show you only items that are in that state within the current group</p>
        <p>You can then remove this filter by clicking the same icon again</p>

        <br/>

        <h2>Quick-Mark Completion</h2>
        <p>Above the table is a dropdown that has several options for altering completion state of many tasks at once</p>

        <br/>

        <h2>Calculations</h2>
        <p>Completion for any group is calculated as the percentage of total items completed of all child items of that group, excluding any items marked as "excluded"</p>
        <p>Items are not weighted so completing TEA gains you the same progress as crafting an Oak Lumber</p>

        <br/>

        <h4>Final Notes</h4>
        <p>Hovering over the progress bar for any group gives you a tooltip of the total items completed, total items minus excluded items, and excluded items for that group</p>
    </div>
</template>

<script>
    export default {
        name: 'completion-instructions',
    }
</script>
