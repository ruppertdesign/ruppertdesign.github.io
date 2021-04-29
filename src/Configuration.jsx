import { h, Fragment } from 'preact';
import Header from './Header';
import ConfigurationRow from './ConfigurationRow';

export default () => (
  <Fragment>
    <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <ConfigurationRow title="Holzart" entries={[]} />
    <a class="pure-button" href="#adresse">
      Weiter
    </a>
  </Fragment>
);
