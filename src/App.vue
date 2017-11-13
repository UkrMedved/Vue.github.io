<template>
  <div id="app" class='container'>
  <header>

      <nav>
      <div class="page-header">
    <h3>Vue.js</h3>
    </div>
      <div class='row'>
        <div class='m col alert alert-warning'  v-for="(item,index) in article"><router-link :to="item.src" style="text-decoration: none;">{{item.title}}</router-link></div>
    </div>
      </nav>
  </header>

      <router-view></router-view>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'app',
  created () {
    axios.get('https://ukrmedved.github.io/MenuData.io/document.json')
      .then((response) => {
        console.log(response)
        this.$store.dispatch('addNav', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  computed: {
    ...mapGetters({
      article: 'navigationArticle'
    })
  }
}
</script>

<style>
body {
  background-color:#3aaaaa;
}
h3 {
  font-size: 37px;
  text-align:center;
  letter-spacing: 10px;
}
a {
  
  letter-spacing: 10px;
  font-size: 26px;
  color:black;
  text-decoration:none;
  
}
a:hover {
  color:green;
}

.m {
  text-align:center;
  text-decoration:none;

}
router-link {

}
</style>
