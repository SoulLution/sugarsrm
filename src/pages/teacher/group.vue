<template>
  <div class="col h_100 a-start j-start color_input_color">
	  <div class="page-title">Группа {{group.name}}</div>
	  <form class="page-content a-start j-start row xs-12">
	  	<div class="lesson b-radius_10 a_start p_24">
	  		<div class="body j-start a-start row">
		  		<div class="name xs-12 md-6 p_12">
		  			<span>Поиск студента</span>
		  			<v-search-bar class="xs-12" child_name="email" :childs="childs" placeholder="Почта учащегося" v-model="search"/>
		  		</div>
		  		<div class="name xs-12 md-6 p_12">
		  			<span>Название</span>
		  			<v-input class="xs-12" placeholder="Группа" v-model="group.name" :required="true"/>
		  		</div>
		  		<div class="name a-start b-radius_10 xs-12 p_12">
		  			<span>Студенты группы</span>
		  			<div>
			  			<div class="students row j-sb a-center xs-12" v-for="(student, i) in group.students">
				  			<span>{{i+1}}) {{student.name}} {{student.lastname}} {{student.patronymic}}</span>
				  			<div class="remove"><img class="icon" src="@/assets/static/close.svg" @click="removeStudent(i)"></div>
				  		</div>
		  			</div>
		  		</div>
		  	</div>
		  	<!-- <div class="save">
		  		<v-button title="Сохранить"/>
		  	</div> -->
	  	</div>
	  </form>
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		group: {
  			name: '',
  			students: []
  		},
  		search: '',
  		childs: []
  	}
  },
  watch: {
  	search: {
  		handler(newData){
  			if(newData.id){
		  		this.$axios.post('/public', {method: 'add-group-student', student: newData.id, group: this.group.id})
		  		.then( res =>  {
		  			if(res.data.status === 200){
			  			let data = JSON.parse(JSON.stringify(newData))
			  			data.id = res.data.student
		  				this.group.students.push(data)
		  			}
		  		})
  			}
  			else
	  			this.$axios.post('/public', {method: 'get-student-search', search: newData})
		  		.then( res =>  {
		  			this.childs = res.data.students
	  			})
  		}
  	}
  },
  async created(){
  	if(!isNaN(parseInt(this.$route.params.id)))
	  	this.getGroup()
  },
  methods:{
  	removeStudent(index){
  		this.$axios.post('/public', {method: 'delete-group-student', student: this.group.students[index-1].id})
  		.then( res =>  {
  			this.group.students.splice(index-1,1)
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
	.remove{
		width: 40px;
		padding: 0 10px;
		height: 20px;
		cursor: pointer;
	}
	.students{
		align-items: flex-start;
		text-align: left;
		padding: 12px 16px;
		font-size: 1.2rem;
		border-bottom: 1px solid var(--dark);
	}
</style>
