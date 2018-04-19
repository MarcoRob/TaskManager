<template>
    <div style="padding: 35px;" align="left" :class="'card-panel ' + color">
        <div class="row waves-effect">
            <div class="left card-title">
                <b>{{title}}</b>
            </div>
        </div>
        <div class="card-content">
          <p>{{description}}</p>
        </div>
        <div class="row right">
            <div><i class="material-icons left">alarm</i>{{dueDate}}</div>
        </div>
    </div>
</template>

<script>

export default {

    props: ['title', 'description', 'dueDate', 'color']

}
</script>