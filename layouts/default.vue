<template>
  <div>
    <MainHeader/>
    <nuxt />
    <see-on-github linkTo="https://github.com/yudin-s/garment-decor-nuxt" />
    <MainFooter/>
  </div>
</template>
<script>
  import MainHeader from "@/components/Layout/MainHeader";
  import MainFooter from "../components/Layout/MainFooter";
  export default {
    components: {MainFooter, MainHeader}
  }
</script>
