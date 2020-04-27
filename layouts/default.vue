<template>
  <div>
    <MainHeader/>
    <nuxt />
    <see-on-github linkTo="https://github.com/yudin-s/garment-decor-nuxt" />
  </div>
</template>
<script>
  import MainHeader from "@/components/Layout/MainHeader";
  export default {
    components: {MainHeader}
  }
</script>
