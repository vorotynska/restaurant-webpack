// src/contact.js

export default function loadContact() {
    const content = document.getElementById("content");
    const contactDiv = document.createElement("div");

    contactDiv.innerHTML = `
        <h1>Contacts</h1>
        <p>Telephone: 123-456-769</p>
        <p>Email: hell@restaurant.com</p>
    `;
    content.appendChild(contactDiv);
}