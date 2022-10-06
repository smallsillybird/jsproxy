setTimeout(()=>{
  var arr = ["https://1.smini.cf/","https://2.smini.cf/","https://3.smini.cf/"];
  window.location.href = arr[parseInt(Math.random()*arr.length)];
},1000)
