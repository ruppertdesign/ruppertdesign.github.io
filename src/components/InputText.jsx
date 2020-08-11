import { h, Component, Fragment } from 'preact'
import validator from '../validator'

export default class InputText extends Component {
  state = {
    error: null,
  }
  handleChange = (event) => {
    console.info(event)
    const { setFormValue, name, required, maxLength } = this.props
    const { value } = event.target
    const error = validator.validate({
      value,
      required,
      maxLength,
    })
    if (error != null) {
      this.setState({ error })
    }
    setFormValue(name, event.target.value)
  }

  render({ name, title, required, maxLength, value }, { error }) {
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
          maxLength={maxLength}
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
