<template>
    <div>
        <Header/>
        <todo-nav v-on:add-todo="addTodo"/>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <todo-item v-bind:todo="todo" v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
    </div>
</template>

<script>
    import TodoItem from './TodoItem';
    import Header from "../layout/Header";
    import TodoNav from "./TodoNav";
    import axios from "axios";

    export default {
        name: "Todo.vue",
        components: {
            Header,
            TodoItem,
            TodoNav
        },
        data() {
            return {
                todos: []
            }

        },
        methods: {
            deleteToddo(id) {
                axios.delete('http://localhost:8000/api/todo/' + id)
                    .then(this.todos = this.todos.filter(todo => todo.id !== id))

            },
            addTodo(newTodo) {
                const {todo, status} = newTodo;
                axios.post('http://localhost:8000/api/todo', {
                    todo,
                    status
                })
                    .then(res => this.todos = [...this.todos, res.data])

            }
        },
        created() {
            axios.get('http://localhost:8000/api/todo')
                .then(res => this.todos = res.data);
            // .catch(err => console.log(err))
        },
        // props: ["todos"],

    }
</script>

<style scoped>

</style>
