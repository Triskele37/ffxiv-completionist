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
        <p>There are also buttons that allow you to whole-sale mark an entire group as any of the 3 states, located above the items to the right</p>

        <br/>

        <h2>Filtering Completion</h2>
        <p>At the top of the completion column are 3 icons that indicate "completed", "not completed", and "excluded"</p>
        <p>When you click on one of these icons, it will filter to show you only items that are in that state within the current group</p>
        <p>You can then remove this filter by clicking the same icon again</p>

        <br/>

        <h2>Calculations</h2>
        <p>Completion for any group is calculated as the percentage of total items completed of all child items of that group, excluding any items marked as "excluded"</p>
        <p>Items are not currently weighted so completing TEA gains you the same progress as crafting an Oak Lumber</p>

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
