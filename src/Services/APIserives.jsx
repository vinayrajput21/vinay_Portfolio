import axios from 'axios';
import { toast } from 'react-toastify';

export const HireMe = async (payload) => {
  try {
    const response = await axios.post('https://api.example.com/hire', payload);
    toast.success('Hired successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });
    return response;
  } catch (err) {
    toast.error('Failed to hire. Please try again.', {
      position: 'top-right',
      autoClose: 3000,
    });
    throw err;
  }
};