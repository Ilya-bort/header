"use strict";
//@prepros-prepend use.js
//<IBJ>===========================================================================================
const ibjClasses = document.querySelectorAll('.ibj');

function doIbj() {
	ibjClasses.forEach(element => {
		if (this.find('img').length > 0) {
			this.css('background-image', 'url("' + this.find('img').attr('src') + '")');
		}
	});
}
doIbj();
//<IBJ>===========================================================================================

//<ФУНКЦИОНАЛ МЕНЮ-БУРГЕРА>===========================================================================================
var iconMenu = document.querySelector('.icon-menu');
var body = document.querySelector('body');
var menu = document.querySelector('.menu-header');


iconMenu.addEventListener('click', ()=>{
	if (!iconMenu.classList.contains('active') && !body.classList.contains('lock') && !menu.classList.contains('active')) {
		iconMenu.classList.add('active');
		body.classList.add('lock');
		menu.classList.add('active');
	}else{
		iconMenu.classList.remove('active');
		body.classList.remove('lock');
		menu.classList.remove('active');
	}
})
//<ФУНКЦИОНАЛ МЕНЮ-БУРГЕРА>===========================================================================================

//<SLICK SLIDER - РАБОТАЕТ ТОЛЬКО С JQUERY!!!>===========================================================================================
// const sliderBody = document.querySelector('.slider__body');

// if (sliderBody > 0) {
// 	sliderBody.slick({
// 		autoplay: true,
// 		inifinite: true,
// 		dots: false,
// 		arrows: false,
// 		accessibility: false,
// 		slidesToShow: 5,
// 		autoplaySpeed: 1500,
// 		adaptiveHeight: true,
// 		slidesToScroll: 1,
// 		speed: 1000,
// 		easing: 'ease',
// 		initialSlide: 0,
// 		pauseOnHover: true,
// 		pauseOnFocus: true,
// 		pauseOnDotsHover: true,
// 		draggable: true,
// 		swipe: true,
// 		touchThreshold: 5,
// 		touchMove: true,
// 		waitForAnimate: false,
// 		//true - интересное решение
// 		centerMode: false,
// 		variableWidth: false,
// 		//true - интересное решение
// 		rows: 1,
// 		slidesPerRow: 1,
// 		vertical: false,
// 		verticalSwiping: false,
// 		//также можно подключать второй слайдер
// 		fade: false,
// 		//Подключение одного слайдера к другому
// 		// asNavFor:'.slider_other',
// 		responsive: [
// 			{
// 				breakpoint: 1024,
// 				settings: {
// 					slidesToShow: 4,
// 				}
// 			},
// 			{
// 				breakpoint: 768,
// 				settings: {
// 					slidesToShow: 2,
// 				}
// 			},
// 			{
// 				breakpoint: 425,
// 				settings: {
// 					centerMode: true,
// 					variableWidth: true
// 				}
// 			}
// 		],
// 		// mobileFirst: false,
// 		// appendArrows: $('.content'),
// 		// appendDots: $('.content'),
// 		//+ смотри настройки на сайте + события из видео
// 	});
// }
//<SLICK SLIDER - РАБОТАЕТ ТОЛЬКО С JQUERY!!!>===========================================================================================


//<ПОПАПЫ>===========================================================================================
const links = document.querySelectorAll('.popup-open');
const popups = document.querySelectorAll('.popup');

function popupOpen(el) {
	el.classList.add('_active');
	body.classList.add('_lock');
}

function popupClose(ev) {
	if (ev.target.classList.contains('popup-close') || ev.target.closest('.popup-close') ||  ev.target.closest('.popup') && !ev.target.closest('.popup-1__content')) {
		ev.target.closest('.popup').classList.remove('_active');
		body.classList.remove('_lock');
	}
}

links.forEach(link => {
	link.addEventListener('click', (e)=>{
		let data = e.target.dataset.popupOpen

		popups.forEach(popup => {
			if (popup.dataset.popup == data || popup.dataset.popup == e.target.closest('.popup-open').dataset.popupOpen) {
				popupOpen(popup)
			}
		});
	})
});

popups.forEach(popup => {
	popup.addEventListener('click', e=>{
		popupClose(e)
	})
});


if (popups.length>0){
	window.addEventListener('keydown', e=>{
		popups.forEach(popup=>{
			if (e.key === 'Escape' && popup.classList.contains('_active')){
				popup.classList.remove('_active');
				body.classList.remove('_lock');
			}
		})
	})
}

//<ПОПАПЫ>===========================================================================================

//<SCROLL ARROW>===========================================================================================
const arrow = document.querySelector('._scroll-top');
const offset = 100;

// Появление кнопки

window.addEventListener('scroll', ()=>{
	if (getTopHeight() > offset){
		arrow.classList.add('_active');
	}else{
		arrow.classList.remove('_active');
	}
})


// Скролл вверх

arrow.addEventListener('click',()=>{
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

function getTopHeight() {
	return window.pageYOffset || document.documentElement.scrollTop;
}
//<SCROLL ARROW>===========================================================================================


//<SCROLL TO ELEMENTS>===========================================================================================
const scrollLinks = document.querySelectorAll('a.scroll-link');

for (let scrollLink of scrollLinks) {
	scrollLink.addEventListener('click', function (e) {
		e.preventDefault();
		
		const blockID = scrollLink.getAttribute('href');
		
		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		})
	})
}
//<SCROLL TO ELEMENTS>===========================================================================================

//<TABS>===========================================================================================
// const buttonsForOpeningTabsContent = document.querySelectorAll('.points-tabs__item');
// const blocksOfTabsContent = document.querySelectorAll('.content-tabs__item');



document.querySelectorAll('.points-tabs__item').forEach((point)=>{
	point.addEventListener('click', function(e){
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#','');
		document.querySelectorAll('.points-tabs__item').forEach(
			(child)=>child.classList.remove('active')
		)
		document.querySelectorAll('.content-tabs__item').forEach(
			(child) => child.classList.remove('active')
		)
		point.classList.add('active')
		document.getElementById(id).classList.add('active')
	})
})

if (document.querySelector('.points-tabs__item')) {
	document.querySelector('.points-tabs__item').click()
}


// buttonsForOpeningTabsContent.forEach(button => {
// 	button.addEventListener('click', (event) => {
// 		event.preventDefault();
// 		const idForHref = event.target.getAttribute('href').replace('#', '');
// 		buttonsForOpeningTabsContent.forEach(button => {
// 			button.classList.remove('active');
// 		});
// 		blocksOfTabsContent.forEach(content => {
// 			content.classList.remove('active');
// 		});
// 		button.classList.add('active');
// 		document.getElementById(idForHref).classList.add('active');
// 	});	
// });

//<TABS>===========================================================================================



