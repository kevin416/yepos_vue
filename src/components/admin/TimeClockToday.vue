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
                        <tr v-bind:key="time.id" v-for="time in timeclock.table" >
                            <template v-if="time[timeclock.weekday] !=''">
                                <td>{{ time.nick_name }}</td>
                                <td>{{ time[timeclock.weekday]}}</td>
                                <td>{{ timeclock.his_hours[time.st_id] }}</td>
                                <td>{{ (timeclock.his_pay[time.st_id]).toFixed(2) }}</td>
                                <td>{{ (timeclock.his_pay[time.st_id] * timeclock.his_hours[time.st_id]).toFixed(2)}}
                                </td>
                                <td>{{ time.note }}</td>
                            </template>
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
        // computed: {
        //     filteredData: function() {
        //         return this.data.filter((items) => {
        //             for (time in timeclock.table) {
        //                 if(time[timeclock.wekday] !== '') {
        //                     return true
        //                 }
        //             }
        //             return false
        //         })
        //     }
        // },

    }

</script>

<style scoped>

</style>
