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
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    const currentPage = newURL && newURL.split('#')[1]
    if (currentPage) {
      this.setState({ currentPage })
    }
  }

  navigate = (page) => {
    location.hash = page
  }

  setFormValue = (key, value) =>
    this.setState((state) => ({
      formValues: { ...state.formValues, [key]: value },
    }))

  validateForm = (event) => {
    const { target } = event
    const errors = [...target.elements]
      .filter((field) =>
        ['input', 'textarea'].includes(field.tagName.toLowerCase())
      )
      .map((field) => ({ field, error: validator.validate(field) }))
      .filter(({ error }) => error != null)
    if (errors.length == 0) {
      return true
    }
    this.setState((state) => {
      const clone = { ...state }
      errors.forEach(({ error, field }) => {
        if (clone.formValues[field.name] == null) {
          clone.formValues[field.name] = {
            value: field.value,
          }
        }
        clone.formValues[field.name].error = error
      })
      return clone
    })
    errors[0].field.focus()
    return false
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
