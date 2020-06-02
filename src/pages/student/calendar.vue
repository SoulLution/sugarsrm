<template>
  <div class="col h_100 a-start j-start color_input_color">
	  <div class="page-title">Календарь занятий</div>
	  <div class="page-filters"></div>
	  <div class="page-content a-start j-start row">
	  	<div class="xs-12 md-6 lg-4 xl-2 p_8" v-for="item in data">
	  		<img class="icon" :class="{'true': item.status}" :src="require('@/assets/static/' + (item.status ? 'tick.svg' : 'close.svg'))" v-if="item.status !== undefined">

		  	<div class="cell p-l_8 p-r_8 b_1 b-radius_10">
		  		<div class="cell-header a-start fs_2rem">{{item.lesson}} урок</div>
		  		<div class="cell-body color_input_icon">
		  			<div class="cell-teacher row j-sb"><span>Преподаватель</span><span>{{item.teacher}}</span></div>
		  			<div class="cell-date row j-sb"><span>Дата</span><span>{{$f.getNormalDate(item.start)}}</span></div>
		  			<div class="cell-start row j-sb"><span>Начало</span><span>{{$f.getTime(item.start)}}</span></div>
		  		</div>
		  	</div>
	  	</div>
	  </div>
    
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		data:[
  			{
  				lesson: 1,
  				teacher: 'Test Teacher',
  				status: false,
  				start: new Date(new Date().setDate(new Date().getDate() - 4)).setHours(16,0,0,0)
  			},
  			{
  				lesson: 2,
  				teacher: 'Test Teacher',
  				status: true,
  				start: new Date(new Date().setDate(new Date().getDate() - 2)).setHours(16,0,0,0)
  			},
  			{
  				lesson: 3,
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 14)).setHours(16,0,0,0)
  			},
  			{
  				lesson: 4,
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 16)).setHours(16,0,0,0)
  			},
  			{
  				lesson: 5,
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 18)).setHours(16,0,0,0)
  			},
  			{
  				lesson: 6,
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 20)).setHours(16,0,0,0)
  			},
  			{
  				lesson: 7,
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 22)).setHours(16,0,0,0)
  			},
  		]
  	}
  },
  async created(){
  	let hash = localStorage.getItem('hash')
  	if(hash){
  		let data = {
  			method: 'set-hash',
  			hash
  		}
  		this.$axios.post('/public', data)
  	}
  }
}
</script>

<style lang="scss" scoped>
	.page-content{
		flex-wrap: wrap;
	}
	.icon{
		height: 40%;
		position: absolute;
		right: 17px;
		top: 17px;
		z-index: 1;
		transform: rotate(12deg);
	}
	.cell{
		background-color: var(--main);
    border: 1px solid var(--dark);
		&-body{

		}
		&-header{
			
		}
		&-teacher{
			
		}
		&-data{
			
		}
		&-start{
			
		}
	}
</style>
