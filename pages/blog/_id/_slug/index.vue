<template>
  <div>
    <div class="circle-bg">
      <div class="circle-color fixed">
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
      </div>
    </div>
    <Navbar ref="navbar" />
    <PageHeader :title="post.title_fa" :paragraph="post.brief_description_fa" />
    <BlogDetails :post="post" :id="id" />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'dark',
  head() {
    return {
      titleTemplate: this.post.title_fa + ' - %s',
      meta: [
        { hid: 'description', name: 'description', content: this.post.brief_description_fa }
      ]
    };
  },
  data() {
    return {
      id: this.$route.params.id,
      slug: this.$route.params.slug,
      post: {}
    }
  },
  mounted() {
    this.$axios.get(`/api/posts/detail/${this.id}/${this.slug}/`).then(req => {
      this.post = req.data
      console.log(req);
    })
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