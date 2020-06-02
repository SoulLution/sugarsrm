<!-- <template>
	<div class="sidebar">
		<div class="sidebar-section" :class="{'active': active}" v-for="item in data">
			<div class="sidebar-section-header" :class="{ 'open': item.open, 'link': item.links }">{{item.name}}</div>
			<div class="sidebar-section-body" :class="{ 'open': item.open }">
				<router-link :to="link.route" class="sidebar-section-body-link" v-for="link in item.links">{{link.name}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		prors: ['data', 'active'],
		name: 'vSidebar',
		data(){
			return{

			}
		},
		created(){
			for(i in this.data)
				this.$set(data[i], 'open', false)
		}
	}
</script>

<style lang="scss" scoped>
	@media screen and (max-width: 1264px){
		.sidebar{
			position: absolute;
			top: 0;
			height: 100%;
			left: 0;
			transform: translateX(-100%);
			width: 100%;
			max-width: 400px;
			transition: 0.3s;
			padding: 15px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			z-index: 10;
			background-color: #fff;
			&.active{
				transform: translateX(0%);
			}
			&-section{
				width: 100%;
				border-bottom: 1px solid rgba(196, 196, 196, 0.14);
				cursor: pointer;
				&-header{
					width: 100%;
					&.open:after{
						transorm: rotate(-45deg);
					}
					&.link:after{
						content: "";
						position: absolute;
						border-right: 1px solid #E28438;
						border-bottom: 1px solid #E28438;
						transorm: rotate(45deg);
						right: 0;
						height: 8px;
						width: 8px;
					}
				}
				&-body{
					width: 100%;
					height: 100%;
					max-height: 0;
					transition: 0.3s;
					&.open{
						max-height: 500vw;
					}
					&-link{
						width: 100%;
					}
				}
			}
		}
	}

</style> -->