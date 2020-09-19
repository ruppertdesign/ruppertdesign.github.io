import { h, Component, render } from 'preact'
import { useEffect } from 'preact/hooks'
import Configuration from './pages/Selection'
import ShippingAndPayment from './pages/ShippingAndPayment'
import Thanks from './pages/Thanks'
import validator from './validator'

class Configurator extends Component {
  pages = {
    auswahl: Configuration,
    adresse: ShippingAndPayment,
    danke: Thanks,
  }

  state = {
    currentPage: 'auswahl',
    formValues: {},
    errors: {},
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

  setError = (key, error) =>
    this.setState(
      (state) => ({ errors: { ...state.errors, [key]: error } }),
      () => console.info('setError', this.state.errors)
    )

  handleSubmitForm = (event) => {
    event.preventDefault()
    console.info('Submit', this.state.formValues)
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
    if (Object.keys(errors).length > 0) {
      console.info('Submit errors', errors)
    }
    const action = target.attributes.action.value
    console.info('Form action', action)

    const encode = (data) => {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'configurator',
        message: 'This is a long message\nWith\nmany\nlinebreaks\n',
      }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))
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
        submitForm={this.handleSubmitForm}
      />
    )
  }
}

render(<Configurator />, document.getElementById('configurator'))
