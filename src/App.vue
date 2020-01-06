<template>
    <div id="app">
        <LinkHeader/>
        <router-view></router-view>
    </div>
</template>

<script>




    import LinkHeader from "./components/LinkHeader";
    export default {
        name: "app",
        components: {
            LinkHeader


        },

    }
</script>

<style scoped>

</style>
