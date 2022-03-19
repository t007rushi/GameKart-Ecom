import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer-content">
        <div className="footer-social flex-row gap-btwn">
          <p>Follow Gamekart</p>
          <i className="fa-solid fa-envelope footer-icon" />
          <i className="fa-brands fa-facebook-f footer-icon" />
          <i className="fa-brands fa-instagram footer-icon" />
          <i className="fa-brands fa-twitter footer-icon" />
        </div>
        <section className="flex-row footer-block">
          <ul className="flex-col ftr-list">
            <li>
              <h3>Browse</h3>
            </li>
            <li>gamekart consoles</li>
            <li>gamekart games</li>
            <li>gamekart Game Pass</li>
            <li>gamekart accessories</li>
          </ul>
          <ul className="flex-col ftr-list">
            <li>
              <h3>Resources</h3>
            </li>
            <li>gamekart News</li>
            <li>gamekart Support</li>
            <li>Feedback</li>
            <li>gamekart Community Standards</li>
            <li>Photosensitive Seizure Warning</li>
          </ul>
          <ul className="flex-col ftr-list">
            <li>
              <h3>For Developers</h3>
            </li>
            <li>Games</li>
            <li>Designed for Xbox</li>
            <li>Windows</li>
            <li>Creators Program</li>
          </ul>
        </section>
        <div className="flex-col ftr-btm gap-btwn">
          <h4 className="flex-row center-it">
            Crearted &amp; maintained by Rushikesh Tarapure
          </h4>
          <span className="flex-row center-it gap-btwn">
            <i className="material-icons"> public </i>ENGLISH
            <p>About our ads © Gamekart 2022</p>
          </span>
        </div>
      </footer>
    </div>
  );
}
