<template>
    <div>
        <h1>Saving</h1>
        <p>Remember... remember us... Remember... that we once lived...</p>

        <br/>

        <h2>New Character</h2>
        <p>Under the "Progress" menu at the top of the app you can create a new save file (note that the app already creates one for you by default, this is if you want more)</p>
        <p>You can then select what to name, and where to save this file</p>

        <br/>

        <h2>Load Character</h2>
        <p>Under the same menu you can also load an existing character</p>
        <p>(this does NOT overwrite your currently active save)</p>
        <p>This is also not necessary unless you're switching between multiple saves</p>

        <br/>

        <h2>Files</h2>
        <p>This app relies on 2+ files to handle your save data. A "config.json" file and your completion save/s</p>
        <p>You can check your current save's name and location in the settings menu</p>
        <p>NOTE: Modifying these files manually will likely lead to unexpected issues</p>

        <br/>

        <h2>"Backup"</h2>
        <p>I will always suggest "backing up" your completion save any time you update the app</p>
        <p>The simplest way to manually do this is:</p>
        <ol>
            <li>Locate your completion save file</li>
            <li><b>Copy</b> it to a safe location</li>
            <li>Don't load this backup with the app directly, always make copies beforehand</li>
        </ol>

        <br/>

        <h4>Final Note</h4>
        <p>Completion is saved as soon as items are marked</p>
        <p>Completion is migrated between versions of the app, sometimes things will need to be manually reviewed (these will be noted in the version history)</p>
    </div>
</template>

<script>
    export default {
        name: 'saving-instructions',
    }
</script>
