// src/contact.js
import phoneImage from "./assets/images/phone.svg";

export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.className = "contact";

  contactDiv.innerHTML = `
        <div class="contact__content">

            <!-- Mail -->
          <section class="contact-us" id="mail">
            <div class="contact-background">
            <h2 class="section-title">Contact Us</h2>
            <form class="create-account" action="#">
              <div class="personal-data">
                <div class="col">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter a valid email address" required/>
                </div>
                <div class="col">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Enter your name" required
                         title="Please enter a valid name, example: Nic"/>
                </div>
              </div>
              <div class="message">
                <label for="message">Message</label>
              <textarea id="message" rows="6" placeholder="Enter you message"></textarea>
              </div>
              <button type="submit" value="Submit" class="btn btn-submit">Submit</button>
            </form>
            </div>
          </section>
          
            <!-- Info -->
          <section class="info">
            <div class="contact-background">
              <h2 class="section-title">Keep up to date with us</h2>
              <form class="create-account" action="#">
              <input type="email" required placeholder="Enter a valid email address"/>
              <button type="submit" value="Submit" class="btn btn-submit">Submit</button>
              </form>
            </div>
          </section>

            <!-- Our contact -->
          <section class="our-contact">
            <div class="section-content contact-background">

              <div class="title-container">
                <div id="discount">
                  <h3>40%</h3>
                  <h4>BUSINESS</h4>
                  <h4>LUNCH</h4>
                </div>
                <h2 class="section-title">Our Contact</h2>
              </div>

              <div class="items">
                <div class="row">
                  <div class="contact-svg">
                     
                  </div>
                  <div class="item">
                    <h3 class="item-title">Chart to us</h3>
                    <p class="item-text">Our friendly team is here to help.</p>
                    <p class="item-text"><a href="#">hi@ourcompany.com</a></p>
                  </div>
                </div>
                <div class="row">
                    <div class="contact-svg"></div>
                    <div class="item">
                      <h3 class="item-title">Office</h3>
                      <p class="item-text">Come say hello at our office HQ.</p>
                      <p class="item-text">121 Rock Street, 21 Avenue</p>
                      <p class="item-text">New York, NY 92103-9000</p>
                    </div>
                </div>
                <div class="row">
                    <div class="contact-svg"></div>
                    <div class="item">
                      <h3 class="item-title">Phone</h3>
                      <p class="item-text">Mon-Fri from 8am to 5am</p>
                      <p class="item-text">+1(555) 000-000</p>
                    </div>
                </div>
              </div>

            </div>
          </section>
        </div>
    `;
  content.appendChild(contactDiv);
}