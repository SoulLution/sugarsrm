<template>
	<div class="pagination">
		<div class="item active" v-if="data !== step && max - step > data && !unlimited " @click="changeData(data)">{{data+1}}</div>
		<div class="item" :class="{'active': i-1 === data}" v-for="i in (unlimited ? max : (max - step < 5 ? max : step === 0 ? 5 : 4 + step))" v-if="(i >= step || (step >= max - 5 && i >= max - 6)) || unlimited" @click="changeData(i-1)">{{i}}</div>
		<div class="item" v-if="max > 5 + step && !unlimited" @click="changeStep(4 + data)">...</div>
		<div class="item" v-if="max > 4 + step && !unlimited" @click="changeData(max-1)">{{max}}</div>
	</div>
</template>

<script>
	export default{
		props: {
			value: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: 10
			},
			unlimited: {
				type: Boolean,
				default: false
			}
		},
		name: 'vPagination',
		data(){
			return {
				data: this.value,
				step: 0
			}
		},
		watch:{
			value:{
				handler(newData){
					this.data = newData
				}
			}
		},
		methods: {
			changeStep(index){
				this.step = index
			},
			changeData(index){
				this.step = index
				this.data = index
				this.$emit('input', this.data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	div{
		width: auto;
	}
	.pagination{
		flex-direction: row;
		padding: 8px;
		&.col{
			flex-direction: column;

			&.dash{
				&>.item{
					height: 22px;
					width: 2px;
					margin: 3px 0;
				}
			}
		}
		&>.item{
			user-select: none;
			font-size: 0;
			margin: 0 3px;
			background-color: var(--pagination_bg);
			color: var(--pagination_color);
			&:hover{
				background-color: var(--pagination_bg_hover);
			}
			&.active{
				color: var(--pagination_color_active);
				background-color: var(--pagination_bg_active) !important;
			}
		}
		&.number{
			&>.item{
				display: flex;
				min-width: 32px;
				height: 32px;
				padding: 5px;
				font-size: 16px;
				margin: 6px;
				border: 1px solid var(--pagination_bg);
				border-radius: 8px;
				cursor: pointer;
			}
		}
		&.dot{
			pointer-events: none;
			&>.item{
				width: 8px;
				height: 8px;
				border-radius: 50%;
				&:hover{
					background-color: var(--pagination_bg);
				}
			}
		}
		&.dash{
			pointer-events: none;
			&>.item{
				height: 2px;
				width: 22px;
				border-radius: 10px;
				&:hover{
					background-color: var(--pagination_bg);
				}
			}
		}
	}
</style>