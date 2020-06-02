<template>
	<div class="dot">
		<div></div>
		<div></div>
		<div></div>
	</div>
</template>

<script>
	export default{
	}
</script>

<style lang="scss" scoped>
	.dot{
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 8px 12px;
		width: auto;
		margin: 2px;
		background-color: var(--main);
		box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
		&>div{
			height: 4px;
			width: 4px;
			background-color: var(--primary);
			box-shadow: 0px 8px 65px rgba(0, 0, 0, 0.25);
			border-radius: 10px;
			margin: 0 2px;
			animation: dot-move 1s linear 0.3s infinite;
			&:first-child{
				animation: dot-move 1s linear infinite;
			}
			&:last-child{
				animation: dot-move 1s linear 0.6s infinite;
			}
		}
		
	}
	@keyframes dot-move {
		from {transform: translateY(-2px)}
		50% {transform: translateY(2px)}
		to {transform: translateY(-2px)}
	}
</style>