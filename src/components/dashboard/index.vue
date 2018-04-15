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
        <Sidenav option="habit"/>
        <Habits />
        <NewHabit />

        <div class="fixed-action-btn">
        <button data-target="modal1" class="btn-floating btn-large red modal-trigger">
            <i class="large material-icons">add</i>
        </button>
        </div>
    </div>

</template>

<script>
import Sidenav from "./sidenav";
import Habits from "./habits";
import NewHabit from "./newHabit";
    export default {
        components: {Sidenav, Habits, NewHabit},
        data() {
            return {
                instance_sidenav : null,
            }
        },
        mounted() {
            this.instance_sidenav = M.Sidenav.init(document.querySelector('.sidenav'), {"draggable":true});
            var instance_collapsible = M.Collapsible.init(document.querySelector('.collapsible'));
            var instance = M.FormSelect.init(document.querySelector('select'));
            var instance_modal = M.Modal.init(document.querySelector('.modal'));
        },
        methods: {
            openMenu() {
                this.instance_sidenav.open();
            }
        }
    }

</script>