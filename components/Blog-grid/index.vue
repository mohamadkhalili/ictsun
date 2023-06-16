<template>
  <section class="blog-pg blog section-padding pt-0 DRTL TAR">
    <div class="container">
      <div class="posts">
        <div class="row">
          <div v-for="blogItem in blogs" class="col-lg-4" :key="blogItem.id">
            <div class="item mb-80 wow fadeInUp" data-wow-delay=".3s">
              <div class="img">
                <img style="height: 300px !important;object-fit: contain;"
                  :src="blogItem.image_icons['420'] ? blogItem.image_icons['420'].image : ''" :alt="blogItem.title_fa" />
              </div>
              <div class="cont">
                <div>
                  <div class="info">
                    <NuxtLink to="/blog-details/blog-details-dark" class="date">

                      <span>
                        <i>{{ getDay(blogItem.published_date * 1000) }}</i>
                        {{ getMonth(blogItem.published_date) }}
                      </span>
                    </NuxtLink>
                    <span>/</span>
                    <NuxtLink v-for="(tag, index) in blogItem.tags" :key="index" :to="`?tag=${tag}`" class="tag">
                      <span>{{ tag }}</span>
                    </NuxtLink>
                  </div>
                  <h5>
                    <NuxtLink :to="`/blog/${blogItem.id}/${blogItem.slug_fa}`">
                      <template v-if="blogItem.title_fa.lenght > 55">
                        {{ blogItem.title_fa.substr(0, 55) + "..." }}
                      </template>
                      <template v-else>
                        {{ blogItem.title_fa }}
                      </template>
                    </NuxtLink>
                  </h5>
                  <div class="btn-more">
                    <NuxtLink class="simple-btn" :to="`/blog/${blogItem.id}/${blogItem.slug_fa}`">
                      مطالعه بیشتر
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="pages > 1" class="pagination">
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-right"></i>
              </NuxtLink>
            </span>
            <span v-if="activePage - 2 > 0">
              <a to="">...</a>
            </span>
            <span v-if="activePage - 1 > 0">
              <NuxtLink :to="`?page=${activePage - 1}`">{{ activePage - 1 }}</NuxtLink>
            </span>
            <span class="active">
              <NuxtLink :to="`?page=${activePage}`">{{ activePage }}</NuxtLink>
            </span>
            <span v-if="activePage + 1 <= pages">
              <NuxtLink :to="`?page=${activePage + 1}`">{{ activePage + 1 }}</NuxtLink>
            </span>
            <span v-if="activePage + 1 < pages">
              <a to="">...</a>
            </span>
            <span>
              <NuxtLink to="blog/blog-blogwindow.theme">
                <i class="fas fa-angle-left"></i>
              </NuxtLink>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import blogs from "../../data/blogs3.json";
export default {
  props: {
    blogs: {
      type: Array,
      default: []
    },
    pages: {
      type: Number,
      default: 1
    }
  },
  computed: {
    activePage: function () {
      return parseInt(this.$route.query?.page || 1)
    }
  },
  data() {
    return {
      // blogs,

    };
  },
  methods: {
    getMonth(timeStamp) {
      let options = { month: 'long' };
      let month = new Date(timeStamp).toLocaleDateString('fa-IR', options);
      return month
    },
    getDay(timeStamp) {
      let options = { day: 'numeric' };
      let day = new Date(timeStamp).toLocaleDateString('fa-IR', options);
      return day
    },
    getYear(timeStamp) {
      let options = { year: 'numeric' };
      let year = new Date(timeStamp).toLocaleDateString('fa-IR', options);
      return year
    },
  },
};
</script>

<style scoped></style>