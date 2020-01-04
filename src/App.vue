<template>
    <div id="app">

        <Cashout/>
        <hr>
        <TimeClockToday/>

    </div>
</template>

<script>

    import Cashout from "./components/admin/Cashout";
    import TimeClockToday from "./components/admin/TimeClockToday";
    export default {
        name: "app",
        components: {

            Cashout,
            TimeClockToday
        },

    }
</script>

<style scoped>

</style>
