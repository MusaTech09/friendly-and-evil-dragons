const Dragon = require("./dragon.js");

class FriendlyDragon extends Dragon {
    constructor(name, color, lifeGoals, friend){
        super(name, color);
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }
}

/*****************************CONSOLE.LOGS ************************************/

// const puff = new FriendlyDragon(
//     "Puff",
//     "green",
//     [
//       "live by the sea",
//       "frolick in the autumn mist",
//       "help small children"
//     ],
//     "Jackie Paper"
//   );

//   console.log(puff);
//   console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
//   puff.hasLifeGoals();
//   console.log(puff.helpsPeople());

//   const toothless = new FriendlyDragon(
//     "Toothless",
//     "black",
//     [
//       "save the town of Burke",
//       "fly with a kid on his back",
//       "hang out with Vikings"
//     ],
//     "Hiccup"
//   );

//   console.log(toothless); toothless.hasLifeGoals();
//   console.log(toothless.helpsPeople());
//   console.log(toothless.breathesFire());
