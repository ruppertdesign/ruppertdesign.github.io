import { h, render } from 'preact'
import Wizard from './Wizard'

const Configurator = () => (
  <form
    id="configuratorForm"
    name="configurator"
    action="bestellung"
    class="pure-form pure-form-stacked configurator"
    netlify
    netlify-honeypot="TODO"
  >
    <Wizard />
  </form>
)

render(<Configurator />, document.getElementById('configurator'))
