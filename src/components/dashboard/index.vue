<template>
    <div>
        
        <nav>
            <div class="nav-wrapper purple darken-1">
            <a href="#" class="brand-logo">&nbsp;Habitask</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">            
                <li><a @click="openMenu"><i class="material-icons">menu</i></a></li>
                <li><a href="sass.html"><i class="material-icons">account_circle</i></a></li>
                <li><a href="badges.html"><i class="material-icons">exit_to_app</i></a></li>
            </ul>
            </div>
        </nav>
        
        <ul id="slide-out" class="sidenav fixed z-depth-2">
            <li><div class="user-view">
            <div class="background">
                <img src="/static/habits.jpg">
            </div>
            <a href="#user"><img class="circle" src="/static/tasks.jpeg"></a>
            <a href="#name"><span class="white-text name">John Doe</span></a>
            <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
            </div></li>
            <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
            <li><a href="#!">Second Link</a></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Subheader</a></li>
            <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        
    </div>

</template>

<script>
    export default {
        data() {
            return {
                instance_sidenav : null,
            }
        },
        mounted() {
            this.instance_sidenav = M.Sidenav.init(document.querySelector('.sidenav'));
            var instance_collapsible = M.Collapsible.init(document.querySelector('.collapsible'));
            var instance = M.FormSelect.init(document.querySelector('select'));
        },
        methods: {
            openMenu() {
                this.instance_sidenav.open();
            }
        }
    }

</script>