import React, { useRef } from 'react'
import HeaderText from '../Components/HeaderText'
//import bg from '../asset/logo/background.jpg'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const bg="asset/logo/background.jpg"

    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yjxm4hl', 'template_2414f6f', form.current, '8X5H9oJnoy0vlctx6')
            .then((result) => {
                return (
                    <div className='send contact-modal'>
                        <h3>Votre message est bien envoyé. Merci beaucoup</h3>
                    </div>)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (

<div id="contact-section" className='container-fluid'>
<div style={{height :5}}></div>

    <div className="container">
            <HeaderText text="Contact" />
            <div className="row">
                <div className="col-sm-12 col-md-6 ">
                    <img src={bg} alt="" className="img-responsive" style={{ maxWidth: "100%", opacity: 0.3 }} />
                </div>
                <form ref={form} onSubmit={sendEmail} className="col-sm-12 col-md-6 bg-white  " style={{}}>
                    <div className="form-group m-3">
                        <label htmlFor="user_name">Nom</label>
                        <input type="text"
                            className="form-control"
                            name="user_name"
                            aria-describedby="emailHelp"
                            placeholder="Votre nom et prenom"
                            required />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="user_email">Email address</label>
                        <input type="email"
                            className="form-control"
                            name="user_email"
                            aria-describedby="user_email"
                            placeholder="Enter email"
                            required />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="subject">Subject</label>
                        <input type="text"
                            className="form-control"
                            name="subject"
                            aria-describedby="subject"
                            placeholder="Subject" />
                    </div>
                    <div className="form-group m-3">
                        <label htmlFor="message">Messages</label>
                        <textarea type="text"
                            className="form-control"
                            name="message"
                            aria-describedby="message"
                            placeholder="Messages"
                            cols="30" row="30" />
                    </div>
                    <div className="form-group m-3 flex-row justify-content-end">
                        <button 
                            className="btn btn-primary "
                            data-bs-toggle="modal"
                            data-bs-target="#myModal" 
                         >Submit</button>
                    </div>
                </form>
            </div>

{/** Modal-----------------------*/}
<div className="modal fade" id="#myModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" clase="btn-close" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
</div>
</div>
        </div>





)
}

export default Contact
