<template>
        <div style="padding: 35px;" align="left" :class="'card-panel ' + color">
            <div class="row waves-effect">
                <div class="left card-title">
                    <b>{{title}}</b>
                </div>
            </div>
            <div class="row right">
                <div><i class="material-icons left">developer_dashboard</i></div>
            </div>
            <br/><br/>
        </div>
</template>

<script>

export default {
    props: ["title", "color"]
}
</script>