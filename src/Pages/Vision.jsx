import React from "react";
import CardTeam from "../Components/CardTeam";
import HeaderText from "../Components/HeaderText";
import "../Style/Team.scss";
import Datas from "../asset/data.json";
import Btn from "../Components/Btn";
import { Typography, Link, CardContent, Collapse, Grid } from "@mui/material";
import MemberSection from "../Components/MemberSection";

const Vision = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTeam, setExpandedTeam] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandTeam = () => {
    setExpandedTeam(!expandedTeam);
  };

  return (
    <Grid container xs sx={{ bgcolor: "lightgrey", mt: 5, px: 16 }}>
      <Grid sx={{ height: 20 }}></Grid>
      <HeaderText text="Notre vision?" />
      <Typography paragraph>
        Notre vision est ancrée dans l'idée que la passion pour les activités
        sportives à risques et la médecine peuvent converger pour créer des
        communautés plus sûres, plus conscientes et plus solidaires. Notre
        vision est de devenir un acteur incontournable dans la promotion de la
        sécurité, de la santé et du bien-être des citoyens et des athlètes
        pratiquant des sports à risque, extrèmes ou en milieu hostile.{" "}
      </Typography>
      <Grid container xs={12} justifyContent="right">
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
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          sx={{ bgcolor: "#F3F0CA", width: "100%", mt: 3, borderRadius: 2 }}
        >
          <Typography paragraph>
            Nous aspirons à créer un impact positif et durable en nous engageant
            dans les domaines de la sécurité, la formation et sensibilisation et
            l´intervention d´urgence que ce soit sur le terrain local ou lors de
            missions humanitaires à l'étranger. Nous visons à mobiliser une
            communauté engagée de professionnels de la santé, de passionnés
            d´aventures et de citoyens conscients de l'importance de la
            sécurité. Ensemble, nous visons à créer des environnements plus sûrs
            et à partager nos passions. Au cœur de notre vision se trouve notre
            engagement envers la responsabilité sociétale et environnementale,
            éléments fondamentaux pour toute organisation. Nous nous efforçons
            de minimiser notre impact sur l'environnement et de contribuer à des
            pratiques durables. Nous sommes fiers de collaborer avec des
            partenaires qui partagent nos valeurs.
          </Typography>
        </CardContent>
      </Collapse>
      <MemberSection />
    </Grid>
  );
};

export default Vision;
