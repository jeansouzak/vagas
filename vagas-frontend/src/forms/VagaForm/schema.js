import * as Yup from 'yup';

const schema = Yup.object().shape({
  company: Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    province: Yup.string().required('Campo obrigatório'),
  }),
  webPage: Yup.string().required('Campo obrigatório'),
  jobRecruiter: Yup.object().shape({
    email: Yup.string().required('Campo obrigatório'),
    linkedIn: Yup.string()
      .url('URL inválida')
      .required('Campo obrigatório'),
  }),
});

export default schema;
