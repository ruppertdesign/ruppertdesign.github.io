import { h, Component, Fragment } from 'preact'
import validator from '../validator'

export default class InputTextarea extends Component {
  handleChange = (event) => {
    const { setFormValue, name, title } = this.props
    const error = validator.validate(event.target)
    setFormValue(name, {
      value: event.target.value,
      title,
      error,
    })
  }

  render({ name, rows, formValue, required, styleClass }) {
    const { value, error } = formValue || {}
    return (
      <Fragment>
        <textarea
          id={name}
          name={name}
          rows={rows}
          value={value}
          onChange={this.handleChange}
          required={required}
          class={`${styleClass} ${error != null ? error : ''}`}
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
