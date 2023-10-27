import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link, Grid } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardEngagement({
  avartar,
  title,
  mainText,
  link,
  expandText,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%", mb: 3 }}>
      <CardHeader
        sx={{
          "& .MuiCardHeader-title ": {
            fontSize: 18,
            fontWeight: 600,
            color: "#12395D",
          },
        }}
        avatar={
          <Avatar
            sx={{ bgcolor: "#7DB0DE", color: "#12395D" }}
            aria-label="recipe"
          >
            {avartar}
          </Avatar>
        }
        title={title}
      />
      {mainText !== "" && (
        <CardContent sx={{ ml: 7 }}>
          <Typography variant="body2" color="text.secondary">
            {mainText}
          </Typography>
        </CardContent>
      )}
      <CardActions disableSpacing>
        {/**
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
            en savoir plus
        </ExpandMore>
  */}

<Grid container xs={12} justifyContent="right" sx={{pr: 6}}>
        {link === "true" ? (
            <Link
              sx={{
                justifyContent: "right",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              underline="always"
              onClick={handleExpandClick}
            >
              en savoir plus
            </Link>
        ) : (
          <Link
            href="#"
            sx={{
              justifyContent: "right",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            underline="always"
          >
            en savoir plus
          </Link>
        )}
          </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{expandText}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
