<template>
	<div class="progress a-start">
		<div class="progress-percent">{{percent < 100 ? percent + '%' : title}}</div>
		<div class="progress-bar"><div :style="{maxWidth: percent + '%'}"></div></div>
	</div>
</template>

<script>
	export default{
		props: {
			percent: {
				type: Number,
				default: 0
			},
			title: {
				type: String,
				default: 'title'
			}
		},
		name: 'vProgressBar'
	}
</script>

<style lang="scss" scoped>
	.progress{
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		width: 100%;
		max-width: 350px;
		margin: 2px;
		&-percent{
			color: var(--progress_color);
			margin-bottom: 0.5rem;
		}
		&-bar{
			background-color: var(--progress_bg);
			border-radius: 4px;
			height: 12px;
			overflow: hidden;
			align-items: flex-start;
			justify-content: flex-start;

			&>div{
				width: 100%;
				height: 100%;
				max-width: 0;
				background-color: var(--progress_color);
				transition: 0.3s;
			}
		}
	}
</style>