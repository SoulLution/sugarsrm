const validateInput = (value, length, email, revalue, reverse) => {
  let end = false
  if(email === undefined) email = false
  if(!length) length = 1

  if(email){
    let index = null
    for(let i = 0; i < value.length; i++)
      if(value[i].charCodeAt(0)=== 64 && i !== 0){
        index = i
        break
      }
    if(index)
      for(let i = index; i < value.length; i++)
        if(value[i].charCodeAt(0)=== 46 && i > index + 2){
          end = false
          index = i
          break
        }
    if(index === null || index > value.length - 3) end = true;
  }
  else
    if(reverse === false)
      if(value && revalue)
        if(value !== revalue) end = true
        else end = false
      else end = false  
    else
      if((!value && value !== 0) || value.length < length || (reverse && value === revalue)) end = true
      else end = false
  

  return end
}

let getTime = date => {
  if(!date) date = new Date()
  let time = new Date(date);
  return checkTime(time.getHours()) + ':' + checkTime(time.getMinutes()); 
}

const getMonthName = (month, reverse) => {
  if(!month){
    new Error ('please set mount how new Date().getMonth()')
    return
  }
  if(reverse)
    switch(month)
    {
      case 'января':     return 0;  break
      case 'февраля':    return 1;  break
      case 'марта':      return 2;  break
      case 'апреля':     return 3;  break
      case 'мая':        return 4;  break
      case 'июня':       return 5;  break
      case 'июля':       return 6;  break
      case 'августа':    return 7;  break
      case 'сентября':   return 8;  break
      case 'октября':    return 9;  break
      case 'ноября':     return 10; break
      case 'декабря':    return 11; break
    }
  else
    switch(month)
    {
      case 0:   return 'январь';     break
      case 1:   return 'февраль';    break
      case 2:   return 'март';       break
      case 3:   return 'апрель';     break
      case 4:   return 'май';        break
      case 5:   return 'июнь';       break
      case 6:   return 'июль';       break
      case 7:   return 'август';     break
      case 8:   return 'сентябрь';   break
      case 9:   return 'октябрь';    break
      case 10:  return 'ноябрь';     break
      case 11:  return 'декабрь';    break
    }
}

const checkTime = value => {
  return value >= 10 ? value : '0' + value
}

const getNormalDate = date => {
  if(!date) date = new Date()
  let time = new Date(date);
  let now = new Date();
  if(time.setHours(0,0,0,0) === now.setHours(0,0,0,0))                         return 'Сегодня'
  else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) - 24*60*60*1000))  return 'Вчера'
  else if(time.setHours(0,0,0,0) === (now.setHours(0,0,0,0) + 24*60*60*1000))  return 'Завтра'
  else
  return checkTime(time.getDate()) + ' ' + getMonthName(time.getMonth(), false) + (now.getFullYear() !== time.getFullYear() ? time.getFullYear() : ''); 
}

