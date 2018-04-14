<template>
  <div class="hello">
    <Menu option="0"/>
    <div class="parallax-container center valign-wrapper">
      <div class="container">
        <h2 class="left green-text darken-2"><b>The most solid <br/> tasks system manager</b></h2>
      </div>
      <div class="parallax"><img src="/static/people-tasks.png"></div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu";

export default {
  name: 'Home',
  components : {Menu},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    var elem = document.querySelector('.parallax');
    console.log(elem);
    var instance = M.Parallax.init(elem);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.parallax-container {
    height: 700px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
