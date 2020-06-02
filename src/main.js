// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

import button from './components/button'
import checkBox from './components/check-box'
import dateSelect from './components/date-select'
import date from './components/date'
import dotLoader from './components/dot-loader'
import input from './components/input'
import minLoader from './components/min-loader'
import multiSelect from './components/multi-select'
import pagination from './components/pagination'
import progressBar from './components/progress-bar'
import radio from './components/radio'
import scroll from './components/scroll'
import searchBar from './components/search-bar'
import segmented from './components/segmented'
import select from './components/select'
import selector from './components/selector'
import sidebar from './components/sidebar'
import slider from './components/slider'
import stepped from './components/stepped'
import vswitch from './components/switch'
import vtage from './components/tage'


Vue.component('vButton',button)
Vue.component('vCheckBox',checkBox)
Vue.component('vDateSelect',dateSelect)
Vue.component('vDate',date)
Vue.component('vDotLoader',dotLoader)
Vue.component('vInput',input)
Vue.component('vMinLoader',minLoader)
Vue.component('vMultiSelect',multiSelect)
Vue.component('vPagination',pagination)
Vue.component('vProgressBar',progressBar)
Vue.component('vRadio',radio)
Vue.component('vScroll',scroll)
Vue.component('vSearchBar',searchBar)
Vue.component('vSegmented',segmented)
Vue.component('vSelect',select)
Vue.component('vSelector',selector)
Vue.component('vSidebar',sidebar)
Vue.component('vSlider',slider)
Vue.component('vStepped',stepped)
Vue.component('vSwitch',vswitch)
Vue.component('vTage',vtage)

import vTeacherHeader from './complex/teacher-header'
import vStudentHeader from './complex/student-header'
import vFooter from './complex/footer'

Vue.component('vTeacherHeader',vTeacherHeader)
Vue.component('vStudentHeader',vStudentHeader)
Vue.component('vFooter',vFooter)

import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.headers.common['SIT'] = getCookie('SIT')
// axios.defaults.headers.common['SIS'] = getCookie('SIS')

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
Vue.prototype.$setCookie = setCookie
Vue.prototype.$getCookie = getCookie

import functions from './functions.js'
Vue.prototype.$f = functions

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
