const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  

 

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//Append Prepend
let nav = document.querySelector('nav');
let hello = document.createElement('a');
let goodNight = document.createElement('a');
hello.textContent = 'Hello';
goodNight.textContent = 'Good Night';
nav.append(goodNight);
nav.prepend(hello);


//Links
let aLinks = document.querySelectorAll('a');
aLinks[0].textContent ="Services";
aLinks[1].textContent = "Product";
aLinks[2].textContent ="Vision";
aLinks[3].textContent ="Features";
aLinks[4].textContent ="About";
aLinks[5].textContent ="Contact";
aLinks[0].style.color = 'green';
aLinks[1].style.color = 'green';
aLinks[2].style.color = 'green';
aLinks[3].style.color = 'green';
aLinks[4].style.color = 'green';
aLinks[5].style.color = 'green';


// CTA Section
const myH1 = document.querySelector('.cta h1');
myH1.textContent = 'Dom is Awesome';
myH1.style.flexWrap = 'wrap';
const myBtn = document.querySelector('.cta button');
myBtn.textContent = 'Get Started';
const myImg = document.getElementById('cta-img');
myImg.src = "img/header-img.png";

// Middle Section
//H4 Tag
const allText = document.querySelectorAll('.text-content h4'); 
allText[0].textContent = "Features";
allText[1].textContent = "About";
allText[2].textContent = "Services ";
allText[3].textContent = "Product";
allText[4].textContent = "Vision";
//p Tag
const allTextP = document.querySelectorAll('.text-content p'); 
allTextP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allTextP[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';    
allTextP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allTextP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
allTextP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
//img
var midImg = document.getElementById("middle-img");
midImg.src = 'img/mid-page-accent.jpg';

//Contact Info
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

const contactP = document.querySelectorAll('.contact p');
contactP[0].textContent =  "123 Way 456 Street Somewhere, USA";
contactP[1].textContent =  "1 (888) 888-8888";
contactP[2].textContent =  "sales@greatidea.io";

const footCopy = document.querySelector('footer');
footCopy.textContent = "Copyright Great Idea! 2018";
