import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { formFields } from "../../data/Text/FormText";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    specification: "",
    workDescription: "",
    address: "",
  });

  const [errors, setErrors] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      setErrors(true);
      return;
    }

    setErrors(false);

    // Sending the form data using EmailJS
    emailjs
      .send(
        "service_9xz291i",
        "template_xdpdtbt",
        { ...formData },
        "oA29HjwIHXbhy5WeN"
      )
      .then(
        (response) => {
          console.log(
            "Email successfully sent!",
            response.status,
            response.text
          );
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            contactNo: "",
            specification: "",
            workDescription: "",
            address: "",
          });
        },
        (error) => {
          console.error("Failed to send email.", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="z-[0] w-full max-w-lg mx-auto bg-white space-y-4 rounded-3xl"
    >
      <div className="border-[1px] border-[#003F63] p-5 rounded-3xl">
        {formFields.map((field, index) => (
          <div key={index} className="flex flex-col">
            {field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData] || ""}
                onChange={handleChange}
                className="placeholder:text-xl border-b-[1px] border-black text-center placeholder-black focus:outline-none focus:ring-0 p-3 focus:ring-blue-500"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                value={formData[field.id as keyof typeof formData] || ""}
                onChange={handleChange}
                className="placeholder:text-xl border-b-[1px] border-black text-center placeholder-black focus:outline-none focus:ring-0 p-3 focus:ring-blue-500"
              />
            )}
            {/* Display error message */}
            {errors && !formData[field.id as keyof typeof formData].trim() && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-fits flex flex-col justify-center items-center">
        <button
          type="submit"
          className="px-6 w-fit bg-[#003F63] text-xl font-semibold text-white py-2 rounded-sm hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
