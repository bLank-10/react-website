
import "./contact.css"

function Contact()  {

  return (
    <div class="FormSection">
      <h1>Contact Us</h1>
      <div class="formcarry-container">
      <form class="formcarry-form">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="fullName" required />

        <label for="email">Your Email Address</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Your Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>

        <button type="submit" onClick={() => alert("message send!")}>Send</button>
      </form>
    </div>
    </div>
  )
}

export default Contact;