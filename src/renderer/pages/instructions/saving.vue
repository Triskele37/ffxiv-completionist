<template>
    <div>
        <h1>Saving</h1>
        <p>Remember... remember us... Remember... that we once lived...</p>

        <br/>

        <h2>New Save</h2>
        <p>Under the "Progress" item at the top of the app you can create a new save file (note that the app already creates one for you by default, this is if you want more)</p>
        <p>You can then select what to name, and where to save this file</p>

        <br/>

        <h2>Load Save</h2>
        <p>Under the same menu item you can also load an existing save</p>
        <p>(this does NOT overwrite your currently active save)</p>

        <br/>

        <h4>Final Note</h4>
        <p>Completion is saved as you mark items off and after imports are completed</p>
        <p>Completion is migrated between versions of the app, sometimes things will need to be manually reviewed (these will be noted in the version history)</p>
        <p>The app seems to REALLY not like the save file being manually modified while the app is open, doing so will likely result in losing that save</p>
    </div>
</template>

<script>
    export default {
        name: 'saving-instructions',
    }
</script>
