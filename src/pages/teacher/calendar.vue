<template>
  <div class="col h_100 a-start j-start color_input_color">
	  <div class="page-title">Расписание</div>
	  <div class="page-filters"></div>
	  <div class="page-content a-start j-start row">
	  	<div class="xs-12 md-6 lg-4 xl-2 p_8" v-for="item in data">
		  	<router-link class="cell p-l_8 p-r_8 b_1 b-radius_10" :to="'/teacher/lesson/'+item.id">
		  		<div class="cell-header a-start fs_2rem" :class="{'end': item.start < new Date().valueOf()}">{{item.lesson}} урок {{item.start < new Date().valueOf() ? 'Завершён' : ''}}</div>
		  		<div class="cell-body color_input_icon">
		  			<div class="cell-teacher row j-sb"><span>Группа</span><span>{{item.group}}</span></div>
		  			<div class="cell-date row j-sb"><span>Дата</span><span>{{$f.getNormalDate(item.start)}}</span></div>
		  			<div class="cell-start row j-sb"><span>Начало</span><span>{{$f.getTime(item.start)}}</span></div>
		  		</div>
          <v-button :class="item.start < new Date().valueOf() ? 'dash' : ''" :title="item.start < new Date().setHours(24,0,0,0).valueOf() ? 'Просмтотреть' : 'Изменить'" />
		  	</router-link>
	  	</div>
      <div class="xs-12 md-6 lg-4 xl-2 p_8">
        <router-link class="cell p-l_8 p-r_8 b_1 b-radius_10" to="/teacher/lesson/new">
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
  		data:[
  			{
  				id: 1,
          lesson: 1,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() - 4)).setHours(16,0,0,0)
  			},
  			{
  				id: 2,
          lesson: 2,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() - 2)).setHours(16,0,0,0)
  			},
  			{
  				id: 3,
          lesson: 3,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 14)).setHours(16,0,0,0)
  			},
  			{
  				id: 4,
          lesson: 4,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 16)).setHours(16,0,0,0)
  			},
  			{
  				id: 5,
          lesson: 5,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 18)).setHours(16,0,0,0)
  			},
  			{
  				id: 6,
          lesson: 6,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 20)).setHours(16,0,0,0)
  			},
  			{
  				id: 7,
          lesson: 7,
          group: 'Первая группа',
  				teacher: 'Test Teacher',
  				start: new Date(new Date().setDate(new Date().getDate() + 22)).setHours(16,0,0,0)
  			},
  		]
  	}
  },
}
</script>

<style lang="scss" scoped>
	.page-content{
		flex-wrap: wrap;
	}
	.cell{
		background-color: var(--main);
    border: 1px solid var(--dark);
    min-height: 250px;
    cursor: pointer;
    &:hover{
      &>.plus:after, &>.plus:before{
        background-color: var(--primary);
      } 
    }
		&-body{
      
		}
		&-header{
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
