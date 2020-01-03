<template>
    <div>
        <mdb-modal :show="showModal8" @close="showModal8 = false">
            <mdb-modal-header>
                <mdb-modal-title>Modal title</mdb-modal-title>
            </mdb-modal-header>
            <mdb-modal-body>
                <!--Grid row-->
                <div class="row">
                    <!--Grid column-->
                    <div class="col-md-12 mb-12">
                        <mdb-input type="text" label="Todo" name="todo" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 mb-12">
                        <!--Textarea with icon prefix-->
                        <mdb-textarea :rows="2" label="Comment" icon="pencil-alt" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-6">
                        <!--Name-->
                        <mdb-select @getValue="getSelectValue" :options="[
                            {value: null, text:'Choose your option', disabled: true, selected: true},
                            {value:'Option 1', text: 'Option nr 1'},
                            {value:'Option 2', text: 'Option nr 2'},
                            {value:'Option 3', text: 'Option nr 3'},
                            {value:'Option 4', text: 'Option nr 4'},
                            {value:'Option 5', text: 'Option nr 5'}
                          ]" />
                        <label>Priority:</label>
                    </div>
                    <div class="col-md-6 mb-6">
                        <mdb-input type="date" label="Do It Date" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-6">
                        <mdb-input type="date" label="Done It Date" />
                    </div>
                    <div class="col-md-6 mb-6">
                        <mdb-input type="date" label="Valid Date" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 mb-6">
                        <!--Name-->
                        <mdb-select @getValue="getSelectValue" name="status" :options="[
                            {value: null, text:'Choose todo Status', disabled: true, selected: true},
                            {value:'0', text: 'No'},
                            {value:'1', text: 'Yes'},

                          ]" />
                        <label>Status</label>
                    </div>
                    <div class="col-md-6 mb-6">
                        <mdb-select @getValue="getSelectValue" :options="[
                            {value: null, text:'Choose todo Private', disabled: true, selected: true},
                            {value:'0', text: 'No'},
                            {value:'1', text: 'Yes'},

                          ]" />
                        <label>Private</label>
                    </div>
                </div>
            </mdb-modal-body>
            <mdb-modal-footer>
                <mdb-btn color="secondary" size="sm" @click.native="showModal8 = false">Close</mdb-btn>
                <mdb-btn color="primary" size="sm" @click="addTodo">Save changes</mdb-btn>
            </mdb-modal-footer>
        </mdb-modal>
        <form @submit="searchTodos">
            <input type="text" v-model="title" name="title">
            <input type="submit" class="btn-primary btn btn-sm" value="search">
            <mdb-btn color="success" size="sm" @click.native="showModal8 = true">Add New</mdb-btn>
        </form>
    </div>
</template>

<script>
    import {
        mdbBtn,
        mdbModal,
        mdbModalHeader,
        mdbModalTitle,
        mdbModalBody,
        mdbModalFooter,
        mdbInput,
        mdbTextarea,
        mdbSelect,
    } from 'mdbvue';
    // import AddTodo from './AddTodo';
    export default {
        name: "TodoNav",
        components: {
            mdbBtn,
            mdbModal,
            mdbModalHeader,
            mdbModalTitle,
            mdbModalBody,
            mdbModalFooter,
            mdbInput,
            mdbTextarea,
            mdbSelect,
        },
        data () {
            return {
                showModal8: false
            }
        },
        methods: {
            searchTodos(e) {
                e.preventDefault();

            },
            addTodo(){
                // e.preventDefault();
                alert(this.todo)
                const newTodo = {
                    todo: this.title,
                    status: this.status
                }
                // sentup to parent
                this.$emit('add-todo', newTodo);

                // this.title = 'dd';
            }
        }
    }
</script>

<style scoped>

</style>