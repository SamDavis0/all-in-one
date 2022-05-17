import Head from 'next/head'
import SearchBox from '../components/SearchBox'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Weather</title>
      </Head>

      <div className="home">
        <div className="container">
          <SearchBox></SearchBox>
        </div>
      </div>
    </div>
  )
}
