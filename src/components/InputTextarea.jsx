import { h } from 'preact'

export default ({ name, rows, value, setFormValue }) => (
  <textarea
    id={name}
    name={name}
    rows={rows}
    value={value}
    onChange={(event) => setFormValue(name, event.target.value)}
  ></textarea>
)
