import { h, Component, Fragment } from 'preact'
import validator from '../validator'

export default class InputText extends Component {
  handleChange = (event) => {
    const { setFormValue, setError, name } = this.props
    const error = validator.validate(event.target)
    if (error != null) {
      setError(name, error)
    }
    setFormValue(name, event.target.value)
  }

  render({ name, title, required, maxlength, value, error }) {
    return (
      <Fragment>
        <label for={name}>{title}</label>
        <input
          id={name}
          name={name}
          type="text"
          value={value}
          onChange={this.handleChange}
          class={error != null ? 'error' : ''}
          required={required}
          maxlength={maxlength}
        />
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
