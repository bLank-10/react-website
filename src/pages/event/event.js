import { EventSection } from "./styleevent";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




const Event = () => {
  return (
    <EventSection>

      <h1>Event</h1>

      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="https://picsum.photos/200/300.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            card
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          convallis purus a tortor mattis, quis vulputate mi imperdiet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>


    </EventSection>
  );
};

export default Event;

