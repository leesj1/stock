import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <>
      <iframe
        title="Economic Calendar"
        src="https://sslecal2.investing.com?columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone,timeselector,filters&countries=110,43,17,42,5,178,32,12,26,36,4,72,10,14,48,35,37,6,122,41,22,11,25,39&calType=day&timeZone=88&lang=18"
        width={650}
        height={467}
        frameBorder={0}
        marginWidth={0}
        marginHeight={0}
      />
      <div
        className="poweredBy"
        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
      >
        <span style={{ fontSize: 11, color: "#333333", textDecoration: "none" }}>
          외환 포털{" "}
          <a
            href="https://kr.Investing.com/"
            rel="noreferrer"
            target="_blank"
            style={{ fontSize: 11, color: "#06529D", fontWeight: "bold" }}
            className="underline_link"
          >
            Investing.com 한국어
          </a>
          .
        </span>
      </div>
    </>
  );
}

export default App;
