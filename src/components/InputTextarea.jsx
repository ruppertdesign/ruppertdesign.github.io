import { h, Component, Fragment } from 'preact'
import validator from '../validator'

export default class InputTextarea extends Component {
  handleChange = (event) => {
    const { setFormValue, setError, name } = this.props
    const error = validator.validate(event.target)
    if (error != null) {
      setError(name, error)
    }
    setFormValue(name, event.target.value)
  }

  render({ name, rows, value, required, error }) {
    return (
      <Fragment>
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={this.handleChange}
          required={required}
          class={error != null ? 'error' : ''}
        ></textarea>
        {error != null && (
          <div
            class="error-msg"
            style={{ display: error != null ? 'block' : 'none' }}
          >
            {error}
          </div>
        )}
      </Fragment>
    )
  }
}
