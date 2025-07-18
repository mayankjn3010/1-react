
import "../styles/contact.scss"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Abc" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="email@gmail.com" />
          </div>

          <div>
            <label>Message</label>
            <input type="text" required placeholder="Tell us about your query..." />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
};
export default Contact;
