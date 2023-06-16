<template>
  <footer :class="`${!hideBGCOLOR ? 'sub-bg' : ''}`">
    <div class="container DRTL text-right">
      <div class="row">
        <div class="col-lg-6">
          <div class="item md-mb50">
            <div class="title">
              <h5>تماس با ما</h5>
            </div>
            <ul>
              <li>
                <span class="icon pe-7s-mail"></span>
                <div class="cont">
                  <h6>Email</h6>
                  <p>info@ictsun.ir</p>
                </div>
              </li>
              <li>
                <span class="icon pe-7s-call"></span>
                <div class="cont">
                  <h6>Call</h6>
                  <p>989102330621+</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="item">
            <div class="logo">
              <h3>ICTSUN</h3>
            </div>

            <div class="copy-right">
              <p class="ls0">
                تمامی حقوق سایت متعلق به گروه ICTSUN می باشد. © 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['hideBGCOLOR']
};
</script>

<style scoped></style>