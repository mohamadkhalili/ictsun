<template>
  <section class="blog-pg single section-padding pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="post">
            <div class="img">
              <img :src="post.image_icons ? post.image_icons.default ? post.image_icons.default.image : '' : ''" alt="" />
            </div>
            <section class="mt-4 pt-4 DRTL" v-html="post.detailed_description" />

            <div class="content pt-60">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <div class="cont">
                    <div class="share-info">
                      <div class="social">
                        <!-- <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a> -->
                        <nuxtLink :to="post.instagram_link || ''">
                          <i class="fab fa-instagram"></i>
                        </nuxtLink>
                        <!-- <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a> -->
                      </div>
                      <div v-if="post.tags" class="tags">
                        <template v-for="(tag, index) in  post.tags ">
                          <nuxtLink :to="`/blog?tag=${tag}`">{{ tag }}</nuxtLink>
                          <template v-if="index + 1 < post.tags.length">
                            ,
                          </template>
                        </template>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="author">
                    <div class="author-img">
                      <img src="/img/blog/01.jpg" alt="" />
                    </div>
                    <div class="info">
                      <h6><span>author :</span> Jorden Griffin</h6>
                      <p>
                        the main component of a healthy environment for self
                        esteem is that it needs be nurturing. The main compont
                        of a healthy environment.
                      </p>
                      <div class="social">
                        <a href="#0">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#0">
                          <i class="fab fa-behance"></i>
                        </a>
                      </div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>

            <!-- <div class="pagination">
              <span>
                <a href="#0">Prev Post</a>
              </span>
              <span class="icon">
                <NuxtLink to="/blog/blog-dark">
                  <i class="fas fa-th-large"></i>
                </NuxtLink>
              </span>
              <span class="text-right">
                <a href="#0">Next Post</a>
              </span>
            </div> -->

            <section v-if="post.comment_set && post.comment_set.length > 0" class="comments-area DRTL TAR">
              <h5>نظرات :</h5>
              <div v-for="( comment, index ) in  post.comment_set " class="item" :key="index">
                <!-- <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div> -->
                <div class="info DRTL">
                  <h6>{{ comment.name }} - <span> {{ getDate(comment.published_date * 1000) }}</span></h6>
                  <!-- <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span> -->
                  <p>
                    {{ comment.content }}
                  </p>
                </div>
              </div>
              <!-- <div class="item relped">
                <div class="comment-img">
                  <img src="/img/blog/01.jpg" alt="" />
                </div>
                <div class="info">
                  <h6>Jorden Griffin - <span> 6 Aug 2022</span></h6>
                  <span class="replay">
                    <a href="#0"> Replay <i class="fas fa-reply"></i> </a>
                  </span>
                  <p>
                    the main component of a healthy environment for self esteem
                    is that it needs be nurturing. The main compont of a healthy
                    environment.
                  </p>
                </div>
              </div> -->

            </section>

            <section class="comment-form TAR DRTL">
              <h5>ثبت نظر :</h5>
              <div class="form">
                <form @submit="sendComment">
                  <div class="row">
                    <div class="col-12">
                      <div class="form-group">
                        <textarea v-model="commentContent" placeholder="نظر شما"></textarea>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input v-model="commentName" type="text" placeholder="نام شما" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input v-model="commentEmail" type="email" placeholder="ایمیل" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group text-center">
                        <button type="submit" :class="`butn ${theme ? (theme === 'light' ? 'dark' : '') : 'light'
                          } curve full-width`
                          ">
                          ثبت
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["theme", "post", "id"],
  data() {
    return {
      commentContent: '',
      commentName: '',
      commentEmail: ''
    }
  },
  methods: {
    sendComment() {
      this.$axios.post(`/api/comments/posts/${this.id}/create/`, {
        name: this.commentName,
        email: this.commentEmail,
        content: this.commentContent
      })
    },
    getDate(timeStamp) {
      let options = { year: 'numeric', month: 'long', day: 'numeric' };
      let date = new Date(timeStamp).toLocaleDateString('fa-IR', options);
      return date
    }
  },
};
</script>

<style scoped></style>