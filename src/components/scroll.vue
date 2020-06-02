<template>
	<div class="scroll">
		<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
	  <defs>
	    <filter id="goo">
	      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
	      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
	      <feBlend in="SourceGraphic" in2="goo" />
	    </filter>
	  </defs>
	</svg>
		<div class="zone">
			<div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob"></div>
      <div class="blob top"></div>
      <div class="blob bottom"></div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
	.scroll{
		// filter: brightness(1) contrast(30);
		overflow: hidden;
		position: relative;
		opacity: 1;
		background: transparent;
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 20%;
	}
	// .zone{
	// 	position: relative;
	// 	filter: blur(2px);	
	// }
	svg{
		position: absolute;
		left: -100vw;
		top: -100vw;
		height: 0;
		width: 0;
		opacity: 0;
		z-index: -1;
	}
.zone{
  filter: url("#goo");
  position:absolute;
  height:100px;
  width:100%;
  top:0;
  left:0;
}
.blob{
  border-radius: 50%;
  background: var(--primary);
  position:absolute;
}
.blob.top{
  border-radius: 50%;
  width: 100%;
  height: 4%;
  top: -3%;
  left:0;
}
.blob.bottom{
  border-radius: 50%;
  width: 100%;
  height:4%;
  bottom: -3%;
  left:0;
}
.blob{
	left: 0;
	bottom: 0;
	transform: scale(0.1) !important;
	// height: 10px !important;
	// width: 10px !important;
}
.blob:nth-child(1){
  width: 20px;
  height: 20px;
  left: 35%;
  bottom:-15%;
  animation: wobble 1s ease-in-out alternate infinite, blob-one ease-in-out 13s infinite;
}
.blob:nth-child(2){
  width: 33px;
  height: 33px;
  right: 24%;
  bottom:-65%;
  animation: wobble 5s ease-in-out alternate infinite, blob-two ease-in-out 22s infinite;
}
.blob:nth-child(3){
  width: 15px;
  height: 15px;
  bottom:-15%;
  left: 34%;
  animation: wobble 6s ease-in-out alternate infinite, blob-three ease-in-out 16s infinite;
}
.blob:nth-child(4){
  width: 23px;
  height: 23px;
  bottom:-19%;
  left: 30%;
  animation: wobble 7s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;
}
.blob:nth-child(4){
  width: 23px;
  height: 23px;
  bottom:-19%;
  left: 30%;
  animation: wobble 8s ease-in-out alternate infinite, blob-four ease-in-out 12s infinite;
}
.blob:nth-child(5){
  width: 5px;
  height: 5px;
  bottom:-25%;
  left: 34%;
  animation: wobble 9s ease-in-out alternate infinite, blob-five ease-in-out 32s infinite;
}
.blob:nth-child(6){
  width: 3px;
  height: 3px;
  bottom:-25%;
  right: 34%;
  animation:wobble 10s ease-in-out alternate infinite,  blob-six ease-in-out 12s infinite;
}
.blob:nth-child(7){
  width: 43px;
  height: 43px;
  bottom:-85%;
  right: 40%;
  animation: wobble 11s ease-in-out alternate infinite, blob-seven ease-in-out 32s infinite;
}
@keyframes blob-one{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-700%);
  }
}

@keyframes blob-two{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-420%);
  }
}

@keyframes blob-three{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-305%);
  }
}
@keyframes blob-four{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
    transform: translatey(-605%);
  }
}
@keyframes blob-five{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
     transform: translatey(-700%);
  }
}
@keyframes blob-six{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
     transform: translatey(-700%);
  }
}
@keyframes blob-seven{
  0%, 100%{
    transform: translatey(0);
  }
  50%{
     transform: translatey(-300%);
  }
}


@keyframes wobble {
  50% {
   border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%;
  }
  100% {
   border-radius: 38% 52% 75% 36% / 50% 40% 50% 60%;
  }
}


</style>