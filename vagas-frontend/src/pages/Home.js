import React, { useState, useEffect } from 'react';
import api from 'services/api';

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

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!list.length) {
    return <div>Nenhuma vaga encontrada.</div>;
  }

  return (
    <ul>
      {list.map(nomeEmpresa => (
        <li key={nomeEmpresa}>{nomeEmpresa}</li>
      ))}
    </ul>
  );
}

export default Home;
