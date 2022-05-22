import Head from 'next/head'
import SearchBox from '../components/SearchBox'

export default function Weather() {
  return (
    <div>
      <div className="weatherhome">
        <div className="weathercontainer">
          <SearchBox></SearchBox>
        </div>
      </div>
    </div>
  )
}
