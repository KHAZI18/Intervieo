import { useCallback } from 'react';

const useJobSave = () => {
  const handleSaveJob = useCallback((jobId) => {
    // In a real application, this would make an API call
    console.log(`Job ${jobId} saved!`);
    // You could also add toast notifications or other feedback here
  }, []);

  return handleSaveJob;
};

export default useJobSave;