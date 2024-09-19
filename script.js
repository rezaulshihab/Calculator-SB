let inPut = document.querySelector('#inPut');
let button = document.querySelectorAll('button');
let string = '';
let array = Array.from(button);
array.forEach(function(b){
  b.addEventListener('click',function(e){
    if(e.target.innerHTML == '='){
      string = eval(string);
      inPut.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = '';
      inPut.value = string;
    }
    else if(e.target.innerHTML == 'DE'){
      string = string.substring(0,string.length - 1);
      inPut.value = string
    }
    else{
      string = string + e.target.innerHTML;
      inPut.value = string;
    }
  })
})