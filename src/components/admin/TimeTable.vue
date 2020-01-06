<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thur</th>
                            <th>Fri</th>
                            <th>Sat</th>
                            <th>Hours</th>
                            <th>Note</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-bind:key="time.id" v-for="time in timetable">
                            <th>{{ time.nick_name }}</th>
                            <th>{{ time.sun }}</th>
                            <th>{{ time.mon }}</th>
                            <th>{{ time.tue }}</th>
                            <th>{{ time.wed }}</th>
                            <th>{{ time.thu }}</th>
                            <th>{{ time.fri }}</th>
                            <th>{{ time.sat }}</th>
                            <th>{{ time.total_hour }}</th>
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
        name: "TimeTable",
        components: {
            mdbContainer,
        },
        created() {
            axios.get('http://127.0.0.1:8000/api/time_table')
                .then(res => this.timetable = res.data)
            // .catch(err => console.log(err))
        },
        data() {
            return {
                timetable: [],
            }

        },
    }
</script>

<style scoped>

</style>