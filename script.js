let navbarEl = document.getElementById('nav-bar')
let headerNavEl = document.getElementById('header-nav')
let btnTopNav = document.getElementById('btn-top-nav')
let lowerBtn = document.getElementById('learn-btn-lower')

console.log('nav bar')
console.log(navbarEl)

console.log('header nav')
console.log(headerNavEl)





// on scroll down 
window.onscroll = () =>{

// if downward scroll passes 300px
if(window.scrollY > 150){

  // add animation which moves the nav bar up 100px and fades it out
  navbarEl.style.animation = 'mainNavOpacityUp 0.5s ease-out forwards'
  // this jumps up at the moment, but you want a smooth transition
//   headerNavEl.style.cssText = 'position:fixed; margin-top:0px;'
// headerNavEl.classList.add('fix-header-nav')
// btnTopNav.style.display = 'block'

headerNavEl.style.animation =  'headerNav2OpacityUp 1.4s ease-out forwards'
lowerBtn.style.display = 'block'
lowerBtn.style.animation = 'btnOpacity 1.4s ease-out forwards'

}else if(-window.scrollY < 150){ // otherwise, if scrolling upward then
  navbarEl.style.animation =  'mainNavOpacityDown 0.5s ease-out backwards'
  // navbarEl.style.animation =  'mainNavOpacityDown 0.5s ease-out backwards'
  // navbarEl.style.display = 'flex'
  // headerNavEl.style.cssText = 'position:relative; margin-top:100px'
  // headerNavEl.classList.remove('fix-header-nav')
  // btnTopNav.style.display = 'none'

  headerNavEl.style.animation =  'headerNav2OpacityDown 1.4s ease-out backwards'
  lowerBtn.style.display = 'none'
lowerBtn.style.animation = 'btnUnOpacity 1.4s ease-out forwards'
}


// if(-window.scrollY < 280){
//   navbarEl.style.animation =  'mainNavOpacityDown 0.5s ease-out backwards'
// }

}






let serviceEl = document.getElementById('services-main')
console.log(serviceEl)
let serviceList = document.getElementById('services-list-container')
console.log(serviceList)
let navContainer = document.getElementById('navigation-container')


// // change navbar colours on downward scroll past 280px
// window.onscroll = () =>{
// if(window.scrollY > 320){
//   navContainer.classList.add('nav_dark')
//   navContainer.style.animation = 'darkNav 0.9s ease-in-out 1'

// }else{
//   navContainer.classList.remove('nav_dark')
//   navContainer.style.animation = ''

// }
// }






// animate dropdown menu when service menu is hovered over
serviceEl.addEventListener('mouseover', (event) =>{
  console.log('hovering over services')
  event.preventDefault()
  serviceList.style.cssText = 'display:block;'
  serviceList.style.animation = 'slideDown 0.7s ease-in-out 1'
  serviceList.classList.add('transform-menu')
 })

 // keep dropdown menu visible on dropdown mouseover
 serviceList.addEventListener('mouseover', (event) =>{
  serviceList.style.cssText = 'display:none;'
  serviceList.classList.add('transform-menu')
 })

 // hide dropdown menu on dropdown mouseout
 serviceList.addEventListener('mouseout', (event) =>{
  serviceList.style.cssText = 'display:none;'
  serviceList.classList.remove('transform-menu')
 })
 // hide dropdown menu on service menu mouseout
 serviceEl.addEventListener('mouseout', (event) =>{
  serviceList.style.cssText = 'display:none;'
  serviceList.classList.remove('transform-menu')
 })


