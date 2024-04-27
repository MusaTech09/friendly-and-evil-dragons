const FriendlyDragon = require("./classes/friendly-dragon.js");
const EvilDragon = require("./classes/evil-dragon.js");
const Dragon = require("./classes/dragon.js");

const falkor = new FriendlyDragon('Falkor', 'white', ['save Atreyu from the swamp', 'save Atreyu from the Nothing', 'scare the local bullies into a dumpster'], 'Bastian');

const smaug = new EvilDragon('Smaug', 'color', ['take over your mountain kingdom', 'steal all of your dwarven gold', 'burn down your floating village'], 'Dwarf King');

const allDragons = Dragon.getDragons(falkor, smaug);

/****************************** CONSOLE.LOGS **********************************/
// console.log(falkor);
// falkor.hasLifeGoals();
// console.log(falkor.breathesFire());
// console.log(falkor.helpsPeople());

// console.log(smaug);
// smaug.dontInviteThemOverForDinner();
// console.log(smaug.breathesFire());
// console.log(smaug.burnsNemesis());

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
