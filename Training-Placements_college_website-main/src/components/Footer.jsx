import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
  return (
    
    <footer className="text-center text-lg-start bg-light text-muted">
     
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
       
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
       
        <div>
          <a href="" className="me-4 text-reset">
            <FacebookIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <TwitterIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <InstagramIcon/>
          </a>
          <a href="" className="me-4 text-reset">
            <WhatsAppIcon/>
          </a>
         
        </div>
       
      </section>
     
      <section className="">
        <div className="container text-center text-md-start mt-5">
         
          <div className="row mt-3">
          
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Travel Safety
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique labore quos saepe ab aliquid dolores hic, dolorum sunt laborum neque magni. Soluta ratione velit voluptates? Maiores, eius veniam nesciunt nulla quia similique.
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">
                Service
              </h6>
              <p>
                <a href="#!" className="text-reset">complain</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Hotels</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Car</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Bus</a>
              </p>
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">Report us</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Imergency Contact</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Orders</a>
              </p>
              <p>
                <a href="#!" className="text-reset">Help</a>
              </p>
            </div>
          
    
          
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Maharshtra  Nanded  Inc</p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@example.com
              </p>
              <p><i className="fas fa-phone me-3"></i> + 91 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
            </div>
            
          </div>
          
        </div>
      </section>
      
    
      
      <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="">TravelSafety.in</a>
      </div>
      
    </footer>
    
  )
}

export default Footer
