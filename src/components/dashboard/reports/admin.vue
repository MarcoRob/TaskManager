<template>
    <div class="row">
        <div class="col s6 center waves-effect">
            <div :class="'card-panel ' + isActive('tasks')" @click="active='tasks'"><h5>Tasks</h5></div>
        </div>
        <div class="col s6 center waves-effect">
            <div :class="'card-panel ' + isActive('habits')" @click="active='habits'" style="text-decoration:none"><h5>Habits</h5></div>
        </div>
        <div class="container">
            <br/>
            <TaskAdminReport v-if="active === 'tasks'"/>
            <HabitAdminReport v-if="active === 'habits'"/>
        </div>
        
    </div>
    

</template>

<script>
import TaskAdminReport from "./admin_task_report";
import HabitAdminReport from "./admin_habit_report";

export default {
    components: {TaskAdminReport, HabitAdminReport},
    data() {
        return {
            active : "tasks"
        }
    },
    methods : {
        isActive(val) {
            return val === this.active ? "purple lighten-5" : "";
        }
    }
}

</script>