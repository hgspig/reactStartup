import React from 'react';
import "./about.css";

export function About() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);

    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);




  return (
    <main className='container-fluid removescrolling-sm removescrolling'>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="row col-xl-10">
            <div
              className="shadow-lg card second-color"
            >
              <div className="row g-0">
                <div className="d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <span className="h1 fw-bold mb-0">Our mission</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3">
                      Our mission is to help you accomplish all you are setting
                      out to do. We want to help you be more productive and get
                      more done in less time. We want to help you be more
                      organized and have a better life.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-xl-10">
                <div className="card-body p-4 p-lg-3 text-black row g-0 d-flex align-items-center shadow-lg card second-color">
                            <div className='quote-box'>
                              <p className='quote'>{quote}</p>
                              <p className='author'>{quoteAuthor}</p>
                            </div>
                  </div>
            </div>
        </div>
      </div>
    </main>
  );
}