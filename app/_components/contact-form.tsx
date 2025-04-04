import SubmitButton from "./submit-button";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <label className="form__label" htmlFor="name">
        Name
      </label>
      <input
        className="form__input"
        id="name"
        type="text"
        placeholder="Enter your name..."
      />
      <label className="form__label" htmlFor="email">
        Email
      </label>
      <input
        className="form__input"
        id="email"
        type="email"
        placeholder="Enter your email..."
      />
      <label className="form__label" htmlFor="message">
        Message
      </label>
      <textarea
        className="form__input"
        id="message"
        placeholder="Enter your message..."
        rows={8}
      />
      <SubmitButton>Send Message</SubmitButton>
    </form>
  );
}
