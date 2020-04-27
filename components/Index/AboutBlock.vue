<template lang="pug">
  .about-block
    .container
      .about-block__inner
        .about-block__img
          img(src="i/about-img.png", alt="")
        .about-block__dscr
          h2.base-title We Create Amazing products
          .base-text
            p Garment Decor is a family owned business that specializes in creating custom garments. Choose your product, send your design, and we’ll reply with a quote! Kindly, send over your order details including your due date,   size breakdown or estimated quantity, and design details. We offer quick  turn around times, free setup costs, and  quality is guaranteed
          a(href="").base-link
            span Read more
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")
</template>

<script>
    export default {
        name: "AboutBlock"
    }
</script>

<style scoped>

</style>
