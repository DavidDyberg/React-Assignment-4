import { useEffect, useState } from 'react'
import './App.css'
import starwars from './assets/star wars.webp'


function App() {
  const [id, setId] = useState(1);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${id}/`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);
    console.log(data)
  
  return (
    <div className="App">
      <div className='mobile-container'>
          <p className='planeta'>A LONG TIME AGO.</p>
          <div className='icon'>&#9776;</div>
          <div className='title-container'>
            <p className='top-title'>{data.name}</p>
            <a href="https://www.figma.com/community/file/1062621632286720093" target="_blank">  
              <p className='bottom-title'>CLICK HERE TO VISIT THE CREATOR OF THE DESIGN</p> 
            </a>
          </div>

          <div className='image-container'>
            <img src= {starwars} alt="" />
          </div>

          <div className='stats-container'>
              <div className='stats-left'>
                <h4 className='left-h4-top'>Height</h4>
                <p className='left-p-top'>{data.height} cm</p>

                <h4 className='left-h4-bottom'>Born</h4>
                <p className='left-p-bottom'>{data.birth_year}</p>
              </div>


              <div className='stats-right'>
              <h4 className='right-h4-top'>Weight</h4>
                <p className='right-p-top'>{data.mass} kg</p>

                <h4 className='right-h4-bottom'>Gender</h4>
                <p className='right-p-bottom'>{data.gender}</p>
              </div>
          </div>

          <div className='button-container'>
            <button onClick={() => setId(() => Math.floor(Math.random() * 83))}>Generate caracter</button>
          </div>

      </div> 
    </div>
  )
}
export default App