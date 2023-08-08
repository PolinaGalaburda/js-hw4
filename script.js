"use strict";

// 1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval

/* function detonatorTimer(delay) {
  let currentCount = delay;

  const interval = setInterval(() => {
    if (currentCount > 0) {
      console.log(currentCount);
      currentCount--;
    } else {
      console.log("BOOM!");
      clearInterval(interval);
    }
  }, 1000);
}

detonatorTimer(3); */

// 2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout

/* function detonatorTimer(delay) {
  function countdown(counter) {
    if (counter > 0) {
      console.log(counter);
      setTimeout(() => countdown(counter - 1), 1000);
    } else {
      console.log("BOOM!");
    }
  }
  countdown(delay);
}

detonatorTimer(3); */

// 3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять.
/* 
let me = {
  name: "Polina",
  surname: "Halaburda",
  residency: "Kyiv",
  gender: "female",
  age: 25,
  hairColor: "blond",
  eyesColor: "grey-blue",
  hobby: "playing the piano",
  defaultMood: "focused",
  currentMood: "sleepy",
  education: "philologist",
  musicSchool: {
    name: "Music School No. 4 named after Dmitry Dmytrovich Shostakovich",
    graduationYear: 2013,
    instrument: "piano",
  },

  introduce() {
    console.log(
      `My name is ${this.name} ${this.surname}, I'm ${this.age} years old and I live in ${this.residency}`
    );
  },
  displayEducation() {
    console.log(`I'm ${this.education} by education`);
  },
  prognose() {
    console.log(`I hope that next year I'm gonna be ${this.age + 1}`);
  },
  describeMyMood() {
    console.log(
      `Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`
    );
  },
  describeMyHobby() {
    console.log(`My hobby is ${this.hobby}`);
  },
  describeMyAppearance() {
    console.log(`I have ${this.hairColor} hair and ${this.eyesColor} eyes`);
  },
  describeMyMusicSchool() {
    console.log(
      `I graduated from ${this.musicSchool.name}, ${this.musicSchool.instrument} in ${this.musicSchool.graduationYear} year`
    );
  },
}; */

/* me.introduce();

me.prognose();

me.displayEducation();

me.describeMyHobby();

me.describeMyMusicSchool();

me.describeMyMood();

me.describeMyAppearance();
 */
// 4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту

/* let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDisplayEducation = me.displayEducation.bind(me);
let securedSelfDescribeMyHobby = me.describeMyHobby.bind(me);
let securedSelfDescribeMyMusicSchool = me.describeMyMusicSchool.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
let securedSelfDescribeMyAppearance = me.describeMyAppearance.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfPrognose, 2000);
setTimeout(securedSelfDisplayEducation, 3000);
setTimeout(securedSelfDescribeMyHobby, 4000);
setTimeout(securedSelfDescribeMyMusicSchool, 5000);
setTimeout(securedSelfDescribeMyMood, 6000);
setTimeout(securedSelfDescribeMyAppearance, 7000); */

// 5. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд

/* function someFunction(arg1, arg2) {
  const result = arg1 + arg2;
  console.log(`Result: ${result}`);
}

function slower(func, seconds) {
  return function (...args) {
    console.log(`Chill out, you will get your result in ${seconds} seconds.`);
    setTimeout(() => {
      func(...args);
    }, seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(10, 4); */
