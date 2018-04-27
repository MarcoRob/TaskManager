<template>
    <div style="padding: 35px;" align="left" :class="'card-panel ' + color + isDueDateToday() + isRemindDateIsToday()">
        <div class="row waves-effect">
            <div class="left card-title">
                <b>{{title}}</b>
            </div>
        </div>
        <div class="card-content">
          <p>{{description}}</p>
        </div>
        <div class="row left" v-show="remindShow!=false">
            <div><i class="material-icons left">announcement</i>{{ unixToDate(remindDate) }}</div>
        </div>
        <div class="row right">
            <div><i class="material-icons left">alarm</i>{{ unixToDate(dueDate) }}</div>
        </div>
    </div>
</template>

<script>

export default {

    props: ['title', 'description', 'dueDate', 'color', 'remindDate', 'taskId', 'remindShow'],
    data() {
        return {
            due_date : null,
            remind_date : null,
            currentDate : new Date()
        }
    },
    mounted() {
        /*this.dueDate =  date;*/
    },
    beforeMount() {
        this.due_date = new Date(0);
        if(this.dueDate) {
            this.due_date.setUTCSeconds(this.dueDate);
        }
        

        this.remind_date = new Date(0);
        if(this.remindDate) {
            this.remind_date.setUTCSeconds(this.remindDate);
        }
        
    },
    methods : {
        unixToDate(unix) {
            var un = parseInt(unix);
            var date = new Date(0);
            date.setUTCSeconds(un);
            console.log(date + " date")
            return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
        },
        isDueDateToday() {
            if(this.remindShow != false) {
                var current = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();
                var dueDateTemp = this.due_date.getDate() + "/" + this.due_date.getMonth() + "/" + this.due_date.getFullYear();
                if(current == dueDateTemp) {
                    return "red accent-1";
                }
            }
            
            return "";
        },
        isRemindDateIsToday() {
            var current = this.currentDate.getDate() + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear();
            var remindDateTemp = this.remind_date.getDate() + "/" + this.remind_date.getMonth() + "/" + this.remind_date.getFullYear();
            if(current == remindDateTemp) {
                return "blue accent-1";
            }
            return "";
        },
        
        edit() {
            var editTask = M.Modal.init(document.getElementById(this.title));
                editTask.open();
        },
    }

}
</script>