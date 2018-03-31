import React from 'react';
import TextField from 'material-ui/TextField';

const InputField = () => (
  <div>
    <TextField
      placeholder="Förnamn"
      name="Förnamn"
    />

    <TextField
    placeholder="Efternamn"
            name="Efternamn"
    /><br />
    <TextField
      id="text-field-default"
      defaultValue="Default Value"
    /><br />
    <TextField
      hintText="Hint Text"
      floatingLabelText="Floating Label Text"
/>
  </div>
);

export default InputField;
