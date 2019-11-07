import { h } from 'preact'

export default ({ title, name, entries, value, setFormValue }) => (
  <fieldset>
    <legend>{title}</legend>
    {entries.map(entry => {
      const cols = entries.length < 3 ? 2 : 3
      return (
        <div
          key={`${name}-${entry.value}`}
          class={`pure-u-1-1 pure-u-md-1-${cols} pure-u-lg-1-${cols} configurator-box`}
        >
          <div class="img-wrapper">
            <label>
              <input
                type="radio"
                name={name}
                value={entry.value}
                checked={entry.value == value}
                onClick={e => setFormValue(name, e.target.value)}
              />
              <img
                src={entry.image}
                width={320}
                class="pure-img bw"
                title={name}
              />
            </label>
          </div>
          <h3>{entry.value}</h3>
          <p>{entry.description}</p>
        </div>
      )
    })}
  </fieldset>
)
