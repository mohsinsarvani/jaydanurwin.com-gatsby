import React from 'react'
import jaydanProfile from "../images/profile-image.jpg"
import youtubeSocialIcon from "../images/icons/youtube-icon-24px.svg"
import instagramSocialIcon from "../images/icons/instagram-glyph-24px.svg"
import twitterSocialIcon from "../images/icons/twitter-icon-24px.svg"
import githubSocialIcon from "../images/icons/github-icon-24px.svg"
import jaydanUrwinLogo from '../images/jaydan-urwin-logo.svg'

import "../styles/app.scss"

const IndexPage = () => (
    <section className="jaydan-home__section">
        <img src={jaydanProfile} className="jaydan-home-profile__img" />
        <div className="jaydan-home-bio__container">
            <h2>
                It’s hard to sum up a person in a bio isn’t it? Follow me if you want
                to see what I’m about!
        </h2>
            {/* <!-- <a href="https://blog.jaydanurwin.com" className="jaydan-home-main__link"
            >visit my blog
          <aside><span>→</span></aside></a
            > --> */}
      </div>
        <div className="jaydan-home-social__container">
            <a href="https://www.youtube.com/channel/UCS1dnjhkW88IM5u6GN5jNvA">
                <img
                    src={youtubeSocialIcon}
                    alt="YouTube Social Link"
                />
            </a>
            <a href="https://instagram.com/jaydanurwin">
                <img
                    src={instagramSocialIcon}
                    alt="Instagram Social Icon"
                />
            </a>
            <a href="https://twitter.com/jaydanurwin">
                <img
                    src={twitterSocialIcon}
                    alt="Twitter Social Icon"
                />
            </a>
            <a href="https://github.com/jaydanurwin">
                <img
                    src={githubSocialIcon}
                    alt="Github Social Icon"
                />
            </a>
        </div>
        <img
            src={jaydanUrwinLogo}
            className="jaydan-urwin-logo__img"
            alt="Jaydan Urwin logo"
        />
    </section>
)

export default IndexPage

