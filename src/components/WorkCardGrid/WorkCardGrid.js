import React from 'react'

import leanaImage from '../../images/leanaurwin.png'
import mcfatesImage from '../../images/mcfatesheatingandcooling.png'
import motooneImage from '../../images/motoonektm.png'
import createchurch from '../../images/createchurch.png'
import smartmoveidaho from '../../images/smartmoveidaho.png'
import prolinesuspension from '../../images/prolinesuspension.png'
import Card from '@material/react-card'

// Styles
import './workCardGrid.scss'

const WorkCardGrid = () => (
  <div className="anoun-work__container">
    {/* Create Church Card */}
    <a href="https://createchurch.co" target="_blank" rel="noopener noreferrer">
      <Card className="mdc-card--clickable">
        <img
          src={createchurch}
          className="mdc-card__media anoun-work-responsive__img"
          alt="Create Church Website Screenshot"
          loading="lazy"
        />
        <div className="anoun-work-card-content__container">
          <h4>Create Church</h4>
          <p>Web Design</p>
        </div>
      </Card>
    </a>
    {/* Leana Urwin Card */}
    <a href="https://leanaurwin.com" target="_blank" rel="noopener noreferrer">
      <Card className="mdc-card--clickable">
        <img
          src={leanaImage}
          className="mdc-card__media anoun-work-responsive__img"
          alt="Leana Urwin Website Screenshot"
          loading="lazy"
        />
        <div className="anoun-work-card-content__container">
          <h4>Leana Urwin</h4>
          <p>Branding, Web Design</p>
        </div>
      </Card>
    </a>
    {/* McFate's Card */}
    <a
      href="https://mcfatesheatingandcooling.com"
      target="_blank"
      rel="noopener noreferrer"
      className="anoun-work-link"
    >
      <Card className="mdc-card--clickable">
        <img
          src={mcfatesImage}
          className="mdc-card__media anoun-work-responsive__img"
          alt="McFate's Heating & Cooling Website Screenshot"
          loading="lazy"
        />
        <div className="anoun-work-card-content__container">
          <h4>McFate's Heating &amp; Cooling</h4>
          <p>Branding, Web Design</p>
        </div>
      </Card>
    </a>
    {/* Smart Move Card */}
    <a
      href="https://smartmoveidaho.com"
      target="_blank"
      rel="noopener noreferrer"
      className="anoun-work-link"
    >
      <Card className="mdc-card--clickable">
        <img
          src={smartmoveidaho}
          className="mdc-card__media anoun-work-responsive__img"
          alt="Smart Move Idaho Website Screenshot"
          loading="lazy"
        />
        <div className="anoun-work-card-content__container">
          <h4>Smart Move Idaho</h4>
          <p>Branding, Web Design</p>
        </div>
      </Card>
    </a>
    {/* Moto One Card */}
    <a href="https://motoonektm.com" target="_blank" rel="noopener noreferrer">
      <Card className="mdc-card--clickable">
        <img
          src={motooneImage}
          className="mdc-card__media anoun-work-responsive__img"
          alt="Moto One KTM Website Screenshot"
          loading="lazy"
        />
        <div className="anoun-work-card-content__container">
          <h4>Moto One KTM</h4>
          <p>Web Design</p>
        </div>
      </Card>
    </a>
    {/* Proline Suspension Card */}
    <a href="https://prolinesuspension.com" target="_blank" rel="noopener noreferrer">
      <Card className="mdc-card--clickable">
        <img
          src={prolinesuspension}
          className="mdc-card__media anoun-work-responsive__img"
          alt="Proline Suspension Website Screenshot"
          loading="lazy"
        />
        <div className="anoun-work-card-content__container">
          <h4>Proline Suspension</h4>
          <p>Web Design, Branding</p>
        </div>
      </Card>
    </a>
  </div>
)

export default WorkCardGrid
