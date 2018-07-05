let myScore  = 0;
let comScore = 0;
let myScoreNow=document.getElementById("myScoreID");
let comScoreNow=document.getElementById("comScoreID");
let result=document.querySelector('.result > p');
// let reset=document.querySelector('.reset');
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let sr=document.getElementById("sr");
let reset = document.querySelector("#reset");

function decide(){
  
rock.addEventListener("click", function(){
  console.log("Rock!!!");
  gameTime("r")
});
  
paper.addEventListener("click", function(){
  console.log("Paper!!!");
  gameTime("p")
});
  
sr.addEventListener("click", function(){
  console.log("Scissor!!!");
  gameTime("s")
});
};

decide();





function computerTurn(){
  var com= Math.random();
  if (com <0.34){
    com= "r"
    return com
    } else if(com <=0.67){
      com = "p"
      return com
      }else{
        com= "s"
        return com
      }
}


function gameTime(x){
  const com=computerTurn()
  
	if(x===com){
		return draw()
    
	}
  else{
	if(x==="r"){
		if(com==="s"){
			return myPlusOne()
      
		} else{
			return comPlusOne() 
		}

	}else if(x==="p"){

		if(com==="r"){
			return myPlusOne()
		} else{    
			return comPlusOne()
		}

	}else if(x==="s"){
		if(com=="p"){
			return myPlusOne()
    
		} else{
			return comPlusOne()
		}
	}
  }

}

function draw(){
  myScoreNow.innerHTML=myScore;
  result.innerHTML="Draw!"
}


function myPlusOne(){
  myScore=myScore+1
  myScoreNow.innerHTML=myScore;
  comScoreNow.innerHTML=comScore;
  result.innerHTML="You Win!"
}

function comPlusOne(){
  comScore=comScore+1;
  myScoreNow.innerHTML=myScore;
  comScoreNow.innerHTML=comScore;
  result.innerHTML="Computer Win!"

}

reset.addEventListener("click", function(){
  let myScore  = 0;
  let comScore = 0;
  myScoreNow.innerHTML=myScore;
  comScoreNow.innerHTML=comScore;
  result.innerHTML="A borning Game!"
});
