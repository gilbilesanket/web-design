
var myIndex = 0;



let liEls = document.querySelectorAll('.accordion  ul li ');

let index = 0;
show = function(increase) {
  index = index + increase;
  index = Math.min(
    Math.max(index,0),
    liEls.length-1
  );
  liEls[index].scrollIntoView({behavior: 'smooth'});

}

let dt=new Date()
document.getElementById('hours').innerHTML= (24-dt.getHours()) + " hours";








