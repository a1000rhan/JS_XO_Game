// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
let turn=0;
let cond;
function fillButton(index, text) {
  // This function fills
  
 
  document.getElementById(index).innerHTML = text;
  
  
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// Delete this code once you are done testing



/**
 *
 * THE MAIN FUNUCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */

function clickButton(index) {
  
  if(turn >=0 && turn <=8){
    console.log(cond);
    if(cond != index){
    fillButton(index,checkPlayer()); 
   cond =index;
   return turn++;
    }
  }
 
  
    
    
  } 
  
  
  
  // in this function you should check if the player is X or O
  function checkPlayer() {
    
    
    
    if(turn%2==0){
      
      return "X";
    }else{
      return "O";
    }
    

}
/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner
function checkWinner(){
  
}

// function restart game

// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
  alert(`Horraaay, ${winner} wins!`);
}
