<template>
    <div>
      <div v-for="ask in items"> {{ ask.title }}</div>
    </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data(){
    return {
      items : []
    }
  },
  
  created(){
    fetchAskList()
    .then(response => this.items = response.data)
    .catch(error => console.log(error));
  }
}
</script>

<style>

</style>