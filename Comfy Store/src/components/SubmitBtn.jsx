/* eslint-disable react/prop-types */
import { useNavigation } from 'react-router-dom';

export default function SubmitBtn({ text }) {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <button
      type='submit'
      className='btn btn-primary btn-block mb-4'
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className='loading loading-spinner'></span>
          sending...
        </>
      ) : (
        text || 'submit'
      )}
    </button>
  );
}
