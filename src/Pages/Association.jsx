import React from 'react'
import HeaderText from '../Components/HeaderText'
import '../Style/Association.scss'
const Association = () => {
  return (
    <div  id="association-section" >
      <div style={{height :20}}></div>
      
      <div className="container">
        <HeaderText text="L'association" />
        <div className="assoText mt-5">

Notre association wavedoctors est née de nos passions communes : la médecine et les sports aquatiques en plein air comme le surf, la voile, la plongée etc...

L´objectif primaire est de préserver la santé des athlètes pratiquant leur passion et d´augmenter leur sécurité. Nos membres bénévoles ne sont pas uniquement des professionnels médicaux, mais ayant tout type de compétences humaines ou professionnelles permettant de réaliser nos objectifs.

<HeaderText text="Nos missions" />

<ul>
  <li> + Former un maximum de la population civile en gestes de premiers secours et  réanimation cardio-pulmonaire. En effet, les premières minutes d´une urgence vitale peuvent être décisif pour l´avenir de la victime et doivent donc être réalisé par les personnes sur place avant l´arrivée des secours professionnels. Il est donc primordialque chaque citoyen soit en mesure de pratiquer ces premiers gestes. 
Ils peuvent être facilement et rapidement appris dès le plus jeune âge. WAVEDOCTORS s´engage à former un maximum de personnes sur la base du bénévolat. Pour cela, nous organisons des actions dans les clubs sportifs, les lieux publics, les écoles et entreprises et pendant différents événements sportifs.
</li>
<li>
  <br />
</li>
<li>+ Organiser des dispositifs prévisionnels de secours (DPS) pour tout type d´événements. </li>
<li>
  <br />
</li>
<li>+ L´accompagnement médicalisé d´excursions de tout type.</li>
<li>
  <br />
</li>
<li>+ Création d´un groupe d´intervention médical intervenant dans des situations hors norme.</li>

</ul>

       </div>
      </div>
    </div>
  )
}

export default Association
