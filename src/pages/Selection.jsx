import { h, Fragment } from 'preact'
import Header from '../components/Header'
import ConfigurationRow from '../components/ConfigurationRow'
import InputText from '../components/InputText'
import InputTextarea from '../components/InputTextarea'

export default ({ formValues, setFormValue, errors, setError, submitForm }) => (
  <Fragment>
    <form
      name="configuration"
      action="#adresse"
      class="pure-form pure-form-stacked configurator"
      onSubmit={submitForm}
      noValidate
    >
      <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
      <p>
        Hier können Sie Ihren Schlüsselanhänger Schrift für Schrift ganz einfach
        selbst gestalten.
      </p>
      <ConfigurationRow
        title="Bitte wählen Sie die Holzart"
        name="holzart"
        entries={[
          {
            value: 'nuss',
            title: 'Nussbaum',
            description: 'Schön dunkel',
            image: 'nuss-85',
          },
          {
            value: 'eiche',
            title: 'Eiche',
            description: 'Doch lieber hell',
            image: 'eiche-85',
          },
        ]}
        value={formValues.holzart}
        setFormValue={setFormValue}
      />
      {formValues.holzart != null && (
        <ConfigurationRow
          title="Bitte wählen Sie die Größe"
          name="groesse"
          entries={[
            {
              value: '65',
              title: '65mm',
              description: 'ab 9,90 EUR',
              image: `${formValues.holzart.value}-65`,
            },
            {
              value: '85',
              title: '85mm',
              description: 'ab 11,90 EUR',
              image: `${formValues.holzart.value}-85`,
            },
          ]}
          value={formValues.groesse}
          setFormValue={setFormValue}
        />
      )}
      {formValues.groesse != null && (
        <ConfigurationRow
          title="Bitte wählen Sie die das Band"
          name="band"
          entries={[
            {
              value: 'ring-silber',
              title: 'Ring Silber',
              description: 'D 25mm',
              image: `${formValues.holzart.value}-${formValues.groesse.value}-ring-silber`,
            },
            {
              value: 'ring-schwarz',
              title: 'Ring Schwarz',
              description: 'D 25mm',
              image: `${formValues.holzart.value}-${formValues.groesse.value}-ring-schwarz`,
            },
            {
              value: 'ring-gold',
              title: 'Ring Gold',
              description: 'D 25mm',
              image: `${formValues.holzart.value}-${formValues.groesse.value}-ring-gold`,
            },
            {
              value: 'band-edelstahl',
              title: 'Edelstahlband',
              description: 'L 150mm',
              image: `${formValues.holzart.value}-${formValues.groesse.value}-band-edelstahl`,
            },
            {
              value: 'band-leder-natur',
              title: 'Lederband Natur',
              description: 'L 150mm',
              image: `${formValues.holzart.value}-${formValues.groesse.value}-band-leder-natur`,
            },
            {
              value: 'band-leder-schwarz',
              title: 'Lederband Schwarz',
              description: 'L 150mm',
              image: `${formValues.holzart.value}-${formValues.groesse.value}-band-leder-schwarz`,
            },
          ]}
          value={formValues.band}
          setFormValue={setFormValue}
        />
      )}
      {formValues.band != null && (
        <ConfigurationRow
          title="Bitte wählen Sie die Schriftart"
          name="schrift"
          entries={[
            {
              value: 'schrift-1-clean',
              title: 'Schrift 1',
              description: 'Clean',
              image: 'schrift-1-clean',
            },
            {
              value: 'schrift-2-freeflow',
              title: 'Schrift 2',
              description: 'Freeflow',
              image: 'schrift-2-freeflow',
            },
            {
              value: 'schrift-3-hands',
              title: 'Schrift 3',
              description: 'Hands',
              image: 'schrift-3-hands',
            },
            {
              value: 'schrift-4-mono',
              title: 'Schrift 4',
              description: 'Mono',
              image: 'schrift-4-mono',
            },
          ]}
          value={formValues.schrift}
          setFormValue={setFormValue}
        />
      )}
      {formValues.schrift != null && (
        <Fragment>
          <fieldset class="label-fields">
            <legend>Beschriftung</legend>
            <div class="pure-g">
              <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
                {[1, 2, 3, 4].map((idx) => (
                  <InputText
                    name={`side${idx}`}
                    title={`Seite ${idx}${
                      idx > 1 ? ' (optional + 2,00 Euro)' : ''
                    }`}
                    value={formValues[`side${idx}`]}
                    setFormValue={setFormValue}
                    error={errors[`side${idx}`]}
                    setError={setError}
                    required={idx === 1}
                    maxlength={20}
                  />
                ))}
              </div>
            </div>
          </fieldset>
          <fieldset class="label-fields">
            <legend>Weitere Hinweise</legend>
            <div class="pure-g">
              <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
                <InputTextarea
                  name="nachricht"
                  rows={6}
                  value={formValues.nachricht}
                  setFormValue={setFormValue}
                  errors={errors.nachricht}
                  setError={setError}
                />
              </div>
            </div>
          </fieldset>
          <button class="pure-button" type="submit">
            Weiter
          </button>
        </Fragment>
      )}
    </form>
  </Fragment>
)
