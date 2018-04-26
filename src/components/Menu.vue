<template>

  <nav>
    <div class="nav-wrapper purple darken-1">
      <router-link to="/" class="brand-logo">&nbsp;Habitak</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li @click="optionSelected(1)" :class="optionActive(1)"><router-link to="/signin">Sign In</router-link></li>
        <li @click="optionSelected(2)" :class="optionActive(2)"><router-link to="/signup">Sign Up</router-link></li>
      </ul>
    </div>
  </nav>
        
</template>

<script>

export default {

    props: ["option"],
    methods : {
        optionSelected(val) {
            this.option = val;
        },
        optionActive(val) {
            if(this.option == val) {
                return "light-green darken-1";
            }
        }
    }
}

</script>