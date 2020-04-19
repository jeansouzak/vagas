import React from 'react';
import Container from 'components/Container';
import VagaForm from 'forms/VagaForm';
import api from 'services/api';
import history from 'services/history';

function VagaRegister() {
  const onSubmit = async values => {
    await api.post('job-positions', values);
    history.push('/');
  };

  return (
    <Container width={500}>
      <h1>Cadastre sua vaga!</h1>
      <VagaForm onSubmit={onSubmit} />
    </Container>
  );
}

export default VagaRegister;
