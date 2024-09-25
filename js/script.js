window.onload = function () {
  // code for page one - that is intro page with play game button
  const pageOneMainDiv = document.createElement("div");
  pageOneMainDiv.setAttribute("id", "page01");
  pageOneMainDiv.className =
    " w-full h-screen flex justify-around items-center flex-col bg-yellow-200 padding ";
  document.body.append(pageOneMainDiv);
  const titleOne = document.createElement("h1");
  titleOne.textContent = "Welcome to Memory Game";
  titleOne.className = "titleOne";
  pageOneMainDiv.append(titleOne);
  const welcomeImg = document.createElement("img");
  welcomeImg.setAttribute("src", "./public/memory.png");
  welcomeImg.setAttribute("alt", "welcome card image");
  pageOneMainDiv.append(welcomeImg);
  const playGameBtn = document.createElement("button");
  playGameBtn.textContent = "Play Game";
  playGameBtn.className = "playGameBtn";
  playGameBtn.setAttribute("type", "button");
  playGameBtn.setAttribute("id", "btnId");
  pageOneMainDiv.append(playGameBtn);

  //function for displaying new page with game when we click play game button

  document.getElementById("gamePage").style.display = "none";

  playGameBtn.addEventListener("click", function () {
    document.getElementById("gamePage").style.display = "flex";
    document.getElementById("page01").style.display = "none";
  });

  // get elements from html and store

  const cardDisplay = document.querySelector("#grid");
  const scoreDisplay = document.querySelector("#score");

  //create an array to store the game images

  const cardArray = [
    {
      name: "brown panda",
      img: "public/brown panda.svg",
    },
    {
      name: "deer",
      img: "public/deer.svg",
    },
    {
      name: "elephant",
      img: "public/elephant.svg",
    },
    {
      name: "fox",
      img: "public/fox.svg",
    },
    {
      name: "giratte",
      img: "public/giraffe.svg",
    },
    {
      name: "lion",
      img: "public/lion.svg",
    },
    {
      name: "pig",
      img: "public/pig.svg",
    },
    {
      name: "tiger",
      img: "public/tiger.svg",
    },
    {
      name: "brown panda",
      img: "public/brown panda.svg",
    },
    {
      name: "deer",
      img: "public/deer.svg",
    },
    {
      name: "elephant",
      img: "public/elephant.svg",
    },
    {
      name: "fox",
      img: "public/fox.svg",
    },
    {
      name: "giratte",
      img: "public/giraffe.svg",
    },
    {
      name: "lion",
      img: "public/lion.svg",
    },
    {
      name: "pig",
      img: "public/pig.svg",
    },
    {
      name: "tiger",
      img: "public/tiger.svg",
    },
  ];

  // code to place the card randomly





  // function to create a board that displays the cards

  function generateBoard() {
    cardArray.sort(() => 0.5 - Math.random());
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "public/frontside.svg");
      card.setAttribute("class", "frontSide");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      cardDisplay.appendChild(card);
    }
    console.log(cardArray);
  }

  // write function flipcard
  cardChosen = [];
  cardChosenId = [];

  function flipCard() {
    const cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    cardChosenId.push(cardId);
    cardChosen.push(cardArray[cardId].name);

    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  // function to check match
  cardsWon = [];

  function checkMatch() {
    const cards = document.querySelectorAll("img");
    if (cardChosen[0] == cardChosen[1]) {
      cards[cardChosenId[0]].setAttribute("src", "public/donematch.svg");
      cards[cardChosenId[1]].setAttribute("src", "public/donematch.svg");
      cards[cardChosenId[0]].removeEventListener("click", flipCard);
      cards[cardChosenId[1]].removeEventListener("click", flipCard);
      cardsWon.push(cardChosen);
      scoreDisplay.innerHTML = cardsWon.length;
    } else {
      cards[cardChosenId[0]].setAttribute("src", "public/frontside.svg");
      cards[cardChosenId[1]].setAttribute("src", "public/frontside.svg");
    }

    cardChosen = [];
    cardChosenId = [];

    if (cardsWon.length == cardArray.length / 2) {
      const success = document.createElement("div");
      success.className = "successDiv";
      success.setAttribute("id", "successMessage");
      cardDisplay.append(success);
      success.textContent ="You Have Successfully Completed The Game, Click Restart to Play Again ";
      success.appendChild(sMsg)
    }
  }

  // function to restart & reset the game

  const restart = document.querySelector("#restartBtn");

  restart.addEventListener("click", function () {
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("grid").innerHTML = ""
    scoreDisplay.innerHTML = ""
    generateBoard();
  cardChosen = [];
  cardChosenId = [];

  function flipCard() {
    const cardId = this.getAttribute("data-id");
    this.setAttribute("src", cardArray[cardId].img);
    cardChosenId.push(cardId);
    cardChosen.push(cardArray[cardId].name);

    if (cardChosen.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

 
  cardsWon = [];

  function checkMatch() {
    const cards = document.querySelectorAll("img");
    if (cardChosen[0] == cardChosen[1]) {
      cards[cardChosenId[0]].setAttribute("src", "public/donematch.svg");
      cards[cardChosenId[1]].setAttribute("src", "public/donematch.svg");
      cards[cardChosenId[0]].removeEventListener("click", flipCard);
      cards[cardChosenId[1]].removeEventListener("click", flipCard);
      cardsWon.push(cardChosen);
      scoreDisplay.innerHTML = cardsWon.length;
    } else {
      cards[cardChosenId[0]].setAttribute("src", "public/frontside.svg");
      cards[cardChosenId[1]].setAttribute("src", "public/frontside.svg");
    }

    cardChosen = [];
    cardChosenId = [];

    if (cardsWon.length == cardArray.length / 2) {
      const success = document.createElement("div");
      success.className = "successDiv";
      success.setAttribute("id", "successMessage");
      success.textContent = "You Have Successfully Completed The Game ";
      cardDisplay.append(success);
    }
  }
  
  });

  generateBoard();
};
