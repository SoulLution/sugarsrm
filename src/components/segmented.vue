<template>
	<div class="segmented row">
		<div class="item row" :class="{'active': i === data, 'left': i < Math.floor(childs.length / 2), 'right': i >= Math.round(childs.length / 2)}" v-for="(child, i) in childs" @click="changeData(i)">
			<div class="svg" v-html="child[child_svg]" v-if="child_svg"></div>
			<div class="name">{{child[child_name]}}</div>
		</div>
	</div>
</template>
 
<script>
	export default{
		props: {
			value: {
				type: Number,
				default: 0
			},
			childs: {
				type: Array,
				default: ()=> {return []}
			},
			child_name: {
				type: String,
				default: 'name'
			},
			child_svg: {
				type: String,
				default: 'svg'
			}
		},
		name: 'vSelect',
		data(){
			return{
				data: this.value,
			}
		},
		watch:{
			value:{
				handler(newData){
					this.data = newData
				}
			},
		},
		methods: {
			changeData(index){
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
	.segmented{
		border: 1px solid var(--input_border);
		border-radius: 12px;
		padding: 0;
		margin: 12px 0;
		color: var(--input_color);
		fill: var(--input_color);
		overflow: hidden;
		flex-wrap: nowrap;
		&>.item{
			border-left: 1px solid var(--input_border);
			padding: 8px 16px;
			cursor: pointer;
			color: inherit;
			fill: inherit;
			stroke: inherit;
			background-color: var(--dark);
			&:first-child{
				border-left: unset
			}
			&.active{
				color: var(--white);
				fill: var(--grey_1);
				&:before{
					max-width: 0;
				}
			}
			&:before{
				content: "";
				height: 100%;
				width: 100%;
				max-width: 100%;
				max-height: 100%;
				background-color: var(--main);
				position: absolute;
				transition: 0.3s;
			}
			&.left:before{
				left: 0;
			}
			&.right:before{
				right: 0;
			}
			&>.name{
				color: inherit;
			}
			&>.svg{
				fill: inherit;
				stroke: inherit;
				margin-right: 10px;
			}
		}

		&.reverse{
			&>.item{
				background-color: var(--primary);
				&.active{
					fill: var(--success);
				}
			}
		}
		&.divided{
			border: unset;
			border-radius: unset;
			flex-wrap: wrap;
			justify-content: flex-start;
			&>.item{
				border: 1px solid var(--dark);
				border-radius: 5px;
				margin: 4px;
				overflow: hidden;
				&:before{
					left: unset;
					right: unset;
				}
				&.active{
					&:before{
						max-height: 0;
					}
				}
				&>.svg{
					display: none;
				}
			}
		}
	}
</style>