<template>
    <div>
    <div class="card">
            <div class="center card-title">
                <h3 class="grey-text darken-2"><b>Your Tasks</b></h3>
            </div>
            <div class="row">
                <div class="col s12 m4 l4" v-for="task in tasks">
                    <Task :title="task.name" :dueDate="task.dueDate" :description="task.description" :color="task.color" />
                </diV>
            </div>
        </div>
        <NewTask />
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
export default {
    components: {Task, NewTask},
    data() {
        return {
            tasks: [{name:"Make Clean Code", description: "Make a clean code using SOLID methodology", dueDate:"15/08/18"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},
                    {name:"TDD", description: "Make a TDD for testing your APIs", dueDate:"19/04/18", color:"red accent-1"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"red accent-1"},
                    {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18"},]
        }
    },
    mounted() {
         var instance_modal = M.Modal.init(document.querySelector('.modal'));
    }
}

</script>