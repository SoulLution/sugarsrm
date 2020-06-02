<template>
  <div id="app">
  	<link type="text/css" id="theme" :href="require(`@/assets/${theme}.css`)">
  	<!-- <link type="stylesheet" class="dark" id="theme_dark" :href="require(`@/assets/dark.css`)" v-if="theme === 'dark'"> -->
  	<!-- <link type="stylesheet" id="theme_default" :href="require(`@/assets/default.css`)" v-else-if="theme === 'default'"> -->
  	<div id="body" class="min-h_100 row p_0 j-start">

  		<componet class="col xs-12 md-2 lg-1 side h_100 j-start  p_0 p-t_12 p-b_12" :is="`v-${$route.name}-header`" v-if="$route.name !== 'login'"
  			 @theme="e => switchTheme(e)" :theme="theme === 'dark' ? true : false"
  		/>
  		<div class="xs-12 md-10 lg-11 min-h_100">
		    <router-view 
		    	class="main w_98"
		    	@theme="e => switchTheme(e)" 
		    	:theme="theme === 'dark' ? true : false"
		    	/>
		    	<div class="bg-cell row">
		    		<img class="bg" src="@/assets/static/city.svg">
			    	<img class="bg" src="@/assets/static/city.svg">
		    	</div>
	    	<v-footer v-if="$route.name !== 'login'"/>
    	</div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return {
  		theme: localStorage.getItem('theme'),
  		theme_index: 1
  	}
  },
  async created(){
  	localStorage.setItem('theme', localStorage.getItem('theme') ? localStorage.getItem('theme') : 'default')
  	this.theme = localStorage.getItem('theme')
  },
  mounted(){
  	const html = 
	  	`
	  		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				  <defs>
				    <filter id="goo">
				      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
				      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
				      <feBlend in="SourceGraphic" in2="goo" />
				    </filter>
				  </defs>
				</svg>
					<div class="zone">
						<div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob"></div>
			      <div class="blob top"></div>
			      <div class="blob bottom"></div>
					</div>
	  	`
  	// setTimeout(()=>
  		// this.$f.generateScroll('body', document.getElementById('app'), {height: '100vh', width: '100vw', html})
		// ,500)
  },
  methods:{
  	switchTheme(e){
  		let styles = document.styleSheets
  		let o, n
  		o = Object.keys(styles)
  		.filter( x => styles[x].rules.length ? styles[x].rules[0].selectorText === ':root' : false )
  		// .forEach( i => console.log(styles[i]))
	    // 	styles[styles.length-1].disabled = !styles[styles.length-1].disabled
  		this.theme = e
			localStorage.setItem('theme', e)

  		setTimeout(()=> {
	  		n = Object.keys(styles)
	  		.filter( x => styles[x].rules.length ? styles[x].rules[0].selectorText === ':root' : false )
	  		let skip = -1
	  		if(o.length === n.length){
	  			for(let i in n){
		  			if(i == skip){
		  				styles[n[i]].disabled = false
		  				if(!styles[n[i+1]])
	  						styles[n[0]].disabled = true
		  				continue
		  			}
		  			if(!styles[n[i]].disabled){
		  				styles[n[i]].disabled = true
		  				if(styles[n[i+1]])
		  					styles[i+1].disabled = false
	  					else
	  						styles[n[0]].disabled = false
	  					skip = parseInt(i+1)
		  			}
		  			else
			  			styles[n[i]].disabled = true
		  		}
		  	}else{
		  		for(let i in o){
		  			styles[n[i]].disabled = true
		  		}
		  	}
	  	},0)
  	}
  }
}
</script>

<style lang="scss">
	@import '@/assets/main.scss';
  
  .side{
  	background-color: var(--side);
  	position: sticky;
  	top: 0;
  }
  #body{
  	height: 100vh;
  	flex-wrap: nowrap;
  	overflow: hidden;
  }
  .main{
  	flex-wrap: nowrap;
  	overflow: auto;
  }
  .bg-cell{
  	width: 200vw;
  	max-width: 200vw;
  	padding: unset;
  	animation: transform_bg 60s linear infinite;
  	position: fixed;
  	justify-content: space-between;
  	bottom: 0;
  	left: 0;
  	z-index: -1;
  }
  .bg{
  	bottom: 0;
  	width: 100%;
  }
  @keyframes transform_bg{
  	from{opacity: 0.3;transform: translateX(-50%)}
  	50%{opacity: 0.5}
  	to{opacity: 0.3;transform: translateX(0%)}
  }

	@media screen and (max-width: 960px){
		.side{
			position: fixed;
			transform: translateX(-100%);
			transition: 0.3s;
			&.open{
				transform: translateX(0%);
			}
		}
	}
</style>
