import { h, Fragment } from 'preact'
import Header from '../components/Header'
import InputText from '../components/InputText'
import InputTextarea from '../components/InputTextarea'

export default ({ formValues, setFormValue, validateForm, navigate }) => (
  <Fragment>
    <form
      name="shippingAndPayment"
      class="pure-form pure-form-stacked configurator"
      onSubmit={(event) => {
        event.preventDefault()
        if (validateForm(event)) {
          navigate('#danke')
        }
      }}
      noValidate
    >
      <Header title="Adresse und Bezahlung" />
      <fieldset class="label-fields">
        <legend>Lieferadresse</legend>
        <div class="pure-g">
          <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
            <InputText
              name="name"
              title="Name"
              formValue={formValues.name}
              setFormValue={setFormValue}
              required
              maxlength={60}
            />
            <InputText
              name="street"
              title="Straße und Hausnummer"
              formValue={formValues.street}
              setFormValue={setFormValue}
              required
              maxlength={60}
            />
            <div class="pure-u-1 pure-u-md-1-3">
              <div class="postalcode">
                <InputText
                  name="postalCode"
                  title="Postleitzahl"
                  formValue={formValues.postalCode}
                  setFormValue={setFormValue}
                  required
                  maxlength={5}
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
                maxlength={60}
              />
            </div>
          </div>
        </div>
      </fieldset>
      <p>Hier fehlt die Erklärung wie es mit der Bezahlung läuft</p>
      <button class="pure-button" type="submit">
        Weiter
      </button>
    </form>
  </Fragment>
)
