import { h, Fragment } from 'preact'
import Header from '../components/Header'
import ConfigurationRow from '../components/ConfigurationRow'

export default ({ formValues, setFormValue }) => (
  <Fragment>
    <Header title="Gestalten Sie Ihren Schlüsselanhänger selbst." />
    <p>Hier wäre Platz für ein wenig Werbung, ein Bild, die Preise usw.</p>
    <ConfigurationRow
      title="Bitte wählen Sie die Holzart"
      name="Holzart"
      entries={[
        {
          value: 'Nussbaum',
          description: 'Schön dunkel',
          image: '/schluesselanhaenger/img/konfigurator/nussbaum.jpg',
        },
        {
          value: 'Eiche',
          description: 'Tolle Beschreibung',
          image: '/schluesselanhaenger/img/konfigurator/eiche.jpg',
        },
      ]}
      value={formValues['Holzart']}
      setFormValue={setFormValue}
    />
    <ConfigurationRow
      title="Bitte wählen Sie die Größe"
      name="Größe"
      entries={[
        {
          value: 'Klein',
          description: 'Maße',
          image: '/schluesselanhaenger/img/konfigurator/klein.jpg',
        },
        {
          value: 'Groß',
          description: 'Maße',
          image: '/schluesselanhaenger/img/konfigurator/gross.jpg',
        },
      ]}
      value={formValues['Größe']}
      setFormValue={setFormValue}
    />
    <ConfigurationRow
      title="Bitte wählen Sie die das Band"
      name="Band"
      entries={[
        {
          value: 'Band 1',
          description: 'Beschreibunng 1',
          image: '/schluesselanhaenger/img/konfigurator/band1.jpg',
        },
        {
          value: 'Band 2',
          description: 'Beschreibunng 2',
          image: '/schluesselanhaenger/img/konfigurator/band2.jpg',
        },
        {
          value: 'Band 3',
          description: 'Beschreibunng 3',
          image: '/schluesselanhaenger/img/konfigurator/band3.jpg',
        },
      ]}
      value={formValues['Band']}
      setFormValue={setFormValue}
    />
    <ConfigurationRow
      title="Bitte wählen Sie die Schriftart"
      name="Schriftart"
      entries={[
        {
          value: 'Schriftart 1',
          description: 'Beschreibunng 1',
          image: '/schluesselanhaenger/img/konfigurator/band1.jpg',
        },
        {
          value: 'Schriftart 2',
          description: 'Beschreibunng 2',
          image: '/schluesselanhaenger/img/konfigurator/band2.jpg',
        },
        {
          value: 'Schriftart 3',
          description: 'Beschreibunng 3',
          image: '/schluesselanhaenger/img/konfigurator/band3.jpg',
        },
        {
          value: 'Schriftart 4',
          description: 'Beschreibunng 4',
          image: '/schluesselanhaenger/img/konfigurator/band1.jpg',
        },
        {
          value: 'Schriftart 5',
          description: 'Beschreibunng 5',
          image: '/schluesselanhaenger/img/konfigurator/band2.jpg',
        },
      ]}
      value={formValues['Schriftart']}
      setFormValue={setFormValue}
    />
    <a class="pure-button" href="#adresse">
      Weiter
    </a>
  </Fragment>
)
