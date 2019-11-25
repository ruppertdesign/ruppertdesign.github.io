import { h, Fragment } from 'preact'

export default ({ id, name, title, error, required }) => (
  <Fragment>
    <label for={id}>{title}</label>
    <input id={id} name={name} type="text" required={required} maxLength="20" />
    <div class="error-msg">{error}</div>
  </Fragment>
)
