let wrapper = document.getElementById('wrapper');
let topLayer = wrapper.querySelector('.top');
//let bottomLayer = wrapper.querySelector('.bottom')
let handle = wrapper.querySelector('.handle');
let myLogo = document.querySelector(".image-cropper")

document.addEventListener('DOMContentLoaded', function(){
  
  /* wrapper.addEventListener('mousemove', function(e){
    topLayer.style.width= e.clientX +  'px';
  }); */
  

  LocateLogo()
 
  /* 
  myLogo.addEventListener('mousedown',function(e){
    e = e || window.event;
    e.preventDefault();
    
    document.onmouseup = null;
    document.onmousemove = null;
    document.onmousemove = logoMoved;
  })
 */
  

  });

  myLogo.addEventListener("touchstart", dragStart, false);
  myLogo.addEventListener("touchmove", drag, false);
  myLogo.addEventListener("touchend", dragEnd, false);
  wrapper.addEventListener("touchmove", drag, false);
  wrapper.addEventListener("touchend", dragEnd, false);


  myLogo.addEventListener("mousedown", dragStart, false);
  myLogo.addEventListener("mousemove", drag, false);
  myLogo.addEventListener("mouseup", dragEnd, false);
  wrapper.addEventListener("mousemove", drag, false);
  wrapper.addEventListener("mouseup", dragEnd, false);

  var newX;
  let isDrag = false
    
  function dragStart(e) {

    
    isDrag=true
  }

  
  function drag(e) {
    
      if (isDrag) {
        if (e.type == 'touchmove') {
          newX = e.touches[0].clientX ;
          clientX = e.touches[0].clientX
        } else {
          newX = e.clientX ;
          clientX = e.clientX
        }
        if(newX<(window.innerWidth-myLogo.offsetWidth/1.5)&&newX>myLogo.offsetWidth/1.5)
        {
          myLogo.style.left=newX+ 'px';
          topLayer.style.width= clientX +  'px';
        }
        
        myLogo.style.cursor='grabbing'
      }
    
    
  }

  function dragEnd(e) {
    isDrag = false;
    myLogo.style.cursor='grab'
  }
  
  window.onresize = LocateLogo;

  function LocateLogo(){
    let winWidth = window.innerWidth;
    myLogo.style.left="50%";
    myLogo.style.top = '50%';
    //myLogo.style.top = winWidth/10 + 'px';
    myLogo.style.width = winWidth/5.5 + 'px';
    myLogo.style.height = winWidth/5.5 + 'px';
    topLayer.style.width= winWidth/2 +  'px';

  }


  /* 
  function logoMoved(e) {
    e = e || window.event;
    e.preventDefault();
    myLogo.style.left=e.clientX-105 + 'px';
  } */

  /* var dragItem = document.querySelector("#item");
    var container = document.querySelector("#container");

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
      if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
      } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
      }

      if (e.target === dragItem) {
        active = true;
      }
    }

    function dragEnd(e) {
      initialX = currentX;
      initialY = currentY;

      active = false;
    }

    function drag(e) {
      if (active) {
      
        e.preventDefault();
      
        if (e.type === "touchmove") {
          currentX = e.touches[0].clientX - initialX;
          currentY = e.touches[0].clientY - initialY;
        } else {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;
        }

        xOffset = currentX;
        yOffset = currentY;

        setTranslate(currentX, currentY, dragItem);
      }
    }

    function setTranslate(xPos, yPos, el) {
      el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    } */

let projHeader = document.getElementsByClassName("proj-header");

for (let i = 0; i < projHeader.length; i++) {
  projHeader[i].addEventListener("click", function() {
    this.classList.toggle("active-proj");
    let content = this.nextElementSibling;
    if (content.offsetHeight){
      content.style.height = "0";
      if(window.innerWidth>=768)
      this.parentNode.style.width='48%';
    } else {
      content.style.height = "auto";
      this.parentNode.style.width='98%';
    } 
  });
}

function navClicked(e){
  let activated = document.getElementsByClassName('active');
  for(let i=0;i<activated.length;i++){
    activated[i].classList.remove('active')
  }
  e.target.parentNode.classList.toggle("active");
}

function worksClicked(e){
  navClicked(e);
  document.getElementById('works').style.display='block'
  //document.getElementById('about').style.display='none'
  document.getElementById('home').style.display='none'
  document.getElementById('logo').style.display='block'

}

function aboutClicked(e){
  navClicked(e);
  
}

function homeClicked(e){
  document.getElementById('home').style.display='block'
  document.getElementById('works').style.display='none'
  //document.getElementById('about').style.display='none'
  document.getElementById('logo').style.display='none'
  
}