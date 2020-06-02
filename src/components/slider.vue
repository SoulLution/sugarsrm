<template>
	<div class="slider a-start">
		<div class="slider-percent j-sb row">
			<div class="row j-start">
				{{((ranged ? s : e) * max / 100)^0}}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.537625 0.575999H8.72963V1.824H0.537625V0.575999ZM5.35363 12H3.91363V4.32H0.537625V3.072H8.72963V4.32H5.35363V12Z" fill="#39C874"/>
				</svg>
			</div>
			<div class="row j-end" v-if="ranged">
				{{(e * max / 100)^0}}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.537625 0.575999H8.72963V1.824H0.537625V0.575999ZM5.35363 12H3.91363V4.32H0.537625V3.072H8.72963V4.32H5.35363V12Z" fill="#39C874"/>
				</svg>
			</div>
		</div>
		<div class="slider-bar" @mousedown=" e => changeRange(e)" @mousemove=" e => showPart(e)" @mouseleave="disPart()" ref="bar">
			<div class="part" :class="{'active': part_show}" :style="{left: part + '%'}">{{(part * max / 100)^0}}</div>
			<label :style="{left: s + '%'}" left="1" @mousedown="e => moveSlide(e)" v-if="ranged"></label>
			<label :style="{left: e + '%'}" right="1" @mousedown="e => moveSlide(e)" ></label>
			<div class="bar" :style="{maxWidth: (ranged ? e - s : e) + '%', left: (ranged ? s : 0) + '%'}"></div>
		</div>
		<div class="slider-max j-sb row">
			<div class="row j-start">{{min}}</div>
			<div class="row j-end">{{max}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			start: {
				type: Number,
				default: 0
			},
			end: {
				type: Number,
				default: 0
			},
			min: {
				type: [Number, String],
				default: 0
			},
			max: {
				type: [Number, String],
				default: 100
			},
			value: {
				type: Object,
				default: ()=> {return {}}
			},
			ranged: {
				type: Boolean,
				default: false
			}
		},
		name: 'vSlider',
		data(){
			return{
				s: this.start ? this.start : 0,
				e: this.end ? this.end : 0,
				part: 0,
				part_show: false
			}
		},
		watch:{
			s:{
				handler(newData){
					this.setData()
				}
			},
			e:{
				handler(newData){
					this.setData()
				}
			}
		},
		async created(){
			if(this.value.end)
				this.e = this.value.end / (this.max / 100)
			if(this.value.start)
				this.s = this.value.start / (this.max / 100)
		},
		methods: {
			disPart(){
				this.part_show = false
			},
			showPart(e){
				if(e.target.tagName === 'DIV'){
					this.part_show = true
					this.part = (e.offsetX / e.target.clientWidth * 100)^0
				}else{
					this.part_show = false
				}
			},
			moveSlide(e){
				let percent = this.$refs['bar'].clientWidth / (this.$refs['bar'].clientWidth/2)
				let x = e.clientX
				let elem = false
				if(this.ranged)
					if(e.target.attributes.left)
						elem = true
				e.preventDefault()
				document.onmouseup = ev =>{ document.onmousemove = ev => {} }
				document.onmousemove = ev =>{
					x = this.checkMove(ev, x, percent, elem)
				}
				document.ontouchend = ev =>{ document.ontouchmove = ev => {} }
				document.ontouchmove = ev =>{
					x = this.checkMove(ev, x, percent, elem)
				}
			},
			checkMove(e, x, percent, elem){
				let ev = e.touches && e.touches.length ? e.touches[0] : e
				if(ev.clientX < x-percent){
					if(elem)
						this.s = this.s > 0 ? this.s-1 : 0
					else
						this.e = this.e > this.s ? this.e-1 : this.s
					x = ev.clientX
				}
				else if(ev.clientX > x+percent){
					if(elem)
						this.s = this.s < this.e ? this.s+1 : this.e
					else
						this.e = this.e < 100 ? this.e+1 : 100
					x = ev.clientX
				}
				return x
			},
			changeRange(e){
				if(e.target.tagName === 'DIV'){
					if(this.ranged){
						let abs = (this.e - this.s) / 2 
						if(((e.offsetX / e.target.clientWidth * 100)^0)-this.s > abs)
							this.e = (e.offsetX / e.target.clientWidth * 100)^0
						else
							this.s = (e.offsetX / e.target.clientWidth * 100)^0
					}else{
						this.e = (e.offsetX / e.target.clientWidth * 100)^0
					}
				}
			},
			setData(){
				let data
				if(this.ranged)
					data = { start: this.s * this.max / 100, end: this.e * this.max / 100 }
				else
					data = { end: this.e * this.max / 100 }
				this.$emit('input', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	div{
		color: inherit;
	}
	.slider{
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: calc(100% - 4px);
		padding: 0 8px;
		max-width: 350px;
		margin: 2px;
		&-percent{
			color: var(--input_color);
			fill: var(--input_color);
			margin-bottom: 0.5rem;
			flex-wrap: nowrap;
			font-weight: 500;
			font-size: 16px;
			line-height: 22px;
			&>div>svg{
				margin-left: 4px;
			}
		}
		&-max{
			color: var(--input_placeholder);
			margin-bottom: 0.5rem;
			flex-wrap: nowrap;
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
		}
		&-bar{
			border-radius: 4px;
			height: 24px;
			padding: 8px 0;
			align-items: flex-start;
			justify-content: center;
			cursor: pointer;
			&:before{
				content: "";
				height: calc(100% - 16px); 
				width: 100%;
				position: absolute;
				left: 0;
				background-color: var(--input_border);
				border-radius: inherit;
				z-index: 0;
			}
			&:after{
				content: "";
				height: 100%; 
				width: 100%; 
				position: absolute;
				top: 0;
				left: 0;
				background-color: transparent;
				border-radius: inherit;
				z-index: 0;
			}
			&>.part{
				position: absolute;
				width: auto;
				padding: 8px;
				border-radius: inherit;
				color: var(--input_color);
				background-color: var(--main);
				transform: translate(-50%,-50%);
				border-radius: 5px;
				opacity: 0;
				z-index: 0;
				&.active{
					transform: translate(-50%,-110%);
					opacity: 1; 
					transition: opacity 0.3s, transform 0.3s;
				}
				&:before{
					content: "";
					position: absolute;
					border-radius: inherit;
					width: 100%;
					height: 100%;
					border: 1px solid var(--input_border);
				}
				&:after{
					content: "";
					position: absolute;
					bottom: 0%;
					width: 10px;
					height: 10px;
					background-color: var(--main);
					border-bottom: 1px solid var(--input_border);
					border-right: 1px solid var(--input_border);
					transform: translateY(50%) rotate(45deg);
				}
			}
			&>.bar{
				width: 100%;
				height: 100%;
				max-width: 0;
				border-radius: inherit;
				background-color: var(--input_color);
				transition: 0.3s;
			}
			&>label{
				position: absolute;
				width: 20px;
				transform: translateX(-50%);
				height: 20px;
				border-radius: 50%;
				background-color: var(--white);
				display: flex;
				align-items: center;
				justify-content: center;
				transition: 0.3s;
				z-index: 1;
				cursor: pointer;
				&:hover{
					&:before{
						box-shadow: 0 0 0 10px var(--primary);
					}
				}
				&:before{
					content: "";
					height: 100%;
					width: 100%; 
					background-color: inherit;
					border-radius: inherit;
					z-index: 1;
					position: absolute;
					opacity: 0.3;
					box-shadow: 0 0 0 0 var(--primary);
					transition: 0.3s;
				}
				&:after{
					content: "";
					height: 8px; 
					width: 8px; 
					background-color: var(--primary);
					border-radius: inherit;
					z-index: 3;
				}
			}
		}
	}
</style>