import React from 'react'
import "./features.css"
import { featureItem } from '../../utils/Data'

const Features = () => {
  return (
    <section className="features section">
      <div className="features-container container grid">
        {featureItem.map(({ id, icon, title, description }) => {
          return (
            <article key={id} className="features-item">
              <span className="features-icon">
                <p className="feature-icon">{icon}</p>
              </span>
              <p className="features-no">{id}</p>
              <h3 className="features-title">{title}</h3>
              <p className="features-description">{description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Features