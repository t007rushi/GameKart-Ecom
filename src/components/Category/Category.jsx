import React from 'react'

const Category = () => {
  return (
    <div className="flex-row middle-bar center-it">
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> sports_esports </span>
            <h3>GAMES</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> kitchen </span>
            <h3>CONSOLE</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> headphones </span>
            <h3>ACCESORIES</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> person </span>
            <h3>JOIN IN</h3>
          </div>
          <div className="flex-col center-it">
            <span className="material-icons expl-icon"> play_arrow </span>
            <h3>PLAY</h3>
          </div>
        </div>
  )
}

export default Category;