<template>
	<div class="min_loader">
		<div class="min_loader-load">
			<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<g>
					<path d="M2.20799 13.4917C2.37363 13.8603 2.2091 14.2933 1.8405 14.459C1.4719 14.6246 1.03881 14.4601 0.873162 14.0915C0.300253 12.8166 0 11.4285 0 10C0 4.47726 4.47726 0 10 0C15.5227 0 20 4.47726 20 10C20 15.5227 15.5227 20 10 20C7.65339 20 5.42972 19.1881 3.65267 17.7281C3.34042 17.4715 3.29526 17.0105 3.55179 16.6982C3.80833 16.386 4.26941 16.3408 4.58166 16.5973C6.09934 17.8442 7.9955 18.5366 10 18.5366C14.7145 18.5366 18.5366 14.7145 18.5366 10C18.5366 5.28549 14.7145 1.46341 10 1.46341C5.28549 1.46341 1.46341 5.28549 1.46341 10C1.46341 11.2208 1.71947 12.4046 2.20799 13.4917Z"/>
				</g>
			</svg>
		</div>
		<div class="min_loader-title">{{title}}</div>
	</div>
</template>

<script>
	export default{
		props: {
			title: {
				type: String,
				default: 'Loader title'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.min_loader{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 8px 12px;
		width: auto;
		margin: 2px;
		fill: var(--grey_2);
		color: var(--grey_2);
		&-load{
			display: flex;
			align-items: center;
			justify-content: center;
			max-height: 24px;
			min-height: 24px;
			max-width: 24px;
			min-width: 24px;
			border-radius: 50%;
			animation: min-loader-rotate 1.5s linear
			 infinite;
		}
		&-title{
			color: inherit;
			user-select: none;
		}



	}
	@keyframes min-loader-rotate {
		from {transform: rotate(0)}
		to {transform: rotate(360deg)}
	}
</style>