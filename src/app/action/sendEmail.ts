"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utlis";
import ContactFormEmail from "../email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("Running on the server");

  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  //server-side validation
  if (!validateString(senderEmail, 200)) {
    return {
      error: "Invalid Sender Email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "naissacharles.dev@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      //text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
      //react: <ContactFormEmail message={message} senderEmail={senderEmail}/>
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  }
};
