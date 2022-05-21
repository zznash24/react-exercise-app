import React, { useState } from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
});

function Result(props) {
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li id={props.data.id} className="CardResult">
      <Card className="Result-card">
        <CardActions>
          <CardHeader
            className="Result-header"
             action={
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded}>
                <ExpandMoreIcon />
              </ExpandMore>
            }
            title={props.data.name} />
        </CardActions>
        <Collapse>
          <CardContent>
            <CardMedia component="img"
              image={props.data.gifUrl}>
              </CardMedia>
            <Typography paragraph><b>Target muscle:</b> {props.data.target}</Typography>
            <Typography paragraph><b>Body part used:</b> {props.data.bodyPart}</Typography>
            <Typography paragraph><b>Equipment required:</b> {props.data.equipment}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </li>
  );
}

export default Result;