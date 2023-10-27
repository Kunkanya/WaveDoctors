import React from "react";
import CardTeam from "../Components/CardTeam";
import HeaderText from "../Components/HeaderText";
import "../Style/Team.scss";
import Datas from "../asset/data.json";
import Btn from "../Components/Btn";
import { Typography, Link, CardContent, Collapse, Grid } from "@mui/material";

//import foto from '../asset/20190511_113614.jpg'
//<div className='container-fluid m-2 ' >
const Team = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="teams-section" className="container">
      <div style={{ height: 20 }}></div>

      <HeaderText text="Qui sommes nous?" />
      <Typography>
        Wavedoctors est composée de membres engagés, parmi lesquels se trouvent
        en majorité des professionnels de la santé, tels que des médecins et
        infirmiers anesthésistes, urgentistes, réanimateurs et d´autres
        spécialités médicales, des kinésithérapeutes ainsi que des maîtres
        nageurs sauveteurs et secouristes qualifiés.
      </Typography>
      <Grid container xs={12} justifyContent="right" sx={{ pr: 6 }}>
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
      <Grid container xs={12} justifyContent="right" sx={{ pr: 6 }}>
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
          Voir l'équipe
        </Link>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{bgcolor: '#F3F0CA' ,width: '95%'}}>
          <Typography paragraph>
            {" "}
            D'autres membres apportent des compétences variées qui soutiennent
            notre mission d´une manière ou d´une autre. Tous partagent la même
            passion pour les sports aquatiques, en plein air ou dits
            « extrèmes » et le bien-être des athlètes. Cette diversité de
            compétences et d'expertise nous permet de fournir une assistance
            médicale complète, de la prévention à l'intervention d'urgence, tout
            en promouvant une communauté plus sûre et plus informée dans le
            domaine des ces sports. Notre force réside dans notre dévouement
            envers la sécurité et la santé, ainsi que dans notre capacité à
            mobiliser une équipe multidisciplinaire hautement qualifiée pour
            atteindre nos objectifs.
          </Typography>
        </CardContent>
      </Collapse>
      <div className="team">
        <CardTeam />
      </div>
      <div className=" d-flex mt-3 justify-content-center ">
        <Btn text="Devenir membre" link={Datas.memberLink} />
        <Btn text="Faire un don" link={Datas.donateLink} />
      </div>
    </div>
  );
};

export default Team;
