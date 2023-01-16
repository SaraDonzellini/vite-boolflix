import { createApp } from 'vue'
import './assets/styles/style.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import LangFlag from 'vue-lang-code-flags';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
