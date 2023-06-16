<template>
  <section :class="`services bords section-padding ${oStyle === '4item' ? 'lficon' : lines ? '' : 'pt-0'
    }`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10">
          <div class="sec-head text-center">
            <h6 class="wow fadeIn ls0" data-wow-delay=".5s">ویژگی ها</h6>
            <h3 class="wow color-font DRTL">
              ویژگی های شاخص گروه ICTSUN
            </h3>
          </div>
        </div>
      </div>
      <div v-if="oStyle === '4item'" class="row">
        <div v-for="feature in featuresData" :key="feature.id" class="col-lg-6 wow fadeInLeft" :data-wow-delay="`${feature.id == 1
          ? '.5'
          : feature.id === 2
            ? '.7'
            : feature.id === 3
              ? '.9'
              : '1.1'
          }s`">
          <div class="item-box">
            <div>
              <span :class="`icon ${feature.icon}`"></span>
            </div>
            <div class="cont">
              <h6>{{ feature.title }}</h6>
              <p>{{ feature.content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-else>
        <div v-for="feature in featuresData.slice(0, 3)" :key="feature.id" class="DRTL col-lg-4 wow fadeInLeft"
          data-wow-delay=".5s">
          <div class="item-box md-mb50" style="height: 410px;">
            <span :class="`icon ${feature.icon}`"></span>
            <h6>{{ feature.title }}</h6>
            <p>{{ feature.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="line top left" v-if="lines"></div>
    <div class="line bottom right" v-if="lines"></div>
  </section>
</template>

<script>
import featuresData from "../../data/features.json";
export default {
  props: ["lines", "oStyle"],
  data() {
    return {
      featuresData,
    };
  },
};
</script>

<style scoped></style>