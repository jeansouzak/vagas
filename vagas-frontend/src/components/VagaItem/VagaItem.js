import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function VagaItem({ item }) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.company.name} | {item.company.province}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            E-mail: {item.jobRecruiter.email}
          </Typography>
        </CardContent>
      </CardActionArea>
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
