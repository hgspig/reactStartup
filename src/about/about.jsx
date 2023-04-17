import React from 'react';

export function About() {
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
            <div
              className="shadow-lg card second-color"
            >
              <div className="row g-0">
                <div className="d-flex align-items-center">
                  <div className="card-body p-4 p-lg-3 text-black">
                    <div id="quote" className="quote-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}