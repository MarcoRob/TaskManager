<template>
    <div>
    <div class="">
        <div class="center card-title">
            <h3 class="grey-text darken-2"><b>Your Habits</b></h3>
        </div>
        <div class="row">
            <div class="col s12 m4 l4" v-for="h in habits" :key="h.id">
                <Habit :title="h.title" :color="h.color"/>
            </div>
        </div>
    </div>
    <NewHabit />
    <div class="fixed-action-btn">
        <button data-target="modal1" class="btn-floating btn-large red modal-trigger">
            <i class="large material-icons">add</i>
        </button>
        </div>
    </div>
</template>

<script>
import NewHabit from "./newHabit";
import Habit from "./habit";

import axios from "axios";  
import url from "../../config";

var habitList = [{"id":1, "name":"Go to Gym", "color":"orange lighten-2"},
                 {"id":2, "name":"Go to Gym", "color":"red lighten-1"},
                 {"id":3, "name":"Go to Gym", "color":"yellow lighten-1"},
                 {"id":4, "name":"Go to Gym", "color":"blue lighten-1"},
                 {"id":5, "name":"Go to Gym", "color":"light-green lighten-1"}]
export default {
    components: {Habit, NewHabit},
    data() {
        return {
            habits: habitList
        }
    },
    beforeMount() {
        console.log(url)
        axios.get(url.habits_api + "/habits")
            .then(res => {
                this.habits = res.data;
                console.log(res.data);
            })
    },
    mounted() {
         var instance_modal = M.Modal.init(document.querySelector('.modal'));
    }

}
</script>