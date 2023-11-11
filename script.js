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
console.log(mobileServiceLinks)
console.log('nav bar')
console.log(navbarEl)

console.log('header nav')
console.log(headerNavEl)



console.log(window.innerWidth)

// on scroll down 
window.onscroll = () =>{
console.log(window.innerWidth)
  // only execute animation if window is outside of media query limit
  // this only works if the window width is greater than 1000; but there's the issue that if user has already scrolled down, and THEN the window width goes below 1000, you won't be able to undo the effect that has already happened because both scroll up and scroll down can only happen when the window width is greater than 1000.  So if window width changes between scrolls, the second effect won't
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
lowerBtn.style.animation = 'btnOpacity 1.4s ease-out forwards'
serviceLink.style.cssText = 'padding: 10px 10px;'




}else if(-window.scrollY < 150){ // otherwise, if scrolling upward then
  navbarEl.style.animation =  'mainNavOpacityDown 0.5s ease-out backwards'
   headerNavEl.style.animation =  'headerNav2OpacityDown 1.4s ease-out backwards'
  lowerBtn.style.display = 'none'
lowerBtn.style.animation = 'btnUnOpacity 1.4s ease-out forwards'
serviceLink.style.cssText = 'padding: 10px 30px;'
headerNavEl.style.zIndex = 1;
}

  }else{
lowerBtn.style.display = 'none'
console.log(headerNavEl)
headerNavEl.style.animation = ''
headerNavEl.style.zIndex = 1;
navbarEl.style.cssText = 'display:block; display:flex; position:fixed; top:0;'
serviceLink.style.cssText = 'padding: 10px 30px;'
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

// hover on media query
const serviceHoverSmallScreen = (event) =>{
  event.preventDefault()
  console.log('hover over services on small screen')
  console.log('times hovered')
  timesHoveredSmall +=1;
  console.log(timesHovered)
  // hide the drop down
  serviceList.style.cssText = 'display:none;'
let submenuOpen = 0
      // loop through node list, and on each element, toggle display none/block
      mobileServiceLinks.forEach(link =>{
        if(link.style.display == 'block'){

          link.style.display = 'none'

          submenuOpen = 0
        }else{
          link.style.animation = 'btnOpacity 0.5s ease-out forwards'
          link.style.display = 'block'

        submenuOpen = 1
        }



      })
 


}






// variable for keeping track fo screen width
let currentWidth;

// DETECT WINDOW RESIZE
window.addEventListener('resize', (e) =>{
currentWidth = e.target.innerWidth
console.log('window resize')
console.log(currentWidth)
// show header nav in its normal state if screen moves over minimum size threshold. Without this, if it has been toggled to display:none when the screen is small, if the screen is resized to large, the header nav will remain hidden. 
if(currentWidth > 999){
  headerNavEl.style.display = 'flex'
}

})



  // CHANGE HOW SERVICE DROPDOWN BEHAVES when screen size changes from above or equal to specified threshold, to below the specified threshold
  serviceEl.addEventListener('mouseover', (event) =>{
    timesHovered += 1
    let actualWindowWidth = window.innerWidth
    console.log('window width')
    console.log(actualWindowWidth)

    // the issue here is that we need to know if the window size has changed, but this function takes the 'initial' window size and does not recognize changes so there has to be some whay of getting a value of the resized window here so that the thresholds in the conditions will cause the execution of the large or small screen function. 

    if(actualWindowWidth > 999){
console.log('above the threshold')
          // code to execute for large window sizes
      serviceHoverLargeScreen(event)
    }else{
 
  
console.log('below the threshold')
        // code to execute for small window sizes
      serviceHoverSmallScreen(event)
    }
  
   })
  


serviceEl.addEventListener('mouseout', (event) =>{
  // for regular sized screens
  serviceList.style.cssText = 'display:none;'
  serviceList.classList.add('transform-menu')

  // for screens that meet the media query consitions
  mobileServiceLinks.forEach(link =>{
      link.style.display = 'none'
    })

} )


   

hamburgerEl.addEventListener('click', (e) =>{
  e.preventDefault()

  console.log('checking window innerWidth')
  console.log(window.innerWidth)


    console.log('menu click')
    if(headerNavEl.style.display == 'flex'){
      if(window.innerWidth < 1000){
      headerNavEl.style.display = 'none'
      }else{
        // do n
      }
    }else{
      
      headerNavEl.style.display = 'flex'
    }
  

  
})


// add display block on hover for service menu mobile display since, moving away from the parent element causes the submenu options to close

// mobileServiceLinks.forEach{link}
