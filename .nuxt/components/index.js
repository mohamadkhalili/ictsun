export const AboutUs1 = () => import('../..\\components\\About-us1\\index.vue' /* webpackChunkName: "components/about-us1" */).then(c => wrapFunctional(c.default || c))
export const BlogDetails = () => import('../..\\components\\Blog-details\\index.vue' /* webpackChunkName: "components/blog-details" */).then(c => wrapFunctional(c.default || c))
export const CkeditorNuxt = () => import('../..\\components\\Ckeditor-nuxt\\index.vue' /* webpackChunkName: "components/ckeditor-nuxt" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../..\\components\\Footer\\index.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const IntroWithSlider = () => import('../..\\components\\Intro-with-slider\\index.vue' /* webpackChunkName: "components/intro-with-slider" */).then(c => wrapFunctional(c.default || c))
export const Loading = () => import('../..\\components\\Loading\\index.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c))
export const BlogGrid = () => import('../..\\components\\Blog-grid\\index.vue' /* webpackChunkName: "components/blog-grid" */).then(c => wrapFunctional(c.default || c))
export const Navbar = () => import('../..\\components\\Navbar\\index.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
export const MouseCursor = () => import('../..\\components\\Mouse-cursor\\index.vue' /* webpackChunkName: "components/mouse-cursor" */).then(c => wrapFunctional(c.default || c))
export const PageHeader = () => import('../..\\components\\Page-header\\index.vue' /* webpackChunkName: "components/page-header" */).then(c => wrapFunctional(c.default || c))
export const PublicFileInput = () => import('../..\\components\\public\\File-input.vue' /* webpackChunkName: "components/public-file-input" */).then(c => wrapFunctional(c.default || c))
export const PublicInput = () => import('../..\\components\\public\\Input.vue' /* webpackChunkName: "components/public-input" */).then(c => wrapFunctional(c.default || c))
export const PublicSelect = () => import('../..\\components\\public\\Select.vue' /* webpackChunkName: "components/public-select" */).then(c => wrapFunctional(c.default || c))
export const ScrollToTop = () => import('../..\\components\\Scroll-to-top\\index.vue' /* webpackChunkName: "components/scroll-to-top" */).then(c => wrapFunctional(c.default || c))
export const Services1 = () => import('../..\\components\\Services1\\index.vue' /* webpackChunkName: "components/services1" */).then(c => wrapFunctional(c.default || c))
export const Works1 = () => import('../..\\components\\Works1\\index.vue' /* webpackChunkName: "components/works1" */).then(c => wrapFunctional(c.default || c))

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
