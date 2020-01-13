let projsObj = {
    projects:[
        {id:1,name:"LightUp",img:"proj1.png",desc:"Landing page for app called LightUp",type:"web",tags:["HTML","CSS"]},
        {id:2,name:"e-Learning env. dashboard",img:"proj2.png",desc:"UIs for active & adaptive e-Learning Environment for programming students ",type:"UI/UX design",tags:["Photoshop"]},
        {id:3,name:"Bank UI",img:"proj3.png",desc:"Improving the UI/UX design for an banking app (unofficial)",type:"UI/UX design",tags:["Adobe XD"]},
        {id:4,name:"Engineering symposiums posters",img:"proj4.png",desc:"Logos and posters for three Scientific symposiums organized in the faculty of Engineering & IT, Taiz University",type:"Graphic Design",tags:["Photoshop","Illustrator"]},
        {id:5,name:"Advertising posters",img:"proj5.png",desc:"The Logo of Digital E-Learning Academy and Advertising posters The Logo of Digital E-Learning Academy and Advertising posters The Logo of Digital E-Learning Academy and Advertising posters",type:"Graphic Design",tags:["Photoshop","Illustrator","InDesign"]},
    ]
}
document.addEventListener('DOMContentLoaded', function(){
    let projsR = document.getElementById("projs-rt")
    let projsL = document.getElementById("projs-lt")

for(let i=0;i<projsObj.projects.length;i++){
    let newProj = document.createElement('div')
    newProj.setAttribute("class","project")
    
    let newProjHeader = document.createElement('div')
    newProjHeader.setAttribute("class","proj-header")
    newProjHeader.setAttribute("style",`background-image:url(../Projects/projs_imgs/${projsObj.projects[i].img});`)
    let newProjDetails = document.createElement('div')
    newProjDetails.setAttribute("class","proj-details")
    let title = document.createElement('h3')
    title.textContent=projsObj.projects[i].name
    newProjDetails.appendChild(title)
    let desc = document.createElement('p')
    desc.textContent=projsObj.projects[i].desc.slice(0,50)+`.. `
    newProjDetails.appendChild(desc)
    for(let j=0;j<projsObj.projects[i].tags.length;j++){
        let tag = document.createElement('h6')
        tag.textContent=projsObj.projects[i].tags[j]
        newProjDetails.appendChild(tag)
    }
    newProjHeader.appendChild(newProjDetails)
    newProj.appendChild(newProjHeader)
    let projContent = document.createElement('div')
    projContent.setAttribute("class","proj-content")
    projContent.innerHTML=`<hr>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, architecto asperiores sequi explicabo, amet doloremque tempora voluptatem 
      soluta commodi sint repellat repellendus cupiditate. Laborum aliquid quam vel sequi! Laborum, excepturi.</p>
      <video  autoplay loop>
        <source src="Projects/LightUp.mp4" type="video/mp4">
      Your browser does not support the video tag.
      </video>
      <a href="https://ahmed-hassany.github.io/App-landing-page-Assignment/">App landing page</a>
      <hr>`
    newProj.appendChild(projContent)
    if(i%2==0)
    projsL.appendChild(newProj)
    else
    projsR.appendChild(newProj)
}
addExpandAbility()
})

let addExpandAbility = function(){
    let projHeader = document.getElementsByClassName("proj-header");

    for (let i = 0; i < projHeader.length; i++) {
    projHeader[i].addEventListener("click", function() {console.log(this.nextElementSibling)
        //this.classList.toggle("active-proj");
        let content = this.nextElementSibling;
        this.firstElementChild.classList.toggle("active-Proj");
        // expandDesc
        /* this.parentNode.classList.toggle("right")
        this.parentNode.classList.toggle("left") */
        if (content.offsetHeight){
        content.style.height = "0";
        } else {
        content.style.height = "auto";
        } 
        
    });
    }
}




