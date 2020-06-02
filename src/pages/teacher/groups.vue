<template>
  <div class="col h_100 a-start j-start color_input_color">
	  <div class="page-title">Группы</div>
	  <div class="page-filters"></div>
	  <div class="page-content a-start j-start row">
	  	<div class="xs-12 md-6 lg-4 xl-2 p_8" v-for="item in groups">
		  	<router-link class="cell p-l_8 p-r_8 b_1 b-radius_10" :to="'/teacher/group/'+item.id">
		  		<div class="cell-header a-start fs_2rem">{{item.name}}</div>
		  		<div class="cell-body color_input_icon">
		  			<div class="cell-teacher row j-sb"><span>Учащихся</span><span>{{item.students.length}}</span></div>
		  			<div class="cell-date row j-sb"><span>Занятие</span><span>{{$f.getNormalDate(item.lesson)}}</span></div>
		  			<div class="cell-start row j-sb"><span>Начало</span><span>{{$f.getTime(item.lesson)}}</span></div>
		  		</div>
          <v-button class="transparent" :title="'Изменить'" />
		  	</router-link>
	  	</div>
      <div class="xs-12 md-6 lg-4 xl-2 p_8">
        <router-link class="cell p-l_8 p-r_8 b_1 j-center b-radius_10" to="/teacher/group/new">
          <div class="plus"></div>
        </router-link>
      </div>
	  </div>
    
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		groups: [
  			// {
  			// 	id: 1,
  			// 	name: 'Тестовая группа',
  			// 	lesson: new Date(new Date().setDate(new Date().getDate() - 4)).setHours(16,0,0,0),
  			// 	students: [
	  		// 		{
	  		// 			id: 1,
	  		// 			check: false,
	  		// 			name: 'Test Student'
		  	// 		},
	  		// 		{
	  		// 			id: 2,
	  		// 			check: true,
	  		// 			name: 'Виталий Подкутин'
		  	// 		},
	  		// 		{
	  		// 			id: 3,
	  		// 			check: true,
	  		// 			name: 'Новый студент'
		  	// 		},
	  		// 		{
	  		// 			id: 4,
	  		// 			check: true,
	  		// 			name: 'Иван Иваном'
		  	// 		},
	  		// 		{
	  		// 			id: 5,
	  		// 			check: false,
	  		// 			name: 'Василий Васильев'
		  	// 		},
	  		// 		{
	  		// 			id: 6,
	  		// 			check: true,
	  		// 			name: 'Ильяс Ильясович'
		  	// 		},
	  		// 		{
	  		// 			id: 7,
	  		// 			check: true,
	  		// 			name: 'Игорь Игоревич'
		  	// 		}
  			// 	]
  			// },
  			// {
  			// 	id: 2,
  			// 	name: 'Другая тестовая группа',
  			// 	lesson: new Date(new Date().setDate(new Date().getDate() + 14)).setHours(16,0,0,0),
  			// 	students: [
	  		// 		{
	  		// 			id: 2,
	  		// 			check: true,
	  		// 			name: 'Виталий Подкутин'
		  	// 		},
	  		// 		{
	  		// 			id: 4,
	  		// 			check: false,
	  		// 			name: 'Иван Иваном'
		  	// 		},
	  		// 		{
	  		// 			id: 5,
	  		// 			check: false,
	  		// 			name: 'Василий Васильев'
		  	// 		},
	  		// 		{
	  		// 			id: 6,
	  		// 			check: true,
	  		// 			name: 'Ильяс Ильясович'
		  	// 		},
	  		// 		{
	  		// 			id: 7,
	  		// 			check: true,
	  		// 			name: 'Игорь Игоревич'
		  	// 		}
  			// 	]
  			// },
  		]
  	}
  },
  async created(){
  	this.getGroups();
  },
  methods:{
  	getGroups(){
  		this.$axios.post('/public', {method: 'get-group-list'})
  		.then(res => {
  			this.groups = res.data.groups
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
	.page-content{
		flex-wrap: wrap;
	}
	.cell{
		background-color: var(--main);
    border: 1px solid var(--dark);
    min-height: 300px;
    justify-content: space-between;
    padding: 12px 12px;
    cursor: pointer;
    &:hover{
      &>.plus:after, &>.plus:before{
        background-color: var(--primary);
      } 
    }
		&-body{
      
		}
		&-header{
			text-align: left;
			&.end{
        color: var(--success);
      }
		}
		&-teacher{
			
		}
		&-data{
			
		}
		&-start{
			
		}
	}
  .plus{
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    &:after, &:before{
      content: "";
      height: 2px;
      width: 30px;
      border-radius: 10px;
      background-color: var(--grey_1);
      position: absolute;
    }
    &:after{
      transform: rotate(90deg);
    }
  }
</style>
