import SubmitButton from "./submit-button";
import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../utils/constants";

type contactFormTypes = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: contactFormTypes) {
    console.log(data);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <label className="form__label" htmlFor="name">
        Name
      </label>
      <input
        className="form__input"
        id="name"
        type="text"
        {...register("name", { required: "Please enter your name" })}
        placeholder="Enter your name..."
      />
      <p className="form__error">{errors.name?.message}</p>
      <label className="form__label" htmlFor="email">
        Email
      </label>
      <input
        className="form__input"
        id="email"
        type="email"
        {...register("email", {
          required: "Please enter your email",
          pattern: {
            value: EMAIL_REGEX,
            message: "Please enter a valid email address",
          },
        })}
        placeholder="Enter your email..."
      />
      <p className="form__error">{errors.email?.message}</p>
      <label className="form__label" htmlFor="message">
        Message
      </label>
      <textarea
        className="form__input"
        id="message"
        {...register("message", { required: "Please include a message" })}
        placeholder="Enter your message..."
        rows={8}
      />
      <p className="form__error">{errors.message?.message}</p>
      <SubmitButton>Send Message</SubmitButton>
    </form>
  );
}
