class StickyNavigation {
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		this.init();
	}
	
	init() {
		$('.tab').on('click', (event) => { 
			this.onTabClick(event, $(event.target)); 
		});
		$(window).on('scroll', () => { this.onScroll(); });
		$(window).on('resize', () => { this.onResize(); });
	}

	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
		this.findCurrentTabSelector();
	}
	
	onResize() {
		if (this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.tabs').offset().top + $('.tabs').height() - this.tabContainerHeight;
		if ($(window).scrollTop() > offset) {
			$('.tabs-container').addClass('tabs-container--top');
		} else {
			$('.tabs-container').removeClass('tabs-container--top');
		}
	}
	
	findCurrentTabSelector() {
		let newCurrentId = null;
		let newCurrentTab = null;
		let self = this;

		$('.tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;

			if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});

		if (this.currentId !== newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if (this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.tab-slider').css({
			width: width,
			left: left
		});
	}
}

$(document).ready(function() {
	new StickyNavigation();
});
