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
                        <input type="date" v-model="remindDate">
                        <label for="first_name">Remind Date</label>
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
        <div class="center">
            <button href="#!" @click="createTask" class="btn btn-large modal-action modal-close waves-effect waves-green">
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
            remindDate : ""
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

            var fieldRemind = this.remindDate.split("-");
            console.log(fieldRemind);
            var remind_date = new Date();
                remind_date.setFullYear(fieldRemind[0]);
                remind_date.setMonth(parseInt(fieldRemind[1]) - 1);
                remind_date.setDate(fieldRemind[2]);

            console.log(remind_date.toString());
            console.log(due_date.toString() + "\n" + due_date.getTime());
                due_date = Math.round(due_date.getTime() / 1000);
                remind_date = Math.round(remind_date.getTime() / 1000);

            var newTask = {
                title : this.title,
                description : this.description,
                dueDate : due_date,
                remindDate : remind_date,
                userId : this.$route.params.userId
            };
            axios.post(url.tasks_api + "/Task/tasks", newTask)
                .then(res => {
                    var statusCode = res.statusCode;
                    if(statusCode == 200) {
                        alert("Task Created");
                        this.tasks.push(res.data);
                        location.reload();
                    }
                })
                .catch(error => {
                    alert(error.data);
                })
            this.title = "";
            this.description = "";
            this.dueDate = "";
                
            //alert(JSON.stringify(newTask));
        }
    }
}

</script>