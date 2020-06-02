<template>
	<div class="radio" :class="{'transparent': transparent}" @click="changeData">
		<svg viewBox="0 0 24 24" :class="{ 'inner': data }">
			<g>
				<circle class="default" :class="{ 'inner': data }" cx="12" cy="12" :r="transparent ? 3.75 : 2.75"></circle>
			</g>
		</svg>
		<div v-if="title">{{title}}</div>
	</div>
</template>	

<script>
	export default{
		props: {
			value: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ''
			},
			transparent: {
				type: Boolean,
				default: false
			}
		},
		name: 'vRadio',
		data(){
			return{
				data: this.value === this.title ? true : false
			}
		},
		watch:{
			value(newData){
				// if(this.title)
				// 	if(newData === this.title)
				// 		this.data = true
				// 	else
				// 		this.data = false
				this.data = newData
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
	.radio{
		width: 25px;
		height: 25px;
		margin: 0 0.5rem;
		stroke: var(--radio_dot);
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		cursor: pointer;
		margin: 6px;
		&>div{
			white-space: nowrap;	
			margin-left: 8px;
			font-size: 15px;
			line-height: 150%;
			color: var(--radio_color);
		}

		&.transparent{
			stroke: var(--radio_transparent_dot);
			svg{
				background-color: var(--radio_transparent_bg);
				border: 2px solid var(--radio_transparent_border);
				transform: rotate(-90deg) scale(1, -1);
				&.inner {
					border-color: var(--radio_transparent_active_border);
					background-color: var(--radio_transparent_active_bg);
				}
				& circle{
					stroke-width: 7.5;

				}
			}
		}
	}
	svg {
		max-height: 24px;
		max-width: 24px;
		min-height: 24px;
		min-width: 24px;
		transform: rotate(-90deg);
		border: 2px solid var(--radio_border);
		background-color: var(--radio_bg);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		stroke: inherit;
		transition: 0.3s;
		&.inner {
			border-color: var(--radio_active_border);
			background-color: var(--radio_active_bg);
		}
	}

	svg circle {
		fill: none;
		stroke-width: 5.5;
		stroke: inherit;
	}

	svg circle.default {
		stroke-dasharray: 125.6;
		opacity: 0;
		stroke-dashoffset: 125.6;
		transition: 0.3s;
	}

	svg circle.default.inner {
		opacity: 1;
		animation: circle-default 2s ease-out 1;
    stroke-dashoffset: 0;
    transition: 0s;
	}

	@keyframes circle-default {
		from{
			stroke-dashoffset: 125.6;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
</style>