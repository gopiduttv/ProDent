import React from 'react'

const Footer = () => {
  return (
    
      <footer className="footer-part pb-7 pt-0" id="footerSection">
      <div className="row justify-content-center">
        <div className="col-12 d-xl-block">
          <div className="rounded-2">
          </div>
        </div>
      </div>
      <div className="container p-4 pb-0 pt-0">
        <div className="row mb-lg-5">
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-between align-items-start">
                <div>
                    <div className="d-flex align-items-center mb-3">
                        {/* <image src="dist/images/AEKA.png" alt="Company Logo"/> */}
                        <h6 className="fw-bolder mb-0 fs-9 ms-2">Aeka.</h6>
                    </div>
                    <p className="fs-3 fw-normal">300 Delaware Avenue Wilmington, Delaware 19801</p>
                </div>
                <div>
                    <p className="fs-7 pb-0 mb-0">
                        <a href="https://www.linkedin.com/company/aeka-tech/" target="_blank">
                          <i className="fi fi-brands-linkedin"></i>
                        </a> 
                        <a className="ms-3" href="mailto:contact@aeka.tech">
                          <i className="fi fi-sr-envelope"></i>
                        </a> 
                    </p>
                </div>                  
            </div>
        </div>
            <div className="col-lg-6 ">
              <form className="form-group">
                <div className="mb-3">
                    <label className="form-label">Name *</label>
                    <input type="text" className="form-control text-primary" id="joinWaitlistName"/>
                    <div id="joinWaitlistNameEmpty" className="invalid-feedback">
                      Required!
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email *</label>
                    <input type="text" className="form-control text-primary" id="joinWaitlistEmail"/>
                    <div id="joinWaitlistEmailInvalid" className="invalid-feedback">Invalid email!</div>
                    <div id="joinWaitlistEmailEmpty" className="invalid-feedback">Required!</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Company</label>
                    <input type="text" className="form-control text-primary" id="joinWaitlistCompany" name="company"/>
                </div>
                <div id="joinWaitlistSuccess" className="justify-content-center mb-3">
                  Congratulations! You have joined our waitlist.
                </div>
                <div id="joinWaitlistFailed" className="justify-content-center mb-3">
                  Looks like you are already in our waitlist.
                </div>
                <a className="btn btn-outline-primary px-5 btn-hover-shadow mb-3 mb-sm-0 fw-bolder fs-2">Join waitlist</a>
            </form>
            
            </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h6 className="fw-normal mb-0 fs-2">
                  © 2023 Aeka. All Rights Reserved.
                </h6>
              </div>
              <div className="d-flex fs-2">
                <a className="me-3">Terms</a>
                <a className="me-3">Privacy</a>
                <a className="me-0">Cookies</a>
              </div>
            </div>
          </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
