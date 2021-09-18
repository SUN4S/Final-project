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

document.getElementById("navBurger").addEventListener('click', () => {
  if(document.getElementsByClassName("navigation")[0].classList.contains('active')) {
    document.getElementsByClassName("navigation")[0].classList.remove('active')
  } else {
    document.getElementsByClassName("navigation")[0].classList.add('active');
  }
});

document.getElementById("submitForm").addEventListener('click', () => {
  console.log('hello');
});