<template>
    <div id="app">
        <div v-bind:key="todo.id" v-for="todo in todos">

        </div>
        <Cashout   />

    </div>
</template>

<script>
    import Cashout from "./components/admin/Cashout";
    export default {
        name: "app",
        components: {
            Cashout
        },

    }
</script>

<style scoped>

</style>
