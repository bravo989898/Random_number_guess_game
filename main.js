//splash
var SplashScreen = document.querySelector('.splash_screen');
SplashScreen.addEventListener('click', ()=>{
    SplashScreen.style.opacity = 0;
    //appear
    var appear = document.getElementById("exist");
    appear.style.display= "block";
    //appear
    setTimeout(()=>{
        SplashScreen.classList.add('hidden')
      },610)
})

//splash

//popup

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

//guess code

var click = false;
var result = document.getElementById("container_text");
var result_img_happy = document.getElementById("happy_display");
var result_img_sad = document.getElementById("sad_display");
var rand_number = Math.floor((Math.random() * 15) +1);
var info_hint = document.getElementById("hint");
var btn_change = document.getElementById("change_btn")
btn_change.style.display = "none";
console.log(rand_number)

function hint(){
    
    
    result.innerHTML = "";

    if (rand_number == 1){
        info_hint.innerHTML = "I'm the loneliest prime, the first in line,No other digits in my design.In the binary realm, I'm a simple expression,The start of all counting, your first impression What am I?";
    }
    else if (rand_number == 2){
        info_hint.innerHTML = "In pairs I thrive, an even delight, Binary whispers make me feel just right. Opposites balance in my symphony, A perfect square, a duality mystery.  What number am I?";
    }
    else if (rand_number == 3){
        info_hint.innerHTML = "In counting, I come after two, A trio, a charm, a fact that's true. Primary colors dance with glee, For which number are they the key?  What number am I?";
    }
    else if (rand_number == 4){
        info_hint.innerHTML = "I'm even and square, a perfect square, Counting by twos, you'll find me there. Clover leaves nod in harmony, What digit holds this mystery?  What number am I?";
    }
    else if (rand_number == 5){
        info_hint.innerHTML = "In your hand, I'm a high, open strive, A nickel's worth, a half of a dime. With fingers outstretched, I represent grace, Count on me in a star, a classic embrace.  What number am I?";
    }
    else if (rand_number == 6){
        info_hint.innerHTML = " In a roll of a die, I'm a lucky sight, Divisible by three, my digits unite. Not the first nor the last, a bit in between, Think of a hexagon, and with me, you convene.  What number am I?";
    }
    else if (rand_number == 7){
        info_hint.innerHTML = "I'm a prime mystery, standing tall, Roll a pair of dice, and hear my call. Days in a week, fingers on a hand, A mystical digit, hard to understand.  What number am I?";
    }
    else if (rand_number == 8){
        info_hint.innerHTML = "Two circles embrace, forever intertwined, Symmetry in nature, in numbers I'm defined. A cube has faces, each angle is divine, In infinity, I loop, an eternal design.  What number am I?";
    }
    else if (rand_number == 9){
        info_hint.innerHTML = " One less than a decade, but not a complete score, Square my digits, you'll find the key to explore. Last single digit, before the count repeats, In multiples of three, my rhythm beats.  What number am I?";
    }
    else if (rand_number == 10 ){
        info_hint.innerHTML = "I mark the start, a double-digit feat, Counting in fingers, I'm the first to greet. Binary whispers find me complete, Decades embrace me, a numerical suite.  What number am I?";
    }
    else if (rand_number == 11 ){
        info_hint.innerHTML = "One more than a decade, a pair of ones in a line, In a soccer match, I'm the player's sign.  What number am I?";
    }
    else if (rand_number == 12 ){
        info_hint.innerHTML = "A dozen in a box, months in a year, Divisible by six, I'm crystal clear.  What number am I?";
    }
    else if (rand_number == 13 ){
        info_hint.innerHTML = "Unlucky for some, a superstition's friend, Prime in nature, a mystery to comprehend.  What number am I?";
    }
    else if (rand_number == 14 ){
        info_hint.innerHTML = "Twice seven I may be, but not a day so fine, A fortnight in days, in weeks I intertwine.  What number am I?";
    }
    else if (rand_number == 15 ){
        info_hint.innerHTML = "A trio and a pair, a sum that's alive,Three squared plus a bonus, in math, I thrive. What number am I?";
    }

click = true;

}



function guess(){
    info_hint.innerHTML = "";
    
    var num_data = document.getElementById("data_number").value;
    if (click == true){
        if (num_data == rand_number){
            result.innerHTML = "Congos! You Guessed the CORRECT number";
            result.style.color = "green";
            result_img_happy.style.display = "block";
            document.getElementById("show").innerHTML = "click the button below to continue guessing";
            console.log("guessed");
        }
        else {
            result.innerHTML = "oops! You Guessed the WRONG number";
            result.style.color = "red";
            result_img_sad.style.display = "block";
            document.getElementById("show").innerHTML = "click the button below to continue guessing";
            console.log("not guessed");
        }
        btn_change.style.display = "block";
    }
    else {
        result.innerHTML = "FIRST GET THE HINT AND READ IT AND THEN GUESS THE NUMBER!"
        result.style.color = "orange"
    }

    
    }

    function change(){
        click = false;
        result.innerHTML = "";
        result_img_happy.style.display = "none";
        result_img_sad.style.display = "none";
        rand_number = Math.floor((Math.random() * 15) +1);
        info_hint.innerHTML = "";
        document.getElementById("show").innerHTML = "";
        btn_change.style.display = "none";

    }

   
    
