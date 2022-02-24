import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "./Particle";
import ContactForm from "./ContactForm";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function Contact(){

    return (
        <Container fluid className="contact-section">
            <Particle/>

            <div class='row col-12'>
                <div class='column'>
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                        <strong className="purple">Send an email</strong>
                    </h1>
                    <ContactForm/>
                </div>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                    <strong className="purple">OR</strong>
                </h1>
                <div class='column'>
                    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                        <strong className="purple">Schedule a meeting with me</strong>
                    </h1>
                    <Button variant="primary" href="https://calendly.com/yb2145/30min" target="_blank" type="submit" className="meeting-button">
                        Book Now <BiLinkExternal /> &nbsp;
                    </Button>
                </div>
            </div>
        </Container>
    )
}

export default Contact;