import { h, Component, Fragment } from 'preact'
import validator from '../validator'

export default class InputText extends Component {
  handleChange = (event) => {
    const { setFormValue, name, title } = this.props
    const error = validator.validate(event.target)
    setFormValue(name, {
      value: event.target.value,
      title,
      error,
    })
  }

  render({
    name,
    title,
    required,
    minlength,
    maxlength,
    pattern,
    formValue,
    type,
  }) {
    const { value, error } = formValue || {}
    return (
      <Fragment>
        <label for={name}>{title}</label>
        <input
          id={name}
          name={name}
          type={type || 'text'}
          value={value}
          onChange={this.handleChange}
          class={error != null ? 'error' : ''}
          required={required}
          minlength={minlength}
          maxlength={maxlength}
          pattern={pattern}
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
