<template>
  <nav :ref="nr" class="navbar navbar-expand-lg change" :class="theme === 'light' ? 'light' : ''">
    <div class="container">
      <NuxtLink to="/" class="logo">
        <!-- <h1>
          ICTSUN
        </h1> -->
        <img src="/logo.png" alt="ictsun" style="max-height: 86px;object-fit: contain;width: 100%;height: auto;" />
      </NuxtLink>

      <button class="navbar-toggler" type="button" @click="handleMobileDropdown" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="icon-bar">
          <i class="fas fa-bars"></i>
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto DRTL">
          <li class="nav-item dropdown" @click="handleDropdown">
            <NuxtLink class="nav-link" to="/"> خانه </NuxtLink>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <NuxtLink class="nav-link" to="/blog"> مقالات </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#about"> درباره ما </NuxtLink>
          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <NuxtLink class="nav-link" to="/#features"> ویژگی ها </NuxtLink>

          </li>
          <li class="nav-item dropdown" @click="handleDropdown">
            <NuxtLink class="nav-link" to="/#projects"> نمونه کارها </NuxtLink>

          </li>
          <!-- <li class="nav-item dropdown" @click="handleDropdown">
            <NuxtLink class="nav-link" to="/#articles"> مقالات </NuxtLink>

          </li> -->
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/#contact">
              تماس با ما
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import getSiblings from "../../common/getSiblings";
export default {
  props: ["lr", "theme", "nr"],
  methods: {
    handleDropdown: (e) => {
      getSiblings(e.target.parentElement)
        .filter((item) => item.classList.contains("show"))
        .map((item) => {
          item.classList.remove("show");
          if (item.childNodes[0]) {
            item.childNodes[0].setAttribute("aria-expanded", false);
          }
          if (item.childNodes[2]) {
            item.childNodes[2].classList.remove("show");
          }
        });
      e.target.setAttribute("aria-expanded", true);
      if (e.target.parentElement) {
        e.target.parentElement.classList.toggle("show");
        let dropdownMenu = e.target.parentElement.childNodes[2];
        if (dropdownMenu) {
          dropdownMenu.classList.toggle("show");
        }
      }
    },
    handleMobileDropdown: (e) => {
      document
        .getElementById("navbarSupportedContent")
        .classList.toggle("show-with-trans");
    },
  },
};
</script>

<style scoped></style>