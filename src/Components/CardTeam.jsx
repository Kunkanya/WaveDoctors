import React from 'react'
//import datas from '../asset/data.json'
import avatar from '../asset/Team/AVATAR.svg'
import '../Style/CardTeam.scss'

const CardTeam = ({ info }) => {
  const mainMembers =
    [
      {
        "id": "1",
        "name": "Dr. Francis Remmer",
        "position": "Président de l'association WaveDoctors",
        "workPlace": "Centre Hospitalier de Dax - Côte d'Argent, France",
        "photo": "asset/Team/francis.png",
        "education": [
          "Médecin anesthésiste-réanimateur et urgentiste",
          "Médecin de la fédération allemande de surf",
          "Médecin de montagne et d'expédition"
        ]
      },
      {
        "id": "2",
        "name": "Dr. Kévin Quesnel",
        "position": "Vice-président de l'association Wavedoctors",
        "workPlace": "Centre Hospitalier de la Côte Basque, France",
        "photo": "asset/Team/kevin.png",
        "education": [
          "Médecin réanimateur et urgentiste",
          "Médecin de montagne et d'expédition"
        ]
      },
      {
        "id": "3",
        "name": "Dr. Benjamin Oberpeilsteiner",
        "position": "Trésorier de l'association Wavedoctors",
        "workPlace": "Centre Hospitalier de Dax - Côte d'Argent, France",
        "photo": "asset/Team/ben.jpg",
        "education": ["Médecin anesthésiste-réanimateur"]
      },
      {
        "id": "4",
        "name": "Dr. Christina Wende",
        "position": "Trésorière adjointe de l'association Wavedoctors",
        "workPlace": "Centre Hospitalier Universitaire Poite-à-Pitre, Guadeloupe, France",
        "photo": "asset/Team/Christina.jpeg",
        "education": ["Chirurgien orthopédiste", "Médecin du sport", "Médecin manuelle"
        ]
      },
      {
        "id": "5",
        "name": "Axelle Brassart",
        "position": "secrétaire de l'association Wavedoctors",
        "workPlace": "Centre Hospitalier de Dax - Côte d'Argent, France",
        "education": ["Infirmière anesthésiste diplômée d'état"]
      },
      {
        "id": "6",
        "name": "Dr. Alexandre Wittig",
        "photo": "asset/Team/alexw.jpeg",
        "position": "secrétaire adjoint de l'association Wavedoctors",
        "workPlace": "Centre Hospitalier de Dax - Côte d'Argent, France",
        "education": ["Médecin anesthésiste-réanimateur"]
      },
      {
        "id": "7",
        "name": "Prof. Dr. Maurice Balke",
        "position": "",
        "photo": "asset/Team/maurice.jpg",
        "workPlace": "Clinique du sport Cologne, Allemagne",
        "education": ["Chirurgien orthopédiste"]
      },
      {
        "id": "8",
        "name": "Michael Zirlewagen",
        "position": "",
        "photo": "asset/Team/michael.jpg",
        "workPlace": "Allemagne",
        "education": ["Président de la fédération de surf allemande", "Ingénieur diplômé en technologie des médias"]
      },
      {
        "id": "9",
        "name": "Karl Burr",
        "position": "",
        "photo": "asset/Team/karl.jpg",
        "workPlace": "Cabinet Karl Burr, Cologne, Allemagne",
        "education": ["Kinésithérapeute"]
      },
      {
        "id": "10",
        "name": "Wally Walter Gonzalez",
        "position": "",
        "photo": "asset/Team/wally.jpg",
        "workPlace": "medicaltraining.berlin, Allemagne",
        "education": ["Kinésithérapeute"]
      },
      {
        "id": "11",
        "name": "Dr. Timo Nabers",
        "position": "",
        "workPlace": "GRN Klinik Sinsheim, Allemagne",
        "education": ["Chirurgien orthopédiste et traumatologue"]
      },
      {
        "id": "12",
        "name": "Dr. Julien Brun",
        "position": "",
        "workPlace": "France",
        "education": ["Médecin anesthésiste-réanimateur, médecin de montagne"]
      },
      {
        "id": "13",
        "name": "Dr. Lise Mattera",
        "position": "",
        "photo": "asset/Team/lise.jpeg",
        "workPlace": "Centre Hospitalier de Dax - Côte d´Argent, France",
        "education": ["Médecin anesthésiste-réanimateur"]
      },
      {
        "id": "14",
        "name": "Céline Barea",
        "position": "",
        "workPlace": "France",
        "education": ["Infirmière diplômée d'état aux urgences"]
      },
      {
        "id": "15",
        "name": "Eva Kreyer",
        "position": "",
        "workPlace": "Hossegor, France",
        "education": ["Kinésithérapeute"]
      },
      {
        "id": "16",
        "name": "Alexia Vignasse",
        "position": "",
        "workPlace": "Centre Hospitalier de Dax - Côte d'Argent, France",
        "education": ["Infirmière anesthésiste diplômée d'état"]
      },

    ]
  return (
    <>
      {mainMembers.map(data => {
        return (
          <div className='cards container' key={data.id} >
            <div className="cards__avatar">
              {data.photo ? <img src={data.photo} alt="" /> : <img src={avatar} alt="" />}
            </div>
            <div className="cards__name-header">
              <h5>{data.name}</h5>
              <p style={{ fontStyle: "italic", color: "lightgray" }} >{data.position ? data.position : ""}</p>
            </div>
            <div className="cards__body container" style={{ textAlign: "left" }}>
              <p style={{ fontSize: 12 }}>{data.workPlace}</p>
              {data.education.map((list, index) => {
                return (
                  <p key={index}> + {list}
                  </p>
                )
              })}
            </div>
          </div>

        )
      })}

    </>

  )
}

export default CardTeam
