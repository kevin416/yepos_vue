<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">

                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <!--                                <th>Department</th>-->
                            <th>Name</th>
                            <th>{{ timeclock.weekday.toUpperCase() }}</th>
                            <th>Hour</th>
                            <th>Salary</th>
                            <th>Pay</th>
                            <th>Note</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr v-bind:key="time.id" v-for="time in timeclock.table">
                            <!--                                <th>{{ time.department }}</th>-->
                            <th>{{ time.nick_name }}</th>
                            <th>{{ time[timeclock.weekday]}}</th>
                            <th>{{ timeclock.his_hours[time.st_id] }}</th>
                            <th>{{ (timeclock.his_pay[time.st_id]).toFixed(2) }}</th>
                            <th>{{ (timeclock.his_pay[time.st_id] * timeclock.his_hours[time.st_id]).toFixed(2)}}</th>
                            <th>{{ time.note }}</th>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </mdb-container>

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
            axios.get('https://api.pandabuffet.co.uk/api/time_clock/working')
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