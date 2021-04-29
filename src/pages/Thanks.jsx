import { h, Fragment } from 'preact'
import Header from '../components/Header'

export default () => (
  <Fragment>
    <Header>Danke für Ihre Bestellung</Header>
    <div class="center">
      <img class="small" src="/konfigurator/img/yeah.jpg" alt="Yeah!" />
      <p>
        Wir freuen uns, dass wir Ihren Wunschanhänger für Sie fertigen dürfen.
      </p>
    </div>
  </Fragment>
)
