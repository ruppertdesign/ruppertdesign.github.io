import { h, Fragment, Component } from 'preact'
import Header from '../components/Header'
import InputText from '../components/InputText'
import mailer from '../mailer'

export default class ShippingAndPayment extends Component {
  state = {
    error: null,
  }
  render({ formValues, setFormValue, validateForm, navigate }, { error }) {
    return (
      <Fragment>
        <form
          name="shippingAndPayment"
          class="pure-form pure-form-stacked configurator"
          onSubmit={async (event) => {
            event.preventDefault()
            if (validateForm(event)) {
              try {
                this.setState({ error: false })
                await mailer.sendOrderMail(formValues)
                navigate('#danke')
              } catch (error) {
                this.setState({ error: error.message })
              }
            }
          }}
          noValidate
        >
          <Header>Adresse und Bezahlung</Header>
          <fieldset class="label-fields">
            <legend>Lieferadresse</legend>
            <div class="pure-g">
              <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
                <InputText
                  name="email"
                  title="E-Mail Adresse"
                  formValue={formValues.email}
                  setFormValue={setFormValue}
                  required
                  pattern="[0-9a-zA-Z\._%+-]+@[0-9a-zA-Z\.-]+\.[a-z]{2,4}"
                  type="email"
                />
                <InputText
                  name="name"
                  title="Name"
                  formValue={formValues.name}
                  setFormValue={setFormValue}
                  required
                  minlength={3}
                  maxlength={60}
                  pattern="[0-9a-zA-ZßäöüÄÖÜ,\. _-]*"
                />
                <InputText
                  name="street"
                  title="Straße und Hausnummer"
                  formValue={formValues.street}
                  setFormValue={setFormValue}
                  required
                  minlength={3}
                  maxlength={60}
                  pattern="[0-9a-zA-ZßäöüÄÖÜ,\. _-]*"
                />
                <div class="pure-u-1 pure-u-md-1-3">
                  <div class="postalcode">
                    <InputText
                      name="postalCode"
                      title="Postleitzahl"
                      formValue={formValues.postalCode}
                      setFormValue={setFormValue}
                      minlength={4}
                      maxlength={5}
                      pattern="[0-9]*"
                    />
                  </div>
                </div>
                <div class="pure-u-1 pure-u-md-2-3">
                  <InputText
                    name="location"
                    title="Ort"
                    formValue={formValues.location}
                    setFormValue={setFormValue}
                    required
                    minlength={3}
                    maxlength={60}
                    pattern="[0-9a-zA-ZßäöüÄÖÜ,\. _-]*"
                  />
                </div>
              </div>
            </div>
          </fieldset>
          <p>Hier fehlt die Erklärung wie es mit der Bezahlung läuft</p>
          {error != null && (
            <div class="error-msg" style="display: block">
              Das hat leider nicht funktioniert.
              <br />
              Bitte überprüfen Sie Ihre Daten oder versuchen es später noch
              einmal.
              <br />
              {error}
            </div>
          )}
          <button class="pure-button" type="submit">
            Weiter
          </button>
        </form>
      </Fragment>
    )
  }
}
