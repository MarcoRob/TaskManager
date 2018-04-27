<template>
    <div class="row">
        <div class="col s6 center waves-effect">
            <div class="title center">
                <h6>Best Habit</h6>
            </div>
            <Habit :title="best.title" color="blue lighten-4" />
        </div>
        <div class="col s6 center waves-effect">
            <div class="title center">
                <h6>Worst Habit</h6>
            </div>
            <Habit :title="worst.title" color="red lighten-4" />
        </div>
        <div class="col s12">
            <div class="title center">
                <h6>How many habits per range?</h6>
            </div>
            <line-chart :data="rangeCount"></line-chart>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import url from "../../../config";
import Habit from "./habit_report_card";


export default {
    components : {Habit},
    data() {
        return {
            best : {},
            worst : {},
            rangeCount : {}, 
        }
    },
    beforeMount() {
        console.log(url.adminReports_api);
        axios.get(url.adminReports_api + "/admin/habits/reports")
            .then(res => {
                console.log(res.data);
                this.best = res.data.best;
                this.worst = res.data.worst;
                this.rangeCount = res.data.rangeCount;
            })

    }
}

</script>