import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function force100vhScroll() {
  const windowHeight = window.innerHeight
  let lastScrollTop = 0

  window.addEventListener('scroll', function () {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      const nextSectionTop =
        Math.ceil((currentScrollTop + windowHeight) / windowHeight) *
        windowHeight
      window.scrollTo({ top: nextSectionTop, behavior: 'smooth' })
    } else {
      // Scrolling up
      const prevSectionTop =
        Math.floor((currentScrollTop - windowHeight) / windowHeight) *
        windowHeight
      window.scrollTo({ top: prevSectionTop, behavior: 'smooth' })
    }
    lastScrollTop = currentScrollTop
  })
}
