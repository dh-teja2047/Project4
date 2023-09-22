function getInput(input) {
  var display =  document.getElementById("display");
  display.value +=input;
  console.log(display);
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
  i++
}while(i<y.length)
  
function reset()
{
  var res = document.getElementById("display");
  res.value ="";
}


  //const mathExpression = '89+21-10*1/1';
//const resultArray = mathExpression.split(/(\+|-|\*|\/)/).filter(item => item !== '');


  /*var p = parseInt(y)
  console.log(p)
  console.log(typeof p)
  y = y.replace(p, '');
  console.log(y)
  console.log(typeof y)
  
  
  for(var i=0; i<y.length; i++)
  {
    switch(y[0])   
    {
        case '+':
          y = y.replace( '+', '')
          console.log(y)
          console.log(typeof y)
          var q = parseInt(y)
          var r = p + q;
          r = r.toString();
          console.log(r)
          console.log(typeof r)
          y = y.replace( q, '')
          console.log(y)
          console.log(typeof y)
          y = `${r}${y}`;
          console.log(y)
          console.log(typeof y)
        /* document.getElementById("display").value = q;
          console.log(q)
          console.log(typeof q)
           
    }
      
    */

     
}


/*
  for(let i=0; i<z.length; i++)
  {
    if(z[i] === '+')
    {
      a = Number(z[i-1]) + Number(z[i+1]);
      console.log(a);
      document.getElementById("display").value = a;
      
    }
    if(z[i] === '-')
    {
      a = Number(z[i-1]) - Number(z[i+1]);
      console.log(a);
      document.getElementById("display").value = a;
    }
    if(z[i] === '*')
    {
      a = Number(z[i-1]) * Number(z[i+1]);
    }
    if(z[i] === '/')
    {
      a = Number(z[i-1]) / Number(z[i+1]);
    }
  }

}


  let a  = y.split("+");
 let s  = y.split("-");
 let m  = y.split("*");
 let d  = y.split("/");
 console.log(a);
 console.log(s);
 console.log(m);
 console.log(d);
 
  var a = y.slice(0,1);
  a = Number(a);
  var b = y.slice(2);
  b = Number(b);
  //var c = a + b;
  console.log(a);
  console.log(b);



function deleteDigit(del) {
  display.slice(display.length-1)
}
function calculate() {
  let digit1;
  let digit2;
  let result = 0;
  let symbol;

}
function calculate() {
  let digit;
  let symbol;
  let result = 0;

  for (var i = 0; i < displayInput.length; i++) {
    if (displayInput[i] == '+') {

    }
    if (displayInput[i] == '-'){

    }
    if (displayInput[i] == '*'){

    }
    if (displayInput[i] == '/'){

    }
    else{
      digit = displayInput[i];
    }
  }

}
//display.innerHTML = finalresult;
//pop()
//push()
//splice()
*/