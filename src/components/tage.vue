<template>
	<div class="tag row">
		<div class="title">{{title}}</div>
		<div class="icon" @click="$emit('click', true)">
			<svg width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
				<path d="M8.71422 4.78564L5.28564 8.21422M5.28564 4.78564L8.71422 8.21422M12.7142 6.49993C12.7142 9.65584 10.1558 12.2142 6.99993 12.2142C3.84402 12.2142 1.28564 9.65584 1.28564 6.49993C1.28564 3.34402 3.84402 0.785645 6.99993 0.785645C10.1558 0.785645 12.7142 3.34402 12.7142 6.49993Z"stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			title: {
				type: String,
				default: 'Tage Title'
			}
		},
		name:'vTage',
	}
</script>

<style lang="scss" scoped>
	div{
		width: auto;	
	}
	.tag{
		min-width: 62px;
		padding: 4px 8px;
		border: 1px solid var(--input_active_border);
		background-color: var(--input_active_bg);
		color: var(--grey_2);
		stroke: var(--grey_2);
		fill: none;
		margin: 12px 6px;
		border-radius: 99px;
		cursor: default;
		&>.title{
			color: inherit;
		}
		&>.icon{
			display: none;
			height: 100%;
			padding: 0 2px;
			stroke: inherit;
			margin-left: 10px;
			cursor: pointer;
		}
		&.reverse{
			border-radius: 4px;
			background-color: transparent;
			border-color: var(--primary);
			color: var(--primary);
			stroke: var(--primary);

		}
		&.close{
			border-radius: 4px;
			background-color: var(--input_active_bg);
			border-color: transparent;
			color: var(--primary);
			stroke: var(--primary);
			&>.icon{
				display: flex;
				&:hover{
					stroke: var(--white);
				}
			}
		}
		&.close-reverse{
			border-radius: 4px;
			background-color: var(--primary);
			border-color: transparent;
			color: var(--white);
			stroke: var(--white);
			&>.icon{
				display: flex;
				&:hover{
					stroke: var(--dark);
				}
			}	
		}
	}
</style>