<template>
        <div style="padding: 35px;" align="left" :class="'card-panel ' + color">
            <div class="row waves-effect">
                <div class="left card-title">
                    <b>{{title}}</b>
                </div>
            </div>
            <div class="row right">
                <div class="col s6">
                    <a class="btn-floating deep-purple lighten-1 waves-effect waves-light responsive-img"><i class="material-icons">add</i></a>
                </div>
                <div class="col s6">
                    <a class="btn-floating green darken-1 waves-effect waves-light responsive-img"><i class="material-icons">remove</i></a>
                </div>
            </div>
            <br/>
            <div class="row left">
                <button class="btn btn-small waves-effect">
                    <i class="material-icons">check</i>
                </button>
            </div>
            <br/>
            </div>
        </div>
</template>

<script>

export default {
    props: ["title", "color"]
}
</script>