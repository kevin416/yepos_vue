<template>
    <mdb-container fluid>
        <Income/>
        <div class="pt-3">
            <mdb-btn color="primary" class="pl-4 pr-4">Table</mdb-btn>
            <!-- Table Record -->
            <mdb-btn  class="pl-4 pr-4">Sale</mdb-btn>
            <!-- Item Sale -->
            <mdb-btn color="secondary" class="pl-4 pr-4">Log</mdb-btn>
            <!-- Edit Log -->
            <mdb-btn color="success" class="pl-4 pr-4">Discount</mdb-btn>
            <!-- Discount Log -->
        </div>

        <h5 class="pt-3 mb-2 dark-grey-text font-weight-bold text-center">Today Order Inventory</h5>
        <div v-bind:key="inv.id" v-for="inv in inventory">
            <mdb-btn color="info" class="pl-4 pr-4">{{inv.company}}</mdb-btn>
        </div>
        <div id="display_content">

        </div>

        <h5 class="pt-3 mb-2 dark-grey-text font-weight-bold text-center">Today Working</h5>

        <div class="pt-3">
            <TimeClockToday/>
        </div>

    </mdb-container>
</template>

<script>
    import { mdbContainer,mdbBtn} from 'mdbvue'
    import Income from "./Income";
    import TimeClockToday from "./TimeClockToday";
    import axios from "axios";
    export default {
        name: 'Dashboard',
        components: {
            mdbContainer,
            mdbBtn,
            Income,
            TimeClockToday
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/today/inventory')
                .then(res => this.inventory = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                inventory: [],
            }


        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
