<template>
	<div class="button row" :class="{'reverse': (reverse || active) && (reverse !== active), 'disabled': disabled, 'float': float, 'circle': float === 'right' || float === 'next'}" @click="e=>createClick(e)" ref="button">
		<div class="button-bg" :style="{backgroundColor: bg ? `${bg}` : '', color: color ? `${color}` : ''}"></div>

		<div class="dot" v-if="load == 1">
			<div></div>
			<div></div>
			<div></div>
		</div>

		<div class="min_loader" v-if="load == 2">
			<div class="min_loader-load">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.20799 15.4917C4.37363 15.8603 4.2091 16.2933 3.8405 16.459C3.4719 16.6246 3.03881 16.4601 2.87316 16.0915C2.30025 14.8166 2 13.4285 2 12C2 6.47726 6.47726 2 12 2C17.5227 2 22 6.47726 22 12C22 17.5227 17.5227 22 12 22C9.65339 22 7.42972 21.1881 5.65267 19.7281C5.34042 19.4715 5.29526 19.0105 5.55179 18.6982C5.80833 18.386 6.26941 18.3408 6.58166 18.5973C8.09934 19.8442 9.9955 20.5366 12 20.5366C16.7145 20.5366 20.5366 16.7145 20.5366 12C20.5366 7.28549 16.7145 3.46341 12 3.46341C7.28549 3.46341 3.46341 7.28549 3.46341 12C3.46341 13.2208 3.71947 14.4046 4.20799 15.4917Z" fill="white"/>
				</svg>

			</div>
		</div>


		<div class="button-side" v-if="float && !load">

			<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-if="float === 'right'">
				<path d="M9 16H23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M16 9L23 16L16 23" style="fill: transparent !important" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>

			<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="float === 'next'">
				<path d="M13 22L19 16L13 10" style="fill: transparent !important" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>

			
			<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="float === 'arrows'">
				<path d="M13 11V20M13 11L10 14M13 11L16 14M20 21V12M20 21L17 18M20 21L23 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>


			<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="float === 'close'">
				<path d="M11 11L16 16M16 16L21 11M16 16L11 21M16 16L21 21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>


			<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="float === 'menu'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 12C9.94772 12 9.5 12.4477 9.5 13C9.5 13.5523 9.94772 14 10.5 14H21.5C22.0523 14 22.5 13.5523 22.5 13C22.5 12.4477 22.0523 12 21.5 12H10.5ZM10.5 18C9.94772 18 9.5 18.4477 9.5 19C9.5 19.5523 9.94772 20 10.5 20H16.5C17.0523 20 17.5 19.5523 17.5 19C17.5 18.4477 17.0523 18 16.5 18H10.5Z" fill="white"/>
			</svg>


			<svg width="32" height="32" viewBox="0 0 32 32" fill="inherit" xmlns="http://www.w3.org/2000/svg" v-else-if="float === 'account'">
				<g clip-path="url(#clip0)">
				<path d="M16.5277 15.1144C17.5384 15.1144 18.4136 14.7638 19.1287 14.0722C19.8438 13.3807 20.2063 12.5346 20.2063 11.5571C20.2063 10.5799 19.8438 9.73369 19.1286 9.04195C18.4134 8.35055 17.5383 8 16.5277 8C15.5169 8 14.6419 8.35055 13.9268 9.04206C13.2117 9.73357 12.8491 10.5798 12.8491 11.5571C12.8491 12.5346 13.2117 13.3808 13.9269 14.0723C14.6422 14.7637 15.5172 15.1144 16.5277 15.1144Z" fill="white"/>
				<path d="M22.9642 20.5874C22.9435 20.2996 22.9018 19.9857 22.8404 19.6542C22.7784 19.3202 22.6986 19.0045 22.6031 18.7159C22.5044 18.4177 22.3701 18.1231 22.2042 17.8408C22.032 17.5479 21.8297 17.2928 21.6027 17.0829C21.3654 16.8632 21.0748 16.6867 20.7387 16.5579C20.4038 16.4298 20.0327 16.3649 19.6357 16.3649C19.4798 16.3649 19.329 16.4267 19.0378 16.61C18.8586 16.7231 18.649 16.8538 18.415 16.9983C18.215 17.1216 17.9439 17.2371 17.6092 17.3417C17.2826 17.4439 16.9509 17.4957 16.6236 17.4957C16.2963 17.4957 15.9648 17.4439 15.6379 17.3417C15.3034 17.2372 15.0324 17.1217 14.8326 16.9985C14.6008 16.8552 14.3911 16.7245 14.2092 16.6099C13.9184 16.4266 13.7675 16.3647 13.6115 16.3647C13.2144 16.3647 12.8434 16.4298 12.5087 16.558C12.1729 16.6866 11.8821 16.8631 11.6445 17.083C11.4177 17.293 11.2153 17.548 11.0433 17.8408C10.8775 18.1231 10.7433 18.4175 10.6444 18.716C10.549 19.0046 10.4692 19.3202 10.4072 19.6542C10.3458 19.9853 10.3041 20.2993 10.2835 20.5878C10.2632 20.8704 10.2529 21.1637 10.2529 21.4599C10.2529 22.2308 10.5064 22.855 11.0061 23.3153C11.4997 23.7695 12.1528 23.9999 12.947 23.9999H20.3009C21.0952 23.9999 21.748 23.7696 22.2417 23.3153C22.7416 22.8553 22.995 22.2311 22.995 21.4598C22.9949 21.1622 22.9846 20.8687 22.9642 20.5874Z" fill="white"/>
				</g>
				<defs>
				<clipPath id="clip0">
				<rect x="9" y="8" width="14" height="16" fill="white"/>
				</clipPath>
				</defs>
			</svg>


		</div>


		<div class="button-side" v-if="!load && !float && (icon && icon !== 'next')">
			
			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" v-if="icon === 'photo'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.61094C1 5.35305 2.01972 4.33333 3.27761 4.33333C3.92463 4.33333 4.51611 3.96777 4.80547 3.38906L5.13333 2.73333C5.4602 2.07961 6.12835 1.66667 6.85924 1.66667H9.14076C9.87165 1.66667 10.5398 2.07961 10.8667 2.73333L11.1945 3.38906C11.4839 3.96777 12.0754 4.33333 12.7224 4.33333C13.9803 4.33333 15 5.35305 15 6.61094V9.33333C15 10.2626 15 10.7273 14.9231 11.1137C14.6075 12.7005 13.3671 13.9408 11.7804 14.2565C11.394 14.3333 10.9293 14.3333 10 14.3333H6C5.07069 14.3333 4.60603 14.3333 4.21964 14.2565C2.63288 13.9408 1.39249 12.7005 1.07686 11.1137C1 10.7273 1 10.2626 1 9.33333V6.61094ZM10.6667 9.33333C10.6667 10.8061 9.47276 12 8 12C6.52724 12 5.33333 10.8061 5.33333 9.33333C5.33333 7.86057 6.52724 6.66667 8 6.66667C9.47276 6.66667 10.6667 7.86057 10.6667 9.33333ZM12.6667 7.66667C13.219 7.66667 13.6667 7.21895 13.6667 6.66667C13.6667 6.11438 13.219 5.66667 12.6667 5.66667C12.1144 5.66667 11.6667 6.11438 11.6667 6.66667C11.6667 7.21895 12.1144 7.66667 12.6667 7.66667Z" fill="white"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" v-else-if="icon === 'password'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99984 1C5.84593 1 4.09984 2.74609 4.09984 4.9V6.63391C3.92958 6.66019 3.78013 6.69675 3.64044 6.74759C2.80714 7.05088 2.15072 7.70731 1.84743 8.5406C1.6665 9.03768 1.6665 9.65846 1.6665 10.9C1.6665 12.1415 1.6665 12.7623 1.84743 13.2594C2.15072 14.0927 2.80714 14.7491 3.64044 15.0524C4.13752 15.2333 4.75829 15.2333 5.99982 15.2333H5.99984H9.99983C11.2414 15.2333 11.8622 15.2333 12.3592 15.0524C13.1925 14.7491 13.849 14.0927 14.1522 13.2594C14.3332 12.7623 14.3332 12.1415 14.3332 10.9C14.3332 9.65846 14.3332 9.03768 14.1522 8.5406C13.849 7.70731 13.1925 7.05088 12.3592 6.74759C12.2195 6.69675 12.0701 6.66019 11.8998 6.63391V4.9C11.8998 2.74609 10.1537 1 7.99984 1ZM10.0998 6.56667V4.9C10.0998 3.7402 9.15964 2.8 7.99984 2.8C6.84004 2.8 5.89984 3.7402 5.89984 4.9V6.56667L5.99984 6.56667H9.99983L10.0998 6.56667ZM8.6665 11.3883C9.06504 11.1578 9.33317 10.7269 9.33317 10.2333C9.33317 9.49695 8.73622 8.9 7.99984 8.9C7.26346 8.9 6.6665 9.49695 6.6665 10.2333C6.6665 10.7269 6.93464 11.1578 7.33317 11.3883V12.5667C7.33317 12.9349 7.63165 13.2333 7.99984 13.2333C8.36803 13.2333 8.6665 12.9349 8.6665 12.5667V11.3883Z" fill="white"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" v-else-if="icon === 'filter'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M5.375 1.875V5.375C5.375 5.9 5.025 6.25 4.5 6.25C3.975 6.25 3.625 5.9 3.625 5.375V1.875C3.625 1.35 3.975 1 4.5 1C5.025 1 5.375 1.35 5.375 1.875ZM3.625 13.075C2.6625 12.725 1.875 11.7625 1.875 10.625C1.875 9.1375 3.0125 8 4.5 8C5.9875 8 7.125 9.1375 7.125 10.625C7.125 11.7625 6.425 12.725 5.375 13.075V13.25V14.125C5.375 14.65 5.025 15 4.5 15C3.975 15 3.625 14.65 3.625 14.125V13.25V13.075ZM10.625 10.625V14.125C10.625 14.65 10.975 15 11.5 15C12.025 15 12.375 14.65 12.375 14.125V10.625C12.375 10.1 12.025 9.75 11.5 9.75C10.975 9.75 10.625 10.1 10.625 10.625ZM11.5 8C10.0125 8 8.875 6.8625 8.875 5.375C8.875 4.2375 9.6625 3.275 10.625 2.925V2.75V1.875C10.625 1.35 10.975 1 11.5 1C12.025 1 12.375 1.35 12.375 1.875V2.75V2.925C13.3375 3.275 14.125 4.2375 14.125 5.375C14.125 6.8625 12.9875 8 11.5 8Z" fill="#6D6F80"/>
			</svg>

			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" v-else-if="icon === 'distantion'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M9.68614 18.9345C9.44619 18.706 9.43693 18.3262 9.66546 18.0862L11.2 16.475H3.6C1.61178 16.475 0 14.8633 0 12.875C0 10.8868 1.61178 9.27503 3.6 9.27503H5.1C5.43137 9.27503 5.7 9.54366 5.7 9.87503C5.7 10.2064 5.43137 10.475 5.1 10.475H3.6C2.27452 10.475 1.2 11.5496 1.2 12.875C1.2 14.2005 2.27452 15.275 3.6 15.275H11.0973L9.6867 13.935C9.44645 13.7068 9.43671 13.327 9.66494 13.0868C9.89316 12.8465 10.2729 12.8368 10.5132 13.065L13.0132 15.44C13.1287 15.5497 13.1958 15.7008 13.1998 15.86C13.2038 16.0192 13.1443 16.1735 13.0345 16.2888L10.5344 18.9138C10.3059 19.1538 9.9261 19.163 9.68614 18.9345Z" fill="#6D6F80"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M4.55749 1.11192C4.77184 1.36463 4.74074 1.74325 4.48804 1.9576L2.93486 3.27504H10.2999C12.2882 3.27504 13.8999 4.88681 13.8999 6.87504C13.8999 8.86326 12.2882 10.475 10.2999 10.475H8.79994C8.46856 10.475 8.19994 10.2064 8.19994 9.87504C8.19994 9.54367 8.46856 9.27504 8.79994 9.27504H10.2999C11.6254 9.27504 12.6999 8.20052 12.6999 6.87504C12.6999 5.54955 11.6254 4.47504 10.2999 4.47504H2.8172L4.51029 6.06232C4.75203 6.28895 4.76428 6.66866 4.53764 6.9104C4.311 7.15215 3.9313 7.1644 3.68956 6.93776L0.889568 4.31276C0.764792 4.19578 0.695869 4.03111 0.700119 3.86013C0.704368 3.68915 0.781385 3.52811 0.911818 3.41747L3.71181 1.04247C3.96451 0.828121 4.34314 0.859215 4.55749 1.11192Z" fill="#6D6F80"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M7.09992 11C7.65221 11 8.09992 10.5523 8.09992 10C8.09992 9.44775 7.65221 9.00004 7.09992 9.00004C6.54764 9.00004 6.09992 9.44775 6.09992 10C6.09992 10.5523 6.54764 11 7.09992 11ZM7.09992 12C8.20449 12 9.09992 11.1046 9.09992 10C9.09992 8.89547 8.20449 8.00004 7.09992 8.00004C5.99535 8.00004 5.09992 8.89547 5.09992 10C5.09992 11.1046 5.99535 12 7.09992 12Z" fill="#6D6F80"/>
				<path fill-rule="evenodd" clip-rule="evenodd" d="M3.74712 0.966176C4.04194 0.7161 4.48367 0.752377 4.73375 1.0472C4.98382 1.34203 4.94755 1.78375 4.65272 2.03383L3.30734 3.175H10.3999C12.4434 3.175 14.0999 4.83155 14.0999 6.875C14.0999 8.91846 12.4434 10.575 10.3999 10.575H9.22023C8.97018 11.4553 8.16035 12.1 7.19992 12.1C6.2395 12.1 5.42967 11.4553 5.17962 10.575H3.7C2.42975 10.575 1.4 11.6047 1.4 12.875C1.4 14.1453 2.42975 15.175 3.7 15.175H10.9468L9.71782 14.0075C9.43754 13.7412 9.42617 13.2982 9.69244 13.0179C9.9587 12.7376 10.4018 12.7262 10.6821 12.9925L13.1821 15.3675C13.3168 15.4955 13.3951 15.6717 13.3998 15.8575C13.4044 16.0432 13.335 16.2232 13.2069 16.3578L10.7068 18.9828C10.4402 19.2627 9.99712 19.2735 9.71718 19.0069C9.43723 18.7403 9.42643 18.2972 9.69305 18.0172L11.0666 16.575H3.7C1.65655 16.575 0 14.9185 0 12.875C0 10.8316 1.65655 9.175 3.7 9.175H5.2C5.22255 9.175 5.24484 9.17607 5.26684 9.17815C5.58668 8.42679 6.33178 7.9 7.19992 7.9C8.06685 7.9 8.81108 8.42532 9.13167 9.175H10.3999C11.6702 9.175 12.6999 8.14529 12.6999 6.87504C12.6999 5.60478 11.6702 4.575 10.3999 4.575H3.17007L4.67868 5.98933C4.96072 6.25374 4.97501 6.69672 4.7106 6.97876C4.44618 7.2608 4.0032 7.27509 3.72116 7.01068L0.921174 4.38568C0.775602 4.2492 0.695192 4.05709 0.70015 3.85761C0.705107 3.65813 0.794961 3.47025 0.947132 3.34118L3.74712 0.966176ZM8.91195 9.175C8.60485 8.53887 7.95364 8.1 7.19992 8.1C6.42604 8.1 5.76023 8.56267 5.46399 9.22649C5.71973 9.3307 5.9 9.5818 5.9 9.875C5.9 10.199 5.67994 10.4715 5.38115 10.5513C5.61743 11.3318 6.34232 11.9 7.19992 11.9C8.04883 11.9 8.76771 11.3433 9.01136 10.575H8.89994C8.63177 10.575 8.39883 10.4242 8.28127 10.2028C8.1861 10.7134 7.73816 11.1 7.19992 11.1C6.59241 11.1 6.09992 10.6076 6.09992 10C6.09992 9.39252 6.59241 8.9 7.19992 8.9C7.68173 8.9 8.09119 9.20976 8.24001 9.641C8.33629 9.36947 8.5954 9.175 8.89994 9.175H8.91195ZM9.06293 10.375H8.89994C8.62379 10.375 8.39994 10.1511 8.39994 9.875C8.39994 9.59886 8.62379 9.375 8.89994 9.375H8.99473C9.06289 9.57074 9.09992 9.78108 9.09992 10C9.09992 10.1284 9.08719 10.2538 9.06293 10.375ZM9.26654 10.375C9.28847 10.2533 9.29992 10.128 9.29992 10C9.29992 9.78235 9.26681 9.57243 9.20535 9.375H10.3999C11.7806 9.375 12.8999 8.25571 12.8999 6.875C12.8999 5.49429 11.7806 4.375 10.3999 4.375H2.9172C2.87616 4.375 2.83929 4.40007 2.8242 4.43823C2.80911 4.47639 2.81887 4.51989 2.8488 4.54796L4.54189 6.13523C4.74335 6.3241 4.75355 6.64052 4.56469 6.84197C4.37582 7.04343 4.05941 7.05364 3.85795 6.86477L1.05796 4.23977C0.953982 4.14229 0.896547 4.00506 0.900088 3.86258C0.903629 3.7201 0.96781 3.58589 1.0765 3.4937L3.87649 1.1187C4.08708 0.940072 4.4026 0.965984 4.58123 1.17657C4.75985 1.38716 4.73394 1.70268 4.52335 1.88131L2.97017 3.19874C2.93819 3.22587 2.92653 3.27008 2.94098 3.30945C2.95543 3.34883 2.99292 3.375 3.03486 3.375H10.3999C12.3329 3.375 13.8999 4.94204 13.8999 6.87504C13.8999 8.80803 12.3329 10.375 10.3999 10.375H9.26654ZM5.33341 10.357C5.54478 10.2986 5.7 10.105 5.7 9.87503C5.7 9.66701 5.57297 9.48863 5.39224 9.41329C5.33231 9.59807 5.29992 9.79525 5.29992 10C5.29992 10.122 5.31143 10.2414 5.33341 10.357ZM5.1945 9.375H3.7C1.767 9.375 0.2 10.942 0.2 12.875C0.2 14.808 1.767 16.375 3.7 16.375H11.3C11.34 16.375 11.3761 16.3988 11.3919 16.4356C11.4077 16.4724 11.4 16.515 11.3724 16.544L9.83788 18.1552C9.64743 18.3551 9.65515 18.6716 9.85511 18.8621C10.0551 19.0525 10.3716 19.0448 10.562 18.8448L13.0621 16.2198C13.1536 16.1237 13.2032 15.9952 13.1998 15.8625C13.1965 15.7298 13.1406 15.6039 13.0444 15.5125L10.5443 13.1375C10.3441 12.9473 10.0276 12.9554 9.83744 13.1556C9.64725 13.3558 9.65536 13.6723 9.85557 13.8625L11.2661 15.2025C11.2958 15.2307 11.3053 15.2741 11.2901 15.3121C11.275 15.3501 11.2382 15.375 11.1973 15.375H3.7C2.31929 15.375 1.2 14.2557 1.2 12.875C1.2 11.4943 2.31929 10.375 3.7 10.375H5.13331C5.11138 10.2533 5.09992 10.128 5.09992 10C5.09992 9.78238 5.13304 9.57242 5.1945 9.375ZM7.19992 9.1C6.70287 9.1 6.29992 9.50295 6.29992 10C6.29992 10.4971 6.70287 10.9 7.19992 10.9C7.69698 10.9 8.09992 10.4971 8.09992 10C8.09992 9.50298 7.69698 9.1 7.19992 9.1Z" fill="#6D6F80"/>
			</svg>


		</div>
		<div class="button-name" v-if="!load && !float">{{title}}</div>
		<div class="button-side" v-if="!load && !float && (icon && icon === 'next')">
			<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" v-if="icon === 'next'">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15.75C3.71979 15.75 0.25 12.2802 0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75ZM8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25ZM6.66967 4.96967C6.37678 5.26256 6.37678 5.73744 6.66967 6.03033L8.63934 8L6.66967 9.96967C6.37678 10.2626 6.37678 10.7374 6.66967 11.0303C6.96256 11.3232 7.43744 11.3232 7.73033 11.0303L10.2303 8.53033C10.5232 8.23744 10.5232 7.76256 10.2303 7.46967L7.73033 4.96967C7.43744 4.67678 6.96256 4.67678 6.66967 4.96967Z" fill="#6D6F80"/>
			</svg>


		</div>
	</div>
