import { h, Component, Fragment, render } from './preact.js';
import { useEffect } from './preact-hooks.js';
import htm from './htm.js';

const html = htm.bind(h);

const Configurator = () => html`
  <form
    id="configuratorForm"
    name="configurator"
    action="bestellung"
    class="pure-form pure-form-stacked configurator"
    netlify
    netlify-honeypot="TODO"
  >
    <${Wizard} />
  </form>
`;

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
    return html`
      <${Page} />
    `;
  }
}

const Header = ({ title }) =>
  html`
    <h1 class="content-head center">${title}</h1>
  `;

const Configuration = () => html`
  <${Fragment}>
    <${Header} title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <a class="pure-button" href="#adresse">
      Weiter
    </button>
  <//>
`;

const ShippingAndPayment = () => html`
  <${Fragment}>
    <${Header} title="Adresse und Bezahlung" />
    <a class="pure-button" href="#auswahl">
      Zurück
    </button>
  <//>
`;

const Thanks = () => html`
  <${Header} title="Danke für Ihre Bestellung" />
`;

render(
  html`
    <${Configurator} />
  `,
  document.getElementById('configurator')
);
