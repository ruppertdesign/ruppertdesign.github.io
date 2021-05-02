import { h, Fragment } from 'preact'
import Header from '../components/Header'
import ConfigurationRow from '../components/ConfigurationRow'
import InputText from '../components/InputText'
import InputTextarea from '../components/InputTextarea'
import { countSides, calcUnitPrice } from '../helpers'
import InputNumber from '../components/InputNumber'

export default ({ formValues, setFormValue, validateForm, navigate }) => (
  <Fragment>
    <form
      name="selection"
      class="pure-form pure-form-stacked configurator"
      onSubmit={(event) => {
        event.preventDefault()
        if (validateForm(event)) {
          navigate('#adresse')
        }
      }}
      noValidate
    >
      <Header>Gestalten Sie Ihren Wunschanhänger</Header>
      <p>
        Jeder Schlüsselanhänger von RUPPERTdesgin ist ein handgefertigtes
        Unikatund eine schöne Geschenkidee. Entwerfen Sie einfach in wenigen
        Schritten Ihren Wunschanhänger. Wählen Sie Holzart, Größe, Verschluss,
        Schriftart, Text und Symbole für Ihren ganz persönlichen
        Alltagsbegleiter.
      </p>
      <ConfigurationRow
        title="Bitte wählen Sie die Holzart"
        name="holzart"
        entries={[
          {
            value: 'nuss',
            title: 'Nussbaum',
            description: 'Das edle Dunkel',
            image: 'nuss-85',
          },
          {
            value: 'eiche',
            title: 'Eiche',
            description: 'Das klassisch Helle',
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
                {[1, 2, 3, 4].map((idx) => {
                  return (
                    <InputText
                      name={`side${idx}`}
                      title={`Seite ${idx}${
                        idx > 1 ? ' (optional + 2,00 Euro)' : ''
                      }`}
                      formValue={formValues[`side${idx}`]}
                      setFormValue={setFormValue}
                      required={idx === 1}
                      maxlength={20}
                    />
                  )
                })}
              </div>
            </div>
          </fieldset>
          <fieldset class="label-fields">
            <legend>Ihr Anhänger</legend>
            <div class="pure-g">
              <div class="pure-u-2-3 pure-u-md-2-3 pure-u-lg-2-3">
                {formValues.holzart.title} | {formValues.groesse.title} |{' '}
                {formValues.band.title} | {formValues.schrift.title} |{' '}
                {countSides(formValues)} seitige Beschriftung
              </div>
              <div class="pure-u-1-3 pure-u-md-1-3 pure-u-lg-1-3">
                {calcUnitPrice(formValues)}
              </div>
            </div>
            <div class="pure-g quantity-row">
              <div class="pure-u-2-3 pure-u-md-2-3 pure-u-lg-2-3">
                Ihre Stückzahl
              </div>
              <div class="pure-u-1-3 pure-u-md-1-3 pure-u-lg-1-3">
                <InputNumber
                  name="quantity"
                  formValue={formValues.quantity}
                  setFormValue={setFormValue}
                  required
                  min={1}
                  styleClass="quantity"
                />
              </div>
            </div>
          </fieldset>
          <fieldset class="label-fields">
            <legend>Weitere Hinweise zum Anhänger oder der Beschriftung</legend>
            <div class="pure-g">
              <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
                <InputTextarea
                  name="nachricht"
                  rows={6}
                  formValue={formValues.nachricht}
                  setFormValue={setFormValue}
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
