import { h, Component, Fragment, render } from 'preact';
import { useEffect } from 'preact/hooks';

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
);

class Wizard extends Component {
  pages = {
    auswahl: Configuration,
    adresse: ShippingAndPayment,
    danke: Thanks
  };

  state = {
    currentPage: 'auswahl'
  };

  onLocationChange = ({ newURL }) => {
    const currentPage = newURL && newURL.split('#')[1];
    if (currentPage) {
      this.setState({ currentPage });
    }
  };

  componentDidMount() {
    location.hash = this.state.currentPage;
  }

  render({}, { currentPage }) {
    useEffect(() => {
      window.addEventListener('hashchange', this.onLocationChange);
      return () =>
        window.removeEventListener('hashchange', this.onLocationChange);
    }, []);
    const Page = this.pages[currentPage];
    return <Page />;
  }
}

const Header = ({ title }) => <h1 class="content-head center">{title}</h1>;

const ConfigurationRow = ({ title, entries }) => (
  <fieldset>
    <legend>{title}</legend>
    <div
      class={`pure-u-1-1 pure-u-md-1-${entries.size} pure-u-lg-1-${entries.size}`}
    ></div>
  </fieldset>
);

const Configuration = () => (
  <Fragment>
    <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <ConfigurationRow title="Holzart" entries={[]} />
    <a class="pure-button" href="#adresse">
      Weiter
    </a>
  </Fragment>
);

const ShippingAndPayment = () => (
  <Fragment>
    <Header title="Adresse und Bezahlung" />
    <a class="pure-button" href="#auswahl">
      Zurück
    </a>
  </Fragment>
);

const Thanks = () => <Header title="Danke für Ihre Bestellung" />;

render(<Configurator />, document.getElementById('configurator'));
