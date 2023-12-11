import React from "react";
import HeaderText from "../Components/HeaderText";
import "../Style/Association.scss";
import Btn from "../Components/Btn";
import Datas from "../asset/data.json";

const Association = () => {
  return (
    <div id="association-section">
      <div style={{ height: 20 }}></div>

      <div className="container">
        <HeaderText text="L'association" />
        <div className="assoText mt-5">
          Wavedoctors est né dans le sud-ouest de la France d´un groupe
          passionné par la médecine et les sports aquatiques en plein air tels
          que le surf, la voile, la plongée, et bien d'autres. Au début, notre
          mission primaire était de préserver la santé des athlètes pratiquant
          des sports à risque spécifiques (en montagne, en mer, sports dits « à
          sensations fortes ») en augmentant leur sécurité et en fournissant des
          soins médicaux de qualité. Mais ce ne fut que le début de
          l´aventure...
          {/**
          <HeaderText text="Nos missions" />
          <ul>
            <li>
              {" "}
              + Former un maximum de la population civile en gestes de premiers
              secours et réanimation cardio-pulmonaire. En effet, les premières
              minutes d´une urgence vitale peuvent être décisif pour l´avenir de
              la victime et doivent donc être réalisé par les personnes sur
              place avant l´arrivée des secours professionnels. Il est donc
              primordial que chaque citoyen soit en mesure de pratiquer ces
              premiers gestes. Ils peuvent être facilement et rapidement appris
              dès le plus jeune âge. WAVEDOCTORS s´engage à former un maximum de
              personnes sur la base du bénévolat. Pour cela, nous organisons des
              actions dans les clubs sportifs, les lieux publics, les écoles et
              entreprises et pendant différents événements sportifs.
            </li>
            <li>
              <br />
            </li>
            <li>
              + Organiser des dispositifs prévisionnels de secours (DPS) pour
              tout type d´événements.{" "}
            </li>
            <li>
              <br />
            </li>
            <li>+ L´accompagnement médicalisé d´excursions de tout type.</li>
            <li>
              <br />
            </li>
            <li>
              + Création d´un groupe d´intervention médical intervenant dans des
              situations hors norme.
            </li>
          </ul>
           */}
          <div className=" d-flex justify-content-center mt-5">
            <Btn text="Devenir membre" link={Datas.memberLink} />
            <Btn text="Faire un don" link={Datas.donateLink} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Association;
