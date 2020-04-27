<template lang="pug">
  .page
    Slider
    AboutBlock
    ProductBlock
    OurWork
    FeedbackBlock
    BrandsBlock

</template>
<script>
  import Slider from "@/components/Common/Slider"
  import AboutBlock from "@/components/Index/AboutBlock"
  import ProductBlock from "@/components/Index/ProductBlock"
  import OurWork from "@/components/Index/OurWork"
  import FeedbackBlock from "../components/Index/FeedbackBlock";
  import BrandsBlock from "../components/Index/BrandsBlock";

  export default{

    components: {BrandsBlock, FeedbackBlock, OurWork, ProductBlock, AboutBlock, Slider}
  }
</script>
<style>

</style>
