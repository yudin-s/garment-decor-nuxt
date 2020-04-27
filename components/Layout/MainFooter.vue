<template lang="pug">
  footer.footer
    svg(xmlns="http://www.w3.org/2000/svg",style="display: none;")
      defs
        symbol(viewBox="0 0 97 97")#facebook
          path(d='m73.1 15.973l-9.06.004c-7.102 0-8.477 3.375-8.477 8.328v10.921h16.938l-.006 17.11h-16.932v43.895h-17.667v-43.895h-14.77v-17.11h14.77v-12.614c0-14.64 8.943-22.612 22-22.612l13.2.021v15.952', fill='currentColor')
        symbol(viewBox="0 0 98 98")#insta
          path(d='m12.501 0h72.39c6.875 0 12.5 5.09 12.5 12.5v72.39c0 7.41-5.625 12.5-12.5 12.5h-72.39c-6.877 0-12.501-5.09-12.501-12.5v-72.39c0-7.41 5.624-12.5 12.501-12.5m58.45 10.821c-2.412 0-4.383 1.972-4.383 4.385v10.495c0 2.412 1.971 4.385 4.383 4.385h11.01c2.412 0 4.385-1.973 4.385-4.385v-10.495c0-2.413-1.973-4.385-4.385-4.385h-11.01m15.439 30.367h-8.572c.811 2.648 1.25 5.453 1.25 8.355 0 16.2-13.556 29.332-30.27 29.332-16.718 0-30.27-13.13-30.27-29.332 0-2.904.438-5.708 1.25-8.355h-8.945v41.14c0 2.129 1.742 3.872 3.872 3.872h67.822c2.13 0 3.872-1.742 3.872-3.872v-41.14h-.002m-37.598-11.655c-10.802 0-19.56 8.485-19.56 18.953 0 10.468 8.758 18.953 19.56 18.953 10.803 0 19.562-8.485 19.562-18.953 0-10.468-8.758-18.953-19.562-18.953', fill='currentColor')
        symbol(viewBox="0 0 97 97")#google
          g(fill='currentColor')
            path(d='m50.91 55.19l-4.533-3.522c-1.38-1.144-3.27-2.656-3.27-5.422 0-2.778 1.889-4.544 3.527-6.18 5.279-4.157 10.557-8.581 10.557-17.903 0-9.586-6.03-14.629-8.923-17.02h7.795l8.181-5.14h-24.785c-6.801 0-16.603 1.608-23.779 7.533-5.408 4.666-8.05 11.1-8.05 16.892 0 9.831 7.548 19.798 20.88 19.798 1.259 0 2.636-.124 4.02-.252-.623 1.515-1.252 2.777-1.252 4.917 0 3.905 2.01 6.299 3.774 8.567-5.663.39-16.237 1.018-24.03 5.809-7.424 4.415-9.684 10.84-9.684 15.377 0 9.334 8.8 18.03 27.05 18.03 21.636 0 33.09-11.971 33.09-23.823.002-8.707-5.03-12.992-10.565-17.657m-16.479-14.498c-10.824 0-15.727-13.992-15.727-22.434 0-3.288.623-6.682 2.763-9.333 2.02-2.524 5.533-4.162 8.814-4.162 10.434 0 15.846 14.12 15.846 23.2 0 2.271-.251 6.296-3.144 9.207-2.023 2.02-5.409 3.525-8.552 3.525m.124 50.696c-13.46 0-22.14-6.438-22.14-15.392 0-8.949 8.05-11.978 10.816-12.979 5.281-1.777 12.08-2.024 13.21-2.024 1.258 0 1.887 0 2.889.126 9.568 6.81 13.721 10.203 13.721 16.65.0001 7.805-6.417 13.619-18.497 13.619')
            path(d='m82.68 40.499v-12.605h-6.23v12.605h-12.581v6.294h12.581v12.687h6.23v-12.687h12.65v-6.294z')
    .footer__inner
      .container
        .footer-counters
          .footer-counters__item
            .counter-num.js-counter(data-count="30") 0
            .counter-dscr Daily Coffee Cups
          .footer-counters__item
            .counter-num.js-counter(data-count="10") 0
            .counter-dscr Hour Work Days
          .footer-counters__item
            .counter-num.js-counter(data-count="15") 0
            .counter-dscr Dedicated Staff Members
          .footer-counters__item
            .counter-num.js-counter(data-count="14803") 0
            .counter-dscr Projects Completed
        .footer-nav
          ul
            li
              a(href="").link Get Started
            li
              a(href="").link Quick Delivery
            li
              a(href="").link Top Products
            li
              a(href="").link Products
            li
              a(href="").link Sales
        .footer-social
          .footer__logo
            a(href="")
              img(src="i/logo-1.png", alt="")
          .social-nav
            .social-nav__item
              a(href="")
                svg.social-icon
                  use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#facebook")
            .social-nav__item
              a(href="")
                svg.social-icon
                  use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#insta")
            .social-nav__item
              a(href="")
                svg.social-icon
                  use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#google")
        .footer-contacts
          p #[a(href="tel:8559427636").link (855) 942-7636] , #[a(href="mailto:info@garmentdecor.com").link info@garmentdecor.com]
          p.cards
            img(src="i/card-1.png", alt="")
            img(src="i/card-2.png", alt="")
    .footer__copy
      .container
        p &copy; 2015 All Rights Reserved
      .scripts
        script(src="js/libs/jquery-3.2.1.min.js")
        script(src="js/plugins/owlcarousel/owl.carousel.min.js")
        script(src="js/plugins/counter/jquery.spincrement.min.js")
        script(src="js/plugins/featurecarousel/jquery.featureCarousel.js")
        script(src="js/plugins/select2/select2.min.js")
        script(src="js/plugins/slider/nouislider.min.js")
        script(src="js/plugins/magnificpopup/jquery.magnific-popup.min.js")
        script(src="js/main.js")
        script(src="//maps.googleapis.com/maps/api/js?key=AIzaSyAetjr5PJPApDBUHJNlfhIxu41a7uZKxfc&amp;language=en&amp;callback=initMap", async="async", defer="defer")

</template>

<script>
    export default {
        name: "MainFooter"
    }
</script>

<style scoped>

</style>
