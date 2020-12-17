import * as yup from 'yup';

export default yup.object().shape({
    fname: yup
    .string()
    .required('Required field')
    .min(2, 'Required field'),

    lname: yup
    .string()
    .required('Required field')
    .min(2, 'Required field'),

    email: yup
    .string()
    .email('Required field')
    .required('Required field'),

    password: yup
    .string()
    .required('Required field')
    .min(8, 'Password must contain 8 characters'),

    role: yup
    .string()
    .oneOf(['Fundamentals', 'Pre-work', 'Ux/Ui', 'Web-Dev', 'Computer Science'], 'Role is required'),

    terms: yup.boolean()
});