<template>
    <!-- Modal Structure -->
    <div :id="title" class="modal">
        <div class="modal-content">
            <h4>Edit your Habit</h4>
            <p>Update your habit info and keep it the track!</p>
        </div>
        <div class="row center-align">
            <form class="col s12">
                <div class="row" style="padding:0em 10em 0em 10em">
                    <div class="input-field col s12">
                        <input id="first_name" type="text" v-model="title" placeholder="Title">
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s4">
                        <p>
                            <label>
                                <input name="difficulty" value="easy" type="radio" v-model="difficulty"/>
                                <span>Easy</span>
                            </label>
                        </p>
                    </div>
                    <div class="input-field col s4">
                        <p>
                            <label>
                                <input name="difficulty" value="medium" type="radio" v-model="difficulty"/>
                                <span>Medium</span>
                            </label>
                        </p>
                    </div>
                    <div class="input-field col s4">
                        <p>
                            <label>
                                <input name="difficulty" value="mixed" type="radio" v-model="difficulty"/>
                                <span>Hard</span>
                            </label>
                        </p>
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
            <a @click="editHabit" class="center btn btn-large modal-action modal-close waves-effect waves-green">
                <i class="material-icons left">send</i> Update
            </a>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import url from "../../config";

export default {
    props: ["title", "difficulty", "type", "habitId"],
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
        editHabit() {
            var editHabit = {
                userID : this.$route.params.userId,
                type: this.type,
                difficulty: this.difficulty,
                title : this.title
            }
            axios.put(url.habits_api+"/habits/"+this.habitId, editHabit)
                .then(res => {
                    if(res.statusCode == 200) {
                        alert("Habit Updated!");
                    }
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