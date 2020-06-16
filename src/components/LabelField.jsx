import { h, Fragment } from 'preact'

export default ({ name, title, error, required, value, setFormValue }) => (
  <Fragment>
    <label for={name}>{title}</label>
    <input
      id={name}
      name={name}
      type="text"
      required={required}
      maxLength="20"
      value={value}
      onChange={(event) => setFormValue(name, event.target.value)}
    />
    <div class="error-msg">{error}</div>
  </Fragment>
)
