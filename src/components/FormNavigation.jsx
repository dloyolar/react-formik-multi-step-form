import { Button } from '@mui/material';

export const FormNavigation = ({ hasPrevious, onBackClick, isLastStep }) => {
  return (
    <div style={{ display: 'flex', marginTop: 50, justifyContent: 'space-between' }}>
      {hasPrevious && (
        <Button variant="contained" type="button" onClick={onBackClick}>
          Back
        </Button>
      )}

      <Button type="submit" color="primary" variant="contained">
        {isLastStep ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
};
