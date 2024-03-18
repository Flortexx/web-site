function color()
{
    

  document.body.style.background = "black";
  document.querySelectorAll('h1').forEach(e => e.style.color = "white");

  document.querySelectorAll('p').forEach(e => e.style.color = "white");

  document.querySelectorAll('h3').forEach(e => e.style.color = "white");

  document.querySelectorAll('a').forEach(e => e.style.color = "white");
}

function white()
{
    

  document.body.style.background = "white";
   document.querySelectorAll('h1').forEach(e => e.style.color = "black");

  document.querySelectorAll('p').forEach(e => e.style.color = "black");

  document.querySelectorAll('h3').forEach(e => e.style.color = "black");

  document.querySelectorAll('a').forEach(e => e.style.color = "black");
 
}