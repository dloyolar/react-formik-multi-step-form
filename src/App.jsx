import { TextField, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './App.css';
import { InputField } from './components/InputField';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
});

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ name: '', email: '', lastName: '' }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 3))}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <InputField name="name" label="Name" />
            <InputField name="lastName" label="Last Name" />
            <InputField name="email" label="Email" />

            <Button
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
              style={{ marginTop: 30 }}
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
