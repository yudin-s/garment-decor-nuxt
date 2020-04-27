(function($){

    // google map

    var marker;

    function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 18,
            center: {
                lat: 33.9853723,
                lng: -117.6899000
            },
            mapTypeControl: false,
            zoomControl: true,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_BOTTOM
            }
        });

        var marker;

        marker = new google.maps.Marker({
            position: {
                lat: 33.985154,
                lng: -117.6893600
            },
            map: map,
            icon: "./i/pin.png"
        });
    }


    $(document).ready(function() {

        // counter

        if($('.counter').length) {
            counterField('.counter input');
        }

        function counterField(field){

    		var fieldCount = function(el) {

    			var min = el.data('min'),
                    max = el.data('max'),
                    dec = el.prev('.dec-btn'),
                    inc = el.next('.inc-btn');

    			function init(el) {
    				if(!el.attr('disabled')){
    					dec.on('click', decrement);
    					inc.on('click', increment);
    				}

    				function decrement() {
    					var value = parseInt(el[0].value);
    					value--;

    					if(!min && value >= min) {
    						el[0].value = value;
    					}
    				};

    				function increment() {
    					var value = parseInt(el[0].value);

    					value++;

    					if(!max || value <= max) {
    						el[0].value = value++;
    					}
    				};
    			}
    			el.each(function() {
    				init($(this));
    			});
    		};
    		$(field).each(function(){
    			fieldCount($(this));
    		});
    	}

        // page height

        $('.page').css({
            'min-height': 'calc(100vh - ' + $('.footer').outerHeight(true) + 'px)'
        });

        $(window).on('resize', function () {
            $('.page').css({
                'min-height': 'calc(100vh - ' + $('.footer').outerHeight(true) + 'px)'
            });
        });

        // header menu

        var toggleMenu = $('.toggle-menu__icon.mod-burger'),
            toggleClose = $('.toggle-menu__icon.mod-close'),
            headerNav = $('.header-nav');

        toggleMenu.on('click', function () {
            headerCartBtn.add(headerSearchBtn).add(toggleClose).show();
            headerCartCloseBtn.add('.header-cart .cart-block').add(headerSearchCloseBtn).add(this).hide();
            $('.search-field').slideUp();
            headerNav.show();
        });

        toggleClose.on('click', function () {
            navItem.closest('.dropdown').removeClass('is-open').find('.dropdown-menu').hide();
            $(this).hide();
            toggleMenu.show();
            headerNav.hide();
        });

        var navItem = $('.header__nav .dropdown .link'),
            category_navItem = $('.category-block__item .link');

        navItem.on('click', function(e) {
            e.preventDefault();
            navItem.closest('.dropdown').removeClass('is-open').find('.dropdown-menu').hide();
            $(this).closest('.dropdown').addClass('is-open').find('.dropdown-menu').show();
            calcCategoryHeight();
        });

        $(document).mouseup(function (e){
            if($(window).width() > 1024) {
        		var div = navItem.closest('.dropdown');
        		if (!div.is(e.target) && div.has(e.target).length === 0) {
                    div.removeClass('is-open').find('.dropdown-menu').hide();
        		}
            }
    	});

        category_navItem.on('click', function(e) {
            e.preventDefault();
            if($(window).width() > 1024) {
                category_navItem.removeClass('is-active')
                $(this).addClass('is-active');
                calcCategoryHeight();
            } else {
                if(!$(this).hasClass('is-active')) {
                    category_navItem.removeClass('is-active');
                    $(this).addClass('is-active');
                } else {
                    $(this).removeClass('is-active');
                }
            }
        });

        function calcCategoryHeight() {
            var activeCategory = $('.category-block__item .link.is-active'),
                maxHeight = 0;

            activeCategory.next('.category-menu').find('.category-menu__item').each(function () {
                if( $(this).outerHeight(true) > maxHeight) {
                    maxHeight = $(this).outerHeight(true)
                }
            })
            $('.dropdown-menu .category-block').css({
                'min-height': maxHeight
            })
        }

        // search

        var headerSearchBtn = $('.header-search .search-btn .mod-search'),
            headerSearchCloseBtn = $('.header-search .search-btn .mod-close');

        headerSearchBtn.on('click', function() {
            headerCartBtn.add(toggleMenu).show();
            headerCartCloseBtn.add('.header-cart .cart-block').add(navItem.removeClass('is-open').find('.dropdown-menu')).add(toggleClose).hide();
            headerNav.slideUp();
            if($(window).width() > 1024) {
                $('.header-search').addClass('is-open');
            } else {
                headerSearchBtn.hide();
                headerSearchCloseBtn.show();
                $('.search-field').slideDown();
            }
        });

        headerSearchCloseBtn.on('click', function() {
            headerSearchBtn.show();
            $(this).hide();
            $('.search-field').slideUp();
        });

        $(document).mouseup(function (e){
            if($(window).width() > 1024) {
        		var div = $('.header-search');
        		if (!div.is(e.target) && div.has(e.target).length === 0) {
                    $('.header-search').removeClass('is-open');
        		}
            }
    	});

        //cart

        var headerCartBtn = $('.header-cart .cart-btn'),
            headerCartCloseBtn = $('.header-cart .cart-close'),
            cartBlock = $('.header-cart .cart-block');

        headerCartBtn.on('click', function() {
            headerCartCloseBtn.add(headerSearchBtn).add(toggleMenu).show();
            headerCartBtn.add(headerSearchCloseBtn).add(navItem.removeClass('is-open').find('.dropdown-menu')).add(toggleClose).hide();
            if($(window).width() > 1024) {
                headerNav.add('.search-field').hide();
                cartBlock.show();
            } else {
                headerNav.add('.search-field').slideUp();
                cartBlock.slideDown();
            }
        });

        headerCartCloseBtn.on('click', function() {
            headerCartBtn.show();
            $(this).hide();
            cartBlock.slideUp();
        });

        $(document).mouseup(function (e){
            if($(window).width() > 1024) {
                var div = $('.header-cart');
        		if (!div.is(e.target) && div.has(e.target).length === 0) {
                    headerCartBtn.show();
                    headerCartCloseBtn.hide();
                    cartBlock.hide();
        		}
            }
    	});

        //profile

        var headerProfileBtn = $('.header-profile .profile-btn'),
            profileBlock = $('.header-profile .profile-block');

        headerProfileBtn.on('click', function() {
            headerCartBtn.add(headerSearchCloseBtn).add(navItem.removeClass('is-open').find('.dropdown-menu')).add(toggleClose).hide();
            if($(window).width() > 1024) {
                $(this).addClass('is-active');
                profileBlock.show();
                headerNav.add('.search-field').hide();
            } else {
                headerNav.add('.search-field').slideUp();
            }
        });

        $(document).mouseup(function (e){
            if($(window).width() > 1024) {
                var div = $('.header-profile');
        		if (!div.is(e.target) && div.has(e.target).length === 0) {
                    headerProfileBtn.removeClass('is-active');
                    headerProfileBtn.show();
                    profileBlock.hide();
        		}
            }
    	});

        $('.signin-link').on('click', function (e) {
            e.preventDefault();
            profileBlock.add(headerNav).add(toggleClose).hide();
            toggleMenu.show();
            $('html, body').css({
                'overflow': 'hidden'
            })
            $('.js-signin').addClass('is-visible');
        });

        $('.js-signin .popup-close, .js-signin .popup__title i').on('click', function () {
            $('html, body').css({
                'overflow': 'initial'
            })
            $('.js-signin').removeClass('is-visible');
        });

        $(document).mouseup(function (e){
            if($(window).width() > 1024 && $('.js-signin').hasClass('is-visible')) {
                var div = $('.js-signin .popup');
        		if (!div.is(e.target) && div.has(e.target).length === 0) {
                    $('html, body').css({
                        'overflow': 'initial'
                    })
                    $('.js-signin').hide();
        		}
            }
    	});

        // counter

        var show     = true,
            countbox = $('.footer'),
            counter  = $('.js-counter');

        $(window).on('scroll load resize', function(){

            if(!show) return false;

            var w_top    = $(window).scrollTop(),
                e_top    = $(countbox).offset().top,
                w_height = $(window).height(),
                d_height = $(document).height();

            var e_height = countbox.outerHeight();

            if( w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                counter.each(function () {
                    var to = $(this).data('count');
                    $(this).spincrement({
                        from: 0,
                        to: to,
                        thousandSeparator: "",
                        duration: 2000
                    });
                });
                show = false;
            }
        });

        // owl slider

        var owl = $('.slider');

        if(owl) {
            owl.owlCarousel({
                items: 1,
                nav: false,
                dots: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 10000
            });
        }

        // feedback carousel

        var owl1 = $('.feedback-carousel');

        if(owl1) {
            owl1.owlCarousel({
                items: 1,
                nav: true,
                dots: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 10000
            });

            $('.feedback-carousel-wr .nav-prev').on('click', function () {
                $('.feedback-carousel .owl-prev').trigger('click');
            });
            $('.feedback-carousel-wr .nav-next').on('click', function () {
                $('.feedback-carousel .owl-next').trigger('click');
            });
        }

        //brands carousel

        var owl2 = $('.brands-block__inner');

        if(owl2) {
            owl2.owlCarousel({
                items: 8,
                nav: false,
                dots: false,
                loop: false,
                responsive : {
                    0 : {
                        items: 3
                    },
                    480 : {
                        items: 5
                    },
                    1024: {
                        items: 8
                    }
                }
            });
        }

        //product colors carousel

        var owl3 = $('.product-colors');

        if(owl3) {
            owl3.owlCarousel({
                items: 8,
                margin: 0,
                nav: true,
                navText: '',
                dots: false,
                loop: false,
                touchDrag: false,
                mouseDrag: false
            });
        }

        // product slider carousel

        var owl4 = $('.product-slider');

        if(owl4) {
            owl4.owlCarousel({
                items: 1,
                margin: 0,
                animateOut: 'fadeOut',
                nav: false,
                dots: false,
                loop: false,
                touchDrag: false,
                mouseDrag: false,
                URLhashListener: true,
                startPosition: 'URLHash',
                responsive: {
                    0: {
                        dots: true,
                        loop: true,
                        touchDrag: true,
                        mouseDrag: true
                    },
                    768: {
                        dots: false,
                        loop: false,
                        touchDrag: false,
                        mouseDrag: false
                    }
                }
            });

            var activeSlide = owl4.find('.owl-item.active .product-slider__item').data('hash');

            $('.product-slider-nav a').removeClass('is-active');
            $('.product-slider-nav a[href="#' + activeSlide + '"]').addClass('is-active');

            $('.product-slider-nav a').on('click', function () {
                $('.product-slider-nav a').removeClass('is-active');
                $(this).addClass('is-active');
            })

            owl4.magnificPopup({
        		delegate: 'a',
        		type: 'image',
        		tLoading: 'Loading image #%curr%...',
        		mainClass: 'mfp-img-mobile',
        		gallery: {
        			enabled: true,
        			navigateByImgClick: true,
        			preload: [0,1]
        		}
        	});
        }


        // select 2

        $select = $('.field select');

        $select.each(function () {
            $(this).select2({
                 minimumResultsForSearch: Infinity,
                 dropdownParent: $(this).closest('.select-wr')
            });
        })


        // products filter

        $filterTitle = $('.products__sidebar .filter__title');

        $('.products__sidebar .filter__item').each(function () {
            if($(this).hasClass('is-open')) {
                $(this).find('.filter__content').show();
            } else {
                $(this).find('.filter__content').hide();
            }
        });

        $filterTitle.on('click', function () {
            var filterItem = $(this).closest('.filter__item');
            filterItem.toggleClass('is-open');
            if(filterItem.hasClass('is-open')) {
                filterItem.find('.filter__content').slideDown();
            } else {
                filterItem.find('.filter__content').slideUp();
            }
        });

        // range slider

        if($('#rangeSlider').length) {

            var html5Slider = document.getElementById('rangeSlider');

            noUiSlider.create(html5Slider, {
                start: [ 10.00, 35.14 ],
                connect: true,
                range: {
                    'min': 0,
                    'max': 50
                }
            });

            var inputFrom = document.getElementById('input-from'),
                inputTo = document.getElementById('input-to');

            html5Slider.noUiSlider.on('update', function( values, handle ) {

                var value = values[handle];

                if ( handle ) {
                    inputTo.value = value;
                } else {
                    inputFrom.value = value;
                }
            });

            inputFrom.addEventListener('change', function(){
                html5Slider.noUiSlider.set([this.value, null]);
            });

            inputTo.addEventListener('change', function(){
                html5Slider.noUiSlider.set([null, this.value]);
            });
        }

        // product page filter nav

        var $productNavFilterLink = $('.sidebar-nav #filter'),
            $productNavSortLink = $('.sidebar-nav #sort'),
            $productNavFilter = $('.sidebar-item.filter'),
            $productNavSort = $('.sidebar-item.sort'),
            $productFilterBackLink = $('.sidebar-item__title i');

        $productNavFilterLink.on('click', function () {
            $productNavFilter.show();
        });
        $productNavSortLink.on('click', function () {
            $productNavSort.show();
        });
        $productFilterBackLink.on('click', function () {
            $productNavSort.hide();
            $productNavFilter.hide();
        });


        // tabs-block

        if( $('.tabs-block').length ) {

            var $tabsTitle = $('.tabs-block__item'),
                $tabsContent = $('.tabs-content');

            var activeTab = $('.tabs-block__item.is-active').data('tab');

            $tabsContent.hide();
            $('.tabs-content#' + activeTab).show();

            $tabsTitle.on('click', function () {
                var activeTab = $(this).data('tab');
                $tabsTitle.removeClass('is-active');
                $tabsContent.hide();
                $(this).addClass('is-active');
                $('.tabs-content#' + activeTab).show();
            });
        }

        // account discount

        if ( $('.discount').length ) {

            var progress = $('.discount .progress').data('perc');

            $('.discount .shank').css({
                'top': 'calc(' + progress + '% - 2px)'
            });
            $('.discount .progress').css({
                'bottom': 'calc(100% - ' + progress + '%)'
            });
        }

        // accordeon

        if( $('.js-accordeon').length ) {

            $accordeonItem = $('.js-accordeon-title');

            $accordeonItem.each(function () {


                if ( $(this).hasClass('is-open') ) {
                    $(this).next('.js-accordeon-content').show();
                } else {
                    $(this).next('.js-accordeon-content').hide();
                }

                $(this).on('click', function (e) {
                    e.preventDefault();
                    $(this).toggleClass('is-open');
                    $(this).next('.js-accordeon-content').slideToggle();
                })
            });
        }

        if( $('.info').length ) {

            $('.info').on('click', function () {
                $('.info').removeClass('is-active');
                $(this).addClass('is-active');
            })

            $(document).mouseup(function (e){
        		var div = $('.info');
        		if (!div.is(e.target) && div.has(e.target).length === 0) {
                    div.removeClass('is-active');
        		}
        	});
        }

        if ( $('.js-services').length ) {

            var $servicesBlock = $('.js-services');

            $servicesBlock.find('.services-item').each(function () {
                $(this).on('click', function () {
                    if(!$(this).hasClass('is-open')) {
                        $('.services-item').removeClass('is-open');
                        $(this).addClass('is-open');
                    }
                })
            })
        }

        if($('.product__images').length) {

            if($(window).width() > 979) {

                var maxHeigth = 0;

                $('.product__images, .product__details').each(function () {
                    if($(this).outerHeight() > maxHeigth) {
                        maxHeigth = $(this).outerHeight();
                    }
                })
                $('.product__images, .product__details').css({
                    'height': maxHeigth
                });
            }

            $(window).resize(function () {
                if($(window).width() > 979) {

                    var maxHeigth = 0;

                    $('.product__images, .product__details').each(function () {
                        if($(this).outerHeight() > maxHeigth) {
                            maxHeigth = $(this).outerHeight();
                        }
                    })
                    $('.product__images, .product__details').css({
                        'height': maxHeigth
                    });
                } else {
                    $('.product__images, .product__details').removeAttr('style');
                }
            });
        }

    });

})(jQuery);
