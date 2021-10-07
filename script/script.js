// Responise query

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
logo = document.querySelector('.logo')

burger.addEventListener('click', () => {
  logo.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
})

// Function for pizza menu

function pizzamenu() {
  document.getElementById("option1").innerHTML = "MAGRGHERITA";
  document.getElementById("price1").innerHTML = "&#x20b9 200";
  document.getElementById("ind1").innerHTML =
    "Fresh tomatoes, fresh mozzarella, fresh basil";

  document.getElementById("option2").innerHTML = "Formaggio";
  document.getElementById("price2").innerHTML = "&#x20b9 150";
  document.getElementById("ind2").innerHTML =
    "Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)";

  document.getElementById("option3").innerHTML = "Chicken";
  document.getElementById("price3").innerHTML = "&#x20b9 250";
  document.getElementById("ind3").innerHTML =
    "Fresh tomatoes, mozzarella, chicken, onions";

  document.getElementById("option4").innerHTML = "Pineapple'o'clock";
  document.getElementById("price4").innerHTML = "&#x20b9 180";
  document.getElementById("ind4").innerHTML =
    "Fresh tomatoes, mozzarella, fresh pineapple, bacon, fresh basil";

  document.getElementById("option5").innerHTML = "Meat Town";
  document.getElementById("price5").innerHTML = "&#x20b9 300";
  document.getElementById("ind5").innerHTML =
    "Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef, chicken";

  document.getElementById("option6").innerHTML = "Parma";
  document.getElementById("price6").innerHTML = "&#x20b9 150";
  document.getElementById("ind6").innerHTML =
    "Fresh tomatoes, mozzarella, parma, bacon, fresh arugula";

  document.getElementById("menubox").style.height = "565px";

  document.getElementById("line4").style.display = "";
  document.getElementById("line5").style.display = "";
}

// Function for starter menu

function startersmenu() {
  document.getElementById("option1").innerHTML = "Today's Soup";
  document.getElementById("price1").innerHTML = "&#x20b9 75";
  document.getElementById("ind1").innerHTML = "Ask the waiter";

  document.getElementById("option2").innerHTML = "Bruschetta";
  document.getElementById("price2").innerHTML = "&#x20b9 100";
  document.getElementById("ind2").innerHTML =
    "Bread with pesto, tomatoes, onion, garlic";

  document.getElementById("option3").innerHTML = "Garlic bread";
  document.getElementById("price3").innerHTML = "&#x20b9 120";
  document.getElementById("ind3").innerHTML =
    "Grilled ciabatta, garlic butter, onions";

  document.getElementById("option4").innerHTML = "Tomozzarella";
  document.getElementById("price4").innerHTML = "&#x20b9 100";
  document.getElementById("ind4").innerHTML = "Tomatoes and mozzarella";

  document.getElementById("option5").innerHTML = "";
  document.getElementById("price5").innerHTML = "";
  document.getElementById("ind5").innerHTML = "";

  document.getElementById("option6").innerHTML = "";
  document.getElementById("price6").innerHTML = "";
  document.getElementById("ind6").innerHTML = "";

  document.getElementById("menubox").style.height = "400px";

  document.getElementById("line4").style.display = "none";
  document.getElementById("line5").style.display = "none";
}

// Function for salad menu

function saladsmenu() {
  document.getElementById("option1").innerHTML = "Lasagna";
  document.getElementById("price1").innerHTML = "&#x20b9 50";
  document.getElementById("ind1").innerHTML =
    "Special sauce, mozzarella, parmesan, ground beefr";

  document.getElementById("option2").innerHTML = "Ravioli";
  document.getElementById("price2").innerHTML = "&#x20b9 50";
  document.getElementById("ind2").innerHTML = "Ravioli filled with chees";

  document.getElementById("option3").innerHTML = "Spaghetti Classica";
  document.getElementById("price3").innerHTML = "&#x20b9 75";
  document.getElementById("ind3").innerHTML =
    "Fresh tomatoes, onions, ground beef";

  document.getElementById("option4").innerHTML = "Seafood pasta";
  document.getElementById("price4").innerHTML = "&#x20b9 120";
  document.getElementById("ind4").innerHTML = "Salmon, shrimp, lobster, garlic";

  document.getElementById("option5").innerHTML = "";
  document.getElementById("price5").innerHTML = "";
  document.getElementById("ind5").innerHTML = "";

  document.getElementById("option6").innerHTML = "";
  document.getElementById("price6").innerHTML = "";
  document.getElementById("ind6").innerHTML = "";

  document.getElementById("menubox").style.height = "400px";

  document.getElementById("line4").style.display = "none";
  document.getElementById("line5").style.display = "none";
}