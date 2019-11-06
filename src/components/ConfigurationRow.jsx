import { h } from 'preact'

export default ({ title, entries }) => (
  <fieldset>
    <legend>{title}</legend>
    <div
      class={`pure-u-1-1 pure-u-md-1-${entries.size} pure-u-lg-1-${entries.size}`}
    ></div>
  </fieldset>
)
