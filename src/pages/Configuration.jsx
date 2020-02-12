import { h, Fragment } from 'preact'
import Header from '../components/Header'
import ConfigurationRow from '../components/ConfigurationRow'
import LabelField from '../components/LabelField'

export default ({ formValues, setFormValue }) => (
  <Fragment>
    <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <p>Hier wäre Platz für ein wenig Werbung, ein Bild, die Preise usw.</p>
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
          description: 'Tolle Beschreibung',
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
            description: 'Beschreibunng',
            image: `${formValues['Holzart']}-65`,
          },
          {
            value: '85',
            title: '85mm',
            description: 'Beschreibung',
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
            description: 'Beschreibung',
            image: `${formValues['Holzart']}-${
              formValues['Größe']
            }-ring-silber`,
          },
          {
            value: 'ring-schwarz',
            title: 'Ring Schwarz',
            description: 'Beschreibung',
            image: `${formValues['Holzart']}-${
              formValues['Größe']
            }-ring-schwarz`,
          },
          {
            value: 'ring-gold',
            title: 'Ring Gold',
            description: 'Beschreibung',
            image: `${formValues['Holzart']}-${formValues['Größe']}-ring-gold`,
          },
          {
            value: 'band-edelstahl',
            title: 'Edelstahlband',
            description: 'Beschreibung',
            image: `${formValues['Holzart']}-${
              formValues['Größe']
            }-band-edelstahl`,
          },
          {
            value: 'band-leder-natur',
            title: 'Band Leder Natur',
            description: 'Beschreibung',
            image: `${formValues['Holzart']}-${
              formValues['Größe']
            }-band-leder-natur`,
          },
          {
            value: 'band-leder-schwarz',
            title: 'Band Leder Schwarz',
            description: 'Beschreibung',
            image: `${formValues['Holzart']}-${
              formValues['Größe']
            }-band-leder-schwarz`,
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
            value: 'Schriftart 1',
            description: 'Beschreibung 1',
            image: '/schluesselanhaenger/img/konfigurator/band1.jpg',
          },
          {
            value: 'Schriftart 2',
            description: 'Beschreibung 2',
            image: '/schluesselanhaenger/img/konfigurator/band2.jpg',
          },
          {
            value: 'Schriftart 3',
            description: 'Beschreibung 3',
            image: '/schluesselanhaenger/img/konfigurator/band3.jpg',
          },
          {
            value: 'Schriftart 4',
            description: 'Beschreibung 4',
            image: '/schluesselanhaenger/img/konfigurator/band1.jpg',
          },
          {
            value: 'Schriftart 5',
            description: 'Beschreibung 5',
            image: '/schluesselanhaenger/img/konfigurator/band2.jpg',
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
