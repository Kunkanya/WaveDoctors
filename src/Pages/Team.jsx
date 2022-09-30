import React from 'react'
import CardTeam from '../Components/CardTeam'
import HeaderText from '../Components/HeaderText'
import "../Style/Team.scss"

//import foto from '../asset/20190511_113614.jpg'
//<div className='container-fluid m-2 ' >
const Team = () => {
  return (
    <div id="teams-section" className="container">
            <div style={{height :20}}></div>

        <HeaderText text="Qui sommes nous?" />
        <div className="team">
          <CardTeam />
        </div>
      </div>
    

  )
}

export default Team
