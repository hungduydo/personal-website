import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './contact.scss';
import ContactService from '../../../api/contact';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  render() {
    return (
      <div id="contact" className="contact">
        <Container>
          <Row className="contact__head">
            <Col md={2}><FontAwesomeIcon icon="envelope" size="5x" color="white" /></Col>
            <Col md={10}>Feel free for contact me at email address or form below</Col>
          </Row>
          <Row>
            <Col md={8}>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" name="name" onChange={this.handleChange} className={this.state.isNameValid}/>
                  </div>
                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" name="email" onChange={this.handleChange} className={this.state.isEmailValid}/>
                  </div>
                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" name="subject" onChange={this.handleChange} />
                  </div>
                  <div>
                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols="30" rows="6" name="message" onChange={this.handleChange} className={this.state.isMessageValid}></textarea>
                  </div>
                  <div>
                    <button className="btn draw-border">Submit</button>
                  </div>
                </fieldset></form>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }

  handleChange = (event) => {

    const { name, value } = event.target;
    this.setState({ [name]: value });
    event.preventDefault();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, subject, email, message } = this.state;
    ContactService.submitContact({ name, subject, email, message })
    .then(res => {
      if (res) {
        alert(`Your message sent, i will contact soon ${res}`);
      }
    });
  }
}

export default Contact;
