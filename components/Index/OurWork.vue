<template lang="pug">
  .our-work
    .container
      .work-gallery
        .work-gallery__item
          h2.work-gallery__title #[span Our Work]
        .work-gallery__item.mod-work
          img(src="i/works/work-1.jpg", alt="")
        .work-gallery__item.mod-work
          img(src="i/works/work-2.jpg", alt="")
        .work-gallery__item.mod-work
          img(src="i/works/work-3.jpg", alt="")
        .work-gallery__item.mod-work
          img(src="i/works/work-4.jpg", alt="")
        .work-gallery__item.mod-work
          img(src="i/works/work-5.jpg", alt="")
        .work-gallery__item.mod-work
          img(src="i/works/work-6.jpg", alt="")
        .work-gallery__item.mod-link
          a(href="").base-link
            span Follow Us
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")
</template>

<script>
    export default {
        name: "OurWork"
    }
</script>

<style scoped>

</style>
