<template>
    <!-- Modal Structure -->
    <div id="createHabit" class="modal">
        <div class="modal-content">
            <h4>New Habit</h4>
            <p>Create a new habit and keep it the track!</p>
        </div>
        <div class="row container">
            <form class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="first_name" type="text" v-model="title">
                        <label for="first_name">Title</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <select v-model="difficulty">
                            <option value="" disabled selected>Choose your option</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <label>Difficulty</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s4">
                        <p>
                            <label>
                                <input name="type" value="good" type="radio" v-model="type"/>
                                <span>Good</span>
                            </label>
                        </p>
                    </div>
                    <div class="input-field col s4">
                        <p>
                            <label>
                                <input name="type" value="bad" type="radio" v-model="type"/>
                                <span>Bad</span>
                            </label>
                        </p>
                    </div>
                    <div class="input-field col s4">
                        <p>
                            <label>
                                <input name="type" value="mixed" type="radio" v-model="type"/>
                                <span>Both</span>
                            </label>
                        </p>
                    </div>
                </div>
            </form>
        </div>
        <div class="center">
            <a @click="createHabit" class="btn btn-large modal-action modal-close waves-effect waves-green">
                <i class="material-icons left">send</i> Create
            </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import url from "../../config";

export default {

    data() {
        return {
            title: "",
            difficulty : "",
            type: ""
        }
    },
    mounted() {
        var select = M.FormSelect.init(document.querySelector('select'))
    },
    methods : {
        createHabit() {
            var newHabit = {
                userID : this.$route.params.userId,
                type: this.type,
                difficulty: this.difficulty,
                title : this.title
            }
            axios.post(url.habits_api+"/habits", newHabit)
                .then(res => {
                        alert("Habit Created!");
                        location.reload();
                })
                .catch(error => {
                    alert(error);
                })
            //alert(JSON.stringify(newHabit));
        }
    }
}

</script>