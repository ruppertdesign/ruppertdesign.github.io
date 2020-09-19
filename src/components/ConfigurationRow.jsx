import { h, Component, createRef } from 'preact'

export default class ConfigurationRow extends Component {
  ref = createRef()

  handleSelect = (event) => {
    const { name, setFormValue, entries } = this.props
    setFormValue(
      name,
      entries.find((entry) => entry.value === event.target.value)
    )
    const fieldset = this.ref.current
    window.scrollTo({
      top: fieldset.offsetTop + fieldset.offsetHeight,
      behavior: 'smooth',
    })
  }

  fullPath(name, size) {
    return `/konfigurator/img/${name}${size ? `@${size}x` : ``}.jpg`
  }

  render({ title, name, entries, value }) {
    return (
      <fieldset ref={this.ref}>
        <legend>{title}</legend>
        {entries.map((entry) => {
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
                    checked={entry.value === value}
                    onClick={this.handleSelect}
                  />
                  <img
                    src={this.fullPath(entry.image)}
                    srcset={`${this.fullPath(entry.image)} 1x,
                            ${this.fullPath(entry.image, 2)} 2x`}
                    width={320}
                    class="pure-img bw"
                    title={name}
                  />
                </label>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.description}</p>
            </div>
          )
        })}
      </fieldset>
    )
  }
}