const generateScroll = (id, layout, param, current_block, blocks, people) =>{
  if(!id){
    new Error("function generateScroll(id, layout) doesn't have id for find element")
    return false
  }
  if(!layout){
    new Error("function generateScroll(id, layout) doesn't have layout for find parent")
    return false
  }

  if(!param){
    param.height = '100%'
    param.width = '100%'
  }else if(!param.height)
    param.height = '100%'
  else if(!param.width)
    param.width = '100%'

  let childrenCount = 0;
  let scrollPerson = false;
  if(!people) people = 1;
  let bodyBlock = document.getElementById(id)
  if(!current_block) current_block = 1
  if(!blocks) blocks = 1
  for (let i = 0; i < layout.children.length; i++)
    if(layout.children[i].id == 'prelayout' && current_block >= blocks)
      layout.removeChild(layout.querySelector('#prelayout'))

  let prelayout = document.createElement('div')
  prelayout.style.overflow = "hidden"
  prelayout.style.position = "relative"
  prelayout.style.height = param.height
  prelayout.style.width = param.width
  prelayout.id = "prelayout"

  let block = document.createElement('div')
  block.style.overflow = 'hidden scroll'
  block.style.display = 'flex'
  block.style.justifyContent = 'flex-start'
  block.style.alignItems = 'flex-start'

  block.style.height = "100%"
  block.style.width = "115%"
  block.style.maxWidth = "115%"
  block.style.paddingRight = "13.75%"
  block.style.marginRight = "15%"

  let scrollBar = document.createElement('div')
  scrollBar.classList.add("scroll")
  
  if(param.html)
    scrollBar.innerHTML = param.html

  block.appendChild(bodyBlock)
  block.appendChild(scrollBar)
  prelayout.appendChild(block)
  layout.appendChild(prelayout)


  scrollBar.style.height = (Math.pow(block.clientHeight, 2) / bodyBlock.clientHeight) + 'px'

  for (let i = 0; i < bodyBlock.children.length; i++) {  
    childrenCount += bodyBlock.children[i].clientHeight
    let style = window.getComputedStyle(bodyBlock.children[i])
    let marginTop = style.getPropertyValue('margin-top') 
    let marginBottom = style.getPropertyValue('margin-bottom') 
    childrenCount += Number(marginTop.substring(0, marginTop.length - 2))
    childrenCount += Number(marginBottom.substring(0, marginBottom.length - 2))
  }
  // childrenCount -= block.clientHeight
  childrenCount /= block.clientHeight
  if(bodyBlock.clientHeight <= block.clientHeight) scrollBar.style.display = 'none'
  else scrollBar.style.display = 'block'

  scrollBar.style.top = ((block.scrollTop * people)/childrenCount) + 'px'
  

  block.onscroll = () => {
    if(bodyBlock.clientHeight > block.clientHeight) scrollBar.style.display = "block"
    if(block.clientHeight <  bodyBlock.clientHeight && scrollPerson == false){
      scrollBar.style.height = (Math.pow(block.clientHeight, 2) / bodyBlock.clientHeight) + 'px'
      childrenCount = 0
      for (let i = 0; i < bodyBlock.children.length; i++) {  
        childrenCount += bodyBlock.children[i].clientHeight
        let style = window.getComputedStyle(bodyBlock.children[i])
        let marginTop = style.getPropertyValue('margin-top') 
        let marginBottom = style.getPropertyValue('margin-bottom') 
        childrenCount += Number(marginTop.substring(0, marginTop.length - 2))
        childrenCount += Number(marginBottom.substring(0, marginBottom.length - 2))
      }
      childrenCount /= block.clientHeight
      // console.log(block.scrollTop)
      // scrollBar.style.top = (block.clientHeight+block.scrollHeight) / block.scrollTop + '%'
      scrollBar.style.top = ((block.scrollTop * people)/childrenCount) + 'px' 
    }
  }      

  scrollBar.addEventListener('mousedown',()=>{
    scrollPerson = true
    document.onmousedown = () => {return false}
    let div = document.createElement('div')
    let rect = block.getBoundingClientRect()
    div.style.width = '100vw'
    div.style.top = rect.top + 'px'
    div.style.bottom = rect.bottom + 'px'
    div.style.height = rect.height + 'px'
    div.style.background = "transparent"
    div.style.position = 'absolute'
    div.id = 'scrollInvise'
    div.style.zIndex = 10000
    document.body.style.cursor = "move"
    document.body.appendChild(div)    
      document.onmousemove = e => {
        scrollBar.style.height = (Math.pow(block.clientHeight, 2) / bodyBlock.clientHeight) + 'px'
        scrollBar.style.top = ((block.scrollTop * people)/childrenCount) + 'px'
        if(e.target.id == 'scrollInvise'){
          let y = e.offsetY - (scrollBar.clientHeight/2)
          block.scrollTop = (childrenCount * y)
        }else if(e.clientY <= rect.top)
          block.scrollTop = 0  
        else
          block.scrollTop = bodyBlock.offsetHeight
      }
    document.onmouseup = () => {
      document.onmousedown = () => {scrollPerson = false}
      document.onmousemove = () => {scrollPerson = false}
      if(div) document.body.removeChild(div)
      document.body.style.cursor = "auto"
    }
  })

  let config = { attributes: true, childList: true, subtree: true}

  let callback = (mutationsList, observer) => {
  	// console.warn(observer)
  	// console.warn(mutationsList.length > 1 ? mutationsList : '')
    for(let mutation of mutationsList) {
    	
    	childrenCount = 0
      for (let i = 0; i < bodyBlock.children.length; i++) {  
        childrenCount += bodyBlock.children[i].clientHeight
        let style = window.getComputedStyle(bodyBlock.children[i])
        let marginTop = style.getPropertyValue('margin-top') 
        let marginBottom = style.getPropertyValue('margin-bottom') 
        childrenCount += Number(marginTop.substring(0, marginTop.length - 2))
        childrenCount += Number(marginBottom.substring(0, marginBottom.length - 2))
      }
      childrenCount /= block.clientHeight

      scrollBar.style.height = (Math.pow(block.clientHeight, 2) / bodyBlock.clientHeight) + 'px'
      scrollBar.style.top = ((block.scrollTop * people)/childrenCount) + 'px'
      if(bodyBlock.clientHeight < block.clientHeight) scrollBar.style.display = 'none'
      else scrollBar.style.display = 'block'
    }
  }

  let observer = new MutationObserver(callback)

  observer.observe(bodyBlock, config)

}

