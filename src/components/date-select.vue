<template>
	<label :for="'data-select-' + id" :class="{'error': error === true, 'success': error === false }">
		
		<v-date v-model="data" />
	</label>
</template>

<script>
	export default{
		props: {
			id: {
				type: [Number, String],
				default: this.uid
			},
			placeholder: {
				type: String,
				default: 'Input placeholder'
			},
			value: {
				type: String,
				default: ''
			},
			validate: {
				type: Boolean,
				default: false
			},
			length: {
				type: [Number, String],
				default: 1
			},
			icon: {
				type: String,
				default: ''
			},
			icon_position: {
				type: String,
			},
			drop_childs: {
				type: Array,
				default: ()=> {return []}
			},
			child_name: {
				type: String,
				default: 'name'
			}
		},
		name: 'vDateSelect',
		data(){
			return{
				data: this.value,
				focus: false,
				error: null,
				password: false,
			}
		},
		watch:{
			data:{
				handler(newData){
					this.$emit('input', newData)
				},
				deep: true
			}
		},
		async created(){
			if(!this.id) this.id = this._uid
			if(!this.length) this.length = 1
		},
		methods:{
			setData(){
				this.$emit("input", this.data)
			},
			checkInp(type){
				this.focus = type
			}
		}
	}
</script>

<style lang="scss" scoped>
	label{
		max-width: 100%;
		width: auto;
		border-radius: 6px;
		border: 1px solid #D0D0D0;
		// background-color: #ffffff;
		padding: 14px 16px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		overflow-x: hidden;
		&>.name{
			color: #D0D0D0;
			font-size: 15px;
			line-height: 150%;
		}
		&>.icon{
			position: absolute;
			&.top{

			}
			&.right{
				right: 14px;
				margin-left: 10px;
			}
			&.bottom{

			}
			&.left{
				left: 14px;
				margin-right: 10px;
			}
			&-after{
				fill: #D0D0D0;
				&.active, &:hover{
					fill: #6F6F6F;
				}
			}
		}

		&>.multi{
			width: auto;
			flex-direction: row;
			&-value{
				padding: 6px 25px 6px 9px;
				color: #E28438;
				background: #F8E0CD;
				border-radius: 4px;
				cursor: pointer;
				&:before, &:after{
					content: "";
					position: absolute;
					right: 0;
					height: 12px;
					width: 2px;
					background-color: #E28438;
					border-radius: 5px; 
					transform: rotate(45deg);
				}
				&:after{
					transform: rotate(-45deg) !important;
				}
			}
		}

		&>input{
			width: 100%;
			outline: none;
			font-size: 15px;
			line-height: 150%;
			color: #212529; 
			border: unset;
		}

		&>.popup{
			position: bsolute;
			margin-top: 5px;
			width: 100%;
			border: 1px solid #F3F3F3;
			border-radius: 6px;
			flex-direction: column;
			justify-content: flex-start;
			overflow-y: auto;
			height: 100%;
			max-height: 300px;
		}
		&>.search{
			&>div{
				margin: 16px 16px 0;
				width: 100%;
				text-align: left;
				align-items: flex-start;
				color: #D0D0D0;
				transition: 0.1s;
				&.active, &:hover{
					color: #212529;
				}
			}
		}
		&>.select{
			
 		} 
		&>.multi_select{
			
		}

		&>.message{
			
		}

	}
	.error{
		border-color: #792A22;
	}
	.success{
		border-color: #89B82E; 
	}

	// @keyframes 
</style>