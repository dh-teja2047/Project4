function getInput(input) {
  var display =  document.getElementById("display");
  display.value +=input;
  console.log(display);
}
  
function reset(){
  document.getElementById("display").value= "0";
}

function  result(){
  var x = document.getElementById("display");
  var y = x.value;
  console.log( y)
  console.log(typeof y)
  y = y.split(/(\+|-|\*|\/)/).filter(item => item !== '');
  console.log( y)
  console.log(typeof y)

  let i=0;
  do
{
  if(y[1]=== '+')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a +=b;
    y.splice(0,3)
    y.unshift(a);
    console.log( y)
  console.log(typeof y)
  } 
  else if(y[1]=== '-')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a -=b;
    y.splice(0,3)
    y.unshift(a);
    console.log( y)
  console.log(typeof y)
  }
  else if(y[1]=== '*')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a *=b;
    y.splice(0,3)
    y.unshift(a);
    console.log( y)
  console.log(typeof y)
  }
  else if(y[1]=== '/')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a /=b;
    y.splice(0,3)
    y.unshift(a);
    console.log( y)
  console.log(typeof y)
  }
  document.getElementById("display").value = y[0];
  i++
}while(i<y.length)
}

function del()
{
  var x = document.getElementById("display");
  var y = x.value;
  l = y.length;
  var del = y.slice(0, length - 1);
  document.getElementById("display").value = del;
}