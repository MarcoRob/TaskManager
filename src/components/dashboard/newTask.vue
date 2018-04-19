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

export default {
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
            //this.dueDate = document.querySelector("input[class=datepicker]").value;
            var newTask = {
                titulo : this.title,
                descripcion : this.description,
                dueDate : this.dueDate
            };
            alert(JSON.stringify(newTask));
        }
    }
}

</script>