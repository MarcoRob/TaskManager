<template>
    <table>
        <thead>
          <tr>
              <th>Completed Task</th>
              <th>{{tasksCompleted.total}}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>&nbsp;&nbsp; - Before due date</td>
            <td>{{tasksCompleted.onTime}}</td>
          </tr>
          <tr>
            <td>&nbsp;&nbsp; - After due date</td>
            <td>{{tasksCompleted.late}}</td>
          </tr>
        </tbody>

        <thead>
          <tr>
              <th>Delayed Task</th>
              <th>{{tasksDelayed}}</th>
          </tr>
        </thead>

        <thead>
          <tr>
              <th>Available Task</th>
              <th>{{tasksAvailable.total}}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&nbsp;&nbsp; - To be done today</td>
            <td>{{tasksAvailable.dueToday}}</td>
          </tr>
        </tbody>
      </table>
</template>

<script>
import axios from "axios";
import url from "../../../config";

export default {
    data() {
        return {
            tasksCompleted: {},
            tasksDelayed: 0,
            tasksAvailable: {},
        }
    },
    beforeMount() {
        console.log(url.adminReports_api);
        axios.get(url.adminReports_api + "/admin/tasks/reports")
            .then(res => {
                console.log(res.data);
                this.tasksCompleted = res.data.completed;
                this.tasksDelayed = res.data.delayed;
                this.tasksAvailable = res.data.available;
            })

    }
}

</script>