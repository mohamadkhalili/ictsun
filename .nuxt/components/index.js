export { default as AboutUs1 } from '../..\\components\\About-us1\\index.vue'
export { default as BlogDetails } from '../..\\components\\Blog-details\\index.vue'
export { default as BlogGrid } from '../..\\components\\Blog-grid\\index.vue'
export { default as Footer } from '../..\\components\\Footer\\index.vue'
export { default as CkeditorNuxt } from '../..\\components\\Ckeditor-nuxt\\index.vue'
export { default as IntroWithSlider } from '../..\\components\\Intro-with-slider\\index.vue'
export { default as Loading } from '../..\\components\\Loading\\index.vue'
export { default as Navbar } from '../..\\components\\Navbar\\index.vue'
export { default as MouseCursor } from '../..\\components\\Mouse-cursor\\index.vue'
export { default as PageHeader } from '../..\\components\\Page-header\\index.vue'
export { default as PublicFileInput } from '../..\\components\\public\\File-input.vue'
export { default as PublicInput } from '../..\\components\\public\\Input.vue'
export { default as PublicSelect } from '../..\\components\\public\\Select.vue'
export { default as Services1 } from '../..\\components\\Services1\\index.vue'
export { default as ScrollToTop } from '../..\\components\\Scroll-to-top\\index.vue'
export { default as Works1 } from '../..\\components\\Works1\\index.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
