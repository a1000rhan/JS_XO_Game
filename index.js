// Premade function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
let turn=0;
let cond;
let arrX=[];
let arrO=[]

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
    console.log(index);
    
    
    if(cond != index){
      fillButton(index,checkPlayer(index)); 
     
      
    
   cond =index;
   checkWinner();
   return turn++;
    }
  }
 
    
    
  } 
  
  
  
  // in this function you should check if the player is X or O
  function checkPlayer(input) {
    
    
    
    if(turn % 2 ==0){
      arrX.push(input);
      console.log(arrX);
      return "X";
    }else{
      arrO.push(input);
      console.log(arrO);
      return "O";
    }
    


}

/**
 *
 * checkWinner should be a function that checks
 * who is winning and returns the winner
 */
// function checkWinner
function checkWinner(index){

  const r1x =(arrX.includes(1) && arrX.includes(2) && arrX.includes(3));
  const r2x =(arrX.includes(4) && arrX.includes(5) && arrX.includes(6));
  const r3x =(arrX.includes(7) && arrX.includes(8) && arrX.includes(9));
  const c1x =(arrX.includes(1) && arrX.includes(4) && arrX.includes(7));
  const c2x =(arrX.includes(2) && arrX.includes(5) && arrX.includes(8));
  const c3x =(arrX.includes(3) && arrX.includes(6) && arrX.includes(9));
  const d1x =(arrX.includes(1) && arrX.includes(5) && arrX.includes(9));
  const d2x =(arrX.includes(3) && arrX.includes(5) && arrX.includes(7));


  const r1o =(arrO.includes(1) && arr0.includes(2) && arrO.includes(3));
  const r3o =(arrO.includes(7) && arrO.includes(8) && arrO.includes(9));
  const c1o =(arrO.includes(1) && arrO.includes(4) && arrO.includes(7));
  const r2o =(arrO.includes(4) && arrO.includes(5) && arrO.includes(6));
  const c2o =(arrO.includes(2) && arrO.includes(5) && arrO.includes(8));
  const c3o =(arrO.includes(3) && arrO.includes(6) && arrO.includes(9));
  const d1o =(arrO.includes(1) && arrO.includes(5) && arrO.includes(9));
  const d2o =(arrO.includes(3) && arrO.includes(5) && arrO.includes(7));


if(r1x|| r2x||r3x||c1x||c2x||c3x||d1x||d2x){

  console.log( "X Win")
}else if(r1o||r2o||r3o||c1o||c2o||c3o||d1o||d2o){
  console.log( "O Win")
}

  
}

// function restart game

// premade a function. You can use this function to present an alert to say somene wins
function winningAlert(winner) {
  alert(`Horraaay, ${winner} wins!`);
}
