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
logo.setAttribute('src', siteContent["nav"]["img-src"])

document.querySelector('nav a').textContent = 'Services';
document.querySelector('nav a:nth-of-type(2)').textContent = 'Products';
document.querySelector('nav a:nth-of-type(3)').textContent = 'Visions';
document.querySelector('nav a:nth-of-type(4)').textContent = 'Features';
document.querySelector('nav a:nth-of-type(5)').textContent = 'About';
document.querySelector('nav a:nth-of-type(6)').textContent = 'Contact';

const navColor = document.querySelectorAll('a');
navColor.forEach((item) => (item.style.color = 'green'));

const addLink = document.querySelector('nav'); 
const new1 = document.createElement('a');
new1.textContent = 'End Example';
new1.href = '#';
new1.style.color = 'green';
addLink.appendChild(new1);

const new2 = document.createElement('a');
new2.textContent = 'Beginning Example';
new2.href = '#';
new2.style.color = 'green';
addLink.prepend(new2);

document.querySelector('h1').textContent = siteContent['cta']['h1'];
document.querySelector('button').textContent = siteContent['cta']['button'];

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4']
h4[1].textContent = siteContent['main-content']['about-h4']
h4[2].textContent = siteContent['main-content']['services-h4']
h4[3].textContent = siteContent['main-content']['product-h4']
h4[4].textContent = siteContent['main-content']['vision-h4']
h4[5].textContent = siteContent['contact']['contact-h4']

const p = document.querySelectorAll('p');
p[0].textContent = siteContent['main-content']['features-content']
p[1].textContent = siteContent['main-content']['about-content']
p[2].textContent = siteContent['main-content']['services-content']
p[3].textContent = siteContent['main-content']['product-content']
p[4].textContent = siteContent['main-content']['vision-content']
p[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
p[6].textContent = siteContent['contact']['phone']
p[7].textContent = siteContent['contact']['email']

document.querySelector('footer').textContent = siteContent['footer']['copyright'];