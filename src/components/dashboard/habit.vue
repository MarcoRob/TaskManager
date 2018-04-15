<template>
    <div class="col s12 m4 l4">
        <div style="padding: 35px;" align="left" :class="'card-panel ' + color">
            <div class="row waves-effect">
                <div class="left card-title">
                <b>{{title}}</b>
                </div>
            </div>
            <div class="row right">
                <div class="col s6">
                    <a class="btn-floating waves-effect waves-light responsive-img"><i class="material-icons">add</i></a>
                </div>
                <div class="col s6">
                    <a class="btn-floating waves-effect waves-light responsive-img"><i class="material-icons">remove</i></a>
                </div>
            </div>
            </div>
        </div>   
    </div>
</template>

<script>

export default {
    props: ["title", "color"]
}
</script>