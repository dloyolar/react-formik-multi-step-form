import { TextField } from '@mui/material';
import { useField } from 'formik';

export const InputField = ({ name, ...props }) => {
  const [field, meta] = useField(name);

  const configTextField = {
    ...props,
    ...field,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
};
