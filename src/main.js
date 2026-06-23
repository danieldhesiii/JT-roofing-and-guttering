import './styles/main.css'
import { chrome, boot } from './components/layout.js'
import { homeContent } from './pages/home.js'

document.querySelector('#app').innerHTML = chrome(homeContent(), { onDark: true })

boot()
