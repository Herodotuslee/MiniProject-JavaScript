let sizePicker=document.getElementById('sizePicker')
let pixel_canvas=document.getElementById('pixel_canvas')
let clear=document.getElementById('clear')


clear.addEventListener('click',function(){
 pixel_canvas.innerHTML='';
})

sizePicker.addEventListener("submit", function(event) {
  event.preventDefault();
  let height  =document.getElementById("input_height").value
  let width  =document.getElementById('input_width').value

  makeGrid(height,width)


});


function makeGrid(x,y){
  pixel_canvas.innerHTML='';
   // pixel_canvas.removeChild('tr')
  for(let i=1; i<=x; i++) {
    let row = document.createElement('tr')
document.getElementById('pixel_canvas').appendChild(row)

    for(let j=1; j<=y; j++){
      let td = document.createElement('td')
    row.appendChild(td)



td.addEventListener('click', function() {

 // let td = document.querySelector('td');

let color = document.getElementById('colorPicker');
  if(this.style.backgroundColor){
    this.style.backgroundColor='';

  }else{
    this.style.backgroundColor=color.value
  }


})
    }
  }




}

makeGrid(19,19)
