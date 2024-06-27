import SectionHeading from "./section-heading";
import { sendEmail } from "../action/sendEmail";
import { useRef } from "react";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

const ContactMe = () => {
  //to clear the input fields after submitting
  const ref = useRef<HTMLFormElement>(null);

  return (
    //the width is fixed at 38rem but onces it gets smaller, the section will fill the whole screen
    <section
      className="mb-20 sm:mb-28 w-[min(100%,48rem)] px-10 scroll-mt-28"
      id="contact"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 text-center">
        Feel free to contact me on <a className="underline" href="https://www.linkedin.com/in/naissa-charles/">LinkedIn</a>{" "} or directly using this form. I will get
        back to you as soon as possible.
      </p>

      <form
        ref={ref}
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
          ref.current?.reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          name="senderEmail"
          type="email"
          required
          maxLength={200}
          placeholder="Enter Your Email"
        ></input>
        <textarea
          className="h-52 p-4 my-3 rounded-lg border border-black/10"
          name="message"
          required
          maxLength={5000}
          placeholder="Enter Your Message"
        />
        <SubmitBtn />
      </form>
    </section>
  );
};

export default ContactMe;
