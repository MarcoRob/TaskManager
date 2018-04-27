<template>
    <!-- Modal Structure -->
    <div :id="title" class="modal">
        <div class="modal-content">
            <h4>Edit Task</h4>
            <p>Update a task and reminder!</p>
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
            <button href="#!" @click="editTask" class="btn btn-large modal-action modal-close waves-effect waves-green">
                <i class="material-icons left">add</i> Update
            </button>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import url from "../../config";

export default {
    props: ["title", "description", "dueDate", "remindDate", "taskId"],
    data() {
        return {
            /*title: "",
            difficulty : "",
            type: ""*/
        }
    },
    mounted() {
        var select = M.FormSelect.init(document.querySelector('select'))
    },
    methods : {
        editTask() {
            var editTask = {
                userID : this.$route.params.userId,
                type: this.type,
                difficulty: this.difficulty,
                title : this.title,

            }
            axios.put(url.tasks_api+"/Task/task/"+this.taskId, editTask)
                .then(res => {
                        alert("Task Updated!");
                        location.reload();
                })
                .catch(error => {
                    alert(error);
                })
            //alert(JSON.stringify(editHabit));
        }
    }
}

</script>

<style>

.modal {
    height: 550px;
}
</style>