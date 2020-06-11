import { h, Fragment } from 'preact'
import Header from '../components/Header'
import ConfigurationRow from '../components/ConfigurationRow'
import LabelField from '../components/LabelField'

export default ({ formValues, setFormValue }) => (
  <Fragment>
    <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <p>
      Hier können Sie Ihren Schlüsselanhänger Schrift für Schrift ganz einfach
      selbst gestalten.
    </p>
    <ConfigurationRow
      title="Bitte wählen Sie die Holzart"
      name="Holzart"
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
      value={formValues['Holzart']}
      setFormValue={setFormValue}
    />
    {formValues['Holzart'] != null && (
      <ConfigurationRow
        title="Bitte wählen Sie die Größe"
        name="Größe"
        entries={[
          {
            value: '65',
            title: '65mm',
            description: 'ab 9,90 EUR',
            image: `${formValues['Holzart']}-65`,
          },
          {
            value: '85',
            title: '85mm',
            description: 'ab 11,90 EUR',
            image: `${formValues['Holzart']}-85`,
          },
        ]}
        value={formValues['Größe']}
        setFormValue={setFormValue}
      />
    )}
    {formValues['Größe'] != null && (
      <ConfigurationRow
        title="Bitte wählen Sie die das Band"
        name="Band"
        entries={[
          {
            value: 'ring-silber',
            title: 'Ring Silber',
            description: 'D 25mm',
            image: `${formValues['Holzart']}-${formValues['Größe']}-ring-silber`,
          },
          {
            value: 'ring-schwarz',
            title: 'Ring Schwarz',
            description: 'D 25mm',
            image: `${formValues['Holzart']}-${formValues['Größe']}-ring-schwarz`,
          },
          {
            value: 'ring-gold',
            title: 'Ring Gold',
            description: 'D 25mm',
            image: `${formValues['Holzart']}-${formValues['Größe']}-ring-gold`,
          },
          {
            value: 'band-edelstahl',
            title: 'Edelstahlband',
            description: 'L 150mm',
            image: `${formValues['Holzart']}-${formValues['Größe']}-band-edelstahl`,
          },
          {
            value: 'band-leder-natur',
            title: 'Lederband Natur',
            description: 'L 150mm',
            image: `${formValues['Holzart']}-${formValues['Größe']}-band-leder-natur`,
          },
          {
            value: 'band-leder-schwarz',
            title: 'Lederband Schwarz',
            description: 'L 150mm',
            image: `${formValues['Holzart']}-${formValues['Größe']}-band-leder-schwarz`,
          },
        ]}
        value={formValues['Band']}
        setFormValue={setFormValue}
      />
    )}
    {formValues['Band'] != null && (
      <ConfigurationRow
        title="Bitte wählen Sie die Schriftart"
        name="Schriftart"
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
        value={formValues['Schriftart']}
        setFormValue={setFormValue}
      />
    )}
    {formValues['Schriftart'] != null && (
      <Fragment>
        <fieldset class="label-fields">
          <legend>Beschriftung</legend>
          <div class="pure-g">
            <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
              <LabelField id="side-1" name="Seite 1" title="Seite 1" required />
              <LabelField
                id="side-2"
                name="Seite 2"
                title="Seite 2 (optional + 2,00 Euro)"
              />
              <LabelField
                id="side-3"
                name="Seite 3"
                title="Seite 3 (optional + 2,00 Euro)"
              />
              <LabelField
                id="side-4"
                name="Seite 4"
                title="Seite 4 (optional + 2,00 Euro)"
              />
            </div>
          </div>
        </fieldset>
        <fieldset class="label-fields">
          <legend>Weitere Hinweise</legend>
          <div class="pure-g">
            <div class="pure-u-1-1 pure-u-md-1-2 pure-u-lg-1-2">
              <textarea
                id="message"
                name="message"
                rows="6"
                minlength="3"
              ></textarea>
            </div>
          </div>
        </fieldset>
        <a class="pure-button" href="#adresse">
          Weiter
        </a>
      </Fragment>
    )}
  </Fragment>
)
