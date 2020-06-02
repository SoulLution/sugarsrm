<template>
	<div class="main" :class="{'active': data}" @click="changeData">
		
	</div>
</template>

<script>
	export default{
		props: {
			value: {
				type: Boolean,
				default: false
			}
		},
		name: 'vSwitch',
		data(){
			return{
				data: this.value ? true : false
			}
		},
		methods:{
			changeData(){
				this.data = !this.data
				this.$emit("input", this.data) ;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		height: 30px;
		width: 55px;
		margin: 0 0.5rem;
		border-radius: 50px;
		border: 1px solid var(--input_border);
		box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.25);
		overflow: hidden;
		cursor: pointer;
		transition: 0.3s;
		&:after{
			content: "";
			width: 24px;
			position: absolute;
			top: 2px;
			left: 2px;
			height: 24px;
			border-radius: 50%;
			background-color: var(--input_border);
			transition: 0.3s;
		}
		&.active{
			border-color: var(--primary);
			background-color: var(--primary);
			&:after{
				left: 27px;
				background-color: var(--white);
			}
		}
	}
</style>