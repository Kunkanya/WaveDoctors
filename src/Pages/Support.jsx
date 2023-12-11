import React from "react";
import CardTeam from "../Components/CardTeam";
import HeaderText from "../Components/HeaderText";
import "../Style/Team.scss";
import Datas from "../asset/data.json";
import Btn from "../Components/Btn";
import { Typography, Link, CardContent, Collapse, Grid } from "@mui/material";
import MemberSection from "../Components/MemberSection";

const Support = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [expandedTeam, setExpandedTeam] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandTeam = () => {
    setExpandedTeam(!expandedTeam);
  };

  return (
    <Grid container sx={{ bgcolor: "lightgrey", my: 5, px: 16, pb: 5 }}>
      <Grid item sx={{ height: 20 }}></Grid>
      <HeaderText text="Nous soutenir" />
      <Grid item xs={12}>
        <Typography paragraph>
          Vous pouvez soutenir Wavedoctors de différentes manières.
        </Typography>
        <Typography paragraph>
          Vos{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            underline="always"
            href={Datas.donateLink}
          >
            don
          </Link>{" "}
          sont essentiels pour nous permettre d´atteindre nos objectifs comme la
          formation d´un large public en gestes qui sauvent et de promouvoir la
          sécurité, la prévention médicale et le bien-être des sportifs.
        </Typography>
        <Typography paragraph>
          Vous pouvez également participer à nos campagnes de financement
          participatif, contribuant ainsi directement à nos diverses missions.
        </Typography>
        <Typography paragraph>
          De plus, si vous partagez notre passion pour les sports à sensations
          fortes, la médecine et la sécurité, vous pouvez devenir actif en nous
          contactant pour rejoindre notre équipe ou collaborer avec nous sur des
          projets spécifiques. Chaque geste de soutien compte, et ensemble, nous
          pouvons créer des environnements plus sûrs et plus sains pour tous.
        </Typography>
        <MemberSection />
      </Grid>
    </Grid>
  );
};

export default Support;
