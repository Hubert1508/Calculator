
function multiplication(){
  var a = document.getElementById('x').value;
  var b = document.getElementById('y').value;

  if(isNaN(a) || isNaN(b) || a == ('') || b == ('')){
    document.getElementById('result').innerHTML ='Wpisz liczbę';
  }
  else{
    document.getElementById('result').innerHTML ='Result = '+ a*b;
  }
}

function division(){
  var a = document.getElementById('x').value;
  var b = document.getElementById('y').value;

  if(isNaN(a) || isNaN(b) || a == ('') || b == ('')){
    document.getElementById('result').innerHTML ='Wpisz liczbę';
  }

  else if(a == (0) || b == (0)){
    document.getElementById('result').innerHTML ='Pamiętaj cholero, nie dziel przez zero!';
  }

  else{
    document.getElementById('result').innerHTML ='Result = '+ a/b;
  }
}

function addition(){
  var a = document.getElementById('x').value;
  var b = document.getElementById('y').value;

  a = parseFloat(a);
  b = parseFloat(b);

  let add = a+b;

  var suma = Math.round(add * 10) / 10;

  if(isNaN(a) || isNaN(b)){
    document.getElementById('result').innerHTML ='Wpisz liczbę';
  }

  else{
    document.getElementById('result').innerHTML ='Result = '+ suma;
  }

}

function subtraction(){
  var a = document.getElementById('x').value;
  var b = document.getElementById('y').value;

  a = parseFloat(a);
  b = parseFloat(b);

  var roznica = a-b;

  if(isNaN(a) || isNaN(b)){
    document.getElementById('result').innerHTML ='Wpisz liczbę';
  }
  else{
    document.getElementById('result').innerHTML ='Result = '+ roznica;
  }
}

function clearInputX(){
  document.getElementById('x').value = '';
}

function clearInputY(){
  document.getElementById('y').value = '';
}

function clearAll(){

    document.getElementById('x').value = '0';
    document.getElementById('y').value = '0';
    document.getElementById('result').innerHTML ='Result = ';

}
