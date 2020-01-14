<template>
    <mdb-container fluid>
        <section>
            <div class="card">
                <div class="card-body">
                    <search-input-form />
                    <h5 class="pt-3 mb-2 dark-grey-text font-weight-bold text-center">{{ table.from_date + ' To ' + table.to_date }}</h5>

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
                        <tr v-bind:key="time.id" v-for="time in table.time_table">
                            <td>{{ time.nick_name }}</td>
                            <td>{{ time.sun }}</td>
                            <td>{{ time.mon }}</td>
                            <td>{{ time.tue }}</td>
                            <td>{{ time.wed }}</td>
                            <td>{{ time.thu }}</td>
                            <td>{{ time.fri }}</td>
                            <td>{{ time.sat }}</td>
                            <td>{{ time.total_hour }}</td>
                            <td>{{ time.note }}</td>
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
    import SearchInputForm from "./part/SearchInputForm";

    export default {
        name: "TimeTable",
        components: {
            mdbContainer,
            SearchInputForm
        },
        created() {
            axios.get('https://api.pandabuffet.co.uk/api/time_table')
                .then(res => this.table = res.data)

            // .catch(err => console.log(err))
        },
        data() {
            return {
                table: [],
            }

        },
    }
</script>

<style scoped>

</style>
