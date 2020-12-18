var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  speed: 1000,
  // spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// aos
AOS.init();



let bg = document.querySelector('.mainSlider').offsetHeight,
    whatsApp = document.querySelector('.whatsApp--link');
    whatsApp2 = document.querySelector('.whatsApp--link2');
    
    

window.addEventListener('scroll', () => {
  if(scrollY > bg){
    whatsApp.style.right = 20 + 'px';
    whatsApp2.style.right = 20 + 'px';
    // header2.style.top = 0;
  }else{
    whatsApp.style.right = -1000 + 'px';
    whatsApp2.style.right = -1000 + 'px';
    // header2.style.top = -1000 + 'px';
  }
});

let percentage = document.querySelector('.percentage');
    
  
let strip = document.querySelectorAll('.skills-wrapper__strip'),
    skills = document.querySelector('.skills');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const coords = skills.getBoundingClientRect();
  strip.forEach((item, i)=>{

    let x = item;
        x.classList.add('number_' + i); 
        

    if(coords.top < window.innerHeight / 1.5 ){
      item.style.width = 100 + '%';
    }else{
      item.style.width = 0 + '%';
    }
  });
  
});

// растояние до блока https://playcode.io/684731/
// let el =  document.querySelector("#block4")
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   const coords = el.getBoundingClientRect()
//         if(coords.top < window.innerHeight / 1.5 ) {
//             el.classList.add('red')
//         } else el.classList.remove('red')
// });



// tabs

$(document).ready(function(){
	
	$('.about-wrapper__tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.about-wrapper__tab').removeClass('current');
		$('.about-wrapper__content-wrp').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
  });


  // tabs 

  $(".portfolio-content__item").not(":first").hide();
$(".portfolio-buttons__tab").click(function() {
	$(".portfolio-buttons__tab").removeClass("active-tab").eq($(this).index()).addClass("active-tab");
	$(".portfolio-content__item").hide().eq($(this).index()).fadeIn(800)
}).eq(0).addClass("active-tab");

});


// accrodreon
$('.questions-wrapper__headline').click(function(e) {
  e.preventDefault();
  let $this = $(this);
  $($this).find('.questions-wrapper__icon').toggleClass('icon--color');

  if ($this.next().hasClass('show')) {
      $this.next().removeClass('show');
      $this.next().slideUp(350);
  } else {
      $this.parent().parent().find('questions-wrapper__hide').removeClass('show');
      $this.parent().parent().find('questions-wrapper__hide').slideUp(350);
      $this.next().toggleClass('show');
      $this.next().slideToggle(350);
  }
});


$('.header-wrapper__icon-burger').click(function () {
  $('.header-wrapper__burger').css('right', 0)
});

$('.header-wrapper__icon-close').click(function () {
  $('.header-wrapper__burger').css('right', - 1000)
});







  

