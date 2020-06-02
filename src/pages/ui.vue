<template>
  <div class="col">
  	<div class="row">
  		<v-button :load="1"/>
  		<v-button class="dark min" :load="2"/>
  		<v-button class="disabled" icon="photo"/>
  		<v-button class="min invisible" icon="password" bg="var(--dark)"/>
  		<v-button class="min dark" @click="$f['getMonthName'].help()"/>
  		<v-button class="min invisible" @click="databutton++"/>
  		<v-button class="min dash"/>
  		<v-button class="min down"/>
  		<v-button class="min text" icon="filter"/>
  		<v-button class="min text" icon="next"/>
  		<v-button class="" float="right"/>
  		<v-button class="sec" float="close"/>
  		<v-button class="act" float="menu"/>
  		<v-button class="disabled" float="account"/>
  	</div>
  	<div class="row" v-for="i in databutton">
  		<v-dot-loader />
  		<v-min-loader />
  	</div>
  	<div class="row">
  		<v-input class="bottom" />
  		<v-input icon="email" type="email" />
  		<v-input icon="location" />
  		<v-input icon="tenge" icon_position="right" type="number" />
  		<v-input type="password" length="6" />
  	</div>
  	<div class="row">
  		<v-search-bar :childs="[{name: 'Almaty'},{name: 'dsadsawAlmaty'},{name: 'Almatydsa'}]" v-model="search"/>
  	</div>
  	<div class="row">
  		<v-select :childs="[{name: 'Almaty'},{name: 'dsadsawAlmaty'},{name: 'Almatydsa'}]" v-model="select"/>
  	</div>
  	<!-- <div class="row">
  		<v-multi-select />
  	</div> -->
  	<div class="row">
  		<v-progress-bar :percent="20" />
  	</div>
  	<div class="row">
  		<v-check-box />
  		<v-check-box class="transparent" />
  		<v-radio />
  		<v-radio :transparent="true" />
  		<v-selector />
  		<v-selector :transparent="true" />
  		<v-switch v-model="theme_switch" />
  	</div>
  	<div class="col">
  		<v-slider max="1000"/>
  		<v-slider :ranged="true" min="1000" max="1000000" />
  	</div>
  	<div class="row">
  		<v-tage :title="$f.getNormalDate(new Date()) + ' ' + $f.getTime(new Date())" />
  		<v-tage class="close" />
  		<v-tage class="close-reverse" />
  		<v-tage class="reverse" />
  	</div>
  	<div class="col">
  		<v-pagination class="number" />
  		<v-pagination class="dot" unlimited/>
  		<v-pagination class="dash" unlimited/>
  		<v-pagination class="dash col" />
  	</div>
  	<div class="col">
  		<v-stepped />
  		<v-stepped class="light" />
  	</div>
  	<div class="row">
	  	<div class="col">
	  		<v-segmented class="" :childs="segmented" child_name="title" child_svg="svg"/>
	  		<v-segmented class="reverse" :childs="segmented" child_name="title" child_svg="svg"/>
	  		<v-segmented class="divided" :childs="segmented" child_name="title" child_svg="svg"/>
	  		<v-segmented class="reverse divided" :childs="segmented" child_name="title" child_svg="svg"/>
	  	</div>
	  </div>
  	<div class="row">
  		<v-date-select />
  	</div>

  	<div class="row"></div>
  	<div class="row"></div>
  	<div class="row"></div>

  	<div class="col">
  		<v-pushes ava="https://imagevars.gulfnews.com/2019/09/29/Dubai-skyline_16d7de0fdce_large.jpg" name="Dubai" title="Lorem ipsum" />	
  		<v-pushes :date="new Date().setDate(new Date().getDate() - 1)" />
  	</div>
  	<div class="row">
  		<v-cart img="https://imagevars.gulfnews.com/2019/09/29/Dubai-skyline_16d7de0fdce_large.jpg" name="Dubai" price="$600/hour"/>
  	</div>
  	<div class="row">
  		<v-badge-item :start="new Date()" :end="new Date().setHours(new Date().getHours()+1)" name="Dubai" price="$600/hour"/>
  	</div>
    <div class="row">
      <v-passagir />
    </div>

  	<div class="row"></div>
  	<div class="row"></div>
  	<div class="row"></div>

  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: Boolean,
      default: false
    }
  },
  data(){
  	return {
  		search: '',
  		select: null,
      theme_switch: this.theme,
      databutton: 1,
  		segmented: [
  			{
  				title: 'Approved',
  				svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.3174 12.9999C24.3174 12.076 23.5583 11.3324 22.6346 11.3514L17.5784 11.4555L13.5356 3.41336L10.9987 3.41338L12.9342 11.5511L7.73004 11.6582L6.36402 9.75559L4.07107 9.75559L5.63222 12.9999L4.07107 16.2442L6.36402 16.2442L7.73004 14.3415L12.9342 14.4487L10.9987 22.5864L13.5356 22.5864L17.5785 14.5442L22.6346 14.6484C23.5583 14.6674 24.3174 13.9238 24.3174 12.9999Z" fill="#6D6F80"/>
					</svg>
					`
  			},
        {
          title: 'Approved',
          svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3174 12.9999C24.3174 12.076 23.5583 11.3324 22.6346 11.3514L17.5784 11.4555L13.5356 3.41336L10.9987 3.41338L12.9342 11.5511L7.73004 11.6582L6.36402 9.75559L4.07107 9.75559L5.63222 12.9999L4.07107 16.2442L6.36402 16.2442L7.73004 14.3415L12.9342 14.4487L10.9987 22.5864L13.5356 22.5864L17.5785 14.5442L22.6346 14.6484C23.5583 14.6674 24.3174 13.9238 24.3174 12.9999Z" fill="#6D6F80"/>
          </svg>
          `
        },
        {
          title: 'Approved',
          svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.3174 12.9999C24.3174 12.076 23.5583 11.3324 22.6346 11.3514L17.5784 11.4555L13.5356 3.41336L10.9987 3.41338L12.9342 11.5511L7.73004 11.6582L6.36402 9.75559L4.07107 9.75559L5.63222 12.9999L4.07107 16.2442L6.36402 16.2442L7.73004 14.3415L12.9342 14.4487L10.9987 22.5864L13.5356 22.5864L17.5785 14.5442L22.6346 14.6484C23.5583 14.6674 24.3174 13.9238 24.3174 12.9999Z" fill="#6D6F80"/>
          </svg>
          `
        },
  			{
  				title: 'Approved',
  				svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.3174 12.9999C24.3174 12.076 23.5583 11.3324 22.6346 11.3514L17.5784 11.4555L13.5356 3.41336L10.9987 3.41338L12.9342 11.5511L7.73004 11.6582L6.36402 9.75559L4.07107 9.75559L5.63222 12.9999L4.07107 16.2442L6.36402 16.2442L7.73004 14.3415L12.9342 14.4487L10.9987 22.5864L13.5356 22.5864L17.5785 14.5442L22.6346 14.6484C23.5583 14.6674 24.3174 13.9238 24.3174 12.9999Z" fill="#6D6F80"/>
					</svg>
					`
  			},
  			{
  				title: 'Approved',
  				svg: `<svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M24.3174 12.9999C24.3174 12.076 23.5583 11.3324 22.6346 11.3514L17.5784 11.4555L13.5356 3.41336L10.9987 3.41338L12.9342 11.5511L7.73004 11.6582L6.36402 9.75559L4.07107 9.75559L5.63222 12.9999L4.07107 16.2442L6.36402 16.2442L7.73004 14.3415L12.9342 14.4487L10.9987 22.5864L13.5356 22.5864L17.5785 14.5442L22.6346 14.6484C23.5583 14.6674 24.3174 13.9238 24.3174 12.9999Z" fill="#6D6F80"/>
					</svg>
					`
  			}
  		]
  	}
  },
  watch:{
    theme:{
      handler(newData){
        this.theme_switch = newData
      }
    },
    theme_switch:{
      handler(newData){
        if(newData)
          localStorage.setItem('theme', 'dark')
        else
          localStorage.setItem('theme', 'default')
        this.$emit('theme',localStorage.getItem('theme',))
      }
    }
  }
}
</script>

<style lang="scss">
	.row{
		flex-wrap: wrap;
	}
</style>
