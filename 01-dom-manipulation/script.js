//Easy
const mainHeading=document.getElementById("main-heading");
mainHeading.textContent="My Awesome Shop";


const tagline=document.querySelector(".tagline");
tagline.innerHTML="Find the <strong>best</strong> products here!";


const footerParagraph=document.querySelector("footer p");
footerParagraph.textContent="© 2025 Akash Kumar"

//Medium
const main = document.getElementById("app-container");

const heading = document.createElement("h2");
heading.textContent = "About Us";

const paragraph = document.createElement("p");
paragraph.textContent = "We are a small team passionate about quality products.";

main.appendChild(heading);
main.appendChild(paragraph);


//Hard
const contactDiv = document.createElement("div");
contactDiv.className = "contact-info";

 
const emailPara = document.createElement("p");
emailPara.innerHTML = 'Email: <a href="mailto:contact@awesomeshop.com">contact@awesomeshop.com</a>';


const phonePara = document.createElement("p");
phonePara.textContent = "Phone: 123-456-7890";
 

contactDiv.appendChild(emailPara);
contactDiv.appendChild(phonePara);

 
const footer = document.querySelector("footer");
footer.parentNode.insertBefore(contactDiv, footer);
