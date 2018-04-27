<template>
    <div>
        <div style="padding: 35px;" align="left" :class="'card-panel ' + color + ' lighten-2'">
            <div class="row center-align" >
                <div class="card-title">
                    <h6><b>{{title}}</b></h6>
                </div>
            </div>
            <div class="row left">
                <div class="left card-title">
                    <b>Score {{score}}</b>
                </div>
            </div>
            <div class="row right">
                <div class="col s3" v-if="(type == 'good' || type == 'mixed')">
                    <a @click="increaseScore" class="btn-floating deep-purple lighten-1 waves-effect waves-light responsive-img"><i class="material-icons">add</i></a>
                </div>
                <div class="col s3" v-if="(type == 'bad' || type == 'mixed')">
                    <a @click="decreaseScore" class="btn-floating green darken-1 waves-effect waves-light responsive-img"><i class="material-icons">remove</i></a>
                </div>
                <div class="col s3">
                    <a @click="edit" class="btn-floating waves-effect white"><i class="material-icons black-text">edit</i></a>
                </div>
                <div class="col s3">
                    <a @click="remove" class="btn-floating waves-effect white"><i class="material-icons black-text">delete</i></a>
                </div>
            </div>
            <br/>
            <br/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";  
import url from "../../config";

export default {
    props: ["title", "color", "habitId", "score", "type"],
    data() {
        return {
            score : 0
        }
    },
    methods : {
        increaseScore() {
            axios.get(url.habits_api + "/habits/" + this.habitId + "/addscore")
                .then(res => {
                    //location.reload()
                    this.color = res.data.color;
                    this.score = res.data.score;
                    console.log(res.data)
                })
        },
        decreaseScore() {
            axios.get(url.habits_api + "/habits/" + this.habitId + "/lowerscore")
                .then(res => {
                    //location.reload()
                    this.color = res.data.color;
                    this.score = res.data.score;    
                    console.log(res.data)
                })
        },
        edit() {
            var editHabit = M.Modal.init(document.getElementById(this.title));
                editHabit.open();
        },
        remove() {
            axios.delete(url.habits_api+"/habits/"+this.habitId)
                .then(res => {
                    alert(res.data.message);
                    location.reload();
                })
                .catch(error => {
                    alert(error);
                })
        }
    }
}
</script>