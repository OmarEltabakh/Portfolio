
const btnShowMore = document.getElementById("btnShowMore");

const htmlAhtml_cssndCss = document.getElementById("html_css");

const btnHide = document.getElementById("btnHide");

btnShowMore.addEventListener("click", function () {
  html_css.classList.replace("d-none", "m-0");
  btnHide.classList.replace("d-none", "d-block");
  btnShowMore.classList.replace("d-block", "d-none");

})
btnHide.addEventListener("click", function () {
  html_css.classList.replace("m-0", "d-none");
  btnShowMore.classList.replace("d-none", "d-block");
  btnHide.classList.replace("d-block", "d-none");


})


// <====startNav====>

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach(function (navItem) {
  navItem.addEventListener("click", function () {

    navItems.forEach(function (item) {
      item.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});

function makeNavItemActive(item) {
  const allItemForNav = document.querySelectorAll(".navbar-nav a");
  for (let index = 0; index < allItemForNav.length; index++) {
    if (item === allItemForNav[index].innerHTML) {
      allItemForNav[index].classList.add("active");
    }
    else {
      allItemForNav[index].classList.remove("active");
    }
  }
}

// <====endNav====>










//<========================================>

document.addEventListener("DOMContentLoaded", () => {
  handleScroll();
});

window.onscroll = handleScroll;
let started = false;


function handleScroll() {

  // start home
  if (window.scrollY < 500) {
    makeNavItemActive("Home")
  }
  // end home



  // start about<====================> 
  const about = document.getElementById("about");
  $("#btnUp").addClass("d-none")
  const aboutHeader = document.getElementById("aboutHeader");
  const contentAboutLeft = document.querySelector(".contentAboutLeft");
  const contentAboutRight = document.querySelector(".contentAboutRight");
  const contentAboutButton = document.querySelector(".contentAboutButton");




  if (window.scrollY >= about.offsetTop - 700) {
    aboutHeader.classList.add("animate__fadeInUp");
  }

  if (window.scrollY >= about.offsetTop - 500) {
    contentAboutLeft.classList.add("animate__fadeInUp");
    contentAboutLeft.classList.remove("opacity-0");
    contentAboutRight.classList.add("animate__fadeInUp");
    contentAboutRight.classList.remove("opacity-0");


  }

  if (window.scrollY >= about.offsetTop - 200) {
    makeNavItemActive("About")
    $("#btnUp").removeClass("d-none")
    $("#btnUp").fadeIn(500);

    $("nav").addClass("bg-gray").removeClass("bg-white");
    contentAboutButton.classList.add("animate__fadeInUp");
    contentAboutButton.classList.remove("opacity-0");
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }


  } else {
    $("#btnUp").fadeOut(500);
    $("nav").addClass("bg-white").removeClass("bg-gray");
  }
  // end about<====================> 







  // start skills<==================>
  const skills = document.getElementById("skills");
  const cartRow1 = document.querySelectorAll(".carts .cart-row1");
  const cartRow2 = document.querySelectorAll(".carts .cart-row2");
  const skillsHeader = document.querySelector(".skillsName");


  if (window.scrollY >= skills.offsetTop - 450) {
    for (let index = 0; index < cartRow1.length; index++) {
      cartRow1[index].classList.add("animate__fadeInUp");
      cartRow1[index].classList.remove("opacity-0");
    }

    if (window.scrollY >= skills.offsetTop - 300) {
      for (let index = 0; index < cartRow2.length; index++) {
        cartRow2[index].classList.add("animate__fadeInUp");
        cartRow2[index].classList.remove("opacity-0");
      }
    }
  }
  if (window.scrollY >= skills.offsetTop - 600) {
    makeNavItemActive("Skills")
    skillsHeader.classList.remove("opacity-0");
    skillsHeader.classList.add("animate__fadeInUp");
  }
  // end skills<==================>








  // start myEducation<==================>
  const myEducation = document.querySelector(".myEducation");
  const myEducationtitle = document.querySelector(".myEducationtitle");
  const myEducationParagraph = document.querySelector(".myEducationParagraph");

  if (window.scrollY >= myEducation.offsetTop - 600) {
    myEducationtitle.classList.add("animate__fadeInUp");
    myEducationtitle.classList.remove("opacity-0");

    myEducationParagraph.classList.add("animate__fadeInUp");
    myEducationParagraph.classList.remove("opacity-0");

  }
  // end myEducation<==================>








  //start Portfolio<==================>

  const portfolio = document.getElementById("portfolio");
  const portfolioHeaderName = document.querySelector(".portfolioHeaderName");
  const portfolioNav = document.querySelector(".portfolioNav");
  const portfolioCartRow1 = document.querySelectorAll(".portfolioCartRow1");
  const portfolioCartRow2 = document.querySelectorAll(".portfolioCartRow2");
  const portfolioCartRow3 = document.querySelectorAll(".portfolioCartRow3");
  const portfolioCartRow4 = document.querySelectorAll(".portfolioCartRow4");

  if (window.scrollY >= portfolio.offsetTop - 600) {
    portfolioHeaderName.classList.add("animate__fadeInUp");
    portfolioHeaderName.classList.remove("opacity-0")
  }

  if (window.scrollY >= portfolio.offsetTop - 500) {
    makeNavItemActive("Portfolio")

    portfolioNav.classList.add("animate__fadeInUp");
    portfolioNav.classList.remove("opacity-0")

  }
  if (window.scrollY >= portfolio.offsetTop - 350) {
    for (let index = 0; index < portfolioCartRow1.length; index++) {
      portfolioCartRow1[index].classList.add("animate__fadeInUp");
      portfolioCartRow1[index].classList.remove("opacity-0")
    }

  }

  if (window.scrollY >= portfolio.offsetTop - 100) {
    for (let index = 0; index < portfolioCartRow2.length; index++) {
      portfolioCartRow2[index].classList.add("animate__fadeInUp");
      portfolioCartRow2[index].classList.remove("opacity-0")
    }
  }

  if (window.scrollY >= portfolio.offsetTop + 100) {
    for (let index = 0; index < portfolioCartRow3.length; index++) {
      portfolioCartRow3[index].classList.add("animate__fadeInUp");
      portfolioCartRow3[index].classList.remove("opacity-0")
    }
  }
  if (window.scrollY >= portfolio.offsetTop + 300) {
    for (let index = 0; index < portfolioCartRow4.length; index++) {
      portfolioCartRow4[index].classList.add("animate__fadeInUp");
      portfolioCartRow4[index].classList.remove("opacity-0")
    }
  }
  //end Portfolio<==================>










  //start contact<==================>
  const contact = document.getElementById("contact");
  const contactTitle = document.querySelector(".contactTitle");
  const contactContent = document.querySelector(".contactContent");

  if (window.scrollY >= contact.offsetTop - 600) {
    makeNavItemActive("Contact")


    contactTitle.classList.add("animate__fadeInUp");
    contactTitle.classList.remove("opacity-0")

  }
  if (window.scrollY >= contact.offsetTop - 300) {
    contactContent.classList.add("animate__fadeIn");
    contactContent.classList.remove("opacity-0")

  }
  // footer
  const footerContent = document.querySelector(".footerContent");
  if (window.scrollY >= contact.offsetTop + 200) {
    footerContent.classList.add("animate__pulse");
    footerContent.classList.remove("opacity-0")
    console.log("done");

  }
  //end contact<==================>



}
//<========================================>





// start conter
let nums = document.querySelectorAll(".contentAboutButton .num");
function startCount(el) {
  let goal = parseInt(el.dataset.goal); // Parse goal as an integer
  let count = 0;

  let intervalId = setInterval(() => {
    el.textContent = `${count++}+`;

    if (count > goal) {
      clearInterval(intervalId); // Clear the interval when count reaches the goal
    }
  }, 400 / goal);
}
// end conter




// cart========================================>


// add allProjects===================================>
let allProjects = [
  { projectName: 'Muslim', imagePath: "Images/projectImages/react/Muslim.png", liveDemo: "https://musilm.vercel.app/", animation: "portfolioCartRow1" },
  { projectName: 'E-Commerce', imagePath: "Images/projectImages/react/smart shopping.png", liveDemo: "https://e-commerce-lemon-sigma.vercel.app/", animation: "portfolioCartRow1" },
  { projectName: 'Admin-Dashboard', imagePath: "Images/projectImages/react/admin dashboard.png", liveDemo: "https://admin-dashboard-one-lyart.vercel.app/", animation: "portfolioCartRow1" },

  { projectName: 'Portfolio', imagePath: "Images/projectImages/react/portfolio.png", liveDemo: "https://portfolio-five-phi-33.vercel.app/", animation: "portfolioCartRow2" },
  { projectName: 'Prayer-Timings', imagePath: "Images/projectImages/react/Prayer-Timing.png", liveDemo: "https://prayer-time-mu.vercel.app/", animation: "portfolioCartRow2" },
  { projectName: 'Note', imagePath: "Images/projectImages/react/notes.png", liveDemo: "https://note-sigma-eight.vercel.app/", animation: "portfolioCartRow2" },

  { projectName: 'FoodReview', imagePath: "Images/projectImages/javaScript/resturant.png", liveDemo: "https://omareltabakh.github.io/foodReview/", animation: "portfolioCartRow3" },
  { projectName: 'Games', imagePath: "Images/projectImages/javaScript/gaming review.png", liveDemo: "https://omareltabakh.github.io/Games/", animation: "portfolioCartRow3" },
  { projectName: 'Quiz app', imagePath: "Images/projectImages/javaScript/Quiz app.png", liveDemo: "https://omareltabakh.github.io/QuizApp/", animation: "portfolioCartRow3" },

  { projectName: 'Defolio', imagePath: "Images/projectImages/html and css/defolio.png", liveDemo: "https://omareltabakh.github.io/Devfolio/", animation: "portfolioCartRow4" },
  { projectName: 'Kerri', imagePath: "Images/projectImages/html and css/Kerri.png", liveDemo: "https://omareltabakh.github.io/Kerri/", animation: "portfolioCartRow4" },
  { projectName: 'Bezel', imagePath: "Images/projectImages/html and css/bezel.png", liveDemo: "https://omareltabakh.github.io/bezel/", animation: "portfolioCartRow4" },


];
let cartTemplate = ``

allProjects.map((project) => {
  cartTemplate += `
  <div class="col-lg-4 col-md-6 col-sm-12 ${project.animation} opacity-0 animate__animated">
        <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
            <img class="w-100" src="${project.imagePath}" alt="">
            <div
                class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
                <div>
                    <p class="text-white fs-6 fw-semibold">${project.projectName}</p>

                    <a target="_blank" href="${project.liveDemo}"
                        class="lightGray cursor-pointer secondary-color  ">
                        <i class="fa-solid fa-link me-2"></i>Vist Website</a>
                </div>
            </div>
        </div>

    </div>
  `
})
document.getElementById("allProject").insertAdjacentHTML("afterbegin", cartTemplate);


// add HTML&CSS projects==================================>
let htmlCssProjects = [
  { projectName: 'Bezel', imagePath: "Images/projectImages/html and css/bezel.png", liveDemo: "https://omareltabakh.github.io/bezel/" },
  { projectName: 'Defolio', imagePath: "Images/projectImages/html and css/defolio.png", liveDemo: "https://omareltabakh.github.io/Devfolio/" },
  { projectName: 'Fokier', imagePath: "Images/projectImages/html and css/Fokir.png", liveDemo: "https://omareltabakh.github.io/Fokir/" },
  { projectName: 'Kerri', imagePath: "Images/projectImages/html and css/Kerri.png", liveDemo: "https://omareltabakh.github.io/Kerri/" },
  { projectName: 'Mealify', imagePath: "Images/projectImages/html and css/Mealify.png", liveDemo: "https://omareltabakh.github.io/Mealify/" },
  { projectName: 'Portfolio', imagePath: "Images/projectImages/html and css/personal web site.png", liveDemo: "https://omareltabakh.github.io/Portfolio-HTML-CSS/" },
];
let htmlAndCssTemplate = ``

htmlCssProjects.map((item) => {
  htmlAndCssTemplate += `
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
              <img class="w-100" src="${item.imagePath}" alt="">
              <div
                class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
                <div>
                  <p class="text-white fs-6 fw-semibold">${item.projectName}</p>

                  <a target="_blank" href="${item.liveDemo}"
                    class="lightGray cursor-pointer secondary-color  "><i
                      class="fa-solid fa-link  me-2"></i>Vist Website</a>
                </div>
              </div>
            </div>
          </div>
  `
})

const htmlAndCss = document.getElementById("htmlAndCss")
htmlAndCss.innerHTML = htmlAndCssTemplate;


// javaScript projecs=====================================>
const javaScriptProjects = [
  { projectName: 'Games', imagePath: "Images/projectImages/javaScript/gaming review.png", liveDemo: "https://omareltabakh.github.io/Games/" },
  { projectName: 'Smart Login System', imagePath: "Images/projectImages/javaScript/smartLoginSystem.png", liveDemo: "https://omareltabakh.github.io/SmartLoginSystem/" },
  { projectName: 'Quiz app', imagePath: "Images/projectImages/javaScript/Quiz app.png", liveDemo: "https://omareltabakh.github.io/QuizApp/" },
  { projectName: 'BookMarker', imagePath: "Images/projectImages/javaScript/BookMarker.png", liveDemo: "https://omareltabakh.github.io/Bookmark/" },
  { projectName: 'jQuery', imagePath: "Images/projectImages/javaScript/jQuery.png", liveDemo: "https://omareltabakh.github.io/jQuery/" },
  { projectName: 'FoodReview', imagePath: "Images/projectImages/javaScript/resturant.png", liveDemo: "https://omareltabakh.github.io/foodReview/" },
  { projectName: 'Curd System', imagePath: "Images/projectImages/javaScript/CrudSystem.png", liveDemo: "https://omareltabakh.github.io/Curd/" },



]

let javaScriptCartTemplate = ``

javaScriptProjects.map((javaScriptCart) => {

  javaScriptCartTemplate += `
      <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
        <img class="w-100" src="${javaScriptCart.imagePath}" alt="">
        <div
          class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
          <div>
            <p class="text-white fs-6 fw-semibold">${javaScriptCart.projectName}</p>

            <a target="_blank" href="${javaScriptCart.liveDemo}"
              class="lightGray cursor-pointer secondary-color  "><i
                class="fa-solid fa-link me-2"></i>Vist Website</a>
          </div>
        </div>
      </div>
    </div>
  `
})
document.getElementById("javaScript").innerHTML = javaScriptCartTemplate;




// react projects=======================================>
const reactProjects = [
  { projectName: 'Muslim', imagePath: "Images/projectImages/react/Muslim.png", liveDemo: "https://musilm.vercel.app/" },
  { projectName: 'E-Commerce', imagePath: "Images/projectImages/react/smart shopping.png", liveDemo: "https://e-commerce-lemon-sigma.vercel.app/" },
  { projectName: 'Portfolio', imagePath: "Images/projectImages/react/portfolio.png", liveDemo: "https://portfolio-five-phi-33.vercel.app/" },
  { projectName: 'Admin-Dashboard', imagePath: "Images/projectImages/react/admin dashboard.png", liveDemo: "https://admin-dashboard-one-lyart.vercel.app/" },
  { projectName: 'Prayer-Times', imagePath: "Images/projectImages/react/Prayer-Timing.png", liveDemo: "https://prayer-time-mu.vercel.app/" },
  { projectName: 'Note', imagePath: "Images/projectImages/react/notes.png", liveDemo: "https://note-sigma-eight.vercel.app/" },
  { projectName: 'MuiFristProject', imagePath: "Images/projectImages/react/MuiFristProject.png", liveDemo: "https://mui-project-peach.vercel.app/create" },
  { projectName: 'FristProjectInReact', imagePath: "Images/projectImages/react/start frameWork.png", liveDemo: "https://frist-project-in-react.vercel.app/" },
  { projectName: 'omar-portfolio ', imagePath: "Images/projectImages//react//omar-portfolio.png", liveDemo: "https://tailwind-portfolio-jade.vercel.app/" },

]
let reactCartTemplate = ``;
reactProjects.map((reactCart) => {

  reactCartTemplate += `
  <div class="col-lg-4 col-md-6 col-sm-12">
  <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
    <img class="w-100" src="${reactCart.imagePath}" alt="">
    <div
      class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
      <div>
        <p class="text-white fs-6 fw-semibold">${reactCart.projectName}</p>

        <a target="_blank" href="${reactCart.liveDemo}"
          class="lightGray cursor-pointer secondary-color  "><i
            class="fa-solid fa-link me-2"></i>Vist Website</a>
      </div>
    </div>
  </div>

</div>
  
  `
})

document.getElementById("react").innerHTML = reactCartTemplate;





