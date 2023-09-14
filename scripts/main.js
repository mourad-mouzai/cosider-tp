// variable : var, let, const
//const de préferance, puis let,
//var a eviter

const taille = 1.87; //number

const name = "mourad"; //string

let score; //number

const isActive = true; //boolean

const table = { pied: 4, couleur: "blanche" }; //objet

const stagiers = ["oussama", "sid ali", "laid"]; //tableau

const date_naissance = new Date("2023-04-15"); //date

//

score = 25;
// const age;  error
// age = 23;

const age = 23;

// function

let age1 = calcule_age(date_naissance);

function calcule_age(date) {
  let resutat;
  // calcule date
  //   const now = new Date.now();
  //   resutat = now - date;
  resutat = 10;
  return resutat;
}

//inline function

// const x = 22;
// let age2 = () => {
//   x + 10;
// };
// alert(age2);

//objet

const stagier = {
  //parametres
  id: 298,
  firstname: "Sid ali",
  formation: "Tech Web",
  //methodes
  suit: function () {
    return this.id + ", " + this.firstname + ", " + this.formation;
  },
};

console.log(stagier.id);
console.log(stagier.suit());
// alert(stagier.suit());

// show time

function showTime() {
  document.getElementById("time_Id").innerHTML = Date();
}

function getTime() {
  return Date();
}

function resoudreXseconde(milSec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getTime());
    }, milSec * 1000);
  });
}

async function deffiredShowTime() {
  document.getElementById("time_Id").innerHTML = await resoudreXseconde(3);
}

async function getJsonFile() {
  let promise = new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/json/99allah_names.json");
    request.onload = () => {
      if (request.status == 200) {
        resolve(request.response);
      } else {
        resolve("file not found");
      }
    };
    request.send();
  });
  document.getElementById("names").innerHTML = await promise;
  console.log(typeof isloading); //verification du type d'une variable
}

// promise.then.catch.finaly

let isloading = false;

async function getJsonFile2() {
  let promise = new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/json/99allah_names.json");
    request.onload = () => {
      isloading = true;
      resolve(request.response);
    };
    request.send();
  });

  let data = await promise;

  promise
    .then((promise.document.getElementById("names").innerHTML = data))
    .catch(
      (promise.document.getElementById("names").innerHTML = "File not found")
    )
    .finally((isloading = false));
}

// try catch

// try {

// } catch (error) {
//     console.log(error)
// }

async function getJsonFile3() {
  let promise = new Promise((resolve) => {
    let request = new XMLHttpRequest();
    request.open("GET", "/assets/json/99allah_names.json");
    request.onload = () => {
      try {
        resolve(request.response);
        console.log("success");
      } catch (error) {
        resolve("file not found");
        console.log(error);
      }
    };
    request.send();
  });
  document.getElementById("names").innerHTML = await promise;
  console.log(typeof isloading); //verification du type d'une variable
}
