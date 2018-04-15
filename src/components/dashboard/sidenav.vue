<template>
    <ul id="slide-out" class="sidenav fixed z-depth-2">
        <li><div class="user-view">
        <div class="background">
            <img class="center" src="/static/habits.jpg">
        </div>
        <a href="#user"><img class="circle" src="/static/tasks.jpeg"></a>
        <a href="#name"><h5 class="white-text">Account Name</h5></a>
        <a href="#email"><span class="white-text email">acccount@email.com</span></a>
        </div></li>
        <li :class="{active: option=='habit'}"><a href="#!"><i class="material-icons">developer_board</i>Habits</a></li>
        <li :class="{active : option == 'tasks'}"><a href="#!"><i class="material-icons">assignment</i>Tasks</a></li>
        <li><div class="divider"></div></li>
        <li :class="{active : option == 'reports'}"><a class=""><i class="material-icons">insert_chart</i>Reports</a></li>
        <li>&nbsp;</li><li>&nbsp;</li>
        <li><div class="divider"></div></li>
        <li><a href="#"><i class="material-icons">account_circle</i>Account</a></li>
        <li><a href="#"><i class="material-icons">exit_to_app</i>Sign Out</a></li>
        <!--<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>-->
    </ul>
</template>

<script>
    export default {
        props: ["option"]
        
    }
</script>