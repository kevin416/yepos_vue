<template>
    <div>
        <mdb-container fluid>
            <section>

                <div class="card">
                    <div class="card-body">

                        <!--Table-->
                        <table class="table table-hover">

                            <!--Table head-->
                            <thead>
                            <tr>

                                <th>Name</th>
                                <th>{{ timeclock.weekday.toUpperCase() }}</th>
                                <th>Note</th>
                                <th>Department</th>
                                <th>Hour</th>
                                <th>Salary</th>
                                <th>Pay</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-bind:key="time.id"  v-for="time in timeclock.table">
                                <th>{{ time.nick_name }}</th>
                                <th></th>
                                <th>{{ time.note }}</th>
                                <th>{{ time.department }}</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </tbody>
                            <!--Table body-->
                        </table>
                        <!--Table-->

                    </div>
                </div>

            </section>

        </mdb-container>
    </div>
</template>

<script>
    import axios from "axios";
    import {mdbContainer} from 'mdbvue'

    export default {
        name: "TimeClockToday",
        components: {
            mdbContainer,


        },
        created() {
            axios.get('https://mart.yepos.co.uk/api/time_clock/working')
                .then(res => this.timeclock = res.data)


            // .catch(err => console.log(err))
        },
        data() {
            return {
                timeclock: [],
            }

        },


    }

</script>

<style scoped>

</style>