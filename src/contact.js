// src/contact.js

export default function loadContact() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.className = "contact";

  contactDiv.innerHTML = `
        <div class="contact__content">

            <!-- Mail -->
          <section class="contact-us" id="mail">
            <h2 class="section-title">Contact Us</h2>
            <form action="">
              <div class="personal-data">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter a valid email address" required/>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required
                  title="Please enter a valid first name, example: Nic"/>
              </div>
              <label for="message">Message
              <textarea id="massage" placeholder="Enter you message"></textarea></label>
              <input type="submit" value="Submit" class="btn-sabmit"/>
            </form>
          </section>
          
            <!-- Info -->
          <section class="info">
            <h2 class="section-title">Keep up to date with us</h2>
            <input type="email" required placeholder="Enter a valid email address"/>
            <input type="submit" value="Submit" class="btn-sabmit" />
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
                  <div class="contact-svg"></div>
                  <div class="item">
                    <h3 class="item-title">Chart to us</h3>
                    <p class="item-text">Our friendly team is here to help.</p>
                    <p class="item-text"><a href="mail">hi@ourcompany.com</a></p>
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
            <div>
        </section>
        </div>
    `;
  content.appendChild(contactDiv);
}