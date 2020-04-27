<template lang="pug">
  .slider.owl-carousel
    .slider__item.mod-slide-1
      .container
        .slider__dscr
          .slider-title
            p Screen Printing
          .slider-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit
          a(href="").base-link.mod-color
            span Read more
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")
    .slider__item.mod-slide-2
      .container
        .slider__dscr
          .slider-title
            p Name &amp; Naber
          .slider-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit
          a(href="").base-link.mod-color
            span Read more
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")
    .slider__item.mod-slide-3
      .container
        .slider__dscr
          .slider-title
            p Embroidery
          .slider-text
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit
          a(href="").base-link.mod-color
            span Read more
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")

</template>

<script>
    export default {
        name: "Slider"
    }
</script>
