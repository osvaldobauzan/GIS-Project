<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LazyLandingNavbar></LazyLandingNavbar>
    <LandingHero></LandingHero>

    <LandingLogos></LandingLogos>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>
