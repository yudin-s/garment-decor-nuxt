<template lang="pug">
  .product-block
    .product-block__item.mod-product-tshirts
      .container
        .product-block__inner
          .product-block__img
            .product-bg
            img(src="i/products/product-1.png", alt="")
          .product-block__dscr
            .base-title
              p T-Shirts
            .base-text
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            a(href="").base-link
              span View all
              svg
                use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")
    .product-block__item.mod-product-polos
      .container
        .product-block__inner
          .product-block__img
            .product-bg
            img(src="i/products/product-2.png", alt="")
          .product-block__dscr
            .base-title
              p Polos
            .base-text
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            a(href="").base-link
              span View all
              svg
                use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")
    .product-block__item.mod-product-hats
      .container
        .product-block__inner
          .product-block__img
            .product-bg
            img(src="i/products/product-3.png", alt="")
          .product-block__dscr
            .base-title
              p Hats
            .base-text
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            a(href="").base-link
              span View all
              svg
                use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")

</template>

<script>
    export default {
        name: "ProductBlock"
    }
</script>

<style scoped>

</style>
