import styled from 'styled-components';

export default function Home() {
  const Weathercard = styled.a`
    display:block;
    background-image: url('weather_snippet.PNG');
  `

  return (
    <div>
      <div className="homecontainer">
          <div className="homecard">
            <p className="text">Weather</p>
          </div>
        <div className="homecard">
          <p className="text">Calculator</p>
        </div>
      </div>

      <div className="homecontainer">
        <div className="homecard">
          <p className="text">Discover</p>
        </div>
      </div>
    </div>
  )
}
