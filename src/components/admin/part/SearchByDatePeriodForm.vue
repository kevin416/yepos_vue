<template>
    <mdb-container>
        <form method="post" >
            <div class="row">
                <div class="col-sm-4 sm-4">
                    <mdb-input type="date" label="From Date"/>
                </div>

                <div class="col-sm-4 sm-4">
                    <mdb-input type="date" label="To Date"/>
                </div>
                <div class="col-sm-4 sm-4">
                    <mdb-btn color="unique" >Search</mdb-btn>
                </div>
            </div>
        </form>

    </mdb-container>

</template>

<script>
    import {mdbContainer,mdbInput,mdbBtn} from 'mdbvue'
    export default {
        name: "SearchByDatePeriodForm",
        components: {
            mdbContainer,
            mdbInput,
            mdbBtn
        },

    }
</script>

<style scoped>

</style>
