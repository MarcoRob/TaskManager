<template>
    <div>
        <nav>
            <div class="nav-wrapper purple darken-1">
            <a href="#" class="brand-logo">&nbsp;Habitask</a>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">            
                <li><a @click="openMenu"><i class="material-icons">menu</i></a></li>
                <li><a href="sass.html"><i class="material-icons">account_circle</i></a></li>
                <li><a href="badges.html"><i class="material-icons">exit_to_app</i></a></li>
            </ul>
            </div>
        </nav>
        <Sidenav @clicked='setActiveMenu'/>
        <Habits v-if="optionMenu == 'habits'"/>
        <Tasks v-if="optionMenu == 'tasks'"/>

        
    </div>

</template>

<script>
import Sidenav from "./sidenav";
import Habits from "./habits";
import Tasks from "./tasks";
//import Report from "./reports";*/

    export default {
        components: {Sidenav, Habits, Tasks},
        data() {
            return {
                instance_sidenav : null,
                optionMenu : "habits"
            }
        },
        mounted() {
            this.instance_sidenav = M.Sidenav.init(document.querySelector('.sidenav'), {"draggable":true});
            var instance_collapsible = M.Collapsible.init(document.querySelector('.collapsible'));
            var instance = M.FormSelect.init(document.querySelector('select'));
           
        },
        methods: {
            openMenu() {
                this.instance_sidenav.open();
            },
            setActiveMenu(val) {
                this.optionMenu = val;
            }
        }
    }

</script>