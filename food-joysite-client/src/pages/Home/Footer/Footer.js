import React from "react";
import logo from '../../../images/logoQ.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
    Box,
    Paragraph,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
    Tag
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <Container id="footer">
                <Row>
                    <Column>
                        <img
                            src={logo}
                            alt='icon'
                            width="210"
                            height="160"
                        />
                    </Column>
                    <Column>
                        <Heading>About Us</Heading>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum!
                        </Paragraph>
                    </Column>
                    <Column>
                        <Heading>Grab Us</Heading>
                        <FooterLink href="#">
                        <FontAwesomeIcon icon={faPhone} />
                            &nbsp;0888-7777-9999
                        </FooterLink>
                        <FooterLink href="#">
                        <FontAwesomeIcon icon={faLocationDot} />
                            &nbsp;Main Store
                            <br/>
                            Jalan Tendean Raya No. 12, Jakarta Selatan, DKI Jakarta
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <FontAwesomeIcon icon={faInstagram} size="lg"/>
                            &nbsp;hungryjoy.id
                        </FooterLink>
                        <FooterLink href="#">
                            <FontAwesomeIcon icon={faFacebook} size="lg"/>
                            &nbsp;HungryJoy
                        </FooterLink>
                        <FooterLink href="#">
                            <FontAwesomeIcon icon={faTwitter} size="lg"/>
                            &nbsp;HungryJoyID
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
            <Tag>
                <p>&#169; sukmagp. All right reserved</p>
            </Tag>
        </Box>
    );
};
export default Footer;