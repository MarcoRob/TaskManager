<template>
    <div>
    <div class="">
            <div class="center card-title">
                <h3 class="grey-text darken-2"><b>Your Tasks</b></h3>
            </div>
            <div class="row">
                <div class="row chip blue accent-1">
                    <i class="close material-icons">assignment</i>Reminder for Today
                </div>
                <div class="row chip red accent-1">
                    <i class="close material-icons">assignment</i>Tasks for today
                </div>
                <div class="row chip">
                    <i class="close material-icons">assignment</i>On Time
                </div>
            </div>
            <div class="row">
                <div class="col s12 m4 l4" v-for="task in tasks">
                    <Task :remindDate="task.remindDate" :title="task.title" :dueDate="task.dueDate" :description="task.description" :color="task.color" @click="openTask()" :taskId="task.id"/>
                    <EditTask :title="task.title" :description="task.description" :taskId="task.id" />
                </diV>
            </div>
        </div>
        <NewTask :tasks="tasks"/>
        <div class="fixed-action-btn">
            <button data-target="modal1" class="btn-floating btn-large red modal-trigger">
                <i class="large material-icons">add</i>
            </button>
        </div>
    </div>
    </div>

</template>

<script>
import Task from "./task";
import NewTask from "./newTask";
import EditTask from "./editTask";
import axios from "axios";
import url from "../../config";

var tasks = [{name:"Make Clean Code", description: "Make a clean code using SOLID methodology", dueDate:"15/08/18"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},
                    {name:"TDD", description: "Make a TDD for testing your APIs", dueDate:"19/04/18", color:"red accent-1"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"red accent-1"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},];
export default {
    components: {Task, NewTask, EditTask},
    data() {
        return {
            tasks: [],//[]
            currentDate : new Date()
        }
    },
    beforeMount() {
        axios.get(url.tasks_api + "/Task/users/" + this.$route.params.userId + "/tasks")
                .then(res => {
                    this.tasks = res.data;
                })
    },
    mounted() {
         var instance_modal = M.Modal.init(document.querySelector('.modal'));
    },
    methods : {
        getUserTasks() {
            axios.get(url.tasks_api + "/Task/users/" + this.$route.params.userId + "/tasks")
                .then(res => {
                    this.tasks = res.data;
                })
        }
    }
}

</script>