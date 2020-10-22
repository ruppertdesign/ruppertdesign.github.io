import { h, Component, Fragment } from 'preact'
import validator from '../validator'

export default class InputNumber extends Component {
  handleChange = (event) => {
    const { setFormValue, name, title } = this.props
    const error = validator.validate(event.target)
    setFormValue(name, {
      value: event.target.value,
      title,
      error,
    })
  }

  render({ name, title, required, min, max, formValue, styleClass }) {
    const { value, error } = formValue || {}
    return (
      <Fragment>
        <label for={name}>{title}</label>
        <input
          id={name}
          name={name}
          type="number"
          value={value}
          onChange={this.handleChange}
          class={`${styleClass} ${error != null ? error : ''}`}
          required={required}
          min={min}
          max={max}
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
