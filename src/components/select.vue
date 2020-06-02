<template>
	<div :id="'slelect-' + id" class="select" :class="{'data': data, 'active': focus, 'error': error === true, 'success': error === false, 'disabled': disabled }"  @click="checkInp(!focus)">
		<div class="name" v-if="!data">{{placeholder}}</div>
		<div class="icon" :class="icon_position" v-if="icon">

		</div>
		<div class="select-item">{{data && data[child_name] ? data[child_name] : data}}</div>
		<div class="popup" :class="{'focus': focus}" v-if="childs">
			<div class="popup-content" v-if="!disabled">
				<div v-for="child in childs" @click="setData(child)">{{child[child_name] ? child[child_name] : child}}</div>
			</div>
		</div>
		<div class="message"></div>
	</div>
</template>

<script>
	export default{
		props: {
			id: {
				type: [Number, String],
				default: this._uid
			},
			placeholder: {
				type: String,
				default: 'Input placeholder'
			},
			value: {
				type: String,
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
			icon: {
				type: String,
				default: ''
			},
			icon_position: {
				type: String,
				default: 'left'
			},
			childs: {
				type: Array,
				default: ()=> {return []}
			},
			child_name: {
				type: String,
				default: 'name'
			}
		},
		name: 'vSelect',
		data(){
			return{
				data: this.value,
				focus: false,
				error: null,
			}
		},
		watch:{
			value:{
				handler(newData){
					this.data = newData
				}
			},
		},
		async created(){
			if(!this.id) this.id = this._uid
		},
		methods: {
			setData(child){
				this.data = child
				this.$emit('input', this.data.data ? this.data.data : this.data)
			},
			closeSelect(){
				if(this.focus)
					setTimeout(()=>{this.checkInp(false)},0)
			},
			checkInp(type){
				this.focus = type
				if(type)
					document.addEventListener('click', ()=>this.closeSelect(), true)
				else 
					document.removeEventListener('click', ()=>this.closeSelect(), true)

				if(this.validate && !type)
					this.error = this.$f.validateInput(this.data, this.length, false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.select{
		max-width: 100%;
		// width: 325px;
		margin: 16px;
		height: calc(1rem + 32px);
		border-radius: 6px;
		border: 1px solid var(--input_border);
		background-color: var(--main);
		padding: 14px 16px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;

		&.disabled{
			pointer-events: none;
			&:after{
				display: none;
			}	
		}
		&:after{
			content: "";
			position: absolute;
			right: 12px;
			top: 30%;
			background-color: transparent;
			height: 12px;
			width: 12px;
			transform: rotate(45deg);
			border-bottom: 1px solid var(--input_color);
			border-right: 1px solid var(--input_color);
			transition: 0.3s;
		}
		&.active:after{
			top: 45%;
			transform: rotate(45deg) scale(-1, -1);
		}
		&.data{
			background-color: var(--input_active_bg);
		}
		&>.name{
			color: var(--input_placeholder);
			font-size: 15px;
			line-height: 150%;
			position: absolute;
			width: auto;
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
		}

		&>.select-item{
			height: 20px;
			width: 100%;
			outline: none;
			font-size: 15px;
			line-height: 150%;
			color: var(--input_color); 
			border: unset;
			text-align: left;
			width: auto;
		}

		&>.popup{
			position: absolute;
			width: 100%;
			transform: translateY(calc(100% + 1px));
			bottom: -8px;
			left: 0;
			background-color: var(--input_border);
			border-radius: 6px;
			flex-direction: column;
			justify-content: flex-start;
			overflow: hidden;
			height: 100%;
			max-height: 0;
			transition: 0.3s;
			z-index: 2;
			&.focus{
				height: auto;
				max-height: 300px;
				.popup-content{
					max-height: 300px;
					border-color: var(--input_border);
				}
			}
			.popup-content{
				flex-direction: column;
				overflow-y: auto;
				border-radius: inherit;
				justify-content: flex-start;
				border: 1px solid var(--input_border);
				height: 100%;
				background-color: var(--main);
				&>div{
					display: block;
					text-align: left;
					padding: 10px 14px;
					cursor: pointer;
					color: var(--input_color);
					&:hover{
						color: var(--input_icon_active);
					}
				}
			}
		}

		&>.message{
	    position: absolute;
	    bottom: 0;
	    transform: translateY(100%);
	    right: 0;
	    max-width: 100%;
	    width: auto;
	    display: block;
	    overflow: hidden;
	    text-align: left;
	    text-overflow: ellipsis;
	    color: inherit;
		}

	}
	.error{
		border-color: var(--error);
	}
	.success{
		border-color: var(--primmary); 
	}

	
	@media screen and (max-width: 600px){
		.select>.popup{
			position: fixed;
			left: 0;
			top: 0;
			z-index: 10;
			height: 100vh;
			width: 100vw;
			background-color: #00000050;
			transition: unset;
			transform: unset;
	    justify-content: center;
	    align-items: center;
			&.focus{
				height: 100vh;
				max-height: 100vh;
			}
			.popup-content{
				justify-content: flex-start;
				background-color: var(--main);
				border-radius: 15px;
				height: auto;
				max-height: 80%;
				width: 80%;
			}
		}
	}
</style>