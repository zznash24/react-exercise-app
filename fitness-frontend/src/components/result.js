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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => { ///Code for the expand function on the MUI card.
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

function Result(props) {
  const [expanded, setExpanded] = React.useState(false);

  const capitalizer = (input) => input.charAt(0).toUpperCase() + input.slice(1); //Capitalizes first letter.

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <li
      id={props.data.id}
      className="Result"
    >
      <Card
        className="Result-card"
        raised
      >
        <CardActions disableSpacing>
          <CardHeader
            className="Result-header"
            sx={{ padding: "0" }}
            action={
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            }
            title={capitalizer(props.data.name)} />
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <CardMedia
              component="img"
              image={props.data.gifUrl}
              alt="Exercise title here"
            />
            <Typography paragraph><b>Target muscle:</b> {capitalizer(props.data.target)}</Typography>
            <Typography paragraph><b>Body part used:</b> {capitalizer(props.data.bodyPart)}</Typography>
            <Typography paragraph><b>Equipment required:</b> {capitalizer(props.data.equipment)}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </li>
  );
}

export default Result;