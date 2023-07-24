import React from "react";
import { Row } from "react-bootstrap";
import fbIcon from "@/assets/img/icon_facebook.png";
import igIcon from "@/assets/img/icon_instagram.png";
import twitterIcon from "@/assets/img/icon_twitter.png";
import twitchIcon from "@/assets/img/icon_twitch.png";
import emailIcon from "@/assets/img/icon_mail.png";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="mb-3 pt-5" id="footer">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div className="fw-bold">
            <div className="mb-2">
              Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
            </div>
            <div className="mb-2">binarcarrental@gmail.com</div>
            <div className="mb-2">081-233-334-808</div>
          </div>
          <div className="menu">
            <Row>
              <Link
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="/#feature"
              >
                {" "}
                Our Services
              </Link>
            </Row>
            <Row>
              <Link
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="/#why-us"
              >
                {" "}
                Why Us
              </Link>
            </Row>
            <Row>
              <Link
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="#testimonial"
              >
                {" "}
                Testimonial
              </Link>
            </Row>
            <Row>
              <Link
                className="text-decoration-none text-dark"
                style={{ marginBottom: 10 }}
                href="#faq"
              >
                FAQ
              </Link>
            </Row>
          </div>

          <div>
            <div className="fw-bold mb-2">Connect with us</div>
            <div className="d-flex gap-2">
              <Link href="https://web.facebook.com/binaracademy">
                <Image src={fbIcon} alt="fbIcon"></Image>
              </Link>
              <Link href="https://www.instagram.com/academybinar/">
                <Image src={igIcon} alt="igcon"></Image>
              </Link>
              <Link href="https://twitter.com/academybinar">
                <Image src={twitterIcon} alt="twtIcon"></Image>
              </Link>
              <Link href="https://linktr.ee/binaracademy">
                <Image src={emailIcon} alt="emailIcon"></Image>
              </Link>
              <Link href="https://linktr.ee/binaracademy">
                <Image src={twitchIcon} alt="twitchIcon"></Image>
              </Link>
            </div>
          </div>
          <div>
            <div className="fw-bold mb-2">Copyright Binar 2023</div>
            <div>
              <span className="logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
