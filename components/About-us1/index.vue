<template>
  <section class="about-us section-padding DRTL mb-50">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign md-50">
          <div class="mb-50 text-right">
            <h6 class="fw-100 text-u ls0 mb-10 ">{{ aboutData.smallTitle }}</h6>
            <h3 class="fw-600 text-u ls0 mb-30 color-font">
              {{ aboutData.title }}
            </h3>
            <p>{{ aboutData.content }}</p>
            <!-- <NuxtLink to="#" class="butn bord curve mt-30">
              <span>Read More</span>
            </NuxtLink> -->
          </div>
        </div>
        <div class="col-lg-7 img ">
          <div class="DLTR">
            <img :src="aboutData.image" :alt="aboutData.title" />
            <div class="stauts">
              <div class="item" v-for="statue in aboutData.status" :key="statue.id">
                <h4>
                  {{ statue.number }}
                  <span>{{ statue.letter }}</span>
                </h4>
                <h6>{{ statue.statusName }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutUs1Data from "~/data/about-us1.json";
export default {
  data() {
    return {
      aboutData: aboutUs1Data,
    };
  },
};
</script>

<style scoped></style>