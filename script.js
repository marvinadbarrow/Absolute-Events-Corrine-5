let navbarEl = document.getElementById('nav-bar')
let headerNavEl = document.getElementById('header-nav')
let btnTopNav = document.getElementById('btn-top-nav')
let lowerBtn = document.getElementById('learn-btn-lower')
let hamburgerEl = document.getElementById('hamburger-bars')
let serviceEl = document.getElementById('services-main')
let serviceList = document.getElementById('services-list-container')
let serviceLink = document.getElementById('header-link')
let mobileServiceLinks = document.querySelectorAll('.services-menu-mobile')
let aboutEl = document.getElementById('about')
let mobileServicesContainer = document.getElementById('mobile-services-container')
console.log(mobileServiceLinks)
console.log('nav bar')
console.log(navbarEl)

console.log('header nav')
let headerNavElements = headerNavEl.children[2].childNodes




console.log(window.innerWidth)

// on scroll down 
window.onscroll = () =>{
  // only execute animation if window is outside of media query limit
  // this only works if the window width is greater than 1000; but there's the issue that if user has already scrolled down, and THEN the window width goes below 1000, you won't be able to undo the effect that has already happened because both scroll up and scroll down can only happen when the window width is greater than 1000.  So if window width changes between scrolls, the second effect won't be executed.  SOLVED: in the else section of this condition (for when the window width is less than 100px) I've removed the animation and hidden the button; 
  if(window.innerWidth >= 1000){

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
lowerBtn.style.animation = 'opacityOn 1.4s ease-out forwards'
if(serviceLink){
  serviceLink.style.cssText = 'padding: 10px 10px;'
}




}else if(-window.scrollY < 150){ // otherwise, if scrolling upward then
  navbarEl.style.animation =  'mainNavOpacityDown 0.5s ease-out backwards'
   headerNavEl.style.animation =  'headerNav2OpacityDown 1.4s ease-out backwards'
  lowerBtn.style.display = 'none'
lowerBtn.style.animation = 'opacityOff 1.4s ease-out forwards'
// if(!serviceLink.style.display == 'none'){
//   serviceLink.style.cssText = 'padding: 10px 30px;'
// }

headerNavEl.style.zIndex = 1;
}

  }else{
lowerBtn.style.display = 'none'
headerNavEl.style.animation = ''
headerNavEl.style.zIndex = 1;
navbarEl.style.cssText = 'display:block; display:flex; position:fixed; top:0;'
if(serviceLink){
  serviceLink.style.cssText = 'padding: 10px 30px;'
}
  }
}

let timesHovered = 0;
let timesHoveredSmall = 0;

// hover on large screens
const serviceHoverLargeScreen = (event) =>{
  console.log('hovering over services on large screen')
  console.log('times hovered')
  timesHovered +=1;
  console.log(timesHovered)
  event.preventDefault()
  serviceList.style.cssText = 'display:block;'
  serviceList.style.animation = 'slideDown 0.7s ease-in-out 1'
  serviceList.classList.add('transform-menu')
}

// when user mouses over services link in mobile view, then the default submenu hides from dropdown and the alternative menu appears using an opacity transition
const serviceHoverSmallScreen = (event) =>{
  event.preventDefault()
  timesHoveredSmall +=1;
  // hide the regular drop down
  serviceList.style.cssText = 'display:none;'
mobileServicesContainer.style.animation = 'mobileSubMenuOpen 0.3s ease-out backwards'
  // mobileServicesContainer.style.cssText = 'margin-top:0px;'
  mobileServicesContainer.style.display = 'block'
  // use the inactive class to tell the
  mobileServicesContainer.classList.add('inactive')
  }






// variable for keeping track fo screen width
let currentWidth;

// DETECT WINDOW RESIZE
window.addEventListener('resize', (e) =>{
currentWidth = e.target.innerWidth

// show header nav in its normal state if screen moves over minimum size threshold. Without this, if it has been toggled to display:none when the screen is small, if the screen is resized to large, the header nav will remain hidden. 
if(currentWidth > 999){
  headerNavEl.style.display = 'flex'
  mobileServicesContainer.style.display = 'none'
  serviceEl.style.cssText = 'background-color: none'
}
})



  // CHANGE HOW SERVICE DROPDOWN BEHAVES when screen size changes from above or equal to specified threshold, to below the specified threshold
  serviceEl.addEventListener('mouseover', (event) =>{
    timesHovered += 1
    let actualWindowWidth = window.innerWidth

    if(actualWindowWidth > 999){

          // code to execute for large window sizes
      serviceHoverLargeScreen(event)
    }else{
         // code to execute for small window sizes
      serviceHoverSmallScreen(event)
    }

   // add highlight if taken away by exiting through the submenu items
      // serviceEl.style.cssText = 'background-color:rgba(184, 187, 189, 0.473);'
    
  
   })
  


serviceEl.addEventListener('mouseout', (event) =>{
  // for regular sized screens
  serviceList.style.cssText = 'display:none;'
  serviceList.classList.add('transform-menu')



} )

// on every header nav link, except the services link, on mouseover hide the container for services submenu when page is in mobile view
headerNavElements.forEach(element => {
  if(element.tagName == 'A' && element.id == ''){
// if element on the nodelist is an 'a' tage and has no id then it is not the services link so hide the mobile submenu for services
element.addEventListener('mouseover', () =>{
  
  mobileServicesContainer.style.display = 'none'
  // serviceEl.style.cssText = 'background-color: rgba(0, 0, 0, 0.568);'
})
  }
});


// when moving away from mobile services container hide the element

mobileServicesContainer.addEventListener('mouseleave', () =>{
  mobileServicesContainer.style.display = 'none'
  // remove highlight colour from main services div
  serviceEl.style.cssText = 'background-color: rgba(0, 0, 0, 0.568);'
})

mobileServicesContainer.addEventListener('mouseover', () =>{
  // keep highlight on main services div while mouse pointer is over the submenu
  // serviceEl.style.cssText = 'background-color:rgba(184, 187, 189, 0.473);'
})
hamburgerEl.addEventListener('click', (e) =>{
  e.preventDefault()

  // toggle nav menu on and off
    if(headerNavEl.style.display == 'flex'){
      if(window.innerWidth < 1000){
      headerNavEl.style.display = 'none'

      }else{
        // do n
      }
    }else{
      
      headerNavEl.style.display = 'flex'
      headerNavEl.style.animation = 'opacityOn 1.4s ease-out forwards'
    }
  

  
})

