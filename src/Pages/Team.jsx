import React from 'react'
import CardTeam from '../Components/CardTeam'
import HeaderText from '../Components/HeaderText'
import "../Style/Team.scss"
import Datas from "../asset/data.json"
import Btn from '../Components/Btn'

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
        <div className=' d-flex mt-3 justify-content-center '>
<Btn text="Devenir membre" link={Datas.memberLink} />
<Btn text="Faire un don" link={Datas.donateLink} />
</div>

      </div>
    

  )
}

export default Team
