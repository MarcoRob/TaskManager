<template>
    <div class="row">
    <br/>
        <div class="s12">
            <div class="row chip yellow accent-1">
                <i class="close material-icons">assignment</i>Task for Today
            </div>
            <div class="row chip green accent-1">
                <i class="close material-icons">assignment</i>Delayed Task
            </div>
            <div class="chip blue accent-1">
                <i class="close material-icons">developer_board</i>Good Habits
            </div>
            <div class="chip red accent-1">
                <i class="close material-icons">developer_board</i>Bad Habits
            </div>
        </div>
        <div class="s12">
            <div class="row">
                <div class="col s12 m4 l4" v-for="task in today_tasks" v-key="task.name">
                    <Task :title="task.title"  :dueDate="task.dueDate" :remindShow="false" :description="task.description" color="yellow accent-1" />
                </div>
            </div>
                <div class="col s12 m4 l4" v-for="task in delayed_tasks" v-key="task.name">
                    <Task :title="task.title" :dueDate="task.dueDate" :remindShow="false" :description="task.description" color="green accent-1" />
                </div>
                <div class="col s12 m4 l4" v-for="h in good_habits" v-key="h.id">
                    <Habit :key="h.id" :title="h.title" color="blue accent-1"/>
                </div>
                <div class="col s12 m4 l4" v-for="h in bad_habits" v-key="h.id">
                    <Habit :key="h.id" :title="h.title" color="red accent-1"/>
                </div>
        </div>
    </div>
</template>

<script>
import Task from "../task.vue";
import Habit from "./habit_report_card.vue";
import url from "../../../config.js";
import axios from "axios";
var tasks = [{name:"Make Clean Code", description: "Make a clean code using SOLID methodology", dueDate:"15/08/18", color:"red accent-1"},
                        {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"blue accent-1"},
                        {name:"TDD", description: "Make a TDD for testing your APIs", dueDate:"19/04/18", color:"red accent-1"},
                        {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"blue accent-1"},
                        {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"blue accent-1"},
                        {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"red accent-1"},
                        {name:"SW Qualitty", description: "Make a SW Quality", dueDate:"15/08/18", color:"blue accent-1"}];
var habits = [{"id":1, "name":"Go to Gym", "color":"green accent-1"},
                        {"id":2, "name":"Go to Gym", "color":"green accent-1"},
                        {"id":3, "name":"Go to Gym", "color":"yellow accent-1"},
                        {"id":5, "name":"Go to Gym", "color":"green accent-1"}];
    export default {
        components: {Task, Habit},
        data() {
            return {
                 today_tasks: [],
                 delayed_tasks: [],
                 good_habits: [],
                 bad_habits: []
            }
        },
        beforeMount() {
            axios.get(url.userReports_api + "/users/" + this.$route.params.userId + "/reports")
                .then(res => {
                    this.today_tasks = res.data.todayTasks;
                    this.delayed_tasks = res.data.delayedTasks;
                    this.good_habits = res.data.goodHabits;
                    this.bad_habits = res.data.badHabits;
                })
                .catch(error => {
                    console.log(error);
                })
        },
        methods : {
            /*timeConverter(UNIX_timestamp){
                var a = new Date(UNIX_timestamp * 1000);
                var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var min = a.getMinutes();
                var sec = a.getSeconds();
                var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
                return time;
            },*/
            timeConverter(unix) {
                var un = parseInt(unix);
                var date = new Date(0);
                date.setUTCSeconds(un);
                console.log(date + " date")
                return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
            },
        }
    }

</script>

