import { createApp, h } from 'vue'
import { createInertiaApp, Head, Link  } from '@inertiajs/vue3'
import { ZiggyVue } from '../../vendor/tightenco/ziggy'
// import moment from 'moment'

import "./assets/vendors/mdi/css/materialdesignicons.min.css"
import "./assets/vendors/ti-icons/css/themify-icons.css"
import "./assets/vendors/css/vendor.bundle.base.css"
import "./assets/vendors/font-awesome/css/font-awesome.min.css"
import "./assets/css/style.css"

import "./assets/vendors/js/vendor.bundle.base.js"
// import "./assets/vendors/jquery-bar-rating/jquery.barrating.min.js"
import "./assets/vendors/chart.js/chart.umd.js"
import "./assets/vendors/flot/jquery.flot.js"
// import "./assets/vendors/flot/jquery.flot.resize.js"
import "./assets/vendors/flot/jquery.flot.categories.js"
import "./assets/vendors/flot/jquery.flot.fillbetween.js"
import "./assets/vendors/flot/jquery.flot.stack.js"
import "./assets/js/jquery.cookie.js"
import "./assets/js/off-canvas.js"
import "./assets/js/misc.js"
import "./assets/js/settings.js"
import "./assets/js/todolist.js"
import "./assets/js/hoverable-collapse.js"
// import "./assets/js/proBanner.js"
import "./assets/js/dashboard.js"

import AppLayout from "./Layouts/AppLayout.vue"




createInertiaApp({
    title: (title) =>   `Topceda ${title} `,
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    let page =  pages[`./Pages/${name}.vue`]
     page.default.layout = page.default.layout || AppLayout
     return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue)
    //   .use(moment)
      .component('Link', Link)
      .component('Head', Head)
      .mount(el)
  },
  progress: {
    // The delay after which the progress bar will appear, in milliseconds...
    // delay: 250,

    // The color of the progress bar...
    color: 'white ',

    // Whether to include the default NProgress styles...
    includeCSS: true,

    // Whether the NProgress spinner will be shown...
    showSpinner: true,
  },
})
