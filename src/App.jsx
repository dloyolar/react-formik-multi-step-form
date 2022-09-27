import * as yup from 'yup';
import './App.css';
import { InputField } from './components/InputField';
import { FormStep, MultiStepForm } from './components/MultiStepForm';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
});

const validationSchema2 = yup.object({
  street: yup.string().required('Street is required'),
  country: yup.string().required('Contry is required'),
  password: yup.string().required('Password is required'),
});

function App() {
  return (
    <>
      <MultiStepForm
        initialValues={{ name: '', email: '', lastName: '', street: '', country: '', password: '' }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 3))}
      >
        <FormStep
          stepName="Person"
          onSubmit={() => console.log('Step1 Submit')}
          validationSchema={validationSchema}
        >
          <InputField name="name" label="Name" />
          <InputField name="lastName" label="Last Name" />
          <InputField name="email" label="Email" />
        </FormStep>

        <FormStep
          stepName="Address"
          onSubmit={() => console.log('Step2 submit')}
          validationSchema={validationSchema2}
        >
          <InputField name="street" label="Street" />
          <InputField name="country" label="Country" />
          <InputField name="password" label="Password" />
        </FormStep>
      </MultiStepForm>
    </>
  );
}

export default App;