const __help = async (...arr) => {
  if(arr.length === 1 && typeof arr[0] === 'object')
    arr = arr[0]
  for(let item of arr)
    if(typeof item === 'object'){
      await __help(item)
      continue
    }
    else{
      if(item === '-----')
        console.log('%c' + item, 'background: #373946; color: #39C874; font-size: 0.8rem; font-weight: bold;')
      else
        console.log('%c' + item, 'color: #39C874; font-size: 0.8rem; font-weight: bold;')
    }
  return arr
}

// console.log(__help(1,2,['arr','arr'],3))

let result = {
  validateInput,
  getTime,
  getMonthName,
  checkTime,
  getNormalDate,
  generateScroll
}

let help = {
  validateInput: [
    'value - data for validate REQUIRED',
    'length - min length for data UNREQUIRED default: 1',
    'email - special parametr for check email UNREQUIRED default: false',
    'revalue - special parametr for check value === revalue UNREQUIRED',
    'reverse - special parametr for check value !== revalue UNREQUIRED, revalue - REQUIRED'
  ],
  getTime: [
    'date - any date format REQUIRED default: new Date()',
    "return time by date"
  ],
  getMonthName: [
    'month - value in standart new Date.getMonth() REQUIRED',
    'reverse - UNREQUIRED default: false',
    'return month name'
  ],
  checkTime: [
    'value - check value on 0 before value REQUIRED',
    'return 06 if value = 6'
  ],
  getNormalDate: [
    'date - any date format REQUIRED default: new Date()',
    "return 'Сегодня' if date = new Date, 06.06.06 if date = new Date(6.june.2006)"
  ],
  generateScroll: [
    'id - id of element REQUIRED',
    'layout - parent element REQUIRED',
    'param - object of special params have { height, width, html } UNREQUIRED default: { height: 100%, width: 100%}',
    'param.height - height of element[id] REQUIRED default: 100%',
    'param.width - width of element[id] REQUIRED default: 100%',
    'param.html - html inner scrollBar UNREQUIRED',
    'current_block - current index block with scroll into parent UNREQUIRED default: 1 min: 1',
    'blocks - all blocks indexes UNREQUIRED default: 1 min: 1',
    'people - if you element[id] have some blocks in row write this value UNREQUIRED default: 1',
    'not return',
    "create in your layout element with custom scrollBar with class 'scroll'"
  ]

}

for(let x in result)
  result[x].help = () => { __help('-----', x + '-->', help[x], '-----') }

result.help = () => { __help(Object.keys(result).map((x,i) => {return x})) }

result.help()


export default result