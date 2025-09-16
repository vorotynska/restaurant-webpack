// src/contact.js
import {
  renderContactInfo
} from "./components/contactInfo.js";

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
              <textarea id="message" name="message" rows="6" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" class="btn btn-submit">Submit</button>
            </form>
            </div>
          </section>
        
          ${renderContactInfo()};
        </div>
    `;
  content.appendChild(contactDiv);
}