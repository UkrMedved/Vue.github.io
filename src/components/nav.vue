<template>
	<div class='container'>
	
		<div class='row'>
		<ul class='col-4'>
				<li class='col alert alert-warning' v-for="(item,index) in products.navigation"><a style='text-decoration:none;' href='' @click.prevent='showDescription(index)'>{{item.Title}}</a></li>
		</ul>
		<MyArticle .opa {
  opacity:1;
} class='fade col-8 alert alert-warning' v-if="typeof(item) === 'number'" :num="item">
		</MyArticle>
		</div>
	
	
	 
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyArticle from '@/components/article'
export default {
  name: 'nav',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      products: 'getInfo',
      item: 'getIndex'
    })
  },
  methods: {
    showDescription (num) {
      this.$store.dispatch('setIndex', num)
    }
  },
  components: {
    MyArticle
  }
}
</script>

<style>
	li{
		list-style-type: none;
	}
</style>