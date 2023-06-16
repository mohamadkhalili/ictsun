<template>
  <div>
    <Navbar ref="navbar" />
    <IntroWithSlider ref="fixedSlider" />
    <div class="main-content" ref="MainContent">
      <AboutUs1 id="about" />
      <Services1 id="features" />
      <Works1 id="projects" />
      <!-- <FunFacts1 /> -->
      <!-- <VideoWithTestimonials /> -->
      <!-- <SkillsCircle theme="dark" /> -->
      <!-- <Clients1 theme="dark" /> -->
      <!-- <Blogs1 /> -->
      <!-- <CallToAction /> -->
      <Footer id="contact" />
    </div>
  </div>
</template>

<script>
export default {
  layout: "dark",
  head() {
    return {
      titleTemplate: '%s - طراحی سایت'
    };
  },
  mounted() {
    if (this.$refs.fixedSlider.$el && this.$refs.MainContent) {
      var slidHeight = this.$refs.fixedSlider.$el.offsetHeight;
      this.$refs.MainContent.style.marginTop = slidHeight + "px";
    }
    var navbar = this.$refs.navbar.$el;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  },
};
</script>

<style scoped></style>