<template>
    <div class="card">
        <div class="center card-title">
            <h3 class="grey-text darken-2"><b>Your Habits</b></h3>
        </div>
        <div class="row">
            <Habit v-for="h in habits" :key="h.id" :title="h.name" :color="h.color"/>
        </div>
    </div>
</template>

<script>
import Habit from "./habit";
var habitList = [{"id":1, "name":"Go to Gym", "color":"orange darken-1"},
                 {"id":2, "name":"Go to Gym", "color":"red darken-1"},
                 {"id":3, "name":"Go to Gym", "color":"yellow darken-2"},
                 {"id":4, "name":"Go to Gym", "color":"blue darken-1"},
                 {"id":4, "name":"Go to Gym", "color":"light-green darken-1"}]
export default {
    components: {Habit},
    data() {
        return {
            habits: habitList
        }
    }

}
</script>