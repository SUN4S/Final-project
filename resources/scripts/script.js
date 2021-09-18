document.getElementById("defaultOpen").click();

function openFact(evt, FactName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabText");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(FactName).style.display = "block";
  evt.currentTarget.className += " active";
}

// toggles navbar on and off
document.getElementById("navBurger").addEventListener('click', () => {
  if(document.getElementsByClassName("navigation")[0].classList.contains('active')) {
    document.getElementsByClassName("navigation")[0].classList.remove('active')
  } else {
    document.getElementsByClassName("navigation")[0].classList.add('active');
  }
});


// confirming intro form
var optionSelect = "";

document.getElementById('montlyOption').addEventListener('click', () => {
  optionSelect = "monthly";
});

document.getElementById('yearlyOption').addEventListener('click', () => {
  optionSelect = "yearly";
});

document.getElementById("submitForm").addEventListener('click', (e) => {
  var name = document.getElementById("nameInput");
  var lastName = document.getElementById("lastNameInput");
  var phone = document.getElementById("phoneInput");


  e.preventDefault();
  if(name.value && lastName.value && phone.value && optionSelect) {
    alert("thank you for signing up");
    name.value = "";
    lastName.value = "";
    phone.value = "";
  } else {
    alert("missing information");
  }
});

// confirming contact form
var contactOptionSelect = "";

document.getElementById('personalOption').addEventListener('click', () => {
  contactOptionSelect = "personal";
});

document.getElementById('companyOption').addEventListener('click', () => {
  contactOptionSelect = "company";
});

document.getElementById('sendContact').addEventListener('click', (e) => {
  var name = document.getElementById("contactName");
  var lastName = document.getElementById("contactLastName");
  var phone = document.getElementById("contactNumber");
  e.preventDefault();
  if(name.value && lastName.value && phone.value && contactOptionSelect) {
    alert("thank you for contacting us");
    name.value = "";
    lastName.value = "";
    phone.value = "";
  } else {
    alert("missing information");
  }
});


var featured = document.getElementById("featured");
var about = document.getElementById("about");
var pricing = document.getElementById("pricing");
var reviews = document.getElementById("reviews");
var contact = document.getElementById("contact");

featured.addEventListener('mouseover', (e) => {
  document.getElementsByTagName('ul')[0].getElementsByTagName('li')[0].classList.add('active');
});
featured.addEventListener('mouseleave', (e) => {
  resetActive();
});

about.addEventListener('mouseover', (e) => {
  document.getElementsByTagName('ul')[0].getElementsByTagName('li')[1].classList.add('active');
});
about.addEventListener('mouseleave', (e) => {
  resetActive();
});

pricing.addEventListener('mouseover', (e) => {
  document.getElementsByTagName('ul')[0].getElementsByTagName('li')[2].classList.add('active');
});
pricing.addEventListener('mouseleave', (e) => {
  resetActive();
});

reviews.addEventListener('mouseover', (e) => {
  document.getElementsByTagName('ul')[0].getElementsByTagName('li')[3].classList.add('active');
});
reviews.addEventListener('mouseleave', (e) => {
  resetActive();
});

contact.addEventListener('mouseover', (e) => {
  document.getElementsByTagName('ul')[0].getElementsByTagName('li')[4].classList.add('active');
});
contact.addEventListener('mouseleave', (e) => {
  resetActive();
});

const resetActive = () => {
  for(var i = 0; i < 5; i++) {
    document.getElementsByTagName('ul')[0].getElementsByTagName('li')[i].classList.remove('active');
  }
}


