<template>
    <div>
        <ul>
            <li><router-link to="/"></router-link>Home</li>
            <li><router-link to="/table_record">Table Record</router-link></li>
            <li><router-link to="/dbm">DBM</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "LinkHeader"
    }
</script>

<style scoped>

</style>