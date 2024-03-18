import './style.css'
import zeLogo from './assets/ze.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://ze.io/about/ze" target="_blank">
      <img src="${zeLogo}" class="logo vanilla" alt="Ze logo" />
    </a>
    <h1>JSON Schema + Vite + TSOA + Neo4J</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
