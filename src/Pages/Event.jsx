import React, { useState } from 'react'
import HeaderText from '../Components/HeaderText'
//import datas from '../asset/data.json'
import '../Style/Events.scss'
import { FaTimes } from 'react-icons/fa';

const Event = () => {

    const [modal, setModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState("")
    //const [currentIndex, setCurrentIndex] = useState(0)

        const datas = [

            {
                "photoId" : "2",
                "photoName" : "name 2",
                "path" : "asset/events/2.jpg" 
            },
            {
                "photoId" : "4",
                "photoName" : "name 4",
                "path" : "asset/events/4.jpg" 
            },
            {
                "photoId" : "5",
                "photoName" : "name 5",
                "path" : "asset/events/5.jpg" 
            },
            {
                "photoId" : "7",
                "photoName" : "name 7",
                "path" : "asset/events/7.jpg" 
            },
            {
                "photoId" : "9",
                "photoName" : "name 9",
                "path" : "asset/events/9.jpg" 
            },
            {
                "photoId" : "12",
                "photoName" : "name 12",
                "path" : "asset/events/12.jpg" 
            },
            {
                "photoId" : "13",
                "photoName" : "name 13",
                "path" : "asset/events/13.jpg" 
            },
            {
                "photoId" : "14",
                "photoName" : "name 14",
                "path" : "asset/events/14.jpg" 
            },
            {
                "photoId" : "15",
                "photoName" : "name 13",
                "path" : "asset/events/15.jpg" 
            },
            {
                "photoId" : "16",
                "photoName" : "name 13",
                "path" : "asset/events/16.jpg" 
            },
            {
                "photoId" : "18",
                "photoName" : "name 13",
                "path" : "asset/events/18.jpg" 
            },
            {
                "photoId" : "19",
                "photoName" : "name 13",
                "path" : "asset/events/19.jpg" 
            },
            {
                "photoId" : "21",
                "photoName" : "name 13",
                "path" : "asset/events/21.jpg" 
            },
            {
                "photoId" : "23",
                "photoName" : "name 13",
                "path" : "asset/events/23.jpg" 
            },

        ]


    const handleSelect = (item) => {
        //  setCurrentIndex(item.id)
        setSelectedImage(item)
        setModal(true)
        modalOpen(selectedImage)
    }

    const handleClose = () => {
        setModal(false)
    }

    const modalOpen = (image) => {
        return (
            <>
                <div className="events__modal">
                    <FaTimes className='events__modal-close' onClick={() => handleClose()} />
                    {/** To improved
                    <div className="events__modal-back" onClick={() => alert("link")}>
                        <FaAngleDoubleLeft className='events__modal-icon' />
                    </div>
                    <div className="events__modal-prev">
                        <FaAngleDoubleRight className='events__modal-icon' />
                    </div>

                    <p key={image.id} style={{ color: "white" }}>{image.photoName}</p>

*/}

                    <img key={image.photoId} className="events__modal-image" src={image.path} alt={image.photoName} />
                </div>
            </>
        )
    }

    return (
        <div id="events-section" >
            <div style={{ height: 20 }}></div>
            <div className="container">
                <div className="events">
                    <HeaderText text="Événements" />
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
