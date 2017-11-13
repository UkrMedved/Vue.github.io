<template>
	<div >
        <img :src='products.navigation[num].Src' align='left' width="200" height="250">
       <span class='text'> {{products.navigation[num].Description}}
        </span>
    </div>
    
    
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MyArticle',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      products: 'getInfo'
    })
  },
  props: {
    num: { type: Number, require: true }
  }
}
</script>
<style>
img {
  margin-right:15px;
}
.text {
  font-size:15px;
  margin-left: 10px;
}

</style>