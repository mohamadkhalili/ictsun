<template>
  <div>
    <div class="circle-bg">
      <div class="circle-color fixed">
        <div class="gradient-circle"></div>
        <div class="gradient-circle two"></div>
      </div>
    </div>
    <Navbar ref="navbar" />
    <PageHeader :title="`${title} ICTSUN`" :paragraph="description" />
    <BlogGrid :blogs="blogs" :pages="pages" />
    <Footer />
  </div>
</template>

<script>
export default {
  layout: 'dark',
  head() {
    return {
      titleTemplate: this.metaTitle,
      meta: [
        { hid: 'description', name: 'description', content: this.description }
      ]
    };
  },
  data() {
    return {
      title: 'مقالات',
      metaTitle: '%s - مقالات',
      description: 'گروه ICTSUN با تلاش شبانه روزی به دنبال افزایش کیفیت کسب و کارهای اینترنتی و فعال در حوزه ی تکنولوژی می باشد. با ما همراه شوید.',
      blogs: [],
      pages: 1,
      params: this.$route.query,
      metaTitle: 'مقالات' + (this.$route.query?.tag ? ' تگ ' + this.$route.query.tag : '') + (this.$route.query?.page ? ' صفحه ' + this.$route.query.page : '') + ' - %s',
    }
  },
  watch: {
    async $route(to, from) {
      await this.getBlog(to)
    },
  },
  async fetch() {
    this.$axios.get(`/api/posts/${this.params?.page || 1}/`).then(req => {
      this.blogs = req.data.posts
      this.pages = req.data.pages
    })
  },
  fetchOnServer: false,
  // multiple components can return the same `fetchKey` and Nuxt will track them both separately
  fetchKey: 'site-sidebar',
  // asyncData({ query, app }) {
  //   const { start } = query
  //   const queryString = start ? `?start=${start}` : ''
  //   return app.$axios.$post(`apps/${queryString}`)
  //     .then(req => {
  //       return {
  //         info: res.results,
  //         nextPage: res.next,
  //         prevPage: res.prev
  //       }
  //     })
  // },
  mounted() {
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
  methods: {
    getBlog(route) {
      this.$axios.get(`/api/posts/${route.query?.page || 1}/`).then(req => {
        this.blogs = req.data.posts
        this.pages = req.data.pages
      })
    }
  },
};
</script>

<style scoped></style>