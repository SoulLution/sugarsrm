<template>
	<label class="row" :for="'input-' + id" :class="{'disabled': disabled, 'error': error, 'success': error === false, 'active': data && error !== false }">
		<div class="name" :class="{ [position]: focus || data, 'icon': (icon || password) && icon_position === 'left' }" >{{placeholder}}</div>
		<div class="icon left" :class="{'active': focus || data}" v-if="((icon || password) && icon_position === 'left') || error === false">
			
			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-if="icon === 'email'">
				<path d="M2.61323 5.99575C2.78189 6.11477 3.29031 6.46826 4.13851 7.05603C4.98673 7.6438 5.63653 8.09637 6.08792 8.41376C6.13752 8.44856 6.24288 8.52418 6.40406 8.64075C6.56528 8.7574 6.69923 8.85166 6.80582 8.92356C6.91248 8.99544 7.04143 9.07607 7.19279 9.16533C7.3441 9.25451 7.48673 9.32159 7.62065 9.36599C7.75461 9.41077 7.8786 9.43294 7.99267 9.43294H8.00015H8.00766C8.12172 9.43294 8.24577 9.41074 8.37972 9.36599C8.5136 9.32159 8.65636 9.25443 8.80753 9.16533C8.95879 9.07597 9.08774 8.99541 9.19441 8.92356C9.30107 8.85166 9.43492 8.7574 9.59618 8.64075C9.75734 8.52408 9.86284 8.44856 9.91243 8.41376C10.3687 8.09637 11.5295 7.29029 13.3945 5.9956C13.7566 5.74273 14.0591 5.43761 14.3021 5.08045C14.5453 4.72344 14.6668 4.34893 14.6668 3.9571C14.6668 3.62968 14.5489 3.3494 14.3133 3.11628C14.0777 2.88312 13.7986 2.7666 13.4763 2.7666H2.52392C2.142 2.7666 1.84809 2.89555 1.64224 3.15345C1.43641 3.41139 1.3335 3.73382 1.3335 4.12069C1.3335 4.43318 1.46995 4.77181 1.74273 5.13638C2.01548 5.50096 2.30574 5.78745 2.61323 5.99575Z" fill="#39C874"/>
				<path d="M13.9227 6.79183C12.2959 7.89291 11.0606 8.74864 10.2174 9.35883C9.93471 9.56708 9.70535 9.72964 9.52921 9.84613C9.35306 9.9627 9.1188 10.0817 8.82609 10.2032C8.53348 10.3249 8.26078 10.3855 8.00776 10.3855H8.00018H7.9927C7.73973 10.3855 7.46687 10.3249 7.17426 10.2032C6.88165 10.0817 6.64724 9.9627 6.47115 9.84613C6.29511 9.72964 6.06567 9.56708 5.78296 9.35883C5.11328 8.86779 3.88066 8.01201 2.08506 6.79183C1.80225 6.60346 1.55175 6.38755 1.3335 6.14453V12.0521C1.3335 12.3797 1.45001 12.6598 1.68318 12.8929C1.91629 13.1262 2.1966 13.2427 2.524 13.2427H13.4764C13.8037 13.2427 14.084 13.1262 14.3171 12.8929C14.5504 12.6597 14.6668 12.3797 14.6668 12.0521V6.14453C14.4535 6.38252 14.2056 6.59843 13.9227 6.79183Z" fill="#39C874"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="password">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99984 1C5.84593 1 4.09984 2.74609 4.09984 4.9V6.63391C3.92958 6.66019 3.78013 6.69675 3.64044 6.74759C2.80714 7.05088 2.15072 7.70731 1.84743 8.5406C1.6665 9.03768 1.6665 9.65846 1.6665 10.9C1.6665 12.1415 1.6665 12.7623 1.84743 13.2594C2.15072 14.0927 2.80714 14.7491 3.64044 15.0524C4.13752 15.2333 4.75829 15.2333 5.99982 15.2333H5.99984H9.99983C11.2414 15.2333 11.8622 15.2333 12.3592 15.0524C13.1925 14.7491 13.849 14.0927 14.1522 13.2594C14.3332 12.7623 14.3332 12.1415 14.3332 10.9C14.3332 9.65846 14.3332 9.03768 14.1522 8.5406C13.849 7.70731 13.1925 7.05088 12.3592 6.74759C12.2195 6.69675 12.0701 6.66019 11.8998 6.63391V4.9C11.8998 2.74609 10.1537 1 7.99984 1ZM10.0998 6.56667V4.9C10.0998 3.7402 9.15964 2.8 7.99984 2.8C6.84004 2.8 5.89984 3.7402 5.89984 4.9V6.56667L5.99984 6.56667H9.99983L10.0998 6.56667ZM8.6665 11.3883C9.06504 11.1578 9.33317 10.7269 9.33317 10.2333C9.33317 9.49695 8.73622 8.9 7.99984 8.9C7.26346 8.9 6.6665 9.49695 6.6665 10.2333C6.6665 10.7269 6.93464 11.1578 7.33317 11.3883V12.5667C7.33317 12.9349 7.63165 13.2333 7.99984 13.2333C8.36803 13.2333 8.6665 12.9349 8.6665 12.5667V11.3883Z" fill="#39C874"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="icon === 'location'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M8.56088 13.559C9.80088 12.5266 12.6668 9.80133 12.6668 6.66667C12.6668 4.08934 10.5775 2 8.00016 2C5.42283 2 3.3335 4.08934 3.3335 6.66667C3.3335 9.80133 6.19945 12.5266 7.43945 13.559C7.76782 13.8324 8.23251 13.8324 8.56088 13.559ZM8.00016 8.66667C9.10473 8.66667 10.0002 7.77124 10.0002 6.66667C10.0002 5.5621 9.10473 4.66667 8.00016 4.66667C6.89559 4.66667 6.00016 5.5621 6.00016 6.66667C6.00016 7.77124 6.89559 8.66667 8.00016 8.66667Z" fill="#39C874"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="!icon && error === false">
				<path d="M15.14 3L5.41875 12.7212L1 8.3025" style="fill: transparent !important; stroke: var(--primary) !important" stroke="#39C874" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>


		</div>

		<input :class="type" :type="vType === 'number' ? 'tel' : vType" :pattern="vType === 'number' ? '[0-9]{3}-[0-9]{2}-[0-9]{3}' : ''" :id="'input-' + id" @focus="checkInp(true)" @blur="checkInp(false)" @keyup="changeData()" v-model="data" :required="validate ? true : false">


		<div class="icon" :class="{'active': focus || data}" v-if="(icon || password) && icon_position === 'right'">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-if="icon === 'tenge'">
				<path d="M0.537625 0.575999H8.72963V1.824H0.537625V0.575999ZM5.35363 12H3.91363V4.32H0.537625V3.072H8.72963V4.32H5.35363V12Z" fill="#39C874"/>
			</svg>
		</div>

		<div class="icon right password" v-if="password" @click="vType = (vType === 'text' ? 'password' : 'text')">
			
			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-if="vType === 'password'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M8 11.75C6.06271 11.75 4.00451 10.5827 2.37694 8C4.00451 5.41731 6.06271 4.25 8 4.25C9.93729 4.25 11.9955 5.41731 13.6231 8C11.9955 10.5827 9.93729 11.75 8 11.75ZM15.1478 7.6221C13.3086 4.46908 10.7206 2.75 8 2.75C5.27937 2.75 2.69142 4.46908 0.852166 7.62209C0.715945 7.85562 0.715945 8.14438 0.852166 8.3779C2.69142 11.5309 5.27937 13.25 8 13.25C10.7206 13.25 13.3086 11.5309 15.1478 8.3779C15.2841 8.14438 15.2841 7.85562 15.1478 7.6221ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" fill="#D6D8DC"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else>
				<path d="M1.5 5.5C2.02887 6.28109 2.60431 6.9477 3.21251 7.5M14.5 5.5C13.9712 6.28105 13.3959 6.94771 12.7877 7.5M12.7877 7.5L14.5 9.23429M12.7877 7.5C11.8546 8.34737 10.8442 8.92546 9.80556 9.23429M3.21251 7.5L1.5 9.23429M3.21251 7.5C4.14563 8.34736 5.15608 8.92546 6.19472 9.23429M9.80556 9.23429L10.5278 11.5M9.80556 9.23429C8.61431 9.58851 7.38598 9.5885 6.19472 9.23429M6.19472 9.23429L5.47222 11.5" style="stroke: var(--grey_3) !important;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			
		</div>

		<div class="message" :title="message" v-if="message">{{message}}</div>
	</label>
