<template>
  <div class="sidebar">
    <div class="col p_0 bar j-start a-start color_input_color fill_input_color">
    	<div class="logotip"><img class="logo" src="@/assets/static/logo.svg"></div>
    	<div class="link j-start row p_16" :class="{'active': link.link === $route.path}" v-for="link in links" @click="link.link ? $router.push(link.link) : checkPhoto()">
		    <div class="w_auto m-r_8" v-html="link.svg"></div>
		    <div class="w_auto">{{link.name}}</div>
	    </div>
    </div>
    <v-switch v-model="theme_switch"/>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: Boolean,
      default: false
    }
  },
  data(){
  	return {
  		theme_switch: this.theme,
  		links: [
  			{
  				name: 'Профиль',
  				svg: `
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 width="20px" height="20px" viewBox="0 0 28.667 28.667" style="enable-background:new 0 0 28.667 28.667;"
							 xml:space="preserve">
						<g>
							<path d="M18.486,18.104c1.034-1.013,1.775-2.531,2.115-4.648c0.455,0.083,1.053-0.387,1.261-1.179
								c0.214-0.813,0.462-2.178-0.003-2.302c-0.137-0.037-0.279-0.009-0.422,0.063v-2.26c0.076-2.457-0.26-4.829-2.939-5.856
								C18.009,0.915,17.977,0,17.977,0c-1.206,1.086-5.785,1.526-5.785,1.526l0.052,0.014C6.438,2.137,7.276,4.224,7.276,7.777v2.26
								C7.134,9.965,6.992,9.936,6.854,9.974c-0.463,0.124-0.323,1.437-0.109,2.251c0.209,0.798,0.921,1.321,1.377,1.229
								c0.347,2.223,1.041,3.703,1.995,4.67c-4.443,1.625-7.604,5.728-7.604,10.543h23.641C26.152,23.827,22.962,19.71,18.486,18.104z"/>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
  				`,
  				link: '/teacher/profile/'
  			},
  			{
  				name: 'Расписание',
  				svg: `
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 viewBox="0 0 512 512" height="20px" width="20px" style="enable-background:new 0 0 512 512;" xml:space="preserve">
						<g>
							<g>
								<g>
									<circle cx="386" cy="210" r="20"/>
									<path d="M432,40h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-91V20c0-11.046-8.954-20-20-20
										c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80C35.888,40,0,75.888,0,120v312
										c0,44.112,35.888,80,80,80h153c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H80c-22.056,0-40-17.944-40-40V120
										c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h91
										v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v114c0,11.046,8.954,20,20,20
										c11.046,0,20-8.954,20-20V120C512,75.888,476.112,40,432,40z"/>
									<path d="M391,270c-66.72,0-121,54.28-121,121s54.28,121,121,121s121-54.28,121-121S457.72,270,391,270z M391,472
										c-44.663,0-81-36.336-81-81s36.337-81,81-81c44.663,0,81,36.336,81,81S435.663,472,391,472z"/>
									<path d="M420,371h-9v-21c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v41c0,11.046,8.954,20,20,20h29
										c11.046,0,20-8.954,20-20C440,379.954,431.046,371,420,371z"/>
									<circle cx="299" cy="210" r="20"/>
									<circle cx="212" cy="297" r="20"/>
									<circle cx="125" cy="210" r="20"/>
									<circle cx="125" cy="297" r="20"/>
									<circle cx="125" cy="384" r="20"/>
									<circle cx="212" cy="384" r="20"/>
									<circle cx="212" cy="210" r="20"/>
								</g>
							</g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						<g>
						</g>
						</svg>
  				`,
  				link: '/teacher/calendar/'
  			},
  			{
  				name: 'Группы',
  				svg: `
						<svg height="20px" viewBox="0 0 512 512" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="m256 106c-18.3125 0-30 8.878906-30 15s11.6875 15 30 15 30-8.878906 30-15-11.6875-15-30-15zm0 0"/><path d="m512 121-256-121-256 121 256 120 196-91.765625v220.554687l-30 30v112.210938h90v-112.210938l-30-30v-234.671874zm-256 45c-33.648438 0-60-19.761719-60-45s26.351562-45 60-45 60 19.761719 60 45-26.351562 45-60 45zm0 0"/><path d="m91 280.273438 150 75v-88.183594l-150-70.582032zm0 0"/><path d="m422 196.507812-151 70.582032v88.183594l151-75zm0 0"/></svg>
  				`,
  				link: '/teacher/group/'
  			}
  		]
  	}
  },
  watch:{
    theme:{
      handler(newData){
        this.theme_switch = newData
      }
    },
    theme_switch:{
      handler(newData){
        if(newData)
          localStorage.setItem('theme', 'dark')
        else
          localStorage.setItem('theme', 'default')
        this.$emit('theme',localStorage.getItem('theme',))
      }
    }
  },
  async created(){
  	if(!this.$getCookie('SIT')){
  		this.$router.replace('/sign')
		}
  },
}
</script>

<style lang="scss" scoped>
	.sidebar{
		flex-wrap: nowrap;	
		min-width: 200px;
		align-items: flex-start;
	}
	.bar{
		height: 100%;
		flex-wrap: nowrap;
	}
	.logo{
		width: 80%;
		margin-bottom: 10%;
	}
	.link{
		cursor: pointer;
		color: var(--input_icon);
		fill: var(--input_icon);
		&:hover{
			background-color: var(--grey_1);
			color: var(--grey_3);
			fill: var(--grey_3);
		}
		&.active{
			background-color: var(--main);
			color: var(--primary);
			fill: var(--primary);
		}
	}
</style>