</template>

<script>
	export default{
		props: {
			title: {
				type: String,
				default: 'Button title'
			},
			reverse: {
				type: Boolean,
				default: false
			}, 
			icon: {
				type: String,
				default: ''
			},
			float: {
				type: String,
				default: ''
			},
			bg: {
				type: String,
				default: ''
			},
			color: {
				type: String,
				default: ''
			},
			disabled:{
				type: Boolean,
				default: false
			},
			load:{
				type: Number,
				default: 0
			}
		},
		name: 'vButton',
		data(){
			return{
				active: false
			}
		},
		methods: {
			createClick(e){
				let div = document.createElement("div")
				div.classList.add('button-click')
				let x = e.offsetX,
				    y = e.offsetY,
				    but = this.$refs['button']
			  div.style.left = x + 'px'
	      div.style.top = y  + 'px'
	      if(!this.disabled && !this.load){
					but.classList.add('active')
					but.appendChild(div)
	      }

				setTimeout( ()=> {
					div.style.boxShadow = `0 0 0 ${but.clientWidth*1.25}px`
					div.style.opacity = '0'
				},0)
				setTimeout( ()=> {
					but.classList.remove('active')
				},200)

	      setTimeout( ()=> {
	        // but.removeChild(div);
	      }, 600);
	      // 	this.$emit.realClick(true)
	      if(!this.disabled && !this.load)
					this.$emit('click', true)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button{
		border-radius: 12px;
		// margin: 16px;
		width: 325px;
		height: auto;
		padding: 14px 16px;
		// min-width: 300px;
		cursor: pointer;
		overflow: hidden;
		fill: var(--button_color);
		stroke: var(--button_color);
		color: var(--button_color);
		&:after{
			position: absolute;
			top: 0;
			left: 0;
			content: "";
			height: 100%;
			width: 100%;
			border-radius: inherit;
			z-index: 3;
		}

		&.active{
			.button-bg{
				transition: 0s;
				border-color: var(--button_active_border);
				background-color: var(--button_active_bg);
			}
		}
		&.min{
			min-width: 170px;
			padding: 8px 12px;
		}
		&-bg{
	    border-radius: inherit;
			position: absolute;
			border: 2px solid var(--button_border);
			background: var(--button_bg);
			height: 100%;
			width: 100%;
			transition: 0.3s;
			z-index: 0;
		}
		&-side{
			fill: inherit !important;
			stroke: inherit !important;
			width: auto;
			margin: 0 8px;
		}
		&-name{
			user-select: none;
			width: auto;
			z-index: 1;
			color: inherit;
			font-weight: 500;
			font-size: 15px;
			line-height: 22px;
			align-items: center;
	    justify-content: center;
	    text-align: center;
		}
		&.disabled{
			cursor: default;
			fill: var(--button_disabled_color) !important;
			stroke: var(--button_disabled_color) !important;
			color: var(--button_disabled_color) !important;
			.button-bg{
				border-color: var(--button_disabled_border);
				background-color: var(--button_disabled_bg);
			}
		}
		&.dark{
			&.active{
				.button-bg{
					transition: 0s;
					border-color: var(--button_dark_active_bg);
					background-color: var(--button_dark_active_bg);
				}
			}
			.button-bg{
				border-color: var(--button_dark_bg);
				background-color: var(--button_dark_bg);
			}
		}

		&.invisible{
			fill: var(--button_invisible_color);
			stroke: var(--button_invisible_color);
			color: var(--button_invisible_color);
			.button-bg{
				border-color: var(--button_invisible_border);
				background-color: transparent;
			}
		}

		&.dash{
			color: var(--button_dash_color);
			fill: var(--button_dash_color);
			stroke: var(--button_dash_color);
			.button-bg{
				border-style: dashed;
				border-color: var(--button_dash_border);
				background-color: transparent;
			}
			.button-name{
				// margin-left: 20px;
				&:after, &:before{
					// content: "";
					position: absolute;
					left: -20px;
					height: 1px;
					width: 12px;
					background-color: var(--button_dash_color);
				}
				&:after{
					transform: rotate(90deg);
				}
			}
		}
		&.text{
			color: var(--button_text_color);
			fill: var(--button_text_color);
			stroke: var(--button_text_color);
			.button-bg{
				border-color: transparent;
				background-color: transparent;
			}
			&.active{
				color: var(--button_text_active_color);
				fill: var(--button_text_active_color);
				stroke: var(--button_text_active_color);
			}
		}

		&.down{
			padding-right: 16px 32px 16px 12px;
			.button-name{
				width: 100%;
				&:after{
					content: "";
					position: absolute;
					right: 0;
					height: 12px;
					width: 12px;
					border-bottom: 1px solid var(--button_color);
					border-right: 1px solid var(--button_color);
					transform: rotate(45deg);
					top: 10%;
				}
			}
		}

		&.float{
			min-width: 32px;
			max-width: 32px;
			padding: 0;
			.button-bg{
				border-color: var(--button_bg);
				background-color: var(--button_bg);
			}
			&.circle{
				border-radius: 50%;
			}
			&.sec{
				.button-bg{
					border-color: var(--button_dark_bg);
					background-color: var(--button_dark_bg);
				}

			}
			&.act{
				fill: var(--button_bg);
				stroke: var(--button_bg);
				.button-bg{
					border-color: var(--button_dark_bg);
					background-color: var(--button_dark_bg);
				}				
			}
			&.disabled{
				.button-bg{
					border-color: var(--button_disabled_border);
					background-color: var(--button_disabled_bg);
				}
			}
		}
	}


	.dot{
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 8px 12px;
		width: auto;
		margin: 2px;
    border-radius: 50px;
		&>div{
			height: 4px;
			width: 4px;
			background-color: var(--button_color);
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

	.min_loader{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 6px 0;
		width: auto;
		&-load{
			display: flex;
			align-items: center;
			justify-content: center;
			max-height: 24px;
			min-height: 24px;
			max-width: 24px;
			min-width: 24px;
			border-radius: 50%;
			animation: min-loader-rotate 1.5s linear infinite;
			fill: var(--button_color);
		}
	}
	@keyframes min-loader-rotate {
		from {transform: rotate(0)}
		to {transform: rotate(360deg)}
	}

	@keyframes create{
		0%		{transform: scale(0)}
		100%	{transform: scale(0)}
	}


	@media screen and (max-width: 600px){
		.button{
			min-width: 100%;
		}
	}
</style>