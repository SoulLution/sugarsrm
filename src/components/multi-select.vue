<template>
	<label :for="'multi-select-' + id" :class="{'error': error === true, 'success': error === false }" @click="checkInp(!focus)">
		<div class="name" v-if="!search">{{placeholder}}</div>
		<div class="icon" :class="icon_position" v-if="icon">
			<object type="image/svg+xml" :data="icon" class="icon-after" :class="{'active': true}"></object>
		</div>
		<div class="multi">
			<div class="multi-value" v-for="(item, i) in data" @click="removeSelect(i)">{{item[child_name]}}</div>
		</div>
		<input class="multi-select" :id="'multi-select-' + id" @keyup="findWord" v-model="search">
		<div class="popup" :class="{'focus': focus}" v-if="drop_childs">
			<div class="popup-content">
				<div :class="{'active': child.active}" v-for="(child, i) in drop_childs" @click="addSelect(i)">{{child[child_name]}}</div>
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
				default: new Date().valueOf().toString() + '-' + ((Math.random() * 10000)^0).toString()
			},
			placeholder: {
				type: String,
				default: 'Input placeholder'
			},
			value: {
				type: Array,
				default: ()=> {return []}
				// type: [Number, String],
				// default: ''
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
			childs: {
				type: Array,
				default: ()=> {return []}
			},
			child_name: {
				type: String,
				default: 'name'
			}
		},
		name: 'vMultiSelect',
		data(){
			return{
				data: this.value,
				drop_childs: this.childs,
				search: '',
				focus: false,
				error: null
			}
		},
		mounted(){
			// for(let child of this.drop_childs)
			// 	if(child.active === undefined)
			// 		this.$set(child, 'active', false)
			// 	console.log(this.drop_childs)
		},
		methods: {
			findWord(){
				let childs = []
				this.drop_childs = this.childs

				if(this.search){
				  for(let index = 0; index < this.drop_childs.length; index++){

					  let start = this.drop_childs[index][this.child_name].indexOf(this.search);
					  let end = this.drop_childs[index][this.child_name].split("").reverse().join("").indexOf(this.search.split("").reverse().join(""));
					  end = this.drop_childs[index][this.child_name].length - end;

					  if(start !== -1 && end !== -1){

					  	// let div = '', first = '', second = ''
					  	// for(let i = n; i < end; i++)
					 		// 	div += this.drop_childs[index][child_name][i];
						  // first = this.drop_childs[index][child_name].slice(0, start);
						 	// second = this.drop_childs[index][child_name].slice(end+1, this.drop_childs[index][child_name].length-1);
					    // childs.push({index, first, div, second})
					    childs.push(this.drop_childs[index])
					  }
					}
					this.drop_childs = childs
				}else
					this.drop_childs = this.childs

			},
			removeSelect(index){
				this.drop_childs[this.data[index].index].active = false
				this.data.splice(index, 1)
				this.$emit('input', this.data)
			},
			addSelect(index){
				let end = false
				for(let i = 0; i < this.data.length; i++)
					if(this.data[i] === this.drop_childs[index]){
						this.data.splice(i, 1)
						end = true
						break
					}
				if(end)
					this.drop_childs[index].active = false
				else{
					this.$set(this.drop_childs[index], 'active', true)
					this.$set(this.drop_childs[index], 'index', index)
					this.data.push(this.drop_childs[index])
				}
				this.$emit('input', this.data)
			},
			closeSelect(){
				if(this.focus)
					setTimeout(()=>{this.checkInp(false)},0)
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
		width: 300px;
		border-radius: 6px;
		border: 1px solid #D0D0D0;
		background-color: #ffffff;
		padding: 14px 16px;
		display: flex;
		position: relative;
    justify-content: center;
    align-items: center;
		flex-direction: row;
		flex-wrap: wrap;

		&:after{
			content: "";
			position: absolute;
			right: 5px;
			border-top: 9px solid #6F6F6F;
			border-left: 4.5px solid transparent;
			border-right: 4.5px solid transparent;
			transition: 0.3s;
		}
		&.active:after{
			transform: rotate(180deg);
		}
		&>.name{
			width: auto;
			color: #D0D0D0;
			font-size: 15px;
			line-height: 150%;
			position: absolute;
			left: 16px;
			bottom: 14px;
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
			width: 100%;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			.multi-value{
				padding: 6px 25px 6px 9px;
				min-width: 30%;
				width: auto;
				margin-bottom: 5px;
				margin-right: 5px;
				color: #E28438;
				background: #F8E0CD;
				border-radius: 4px;
				cursor: pointer;
				align-items: center;
				&:before, &:after{
					content: "";
					position: absolute;
					right: 12px;
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
			position: absolute;
			width: 100%;
			transform: translateY(calc(100% + 1px));
			bottom: 0;
			left: 0;
			background-color: #ffffff;
			border-radius: 6px;
			flex-direction: column;
			justify-content: flex-start;
			overflow: hidden;
			height: 100%;
			max-height: 0;
			transition: 0.3s;
			z-index: 1;
			&.focus{
				height: auto;
				max-height: 300px;
				.popup-content{
					border-color: #F3F3F3;
				}
			}
			.popup-content{
				flex-direction: column;
				overflow-y: auto;
				justify-content: flex-start;
				border: 1px solid transparent;
				height: 100%;
				background-color: #ffffff;
				&>div{
					display: block;
					text-align: left;
					padding: 10px 14px;
					border-top: 1px solid #cacaca;
					cursor: pointer;
					&.active{
						background-color: #cacaca !important;
					}
					&:hover{
						color: #4585DC;
						background-color: #4585DC15;
					}
					&:first-child{
						border: unset;
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
		border-color: #792A22;
	}
	.success{
		border-color: #89B82E; 
	}

	@media screen and (max-width: 600px){
		.multi-select>.popup{
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
				background-color: #ffffff;
				border-radius: 15px;
				height: auto;
				max-height: 80%;
				width: 80%;
			}
		}
	}
</style>