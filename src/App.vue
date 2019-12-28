<template>
    <div>
        <Header/>
        <AddTodo v-on:add-todo="addTodo"/>
        <todos v-bind:todos="todos" v-on:del-todo="deleteToddo"/>
    </div>
</template>

<script>
    import Header from './components/layout/Header';
    import AddTodo from './components/AddTodo';
    import Todos from './components/Todos';
    import axios from 'axios';

    export default {
        name: 'app',
        components: {
            Header,
            AddTodo,
            Todos

        },
        data() {
            return {
                todos: []
            }

        },
        methods: {
            deleteToddo(id) {
                axios.delete('http://jsonplaceholder.typicode.com/todos/${id}')
                    .then(this.todos = this.todos.filter(todo => todo.id !== id))

            },
            addTodo(newTodo) {
                const {title, completed} = newTodo;
                axios.post('http://jsonplaceholder.typicode.com/todos', {
                    title,
                    completed
                })
                    .then(res => this.todos = [...this.todos, res.data])

            }
        },
        created() {
            axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
                .then(res => this.todos = res.data);
            // .catch(err => console.log(err))
        }
    }
</script>

<style>

</style>
