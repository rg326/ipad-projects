// class Player {
//   /**
//    * Plays a warrior turn.
//    *
//    * @param {Warrior} warrior The warrior.
//    */
//   playTurn(warrior) {
//     let health = warrior.health()
//     let maxHealth = warrior.maxHealth()
//     let isEmpty = warrior.feel().isEmpty()

//     if(isEmpty && health === maxHealth) {
//       warrior.walk()
//     } else if (!isEmpty && health > 10 && health < maxHealth){
//       warrior.attack()
//     } else if(isEmpty && health <= 8) {
//       warrior.walk()
//     }  else if(!isEmpty && health <= 10){
//       warrior.attack()
//     } else if(isEmpty && health < 6){
//       warrior.rest()
//     } else if (!isEmpty) {
//       warrior.attack()
//     } else {
//       warrior.rest()
//     }
//   // Cool code goes here
//   }
// }

//====================================

//class Player {
//  /**
//   * Plays a warrior turn.
//   *
//   * @param {Warrior} warrior The warrior.
//   */
//  playTurn(warrior) {
//    let health = warrior.health()
//    let maxHealth = warrior.maxHealth()
//    let isEmpty = warrior.feel().isEmpty()

//  if(isEmpty && health === maxHealth) {
//  // Cool code goes here

//  }
//  }
//}

//WALK - MaxHealth, isEmpty, health < maxHealth,
//health > 15
//ATTACK - !isEmpty
//REST - isEmpty && health <= 6
