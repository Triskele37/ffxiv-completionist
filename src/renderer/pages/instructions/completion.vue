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
        <p>In these tables the completion column will instead contain a text field to manually enter the value</p>
        <p>These fields validate data entered into them, so data you enter may be changed to fit within a range</p>
        <p>These fields only commit the data entered after you click away from them</p>

        <br/>

        <h2>Quick-Mark Completion</h2>
        <p>Above the table is a dropdown that has several options for altering completion state of many tasks at once</p>

        <br/>

        <h2>Custom Tasks</h2>
        <p>An area where you can enter in tasks that the app does not have in it along with notes on each one</p>
        <p>Created custom tasks can be edited by selecting or dragging their row</p>
        <p>Custom Tasks also has the ability to merge into the app, allowing for easier updates after patches</p>
        <p>Notes about merging:</p>
        <ul>
            <li>Merge searches are case-insensitive and ignores anything that isn't a letter or number</li>
            <li>Merge searches look for the whole name of your task, partials will not be displayed</li>
            <li>Upon clicking one of the matches for your merge, that Custom Task will be removed along with its notes</li>
            <li>Auto-merge of single match tasks does all of the above without further input</li>
        </ul>

        <h2>Calculations</h2>
        <p>Completion for any group is calculated as the percentage of total items completed of all child items of that group, excluding any items marked as "excluded"</p>
        <p>Items are not weighted so completing TEA gains you the same progress as crafting an Oak Lumber</p>

        <br/>

        <h4>Final Notes</h4>
        <p>Hovering over the progress bar for any group gives you a tooltip detailing that group's completion numbers</p>
    </div>
</template>

<script>
    export default {
        name: 'completion-instructions',
    }
</script>
