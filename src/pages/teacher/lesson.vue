<template>
  <div class="col h_100 a-start j-start color_input_color">
	  <div class="page-title">Расписание</div>
	  <div class="row j-sb a-start">
		  <form class="page-content a-start j-start row md-8">
		  	<div class="lesson b-radius_10 a_start p_24 md-12">
		  		<div class="body j-start a-start  row">
			  		<div class="name xs-12 md-6 p_12">
			  			<span>Название урока</span>
			  			<v-input class="xs-12" placeholder="Номер урока" :disabled="back" type="number" v-model="lesson.lesson" :required="true"/>
			  		</div>
			  		<div class="name xs-12 md-6 p_12">
			  			<span>Группа</span>
			  			<v-select class="xs-12" placeholder="Группа" v-model="lesson.group" :childs="groups" :disabled="back"  :required="true"/>
			  		</div>
			  		<div class="name xs-12 md-6 p_12">
			  			<span>Дата</span>
			  			<v-date class="xs-12" :disabled="back" placeholder="Отчество" v-model="lesson.date"/>
			  		</div>
			  		<div class="name a-start b-radius_10 xs-12 md-6 p_12">
			  			<span>Студенты группы{{lesson.group ? ': ' + lesson.group.name : ''}}</span>
			  			<div  v-if="lesson.group">
				  			<div class="students row j-sb a-center xs-12" v-for="student in lesson.group.students">
					  			<span>{{student.name}} {{student.lastname}} {{student.patronymic}}</span>
					  			<span v-if="back"><v-check-box v-model="student.check"/></span>
					  		</div>
				  			<v-button class="dash m-t_16" title="Подробнее" @click="$router.push('/teacher/group/'+lesson.group.id)"/>
			  			</div>
			  		</div>
			  		<div class="name xs-12 md-6 p_12">
			  			<span>Начало в часах</span>
			  			<v-input class="xs-12" placeholder="16" :disabled="back" type="number" v-model="lesson.time" :required="true"/>
			  		</div>
			  	</div>
			  	<div class="save">
			  		<v-button title="Сохранить" @click="changeData()" :disabled="back"/>
			  	</div>
		  	</div>
		  </form>
		  <div class="qr b-radius_10 p_12 md-2" v-html="lesson.qr" v-if="lesson.qr"></div>
	  </div>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		lesson: {
  			id: null,
  			lesson: 1,
  			date: new Date(),
  			time: new Date().getHours(),
  			group: null,
  			qr: null
  		},
  		back: false,
  		groups: this.getGroups()
  	}
  },
  async created(){
  	if(!isNaN(parseInt(this.$route.params.id))){
  		this.lesson = {
  			id: this.$route.params.id,
  			lesson: this.$route.params.id,
  			date: new Date(),
  			time: 16,
  			group: this.groups[0],
  			qr: ''
  		}
  		if(this.$route.params.id == 1 || this.$route.params.id == 2){
  			this.lesson.qr = `
		  		<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
						width="100%" height="100%" viewBox="0 0 29.938 29.938" style="enable-background:new 0 0 29.938 29.938;"
						xml:space="preserve">
						<g style="fill: var(--qr)">
							<path d="M7.129,15.683h1.427v1.427h1.426v1.426H2.853v-1.426h1.426v-2.853h2.853v1.426H7.129z M25.664,28.513h1.424v-1.426h-1.424
								V28.513z M8.555,15.683h1.426v-1.426H8.555V15.683z M28.512,28.513h1.427v-1.426h-1.427V28.513z M11.408,29.938h2.85v-1.426h-2.85
								V29.938z M24.237,29.938v-1.426h-1.427v1.426H24.237z M18.535,29.938h1.426v-2.852h-1.426V29.938z M7.129,11.406v1.426h4.277
								v-1.426H7.129z M5.705,12.831v-1.426H2.852v2.852h1.426v-1.426H5.705z M9.981,9.979H0.002V0.001h9.979V9.979z M8.555,1.427H1.426
								v7.127h7.129V1.427z M2.852,27.087h4.276V22.81H2.852V27.087z M17.108,25.66v1.427h1.428V25.66H17.108z M7.129,2.853H2.853v4.275
								h4.276V2.853z M29.938,0.001v9.979h-9.979V0.001H29.938z M28.512,1.427h-7.127v7.127h7.127V1.427z M0,19.957h9.98v9.979H0V19.957z
								 M1.427,28.513h7.129v-7.129H1.427V28.513z M1.427,11.406H0v7.129h1.427V11.406z M19.959,18.533v1.424h1.426v-1.424H19.959z
								 M15.682,24.236V22.81h-1.425v1.427h-2.85v2.853h2.85v1.426h1.425v-2.853h1.427v-1.426H15.682L15.682,24.236z M11.408,5.704h2.85
								V4.276h-2.85V5.704z M22.811,17.109h2.854v1.426h1.425v-4.276h-1.425v-2.853h-1.428v4.277h-4.274v1.427h1.426v1.426h1.426v-1.426
								H22.811z M24.237,21.384h-1.427v-1.427h-1.426v2.853h-4.276v1.427h2.854v2.853h1.426v1.426h1.426v-2.853h5.701v-1.426h-4.276
								v-2.853H24.237z M24.237,21.384h1.428v-2.851h-1.428V21.384z M12.832,21.384v-1.427h1.424v-1.424h1.425v-1.426h1.427v-2.853h4.276
								v-2.853h-1.426v1.426h-1.426V7.125h-1.426V4.272h1.426V0h-1.426v2.852h-1.426V0h-4.276v2.852h1.426V1.426h1.424v2.85h1.426v4.277
								h1.426v1.426h-1.426v2.852h-1.426V9.979h-1.424V8.554h-1.426v2.852h1.426v1.426h-1.426v4.278h1.426v-2.853h1.424v2.853h-1.424
								v1.426h-1.426v4.274h2.85v-1.426H12.832z M28.512,22.81v-1.426h-2.85v1.426H28.512z M27.086,2.853h-4.275v4.275h4.275V2.853z
								 M15.682,21.384h2.854v-1.427h-1.428v-1.424h-1.427V21.384z M18.535,18.533v-1.426h-1.428v1.426H18.535z M27.086,12.831h2.853
								v-1.426h-2.853V12.831z M28.512,24.236h1.427V22.81h-1.427V24.236z M28.512,15.683h1.427v-1.426h-1.427V15.683z M15.682,8.554
								h-1.425v1.426h1.425V8.554z"/>
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
					`
  			this.back = true
  		}
  	}
  },
  methods:{
  	changeData(){
  		let data = {
  			method: 'update-lesson',
  			id: this.lesson.id,
  			name: this.lesson.lesson,
  			date: new Date(new Date(this.lesson.date).setHours(this.lesson.time,0,0,0)),
  			group: this.lesson.group.id
  		}
  		this.$axios.post('/public', data)
  		.then(res => {
  			if(res.data.status === 200)
  				this.$router.push('/teacher/calendar/')
  		})
  	},
  	getGroups(){
  		this.$axios.post('/public', {method: 'get-group-list'})
  		.then(res => {
  			this.groups = res.data.groups
  		})
  	},
  	getGroup(){
  		this.$axios.post('/public', {method: 'get-group', id: this.$route.params.id})
  		.then( res =>  {
  			this.group = res.data.group
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
	.lesson{
		background-color: var(--main);
		border: 1px solid var(--dark);
	}
	.body{
		flex-wrap: wrap;
	}
	.qr{
		background-color: var(--main);
		border: 1px solid var(--dark);
		position: sticky;
		top: 10px;
	}
	.name{
		align-items: flex-start;
		justify-content: flex-start;
		&>span{
			font-size: 1.5rem;
			margin: 12px 16px;
			text-align: left;
		}
	}
	.students{
		align-items: flex-start;
		text-align: left;
		background-color: var(--main);
		padding: 12px 16px;
		font-size: 1.2rem;
	}
</style>
