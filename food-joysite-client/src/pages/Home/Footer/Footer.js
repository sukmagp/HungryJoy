import React from "react";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PlaceIcon from '@mui/icons-material/Place';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
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
                            alt=""
                            src="/logoQ.png"
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
                            <PhoneEnabledIcon color="action" />
                            &nbsp;0888-7777-9999
                        </FooterLink>
                        <FooterLink href="#">
                            <PlaceIcon/>
                            &nbsp;Main Store
                            <br/>
                            Jalan Tendean Raya No. 12, Jakarta Selatan, DKI Jakarta
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <InstagramIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <TwitterIcon/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <FacebookIcon/>
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