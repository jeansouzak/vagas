import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { CardHeader } from '@material-ui/core';

function VagaItem({ item }) {
  return (
    <Card>
      <CardHeader
        title={`${item.company.name} | ${item.company.province}`}
        subheader={`E-mail: ${item.jobRecruiter.email}`}
      />
      <CardActions>
        <Button
          target="_blank"
          href={item.webPage}
          size="small"
          color="primary"
        >
          Link para vaga
        </Button>
        <Button
          target="_blank"
          href={item.jobRecruiter.linkedIn}
          size="small"
          color="primary"
        >
          Linkedin
        </Button>
      </CardActions>
    </Card>
  );
}

export default VagaItem;
