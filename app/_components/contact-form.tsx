import SubmitButton from "./submit-button";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { EMAIL_REGEX } from "../utils/constants";

type contactFormTypes = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: contactFormTypes) {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    setIsLoading(true);

    try {
      // const res = await emailjs.sendForm(
      //   serviceID!,
      //   templateID!,
      //   form.current!,
      //   userID
      // );

      // if (res.status === 200) {
      //   console.log("message sent");
      //   //success toast/state
      //   reset();
      //   setIsLoading(false);
      // }

      // use for testing loading state/styles
      setTimeout(() => {
        console.log("delay for testing purposes");
        reset();
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      //fail toast
      alert(
        "Failed to send message. Please try again later or email me directly at a.marchment25@gmail.com"
      );
      setIsLoading(false);
    }
  }

  return (
    <form ref={form} className="contact-form" onSubmit={handleSubmit(onSubmit)}>
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
      <SubmitButton isLoading={isLoading}>Send Message</SubmitButton>
    </form>
  );
}
