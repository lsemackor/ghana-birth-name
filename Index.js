import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    fetch('/nameOfTheDay.js')
      .then(response => response.text())
      .then(scriptContent => {
        const script = document.createElement('script');
        script.text = scriptContent;
        document.body.appendChild(script);
      });
  }, [])

  return (
    <>
      <Head>
        <title>Ghana Birth Name Finder</title>
      </Head>
      <main>
        <h1>Get Your Ghanaian Name</h1>
        <div>
          <h2>Name of the Day</h2>
          <p>Male: <span id="male-name">Loading...</span></p>
          <p>Female: <span id="female-name">Loading...</span></p>
        </div>
      </main>
    </>
  )
}
