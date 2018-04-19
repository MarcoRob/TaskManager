<template>
    <div>
    <div class="card">
        <div class="center card-title">
            <h3 class="grey-text darken-2"><b>Your Habits</b></h3>
        </div>
        <div class="row">
            <Habit v-for="h in habits" :key="h.id" :title="h.name" :color="h.color"/>
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
var habitList = [{"id":1, "name":"Go to Gym", "color":"orange darken-1"},
                 {"id":2, "name":"Go to Gym", "color":"red darken-1"},
                 {"id":3, "name":"Go to Gym", "color":"yellow darken-2"},
                 {"id":4, "name":"Go to Gym", "color":"blue darken-1"},
                 {"id":5, "name":"Go to Gym", "color":"light-green darken-1"}]
export default {
    components: {Habit, NewHabit},
    data() {
        return {
            habits: habitList
        }
    },
    mounted() {
         var instance_modal = M.Modal.init(document.querySelector('.modal'));
    }

}
</script>