<template>
	<div class="stepped row">
		<div class="icon j-center a-center" @click="e => changeData(e, -1)"></div>
		<div class="number">{{data}}</div>
		<div class="icon j-center a-center" @click="e => changeData(e, 1)"></div>
	</div>
</template>

<script>
	export default{
		props: {
			value: {
				type: Number,
				default: 0
			},
			min: {
				type: Number,
				default: 0
			},
			max: {
				type: Number,
				default: Infinity
			},
			step:{
				type: Number,
				default: 1
			}
		},
		name: 'vStepped',
		data(){
			return {
				data: this.value
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
			changeData(e, index){
				e.preventDefault();
				let data = this.data + ( this.step * index )
				if(data > this.max)
					data = this.max
				else if(data < this.min)
					data = this.min
				this.data = data
				this.$emit('input', this.data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	div{
		width: auto;
	}
	.stepped{
		&>.number{
			display: flex;
			min-width: 32px;
			height: 32px;
			padding: 5px;
			margin: 0 12px;
			color: var(--input_color);
			background-color: var(--input_active_bg);
			border-radius: 8px;
		}	
		&>.icon{
			background-color: var(--primary);
			padding: 8px;
			height: 24px;
			width: 24px;
			border: 1px solid  transparent;
			border-radius: 8px;
			cursor: pointer;
			&:active{
				background-color: var(--success);
			}
			&:after, &:before{
				content: "";
				position: absolute;
				height: 2px;
				width: 12px;
				background-color: var(--white);
			}
			&:after{
				transform: rotate(90deg);
			}
			&:first-child{
				&:after{
					display: none;
				}
			}
		}
		&.light{
			height: 32px;
			width: 62px;
			&>.number{
				display: none;
			}	
			&>.icon{
				background-color: var(--input_bg);
				border-radius: 0 5px 5px 0;
				border-color: var(--input_active_bg);
				&:after, &:before{
					background-color: var(--input_color);
				}
				&:active{
					background-color: var(--input_active_bg);
				}
				&:first-child{
					border-radius: 5px 0 0 5px;
					border-right: 1px solid var(--input_active_border);
				}
			}
		}
	}
</style>