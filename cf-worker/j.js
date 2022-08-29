setTimeout(()=>{
  var arr = ["https://proxy1.smini.tk/","https://proxy2.smini.tk/"];
  window.location.href = arr[parseInt(Math.random()*arr.length)];
},1000)
