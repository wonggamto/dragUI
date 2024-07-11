<script  lang="ts">

import {defineComponent} from "vue-demi";
export default defineComponent({
  props:{
    src: String
  },
  data(){
    return{
      value:111
    }
  },
  methods:{
     show(){
       console.log(111111)
    }
  },
  mounted() {
    console.log(this.value)
  }
})
</script>

<template>
  <img :src="src" class="image" alt="" @click="show()">
</template>

<style scoped>
.image{
  width: 300px;
  height: 200px;
  margin: 0 auto;
}
</style>
