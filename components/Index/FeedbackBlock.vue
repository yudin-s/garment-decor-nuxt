<template lang="pug">
  .feedback-block
    svg(xmlns="http://www.w3.org/2000/svg",style="display: none;")
      defs
        symbol(viewBox="0 0 64 64")#link
          g(fill='currentColor')
            path(d='m22.15 54.727c.394.393.907.59 1.422.59s1.029-.197 1.422-.59c.785-.785.785-2.058 0-2.843l-17.805-17.806h54.781c1.111 0 2.01-.9 2.01-2.01 0-1.11-.899-2.01-2.01-2.01h-54.781l17.805-17.807c.785-.785.785-2.058 0-2.843s-2.058-.786-2.844 0l-21.237 21.239c-.785.786-.785 2.058 0 2.843l21.237 21.238')
    .container
      h2.base-title
        span Customer Feedback
      .feedback-carousel-wr
        .feedback-carousel.owl-carousel
          .feedback-carousel__item
            .feedback
              p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nescunt.
              .feedback-author John M. #[span Class President]
          .feedback-carousel__item
            .feedback
              p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nescunt.
              .feedback-author John M. #[span Class President]
          .feedback-carousel__item
            .feedback
              p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nescunt.
              .feedback-author John M. #[span Class President]
          .feedback-carousel__item
            .feedback
              p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nescunt.
              .feedback-author John M. #[span Class President]
          .feedback-carousel__item
            .feedback
              p Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nescunt.
              .feedback-author John M. #[span Class President]
        .feedback-carousel__nav
          .nav-prev
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#arrow")
          .nav-next
            svg
              use(xmlns:xlink="http://www.w3.org/1999/xlink",xlink:href="#link")


</template>

<script>
    export default {
        name: "FeedbackBlock"
    }
</script>

<style scoped>

</style>
