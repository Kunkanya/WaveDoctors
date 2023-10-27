import React from "react";
import HeaderText from "../Components/HeaderText";
import "../Style/Association.scss";
import Btn from "../Components/Btn";
import Datas from "../asset/data.json";
import { Grid, Typography } from "@mui/material";
import CardEngagement from "../Components/CardEngagement";

const Engagement = () => {
  return (
    <Grid container spacing={2} sx={{ bgcolor: "#F3F0CA" }}>
      <Grid item xs={12} spacing={3} sx={{ m: 4, ml: 14 }}>
        <HeaderText text="Nos Engagements" />
        <Grid
          container
          item
          xs={12}
          sx={{ p: 4 }}
          rowSpacing={3}
          columnSpacing={3}
        >
          <CardEngagement
            avartar="1"
            title="La formation en Gestes qui sauvent et particulièrement en réanimation cardio-pulmonaire"
            mainText="Notre mission phare est de former un maximum de la population civile en gestes de premiers secours et en réanimation cardio-pulmonaire (RCP)"
            link="false"
          />
          <CardEngagement
            avartar="2"
            title="La sécurité des athlètes"
            mainText="Nous nous engageons à minimiser les risques associés aux divers sports à « risques spécifiques » en offrant des conseils de sécurité, de la prévention et des services médicaux de qualité"
            link="true"
            expandText="Nous sensibilisons sur les risques spécifiques aux différents sports pratiqués lors de ces événements dans l´objectif de réduire le nombre de blessures et maladies en encourageant des pratiques plus sûres et en enseignant les mesures de prévention adaptées à chaque discipline.
          Cette approche globale garantit que notre participation aux événements sportifs et publics va au-delà de la simple intervention en cas d'urgence, contribuant ainsi à une expérience plus sûre et plus éclairée pour tous les participants et le public. 
          En offrant des soins médicaux et en promouvant la prévention, nous cherchons à maximiser la sécurité tout en minimisant les risques liés à ces activités passionnantes."
          />
          <CardEngagement
            avartar="3"
            title="La prévention des risques médicaux "
            mainText="Nous visons à prévenir les dommages corporels en fournissant des formations et des informations sur les meilleures pratiques en matière de sécurité.                          "
            link="true"
            expandText="Nous sensibilisons sur les risques spécifiques aux différents sports pratiqués lors de ces événements dans l´objectif de réduire le nombre de blessures et maladies en encourageant des pratiques plus sûres et en enseignant les mesures de prévention adaptées à chaque discipline.
            Cette approche globale garantit que notre participation aux événements sportifs et publics va au-delà de la simple intervention en cas d'urgence, contribuant ainsi à une expérience plus sûre et plus éclairée pour tous les participants et le public. 
            En offrant des soins médicaux et en promouvant la prévention, nous cherchons à maximiser la sécurité tout en minimisant les risques liés à ces activités passionnantes."
          />
          <CardEngagement
            avartar="4"
            title="Les Dispositifs Préventifs Médicaux et de Secours pour des événements sportifs ou publics "
            mainText="Nous offrons des dispositifs préventifs médicaux et de secours lors d'événements sportifs et publics pour assurer la sécurité des participants et du public, y compris la mise en place de postes de secours et d'équipes médicales qualifiées.  "
            link="false"
          />
          <CardEngagement
            avartar="5"
            title="L'Accompagnement médicalisé d'excursions"
            mainText=""
            link="false"
            expandText=""
          />
          <CardEngagement
            avartar="6"
            title="6. La création d´un groupe d'intervention médicalisé pour des situations sanitaires hors norme et des missions humanitaires"
            mainText=""
            link="false"
            expandText=""
          />

          <Typography paragraph>
            Ces engagements démontrent notre dévouement envers la sécurité, la
            formation, et l'assistance médicale dans une variété de contextes,
            notamment aux événements sportifs et aux situations d'urgence
            exceptionnelles. Notre objectif est d'apporter des compétences
            médicales essentielles à un large éventail de situations pour le
            bien de la communauté.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Engagement;
