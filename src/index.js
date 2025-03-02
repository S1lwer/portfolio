let infoAbout = document.querySelector('.info_about')

let info = document.querySelector('#info')

let close = document.querySelector('#close')



let infoMore = document.querySelector('.info_more')

let more = document.querySelector('#more')
function handleShowMore(){
  infoMore.style.display = 'flex'
infoAbout.style.display = 'block' 
info.style.display = 'none'
close.style.display = 'block'
}
function handleCloseShowMore(){
  infoMore.style.display = 'none'
  infoAbout.style.display = 'none' 
info.style.display = 'block'
close.style.display = 'none'
}


var options = {
    chart: {
          type: 'donut'
    },
    series: [45, 0, 35, 50],
    labels: ['CSS3', 'React', 'JavaScript', 'HTML5'],
  
  }












var chart = new ApexCharts(document.querySelector("#chart"), options);
let sliderContent = document.querySelector('.slider-content')
let leftBtn = document.querySelector('#slider-left')
let rightBtn = document.querySelector('#slider-right')
let sliderImg = document.querySelector('#slider-img')
let sliderHeader = document.querySelector('#slider-heading')
let sliderLink = document.querySelector('#slider-site')
let sliderRepo = document.querySelector('#slider-repo')
let sliderTitle = document.querySelector('#slider-title')
const data = [
  {
    name:'Dragon Kombat',
    title:'Hamster combat prototype.tap and earn',
  link:'https://github.com/S1lwer/dragoncombat',
  site:'https://s1lwer.github.io/dragoncombat',
img:'../img/works/dragon.png',}, 
{name:'Coffe machine',
  title:'drop money (5,10,15$) in the cash register and pick coffe you like',
link:'https://github.com/S1lwer/Coffe-Machine',
site:'https://s1lwer.github.io/Coffe-Machine/',
img:'../img/works/coffe.png',}, 
{name:'Promo store',
  title:'Choose item use promo and take it whith lower price',
link:'https://github.com/S1lwer/PromoStore',
site:'https://s1lwer.github.io/PromoStore/',
img:'../img/works/PromoStore.png',}
] 
var typed = new Typed('#element', {
  strings: ['создание веб-сайтов ',' создание дизайна', ' создание приложений', 'создание веб-игр'],
  typeSpeed: 50,
  loop: true,
  backdelay:1700,
});
let currentSlide = Math.floor(data.length / 2)
function loadSliderData(obj){
const{ name,title,site,repo,img} = obj;
sliderHeader.innerHTML = name;
sliderTitle.innerHTML = title;
sliderImg.src = img;
sliderLink.href = site;
sliderRepo.href = repo;

}

function handleLeft(){
  if(currentSlide > 0){
    currentSlide--;
    loadSliderData(data[currentSlide])
  }else{
    currentSlide = data.length - 1
    loadSliderData(data[currentSlide])
    
  }
}
function handleRight(){
  if(currentSlide < data.length - 1){
    currentSlide++;
    loadSliderData(data[currentSlide])
  }else{
    currentSlide = 0
    loadSliderData(data[currentSlide])
    
  }
}

rightBtn.addEventListener('click', handleRight)
leftBtn.addEventListener('click', handleLeft)



























chart.render();


close.addEventListener('click', handleCloseShowMore)
info.addEventListener('click', handleShowMore)