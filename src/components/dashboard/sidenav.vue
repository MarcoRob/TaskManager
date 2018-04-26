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
        <li :class="{active: activeOption =='habits'}">
            <a v-on:click="setActive('habits')">
                <i class="material-icons">developer_board</i>Habits
            </a>
        </li>
        <li :class="{active : activeOption == 'tasks'}">
            <a @click="setActive('tasks')">
                <i class="material-icons">assignment</i>Tasks
            </a>
        </li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Reports</a></li>
        <li :class="{active : activeOption == 'userReport'}"><a @click="setActive('userReport')"><i class="material-icons">insert_chart</i>User</a></li>
        <li :class="{active : activeOption == 'adminReport'}"><a @click="setActive('adminReport')"><i class="material-icons">insert_chart</i>Admin</a></li>
        <li>&nbsp;</li><li>&nbsp;</li>
        <li><div class="divider"></div></li>
        <li>
            <a @click="setActive('account')">
                <i class="material-icons">account_circle</i>Account
            </a>
        </li>
        <li><a href="#"><i class="material-icons">exit_to_app</i>Sign Out</a></li>
        <!--<li><a class="waves-effect" href="#!">Third Link With Waves</a></li>-->
    </ul>
</template>

<script>
    export default {
        props: ["option"],
        data() {
            return {
                activeOption: 'habits'
            }
        },
        methods: {
            isActive(val) {
                return this.activeOption == val;
            },
            setActive(val) {
                this.activeOption = val;
                this.$emit('clicked', val);
            }
        }
        
    }
</script>