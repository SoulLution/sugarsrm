<template>
	<label :for="'data-' + id" :class="{'disabled': disabled}">
		<div class="main col">
			<div class="header row j-sb">
				<div class="title">{{$f.getMonthName(date.getMonth())}} {{date.getFullYear()}}</div>
				<div class="next" @click="getDays(date.setMonth(date.getMonth()-1))" style="transform: rotate(180deg);" v-if="date.getMonth() > new Date().getMonth()">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 22L19 16L13 10" style="fill: transparent !important;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
				<div class="next" @click="getDays(date.setMonth(date.getMonth()+1))">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg">
						<path d="M13 22L19 16L13 10" style="fill: transparent !important;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</div>
			</div>
			
			<div class="body">
				<div class="row">
					<div class="cell week" v-for="day in weeks">{{day}}</div>
				</div>
				<div class="row" v-for="i in (days.length/7)">
					<div class="cell" :class="{'other': days[j-1+(7*(i-1))].month, 'now': days[j-1+(7*(i-1))].now, 'activ': (j-1+(7*(i-1))) === activity}" v-for="j in 7" @click="changeActivity(j-1+(7*(i-1)))">{{days[j-1+(7*(i-1))].day}}</div>
				</div>
				
			</div>
				
		</div>
	</label>
</template>

<script>
	export default{
		props: {
			id: {
				type: [Number, String],
				default: 'date'
			},
			value: {
				type: Date,
				default: ''
			},
			disabled: {
				type: Boolean,
				default: false
			},
			validate: {
				type: Boolean,
				default: false
			},
			length: {
				type: [Number, String],
				default: 1
			},
			double: {
				type: Boolean,
				default: false
			},
		},
		name: 'vDateSelect',
		data(){
			return{
				date: this.value ? this.value : new Date(),
				weeks: ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'],
				days: [],
				activity: null
			}
		},
		watch:{
			value: {
				handler(newData){
					this.date = new Date(newData)
				}
			}
		},
		async created(){
			let date = this.date ? new Date(this.date) : new Date()
			this.getDays(date)

			if(!this.id) this.id = this._uid
		},
		methods:{
			changeActivity(i){
				this.activity = i
				this.setData()
			},
			getDays(date1){
				let end = []
				this.date = new Date(date1)
				let date = new Date(date1)
				let first = new Date(date.setDate(1))
				let pre = []
				this.activity = null
				while(first.getDay() !== 1){
					first = new Date(first.setDate(first.getDate() - 1))
					pre.push({dt: first.setHours(0,0,0,0).valueOf(), day: first.getDate(), month: -1})
				}
				for(let i = pre.length-1; i >= 0; i--)
					end.push(pre[i])

				first = new Date(date.setDate(1))
				while(first.getMonth() === date.getMonth()){
					if(this.checkNow(first, new Date(this.value)))this.activity = end.length
					end.push({dt: first.setHours(0,0,0,0).valueOf(), day: first.getDate(), month: 0, now: this.checkNow(first, new Date())})
					first = new Date(first.setDate(first.getDate() + 1))
				}

				while(first.getDay() !== 1){
					end.push({dt: first.setHours(0,0,0,0).valueOf(), day: first.getDate(), month: 1})
					first = new Date(first.setDate(first.getDate() + 1))
				}
				this.days = end
			},
			checkNow(first, second){
				let end = false
				if(first.getFullYear() === second.getFullYear())
					if(first.getMonth() === second.getMonth())
						if(first.getDate() === second.getDate())
							end = true
				return end
			},
			setData(){
				console.log(new Date(this.days[this.activity].dt))
				this.$emit("input", new Date(this.days[this.activity].dt))
			},
			checkInp(type){
				this.focus = type
			}
		}
	}
</script>

<style lang="scss" scoped>
	label{
		width: auto;
		border-radius: 12px;
		border: 1px solid var(--date_border);
		background-color: var(--date_bg);
		padding: 14px 16px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		overflow-x: hidden;
		&.disabled{
			pointer-events: none;
		}
	}
		.header{
			margin-top: unset;
			&>div{
				color: var(--date_header_color);
				font-weight: 500;
				font-size: 18px;
				line-height: 25px;
				width: auto;
				align-items: flex-start;
				&.next{
					cursor: pointer;
					border-radius: 50%;
					background-color: var(--date_next_bg);
					stroke: var(--date_next_color);
					&:hover{
						background-color: var(--date_next_active_bg);
						stroke: var(--date_next_active_color);
					}
				}
			}
		}
		.main{
			padding: unset;
		}
		.body{
			&>.row{
				margin: unset;
				flex-wrap: nowrap;
				padding: unset;
			}
		}
		.cell{
			color: var(--date_cell);
			border-radius: 12px;
			height: 35px;
			width: 35px;
			margin: 4px;
			cursor: pointer;
			&:hover{
				background-color: var(--date_cell_bg);
			}
			&.week{
				color: var(--date_cell_week);
				background-color: transparent;
				cursor: default;
			}
			&.other{
				color: var(--date_cell_other_color);
			}
			&.now{
				color: var(--date_cell_now_color);
				background-color: var(--date_cell_now_bg);
			}
			&.activ{
				color: var(--date_cell_active_color);
				background-color: var(--date_cell_active_bg);
			}
		}
</style>