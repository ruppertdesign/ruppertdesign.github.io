import { h, Fragment } from 'preact';
import Header from '../components/Header';
import ConfigurationRow from '../components/ConfigurationRow';

export default () => (
  <Fragment>
    <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <ConfigurationRow title="Holzart" entries={[]} />
    <a class="pure-button" href="#adresse">
      Weiter
    </a>
  </Fragment>
);
