<template>
	<label :for="'search-' + id" class="search row" :class="{'active': focus, 'error': error === true, 'success': error === false }" @click="checkInp(!focus)">
		<div class="name" v-if="!data">{{placeholder}}</div>
		<div class="icon left">

			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
				<path d="M14 14L10.9001 10.9001M10.9001 10.9001C11.8435 9.95661 12.4271 8.65322 12.4271 7.21354C12.4271 4.33418 10.0929 2 7.21354 2C4.33418 2 2 4.33418 2 7.21354C2 10.0929 4.33418 12.4271 7.21354 12.4271C8.65322 12.4271 9.95661 11.8435 10.9001 10.9001Z" style="fill: transparent !important; stroke: var(--grey_3) !important" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>

		</div>
		<input class="search-item" autocomplete="off" :id="'search-' + id" @keyup="e => findWord(e)" v-model="data">

		<div class="icon right" v-if="data" @click="data = ''">
			<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<path d="M11 11L16 16M16 16L21 11M16 16L11 21M16 16L21 21" style="fill: transparent !important; stroke: var(--grey_3) !important" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>

		<div class="popup" :class="{'focus': focus && data}" v-if="drop_childs.length">
			<div class="popup-content">
				<div :class="{'active': hover === i}" v-for="(child, i) in drop_childs" @click="setData(child)" v-if="child.div">{{child.first}}<span>{{child.div}}</span>{{child.second}}</div>
			</div>
		</div>
		<div class="message"></div>
	</label>
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
				default: 'Search bar placeholder'
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
			childs: {
				type: Array,
				default: ()=> {return []}
			},
			child_name: {
				type: String,
				default: 'name'
			}
		},
		name: 'vSearchBar',
		data(){
			return{
				data: this.value,
				drop_childs: this.childs,
				focus: false,
				error: null,
				password: false,
				hover: -1,
			}
		},
		async created(){
			if(!this.id) this.id = this._uid
		},
		methods: {
			setData(child){
				this.data = child.item[this.child_name]
				this.$emit('input', child.item)
				this.checkInp(false)
				this.hover = -1
			},
			findWord(e){
				if(e.keyCode === 13){
					e.preventDefault()
					if(this.hover >= 0) this.setData(this.drop_childs[this.hover])
				}
				else if(e.keyCode === 38){
					e.preventDefault()
					this.hover = this.hover <= 0 ? 0 : this.hover-1
				}
				else if(e.keyCode === 40){
					e.preventDefault()
					this.hover = this.hover >= this.drop_childs.length-1 ? this.drop_childs.length-1 : this.hover+1
				}else{
					let childs = []
					this.drop_childs = this.childs
					if(this.data){
					  for(let index = 0; index < this.drop_childs.length; index++){

						  let start = this.drop_childs[index][this.child_name].indexOf(this.data);
						  let end = this.drop_childs[index][this.child_name].split("").reverse().join("").indexOf(this.data.split("").reverse().join(""));
						  end = this.drop_childs[index][this.child_name].length - end;

						  if(start !== -1 && end !== -1){
						  	let div = '', first = '', second = ''
						  	for(let i = start; i < end; i++)
						 			div += this.drop_childs[index][this.child_name][i];
							  first = this.drop_childs[index][this.child_name].slice(0, start);
							 	second = this.drop_childs[index][this.child_name].slice(end, this.drop_childs[index][this.child_name].length);
						    childs.push({item: this.drop_childs[index], index, first, div, second})

						  }
						}
						this.drop_childs = childs
					}

					this.$emit('input', this.data)
					this.checkInp(true)
				}
			},
			checkInp(type){
				this.focus = type
				if(this.validate && !type)
					this.error = this.$f.validateInput(this.data, this.length, false)
			}
		}
	}
</script>

<style lang="scss" scoped>
	label{
		max-width: 100%;
		// width: 300px;
		margin: 16px;
		border-radius: 6px;
		border: 1px solid var(--input_border);
		background-color: var(--input_active_bg);
		padding: 10px 16px;
		display: flex;
		position: relative;
    justify-content: center;
    align-items: center;
		flex-direction: row;
		flex-wrap: nowrap;
		&.active{
			background-color: var(--main);
		}
		&>.name{
			width: auto;
			color: var(--input_placeholder);
			font-size: 15px;
			line-height: 150%;
			position: absolute;
			left: 16px;
			bottom: 14px;
			margin-left: 32px;
		}
		&>.icon{
			width: auto;
			z-index: 2;
			fill: inherit;
			&.password{
				fill: var(--grey_3);
			}
			&.active{
				fill: var(--primary);
			}
			&.top{

			}
			&.right{
				margin-left: 16px;
			}
			&.bottom{

			}
			&.left{
				margin-right: 16px;
			}
		}

		&>input{
			width: 100%;
			outline: none;
			font-size: 15px;
			line-height: 150%;
			color: var(--input_color); 
			border: unset;
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
					border-color: var(--input_border);
				}
			}
			.popup-content{
				flex-direction: column;
				overflow-y: auto;
				overflow-x: hidden;
				justify-content: flex-start;
				border: 1px solid transparent;
				height: 100%;
				background-color: var(--main);
				&>div{
					color: var(--input_color);
					display: block;
					text-align: left;
					padding: 10px 14px;
					cursor: pointer;
					&>span{
						font-weight: bold;
					}
					&.active, &:hover{
						color: var(--primary);
						background-color: var(--main);
					}
				}
			}
		}
		&>.search-item{
			&>div{
				margin: 14px;
				width: 100%;
				min-height: 50px;
				text-align: left;
				align-items: flex-start;
				color: var(--input_color);
				transition: 0.1s;
				&.active, &:hover{
					color: var(--primary);
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
		border-color: var(--primary); 
	}

	// @media screen and (max-width: 600px){
	// 	.search>.popup{
	// 		position: fixed;
	// 		left: 0;
	// 		top: 0;
	// 		z-index: 10;
	// 		height: 100vh;
	// 		width: 100vw;
	// 		background-color: #00000050;
	// 		transition: unset;
	// 		transform: unset;
	//     justify-content: center;
	//     align-items: center;
	// 		&.focus{
	// 			height: 100vh;
	// 			max-height: 100vh;
	// 		}
	// 		.popup-content{
	// 			justify-content: flex-start;
	// 			background-color: var(--main);
	// 			border-radius: 15px;
	// 			height: auto;
	// 			max-height: 80%;
	// 			width: 80%;
	// 		}
	// 	}
	// }
</style>