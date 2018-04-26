<template>
    <div id="modal1" class="modal">
        <div class="modal-content">
            <h4>New Task</h4>
            <p>Create a task and give us a reminder!</p>
        </div>
        <div class="row container">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <i class="small material-icons prefix">assignment</i>   
                        <input id="first_name" type="text" v-model="title">
                        <label for="first_name">Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                    <i class="small material-icons prefix">subject</i>
                        <input id="first_name" type="text" v-model="description">
                        <label for="first_name">Description</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <i class="small material-icons prefix">notifications_none</i>
                        <input type="date" v-model="dueDate">
                        <label for="first_name">Due Date</label>
                    </div>
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button href="#!" @click="createTask" class="btn modal-action modal-close waves-effect waves-green">
                <i class="material-icons left">add</i> Create
            </button>
        </div>
    </div>


</template>

<script>
import axios from "axios";
import url from "../../config";
export default {
    props: ["tasks"],
    data() {
        return {
            title: "",
            description : "",
            dueDate : "",
        }
    },
    mounted() {
        var instance = M.Datepicker.init(document.querySelector('.datepicker'));
    },
    methods : {
        createTask() {
            var fieldDate = this.dueDate.split("-");
            
            var due_date = new Date();
                due_date.setFullYear(fieldDate[0]);
                due_date.setMonth(parseInt(fieldDate[1]) - 1);
                due_date.setDate(fieldDate[2]);

            alert(due_date.toString());
                due_date = Math.round(due_date.getTime() / 1000);

            var newTask = {
                title : this.title,
                description : this.description,
                dueDate : due_date,
                userId : this.$route.params.userId
            };
            axios.post(url.tasks_api + "/Task/tasks", newTask)
                .then(res => {
                    var statusCode = res.statusCode;
                    if(statusCode == 200) {
                        alert("Task Created");
                        this.tasks.push(res.data);
                    }
                })
                .catch(error => {
                    alert(error.data);
                })
            this.title = "";
            this.description = "";
            this.dueDate = "";
                
            alert(JSON.stringify(newTask));
        }
    }
}

</script>