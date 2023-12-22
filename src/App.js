import React, { useState } from 'react'
import './App.css'
import AppItem from './Components/AppItem';
function App() {
  const [show, setshow] = useState(false);
  const ShowApps = () => {
    console.log("hello");
    if (show === true) {
      setshow(false);
    }
    else {
      setshow(true);
    }
  }
  return (
    <>
      <div className="upperbox">
        <a href="https://www.google.com/gmail/about/">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
        <button className='btn' onClick={ShowApps}>Google Apps</button>
        
        <a href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fnews.google.com%2Fhome%3Fhl%3Den-IN%26gl%3DIN%26ceid%3DIN%3Aen&ec=GAZAqgM&followup=https%3A%2F%2Fnews.google.com%2Fhome%3Fhl%3Den-IN%26gl%3DIN%26ceid%3DIN%3Aen&hl=en-IN&ifkv=ASKXGp2o07uybus-B4II-oRuXyNJmXbDSob-E9Auvo7mMkURiJEhtBlhMdyJN4BiTimYr4sj53yo&passive=1209600&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S134634389%3A1703240738126158&theme=glif">
        <button className='btn'>Sign in</button>
        </a>
      </div>
      <div className='container'>
      <div className='middlepart'>
        {
          (show) ? <><AppItem></AppItem></> : ""
        }
      </div>
      </div>

      <h1 className='heading'>Google</h1>
      <div className="searchbar">
        <input className='search-input' placeholder='search here...' type="text" />
      </div>
      <div className="box">
        <a href="https://www.google.com/">Google Search</a>
        <a href="https://doodles.google/">I'm felling Lucky</a>
      </div>
      <div className='footer'>
        <p>India</p>
        <div className='footer-items'>
          <a href="https://about.google/?utm_source=google-IN&utm_medium=referral&utm_campaign=hp-footer&fg=1">About</a>
          <a href="https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Advertising</a>
          <a href="https://www.google.com/intl/en_in/business/">Business</a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1">How search work</a>
        </div>
      </div>
    </>
  )
}

export default App
