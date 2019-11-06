import { h, Component } from 'preact';
import { useEffect } from 'preact/hooks';
import Configuration from './pages/Configuration'
import ShippingAndPayment from './pages/ShippingAndPayment'
import Thanks from './pages/Thanks'

export default class Wizard extends Component {
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
