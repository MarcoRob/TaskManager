<template>
    <div>
    <div class="">
        <div class="center card-title">
            <h3 class="grey-text darken-2"><b>Your Habits</b></h3>
        </div>
        <div class="row">
            <div class="col s12 m4 l4" v-for="h in habits" :key="h.id">
                <Habit :habitId="h._id" :title="h.title" :color="h.color" :score="h.score" :type="h.type"/>
                
                <EditHabit :habitId="h._id" :title="h.title" :difficulty="h.difficulty" :type="h.type"/>
            </div>
        </div>
    </div>
    <NewHabit />
        <div class="fixed-action-btn">
        <button @click="create" class="btn-floating btn-large red modal-trigger">
            <i class="large material-icons">add</i>
        </button>
        </div>
    </div>
</template>

<script>
import NewHabit from "./newHabit";
import EditHabit from "./editHabit";
import Habit from "./habit";

import axios from "axios";  
import url from "../../config";

var habitList = [{"id":1, "name":"Go to Gym", "color":"orange lighten-2"},
                 {"id":2, "name":"Go to Gym", "color":"red lighten-1"},
                 {"id":3, "name":"Go to Gym", "color":"yellow lighten-1"},
                 {"id":4, "name":"Go to Gym", "color":"blue lighten-1"},
                 {"id":5, "name":"Go to Gym", "color":"light-green lighten-1"}]
export default {
    components: {Habit, NewHabit, EditHabit},
    data() {
        return {
            habits: [],
            newHabitModal : null
        }
    },
    beforeMount() {
        console.log(url)
        axios.get(url.habits_api + "/users/"+this.$route.params.userId+"/habits")
            .then(res => {
                this.habits = res.data;
                console.log(res.data);
            })
    },
    mounted() {
         this.newHabitModal = M.Modal.init(document.querySelector('#createHabit'));
    },
    beforeUpdated() {
        axios.get(url.habits_api + "/users/"+this.$route.params.userId+"/habits")
            .then(res => {
                this.habits = res.data;
                console.log(res.data);
            })
    },
    methods : {
        create() {
             //var createHabit = M.Modal.init(document.querySelector('#createHabit'));
             this.newHabitModal.open();
        }
    }

}
</script>