</template>

<script>
	export default{
		props: { 
			type: {
				type: String,
				default: 'text'
			},
			id: {
				type: [Number, String],
				default: this._uid
			},
			disabled: {
				type: Boolean,
				default: false
			},
			load: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: 'Input placeholder'
			},
			position: {
				type: String,
				default: 'none'
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
				default: 'left'
			},
			errno: {
				type: String,
				default: ''
			}
		},
		name: 'vInput',
		data(){
			return{
				data: this.value,
				message: this.errno,
				vType: this.type,
				focus: false,
				error: null,
				password: false,
			}
		},
		watch:{
			value:{
				handler(newData){
					this.data = newData
				}
			},
			errno:{
				handler(newData){
					this.message = newData
				}
			},
			type:{
				handler(newData){
					this.vType = newData
				}
			}
		},
		async created(){
			if(!this.id) this.id = this._uid
			if(this.type === 'password') this.password = true
		},
		methods: {
			changeData(){
				if(this.vType === 'number')
					if(this.data.match(/[^0-9]/g))
						this.data = this.data.replace(/[^0-9]/g, '')

				this.$emit('input', this.data)
			},
			changeType(){
				if(this.type === 'password')
					this.type = 'text'
				else
					this.type = 'password'
			},
			checkInp(type){
				this.focus = type
				if(!type){
					this.error = this.$f.validateInput(this.data, this.length, this.vType === 'email' ? true : false)
					this.$emit('error', this.error)
				}
				else
					this.error = null
				if(this.error)
					this.message = 'Ошибка ввода'
				else
					this.message = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	label{
		max-width: 100%;
		width: 100%;
    // height: calc(1rem + 32px);
		// width: 325px;
		margin: 16px;
		padding: unset;
		border-radius: 5px;
		border: 1px solid var(--input_border);
		background-color: var(--input_bg);
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		overflow: visible;
		z-index: 0;
		fill: var(--input_icon);
		color: var(--input_color);
		box-sizing: border-box;
		flex-wrap: nowrap;
		transition: 0.3s;
		&.disabled{
			pointer-events: none;
		}
		&.bottom{
			border-radius: 0;
			border: unset;
			border-bottom: 1px solid var(--input_border);
		}
		&.active{
			border-radius: 0px;
			border-color: var(--input_active_border);
			background-color: var(--input_active_bg);
		}
		&>.name{
			position: absolute;
			color: var(--input_placeholder);
			font-size: 15px;
			display: block;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			width: auto;
			left: 16px;
			transform: translate(0);
			line-height: 150%;
			transition: 0.3s;
			z-index: 2;
			user-select: none;
			&.icon{
				margin-left: 32px;
			}
			&.none{
				display: none;
			}
			&.under{
				font-size: 12px;
				transform: translate(-6px, -70%);
			}
			&.border{
				font-size: 17px;
				transform: translate(-10px, -115%);
				padding: 1px 1%;
				background-color: inherit;
			}
		}
		&>.icon{
			width: auto;
			z-index: 2;
			fill: inherit;
			margin-left:16px;
			&.password{
				cursor: pointer;
				fill: var(--input_icon_password);
			}
			&.active{
				fill: var(--input_icon_active);
			}
			&.top{

			}
			&.right{
				margin-left: 16px;
				margin-right: 16px;
			}
			&.bottom{

			}
			&.left{
				// margin-right: 10px;
			}
		}

		&>input{
			width: 100%;
			outline: none;
			font-size: 15px;
			padding: 12px 16px;
			line-height: 150%;
			color: inherit; 
			border: unset;
			z-index: 1;
			background-color: unset;
		}


		&>.message{
	    position: absolute;
	    bottom: -5px;
	    transform: translateY(100%);
	    left: 0;
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
		border-color: var(--error) !important;
		background-color: transparent !important;
		&>.message{
			color: var(--error);
		}
	}
	.success{
		border-color: var(--primary) !important; 
		&>.message{
			color: var(--primary);
		}
	}



  .load{
  	animation: rotate 1s infinite linear forwards;
  }
  @keyframes rotate{
		0%		{transform: rotate(360deg)}
		100%	{transform: rotate(0deg)}
	}
	// @keyframes
</style>