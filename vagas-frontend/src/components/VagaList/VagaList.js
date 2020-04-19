import React from 'react';
import VagaItem from 'components/VagaItem';
import { Grid } from '@material-ui/core';

function VagaList({ list, loading }) {
  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!list.length) {
    return <div>Nenhuma vaga encontrada.</div>;
  }

  return (
    <Grid container spacing={3}>
      {list.map(item => (
        <Grid key={item._id} item xs={12} sm={6}>
          <VagaItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default VagaList;
