// src/components/contactInfo.js
export function renderContactInfo() {
  return `
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
              <!-- Email icon -->
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M16 12l-4 4m0 0l-4-4m4 4V8m-7 4a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </div>
            <div class="item">
              <h3 class="item-title">Chart to us</h3>
              <p class="item-text">Our friendly team is here to help.</p>
              <p class="item-text"><a href="#" class="link__text">hi@ourcompany.com</a></p>
            </div>
          </div>
          <div class="row">
              <div class="contact-svg">
                <!-- Email icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M16 12l-4 4m0 0l-4-4m4 4V8m-7 4a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
              </div>
              <div class="item">
                <h3 class="item-title">Office</h3>
                <p class="item-text">Come say hello at our office HQ.</p>
                <address class="item-text">
                  121 Rock Street, 21 Avenue<br/>
                  New York, NY 92103-9000
                </address>
              </div>
          </div>
          <div class="row">
              <div class="contact-svg">
                <!-- Phone icon -->
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 5a2 2 0 012-2h1.28a1 1 0 01.948.684l1.356 4.068a1 1 0 01-.272 1.03l-1.8 1.8a16.001 16.001 0 006.586 6.586l1.8-1.8a1 1 0 011.03-.272l4.068 1.356a1 1 0 01.684.948V19a2 2 0 01-2 2h-1c-8.837 0-16-7.163-16-16V5z" />
                </svg>
              </div>
              <div class="item">
                <h3 class="item-title">Phone</h3>
                <p class="item-text">Mon-Fri from 8am to 5am</p>
                <p class="item-text"><a href="tel:+1555000000" class="link__text">+1 (555) 000-000</a></p>
              </div>
          </div>
        </div>
      </div>
    </section>
  `;
}