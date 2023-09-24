function getInput(input) {
  var display =  document.getElementById("display");
  display.value +=input;
  console.log(display);
}
  
function reset(){
  document.getElementById("display").value= "";
}

function  result(){
  var x = document.getElementById("display");
  var y = x.value;
  var ap = '*1/1*1';
  y= `${y}${ap}`;
  y = y.split(/(\+|-|\*|\/)/).filter(item => item !== '');
  let i=0;
  do
{
  {
  if(y[1]=== '+')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a +=b;
    y.splice(0,3)
    y.unshift(a);
  } 
  else if(y[1]=== '-' || y[0]==='-')
  {
    if(y[1]=== '-'){
      var a = Number(y[0]) 
      var b = Number(y[2]) 
      a -=b;
      y.splice(0,3)
      y.unshift(a);
    }
    else if (y[0]==='-'){
      //`-${y[1]}`
      var a = y[1]
      a = Number(`-${a}`)
      var b = Number(y[3])
        a -=b;
      y.splice(0,4)
      y.unshift(a);
    }
  }
  else if(y[1]=== '*')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a *=b;
    y.splice(0,3)
    y.unshift(a);
  }
  else if(y[1]=== '/')
  {
    var a = Number(y[0]) 
    var b = Number(y[2]) 
    a /=b;
    y.splice(0,3)
    y.unshift(a);
  }
}
document.getElementById('display').value = y[0];
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