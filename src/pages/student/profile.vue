<template>
  <div class="col h_100 a-start j-start color_input_color">
	  <div class="page-title">Профиль</div>
	  <div class="page-filters"></div>
	  <form class="page-content a-start j-start row">
	  	<div class="profile b-radius_10 a_start p_24 md-12 lg-8">
	  		<div class="ava">
	  			<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
							 width="100%" height="100%" viewBox="0 0 28.667 28.667" style="enable-background:new 0 0 28.667 28.667; fill: var(--main) !important"
							 xml:space="preserve" v-if="!user.ava">
						<g>
							<path d="M18.486,18.104c1.034-1.013,1.775-2.531,2.115-4.648c0.455,0.083,1.053-0.387,1.261-1.179
								c0.214-0.813,0.462-2.178-0.003-2.302c-0.137-0.037-0.279-0.009-0.422,0.063v-2.26c0.076-2.457-0.26-4.829-2.939-5.856
								C18.009,0.915,17.977,0,17.977,0c-1.206,1.086-5.785,1.526-5.785,1.526l0.052,0.014C6.438,2.137,7.276,4.224,7.276,7.777v2.26
								C7.134,9.965,6.992,9.936,6.854,9.974c-0.463,0.124-0.323,1.437-0.109,2.251c0.209,0.798,0.921,1.321,1.377,1.229
								c0.347,2.223,1.041,3.703,1.995,4.67c-4.443,1.625-7.604,5.728-7.604,10.543h23.641C26.152,23.827,22.962,19.71,18.486,18.104z"/>
						</g>
					</svg>
	  			<img :src="user.ava" v-else>
	  			<div></div>
	  		</div>
	  		<div class="body row">
		  		<div class="name xs-12 md-6 lg-4 p_12">
		  			<span>Имя</span>
		  			<v-input class="xs-12" placeholder="Имя" v-model="user.name" :required="true"/>
		  		</div>
		  		<div class="name xs-12 md-6 lg-4 p_12">
		  			<span>Фамилия</span>
		  			<v-input class="xs-12" placeholder="Фамилия" v-model="user.lastname" :required="true"/>
		  		</div>
		  		<div class="name xs-12 md-6 lg-4 p_12">
		  			<span>Отчество</span>
		  			<v-input class="xs-12" placeholder="Отчество" v-model="user.patronymic"/>
		  		</div>
		  		<div class="name xs-12 md-6 lg-4 p_12">
		  			<span>E-mail</span>
		  			<v-input class="xs-12" placeholder="E-mail" v-model="user.email" :required="true"/>
		  		</div>
		  		<div class="name xs-12 md-6 lg-4 p_12">
		  			<span>Сменить пароль</span>
		  			<v-input class="xs-12" placeholder="Новый пароль" v-model="user.password"/>
		  		</div>
		  	</div>
		  	<div class="save xs-12 md-6 lg-4 p_16">
			  		<v-button class="m_16 mt_0 p_0" title="Сохранить" :disabled="checkUser()" />
		  	</div>
	  	</div>
	  </form>
    
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		user: {
  			ava: null,
  			name: 'Student',
  			lastname: 'Test',
  			patronymic: '',
  			email: 'student@test.test',
  			password: ''
  		},
  		back_user:{}
  	}
  },
  async created(){
  	this.back_user = JSON.parse(JSON.stringify(this.user))
  },
  methods:{
  	checkUser(){
  		for(let x in this.user)
  			if(this.user[x] !== this.back_user[x])
  				return false
			return true
  	}
  }
}
</script>

<style lang="scss" scoped>
	.profile{
		background-color: var(--main);
		border: 1px solid var(--dark);
	}
	.body{
		flex-wrap: wrap;
		justify-content: flex-start;
	}
	.ava{
		width: 40vh;
		height: 40vh;
		border-radius: 50%;
		background-color: var(--dark);
		border: 1px solid var(--dark);
		overflow: hidden;
		&>img{
			height: 100%;
			width: 100%;
		}
		&>div{
			height: 20%;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			background-color: var(--grey_1);
			opacity: 0.5;
			cursor: pointer;
			&:hover{
				&:after, &:before{
					background-color: var(--primary);
				}	
			}
			&:after, &:before{
				content: "";
				height: 2px;
				width: 30px;
				border-radius: 10px;
				background-color: var(--white);
				position: absolute;
			}
			&:after{
				transform: rotate(90deg);
			}
		}
	}
	.name{
		align-items: flex-start;
		&>span{
			margin: 0 16px;
		}
	}
</style>
