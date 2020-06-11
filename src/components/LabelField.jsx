import { h, Fragment } from 'preact'

export default ({ name, title, error, required }) => (
  <Fragment>
    <label for={name}>{title}</label>
    <input
      id={name}
      name={name}
      type="text"
      required={required}
      maxLength="20"
    />
    <div class="error-msg">{error}</div>
  </Fragment>
)
