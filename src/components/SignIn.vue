<template>
    <div>
        <Menu option="1" />
        <center>
            <div class="section" />
            <h3 class="purple-text">Sign In</h3>
            <div class="section" />
            <div class="container">
                <div class="z-depth-1 grey lighten-4 row" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
                <div class="col s12">
                    <div class='row'>
                    <div class='col s12'>
                    </div>
                    </div>

                    <div class='row'>
                    <div class='input-field col s12'>
                        <input class='validate' type='email' name='email' id='email' v-model="email"/>
                        <label for='email'>Enter your email</label>
                    </div>
                    </div>

                    <div class='row'>
                    <div class='input-field col s12'>
                        <input class='validate' type='password' name='password' id='password' v-model="password"/>
                        <label for='password'>Enter your password</label>
                    </div>
                    <label style='float: right;'>
                        <a class='pink-text' href='#!'><b>Forgot Password?</b></a>
                    </label>
                    </div>

                    <br />
                    <center>
                    <div class='row'>
                        <button type='submit' @click="login" name='btn_login' class='col s12 btn btn-large waves-effect light-green darken-1'>
                            <b>Login</b>
                        </button>
                    </div>
                    </center>
                </div>
                </div>
            </div>
            <router-link to="/signup">Create account</router-link>
        </center>
    </div>


</template>

<script>
import Menu from "./Menu";

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    }, 
    components: { Menu },
    methods: {
        login() {
            alert(this.email + " " + this.password);
        }
    }
}


</script>