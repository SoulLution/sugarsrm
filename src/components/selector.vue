<template>
	<div class="main" :class="{'active': data, 'transparent': transparent}" @click="changeData">
		<div class="main-bg"></div>
	</div>
</template>

<script>
	export default{
		props: {
			value: {
				type: Boolean,
				default: false
			},
			transparent: {
				type: Boolean,
				default: false
			}
		},
		name: 'vSelector',
		data(){
			return{
				data: this.value === this.title ? true : false
			}
		},
		watch:{
			value(newData){
				if(this.title)
					if(newData === this.title)
						this.data = true
					else
						this.data = false
			}
		},
		methods:{
			changeData(){
				let data
				if(this.title)
					data = this.title
				else
					data = !this.data
				this.data = data ? true : false

				this.$emit("input", data) ;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		height: 24px;
		width: 24px;
		border-radius: 50%;
		border: 1px solid var(--selector_border);
		background-color: var(--selector_bg);
		overflow: hidden;
		cursor: pointer;
		display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    margin: 6px;
		&-bg{
			height: 100%;
			width: 100%;
			border-radius: 50%;
			background-color: var(--selector_bg);
			transform: scale(1.5);
			transition: 0.3s;
		}
		&:after, &:before{
			content: "";
			position: absolute;
			background-color: var(--selector_color);
			height: 2px;
			border-radius: 5px;
		}
		&:after{
			width: 25%;
			transform: scale(0) rotate(-45deg) translate(-10%);
	    margin-left: -10%;
	    margin-top: 11%;
		}
		&:before{ 
			width: 50%;
			transform: scale(0) rotate(45deg) translate(-10%);
			margin-left: 15%;
		}
		&.active{
			border-color: var(--selector_active_border) !important;
			background-color: var(--selector_active_bg);
			.main-bg{
				transform: scale(0);
			}
			&:after{
		    transform: scale(1) rotate(45deg) translate(-10%);
			}
			&:before{
				transform: scale(1) rotate(-45deg) translate(-10%);
			}
		}

		&.transparent{
			border-color: var(--selector_transparent_border);
			background-color: var(--selector_transparent_bg);
			.main-bg{
				background-color: var(--selector_transparent_bg);
			}
			&:after, &:before{
				background-color: var(--selector_transparent_active);
			}
		}

	}
</style>