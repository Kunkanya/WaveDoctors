import React, { useState } from 'react'
import HeaderText from '../Components/HeaderText'
//import datas from '../asset/data.json'
import '../Style/Events.scss'
import { FaTimes, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

const Event = () => {

    const [modal, setModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState([])

    const datas = [

        {
            "photoId": "1",
            "photoName": "name 1",
            "path": "asset/events/1.jpg"
        },
        {
            "photoId": "2",
            "photoName": "name 2",
            "path": "asset/events/2.jpg"
        },
        {
            "photoId": "3",
            "photoName": "name 3",
            "path": "asset/events/3.jpg"
        },
        {
            "photoId": "4",
            "photoName": "name 4",
            "path": "asset/events/4.jpg"
        },
        {
            "photoId": "5",
            "photoName": "name 5",
            "path": "asset/events/5.jpg"
        },
        {
            "photoId": "6",
            "photoName": "name 6",
            "path": "asset/events/6.jpg"
        },
        {
            "photoId": "7",
            "photoName": "name 7",
            "path": "asset/events/7.jpg"
        },
        {
            "photoId": "8",
            "photoName": "name 8",
            "path": "asset/events/8.jpg"
        },
        {
            "photoId": "9",
            "photoName": "name 9",
            "path": "asset/events/9.jpg"
        },
        {
            "photoId": "10",
            "photoName": "name 10",
            "path": "asset/events/10.jpg"
        },
        {
            "photoId": "11",
            "photoName": "name 11",
            "path": "asset/events/11.jpg"
        },
        {
            "photoId": "12",
            "photoName": "name 12",
            "path": "asset/events/12.jpg"
        },
        {
            "photoId": "13",
            "photoName": "name 13",
            "path": "asset/events/13.jpg"
        },
        {
            "photoId": "14",
            "photoName": "name 14",
            "path": "asset/events/14.jpg"
        },
        {
            "photoId": "15",
            "photoName": "name 15",
            "path": "asset/events/15.jpg"
        },
        {
            "photoId": "16",
            "photoName": "name 16",
            "path": "asset/events/16.jpg"
        },
        {
            "photoId": "17",
            "photoName": "name 17",
            "path": "asset/events/17.jpg"
        },
        {
            "photoId": "18",
            "photoName": "name 18",
            "path": "asset/events/18.jpg"
        },
        {
            "photoId": "19",
            "photoName": "name 19",
            "path": "asset/events/19.jpg"
        },
        {
            "photoId": "20",
            "photoName": "name 20",
            "path": "asset/events/20.jpg"
        },
        {
            "photoId": "21",
            "photoName": "name 21",
            "path": "asset/events/21.jpg"
        },
        {
            "photoId": "22",
            "photoName": "name 22",
            "path": "asset/events/22.jpg"
        },
        {
            "photoId": "23",
            "photoName": "name 23",
            "path": "asset/events/23.jpg"
        },
        {
            "photoId": "24",
            "photoName": "name 24",
            "path": "asset/events/24.jpg"
        },
        {
            "photoId": "25",
            "photoName": "name 25",
            "path": "asset/events/25.jpg"
        },
        {
            "photoId": "26",
            "photoName": "name 26",
            "path": "asset/events/26.jpg"
        },
        {
            "photoId": "27",
            "photoName": "name 27",
            "path": "asset/events/27.jpg"
        },
        {
            "photoId": "28",
            "photoName": "name 28",
            "path": "asset/events/28.jpg"
        },
        {
            "photoId": "29",
            "photoName": "name 29",
            "path": "asset/events/29.jpg"
        },
        {
            "photoId": "30",
            "photoName": "name 30",
            "path": "asset/events/30.jpg"
        },
        {
            "photoId": "31",
            "photoName": "name 31",
            "path": "asset/events/31.jpg"
        },
        {
            "photoId": "32",
            "photoName": "name 32",
            "path": "asset/events/32.jpg"
        },
        {
            "photoId": "33",
            "photoName": "name 33",
            "path": "asset/events/33.jpg"
        },
        {
            "photoId": "34",
            "photoName": "name 34",
            "path": "asset/events/34.jpg"
        },
        {
            "photoId": "35",
            "photoName": "name 35",
            "path": "asset/events/35.jpg"
        },
        {
            "photoId": "36",
            "photoName": "name 36",
            "path": "asset/events/36.jpg"
        },
        {
            "photoId": "37",
            "photoName": "name 37",
            "path": "asset/events/37.jpg"
        },
        {
            "photoId": "38",
            "photoName": "name 38",
            "path": "asset/events/38.jpg"
        },
        {
            "photoId": "39",
            "photoName": "name 39",
            "path": "asset/events/39.jpg"
        },
        {
            "photoId": "40",
            "photoName": "name 40",
            "path": "asset/events/40.jpg"
        },
        {
            "photoId": "41",
            "photoName": "name 41",
            "path": "asset/events/41.jpg"
        },
        {
            "photoId": "42",
            "photoName": "name 42",
            "path": "asset/events/42.jpg"
        },
        {
            "photoId": "43",
            "photoName": "name 43",
            "path": "asset/events/43.jpg"
        },
        {
            "photoId": "44",
            "photoName": "name 44",
            "path": "asset/events/44.jpg"
        },
        {
            "photoId": "45",
            "photoName": "name 45",
            "path": "asset/events/45.jpg"
        },
        {
            "photoId": "46",
            "photoName": "name 46",
            "path": "asset/events/46.jpg"
        },
        {
            "photoId": "47",
            "photoName": "name 47",
            "path": "asset/events/47.jpg"
        },
        {
            "photoId": "48",
            "photoName": "name 48",
            "path": "asset/events/48.jpg"
        },
        {
            "photoId": "49",
            "photoName": "name 49",
            "path": "asset/events/49.jpg"
        },
        {
            "photoId": "50",
            "photoName": "name 50",
            "path": "asset/events/50.jpg"
        },
        {
            "photoId": "51",
            "photoName": "name 51",
            "path": "asset/events/51.jpg"
        },
        {
            "photoId": "52",
            "photoName": "name 52",
            "path": "asset/events/52.jpg"
        },
        {
            "photoId": "53",
            "photoName": "name 53",
            "path": "asset/events/53.jpg"
        },
        {
            "photoId": "54",
            "photoName": "name 54",
            "path": "asset/events/54.jpg"
        },
        {
            "photoId": "55",
            "photoName": "name 55",
            "path": "asset/events/55.jpg"
        },
        {
            "photoId": "56",
            "photoName": "name 56",
            "path": "asset/events/56.jpg"
        },
        {
            "photoId": "57",
            "photoName": "name 57",
            "path": "asset/events/57.jpg"
        },
        {
            "photoId": "58",
            "photoName": "name 58",
            "path": "asset/events/58.jpg"
        },
        {
            "photoId": "59",
            "photoName": "name 59",
            "path": "asset/events/59.jpg"
        },
        {
            "photoId": "60",
            "photoName": "name 60",
            "path": "asset/events/60.jpg"
        },
        {
            "photoId": "61",
            "photoName": "name 61",
            "path": "asset/events/61.jpg"
        },
    ]

    const photoLength = datas.length

    const handleSelect = (item) => {
        setSelectedImage(item)
        setModal(true)
        modalOpen()
    }

    const handleClose = () => {
        setModal(false)
    }

    const back = () => {
        if (selectedImage.photoId == 1) {
            setSelectedImage(datas.find((j) => j.photoId == photoLength))
        } else {
            const test = datas.find((i) => i.photoId == parseInt(selectedImage.photoId) - 1)
            setSelectedImage(test)
        }
    }
    const next = () => {
        if (selectedImage.photoId == photoLength) {
            setSelectedImage(datas.find((j) => j.photoId == 1))
        } else {
            const test = datas.find((i) => i.photoId == parseInt(selectedImage.photoId) + 1)
            setSelectedImage(test)
        }
    }

    const modalOpen = () => {
        return (
            <>
                <div className="events__modal">
                    <FaTimes className='events__modal-close' onClick={() => handleClose()} />
                    <div className="events__modal-back" onClick={() => back()}>
                        <FaAngleDoubleLeft className='events__modal-icon' />
                    </div>
                    <div className="events__modal-prev" onClick={() => next()}>
                        <FaAngleDoubleRight className='events__modal-icon' />
                    </div>
                    {/** To improved

                    <p key={image.id} style={{ color: "white" }}>{image.photoName}</p>

*/}

                    <img key={selectedImage.photoId} className="events__modal-image" src={selectedImage.path} alt={selectedImage.photoName} />
                </div>
            </>
        )
    }

    return (
        <div id="events-section" >
            <div style={{ height: 20 }}></div>
            <div className="container">
                <div className="events">
                    <HeaderText text="Galerie" />
                    <div className="events__container container">
                        {datas.map((item) => {
                            return (
                                <img key={item.photoId} onClick={() => handleSelect(item)} className="events__image" src={item.path} alt={item.photoName} />
                            )
                        }
                        )}
                    </div>
                    {modal ? modalOpen(selectedImage) : ""}
                </div>
            </div>
        </div>
    )
}

export default Event
