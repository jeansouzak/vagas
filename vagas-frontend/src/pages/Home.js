import React, { useState, useEffect } from 'react';
import api from 'services/api';
import Container from 'components/Container';
import VagaList from 'components/VagaList/VagaList';

function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCompanies() {
      setLoading(true);
      const response = await api.get('job-positions');
      setLoading(false);
      setList(response.data.documents);
    }

    loadCompanies();
  }, []);

  return (
    <Container>
      <h1>Encontre Vagas de Emprego no Brasil</h1>
      <VagaList list={list} loading={loading} />
    </Container>
  );
}

export default Home;
