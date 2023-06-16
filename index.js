let myPortfolio = [
  {
    name: "manage-u",
    web: "The site performs agenda management according to the things you put in it.",
    image: "./img/manage-u.jpg.png",
       build:" TypeScript, html, css,bootstrap.",
    link: "https://ofeknavemanageu.netlify.app/" 
  },
  {
    name: "myaccount",
    web: "myaccount deals with expenses and income and account management.",
    image: "./img/myaccount.jpg.png",
       build:" java script, html, css,bootstrap.",
    link: "https://accountofeknave.netlify.app/"
  },
  {
    name: "techit",
    web: "techit Internet computer site.",
    build:" java script, html, css,bootstrap.",
    image: "./img/techit.jpg.png",
    link: "https://techitofeknave.netlify.app/" 
  },
  {
    name: "snake game",
    web: "This is a snake game that I developed using java script",
     build:" java script, html, css.",
    image: "./img/game.jpg.png",
    link: "https://gamesnakeofeknave.netlify.app/" 
  },
  
];

function showCards() {
  for (let i = 0; i < myPortfolio.length; i++) {
    document.getElementById("portfolio-front").innerHTML += `
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="${myPortfolio[i].image}" class="card-img-top" alt="${myPortfolio[i].name}">
          <div class="card-body">
            <h5 class="card-title">${myPortfolio[i].name}</h5>
            <p class="card-text">${myPortfolio[i].web}</p>
            <hr></hr>
            <ul class="list-group-item">${myPortfolio[i].build}</ul>
            <a href="${myPortfolio[i].link}" class="btn btn-primary">click to website</a>
          </div>
        </div>
      </div>
    `;
  }
}

showCards();

function setModal(index) {
  let product = myPortfolio[index]; 

  document.getElementById("modalTitle").innerText = product.name;
  document.getElementById("modalContent").innerHTML = `
    <p><b>Name:</b> ${product.name}</p>
    <p><b>Web:</b> ${product.web}</p>
    <img src="${product.image}" alt="${product.name}" class="img-fluid">
  `;
}


document.getElementById("registration-form").addEventListener("submit", function(event) {
  if (!isNameValid() || !isLastNameValid() || !isEmailValid()) {
    event.preventDefault();
  } else {
    saveFormData();
    redirectToThankYouPage();
  }

  event.preventDefault();
});

function isNameValid() {
  var nameField = document.getElementById("name");
  if (nameField.value.trim() === "") {
    nameField.setCustomValidity("Please enter your name.");
    return false;
  } else {
    nameField.setCustomValidity("");
    return true;
  }
}

function isLastNameValid() {
  var lastNameField = document.getElementById("last-name");
  if (lastNameField.value.trim() === "") {
    lastNameField.setCustomValidity("Please enter your last name.");
    return false;
  } else {
    lastNameField.setCustomValidity("");
    return true;
  }
}

function isEmailValid() {
  var emailField = document.getElementById("email");
  var emailValue = emailField.value.trim();
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailValue === "") {
    emailField.setCustomValidity("Please enter your email address.");
    return false;
  } else if (!emailPattern.test(emailValue)) {
    emailField.setCustomValidity("Please enter a valid email address.");
    return false;
  } else {
    emailField.setCustomValidity("");
    return true;
  }
}

function saveFormData() {
  var nameField = document.getElementById("name");
  var lastNameField = document.getElementById("last-name");
  var emailField = document.getElementById("email");

  var formData = {
    name: nameField.value.trim(),
    lastName: lastNameField.value.trim(),
    email: emailField.value.trim()
  };

  localStorage.setItem("formData", JSON.stringify(formData));
}

function redirectToThankYouPage() {
  window.location.href = "contactpage.html";
}

