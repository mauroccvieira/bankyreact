const validator = {

  email: {
    rules: [
      {
        test: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i,
        message: 'Informe um e-mail válido.',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  cnpj: {
    rules: [
      {
        test: /^([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i,
        message: 'Informe um CNPJ válido.',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
  password: {
    rules: [
      {
        test: /^(?=\w{5})(?=.*\d{2,})/i,
        message: 'A senha precisa ser maior do que 6 caractéres.',
      },
      {
        test: /^[a-z0-9A-Z_]+$/,
        message: 'Informe uma senha válida.',
      },
    ],
    errors: [],
    valid: false,
    state: ''
  },
  username: {
    rules: [
      {
        test: /^[a-zA-Z_]+$/i,
        message: 'Números não são permitidos.',
      },
    ],
    errors: [],
    valid: false,
    state: '',
  },
};

export default validator;