import * as Yup from 'yup';

export const signinSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});
