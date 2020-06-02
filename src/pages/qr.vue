<template>
  <div class="col">
    
  </div>
</template>

<script>
export default {
  data(){
  	return {

  	}
  },
  async created(){
  	if(!this.$getCookies('SIS'))
	  	this.$router.splice('/sign')
	  else{
	  	localStorage.setItem('hash', this.$route.params.id)
	  	this.$router.splice('/student/calendar/')
	  }
  }
}
</script>

<style lang="scss" scoped>

</style>
