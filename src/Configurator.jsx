import { h, Component, render } from 'preact'
import { useEffect } from 'preact/hooks'
import Selection from './pages/Selection'
import ShippingAndPayment from './pages/ShippingAndPayment'
import Thanks from './pages/Thanks'
import validator from './validator'

class Configurator extends Component {
  pages = {
    auswahl: Selection,
    adresse: ShippingAndPayment,
    danke: Thanks,
  }

  state = {
    currentPage: 'auswahl',
    formValues: {},
  }

  handleLocationChange = ({ newURL }) => {
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
      () => console.info('setFormValue', this.state.formValues)
    )

  validateForm = (event) => {
    const { target } = event
    const errors = [...target.elements]
      .filter((field) =>
        ['input', 'textarea'].includes(field.tagName.toLowerCase())
      )
      .reduce((acc, field) => {
        const error = validator.validate(field)
        return error != null ? { ...acc, [field.name]: error } : acc
      }, {})
    this.setState({ errors })
    return Object.keys(errors).length < 1
  }

  navigate = (page) => {
    location.hash = page
  }

  componentDidMount() {
    location.hash = this.state.currentPage
  }

  render({}, { currentPage }) {
    useEffect(() => {
      window.addEventListener('hashchange', this.handleLocationChange)
      return () =>
        window.removeEventListener('hashchange', this.handleLocationChange)
    }, [])
    const Page = this.pages[currentPage]
    return (
      <Page
        formValues={this.state.formValues}
        setFormValue={this.setFormValue}
        errors={this.state.errors}
        setError={this.setError}
        validateForm={this.validateForm}
        navigate={this.navigate}
      />
    )
  }
}

render(<Configurator />, document.getElementById('configurator'))
