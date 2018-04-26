<template>
    <div style="padding: 35px;" align="left" :class="'card-panel ' + isDueDateToday()">
        <div class="row waves-effect">
            <div class="left card-title">
                <b>{{title}}</b>
            </div>
        </div>
        <div class="card-content">
          <p>{{description}}</p>
        </div>
        <div class="row right">
            <div><i class="material-icons left">alarm</i>{{ unixToDate(dueDate) }}</div>
        </div>
    </div>
</template>

<script>

export default {

    props: ['title', 'description', 'dueDate', 'color'],
    data() {
        return {
            due_date : null,
            currentDate : new Date()
        }
    },
    mounted() {
        /*this.dueDate =  date;*/
    },
    beforeMount() {
        this.due_date = new Date(0);
        this.due_date.setUTCSeconds(this.dueDate);
    },
    methods : {
        unixToDate(unix) {
            var un = parseInt(unix);
            var date = new Date(0);
            date.setUTCSeconds(un);
            return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        },
        isDueDateToday() {
            var current = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();
            var dueDateTemp = this.due_date.getDate() + "/" + this.due_date.getMonth() + "/" + this.due_date.getFullYear();
            if(current == dueDateTemp) {
                return "red accent-1";
            }
            return "";
        }
    }

}
</script>