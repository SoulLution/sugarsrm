<template>
	<div class="main" :class="{'active': data}" @click="changeData">
		<div class="main-bg"></div>
	</div>
</template>	

<script>
	export default{
		props: {
			id: {
				type: [Number, String],
				default: this._uid
			},
			value: {
				type: Boolean,
				default: false
			}
		},
		name: 'vCheckBox',
		data(){
			return{
				data: this.value ? true : false
			}
		},
		watch:{
			value:{
				handler(newData){
					this.data = newData
				}
			},
		},
		methods:{
			changeData(){
				this.data = !this.data
				this.$emit("input", this.data)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		width: 24px;
		height: 24px;
		border: 1px solid var(--check_box_border);
		background-color: var(--check_box_bg);
		border-radius: 6px;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 3px 10px rgba(0,0,0,.1);
		cursor: pointer;
		overflow: visible;
		margin: 12px;
		&-bg{
			height: 24px;
			width: 24px;
			border-radius: inherit;
			position: absolute;
			background-color: var(--check_box_avtive);
			transition: 0.3s;
			transform: scale(0);
		}
		&:after, &:before{
			content: "";
			position: absolute;
			background-color: var(--check_box_color);
			height: 2px;
			border-radius: 5px;
			transition: 0.3s;
			z-index: 1;
		}
		&:after{
			width: 25%;
			transform: scale(0) rotate(-45deg) translate(-10%);
			margin-left: -7%;
	    margin-top: 12%;
		}
		&:before{ 
			width: 50%;
			transform: scale(0) rotate(45deg) translate(-10%);
			margin-left: 17%;
		}
		&.active{
			border-color: var(--check_box_avtive) !important;

			.main-bg{
				transform: scale(1);
			}
			&:after{
				transform: scale(1) rotate(45deg) translate(-10%);
			}
			&:before{
				transform: scale(1) rotate(-45deg) translate(-10%);
			}
		}

		&.transparent{
			border-color: var(--check_box_transparent_border);
			background-color: var(--check_box_transparent_bg);
			&:after, &:before{
				background-color: var(--check_box_avtive);
			}

			&.active{
				.main-bg{
					background-color: transparent;
				}	
			}
		}
	}
	
</style>