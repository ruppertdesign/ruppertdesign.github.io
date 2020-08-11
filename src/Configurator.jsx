import { h, Component, render } from 'preact'
import { useEffect } from 'preact/hooks'
import Configuration from './pages/Selection'
import ShippingAndPayment from './pages/ShippingAndPayment'
import Thanks from './pages/Thanks'
import validator from './validator'

// TODO move form to static content
// <form
// id="configuratorForm"
// name="configurator"
// action="bestellung"
// class="pure-form pure-form-stacked configurator"
// netlify
// netlify-honeypot="TODO"
// >
// </form>

class Configurator extends Component {
  pages = {
    auswahl: Configuration,
    adresse: ShippingAndPayment,
    danke: Thanks,
  }

  state = {
    currentPage: 'auswahl',
    formValues: {},
  }

  onLocationChange = ({ newURL }) => {
    const currentPage = newURL && newURL.split('#')[1]
    if (currentPage) {
      this.setState({ currentPage })
    }
  }

  setFormValue = (key, value) =>
    this.setState(
      (state) => ({
        formValues: { ...state.formValues, [key]: value },
      }),
      () => console.info(this.state.formValues)
    )

  submitForm = (event) => {
    event.preventDefault()
    console.info(event)
    const { target } = event
    for (const field of target.elements) {
      validator.validate(field)
    }
    const action = target.attributes.action.value
    console.info(action)
  }

  componentDidMount() {
    location.hash = this.state.currentPage
  }

  render({}, { currentPage }) {
    useEffect(() => {
      window.addEventListener('hashchange', this.onLocationChange)
      return () =>
        window.removeEventListener('hashchange', this.onLocationChange)
    }, [])
    const Page = this.pages[currentPage]
    return (
      <Page
        formValues={this.state.formValues}
        setFormValue={this.setFormValue}
        submitForm={this.submitForm}
      />
    )
  }
}

render(<Configurator />, document.getElementById('configurator'))
