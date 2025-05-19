import './Footer.css'

export const Footer = () => {
    return (
         
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-contact-item">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <strong>Visit Us</strong>
            <p>New Orlean, USA</p>
          </div>
        </div>
        <div className="footer-contact-item">
          <i className="fa-solid fa-phone"></i>
          <div>
            <strong>Call Us</strong>
            <p>+12 958 648 597</p>
          </div>
        </div>
        <div className="footer-contact-item">
          <i className="fa-solid fa-clock"></i>
          <div>
            <strong>Working Hours</strong>
            <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
          </div>
        </div>
        <div className="footer-contact-item">
          <i className="fa-solid fa-envelope"></i>
          <div>
            <strong>Email Us</strong>
            <p>Shopcart@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-about">
          <h2><span>SHOP</span>CART</h2>
          <p>Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.</p>
          <div className="footer-socials">
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-slack"></i>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Categories</h3>
          <ul>
            <li>Mobiles</li>
            <li>Appliances</li>
            <li>Smartphones</li>
            <li>Air Conditioners</li>
            <li>Washing Machine</li>
            <li>Kitchen Appliances</li>
            <li>Gadget Accessories</li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter to receive updates and exclusive offers.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <strong>SHOPCART</strong>. All rights reserved.</p>
      </div>
    </footer>


    )
}