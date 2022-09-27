import { Step, StepLabel, Stepper } from '@mui/material';
import { Form, Formik } from 'formik';
import { Children, useState } from 'react';
import { FormNavigation } from './FormNavigation';

export const MultiStepForm = ({ children, initialValues, onSubmit }) => {
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const steps = Children.toArray(children);

  const step = steps[stepNumber];
  const totalSteps = steps.length;

  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (values, actions) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <Formik
      initialValues={snapshot}
      onSubmit={handleSubmit}
      validationSchema={step.props.validationSchema}
    >
      {({ values }) => (
        <Form>
          <Stepper activeStep={stepNumber} sx={{ marginY: 10 }}>
            {steps.map((currentStep) => {
              const label = currentStep.props.stepName;

              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          {step}
          <FormNavigation
            isLastStep={isLastStep}
            hasPrevious={stepNumber > 0}
            onBackClick={() => previous(values)}
          />
        </Form>
      )}
    </Formik>
  );
};

export const FormStep = ({ stepName = '', children }) => children;
