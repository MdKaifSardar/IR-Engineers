import React, { useState } from "react";
import { formFields } from "../../data/Text.ts/FormText";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNo: "",
    specification: "",
    workDescription: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
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
      className="z-10 w-full max-w-lg mx-auto bg-white space-y-4 rounded-3xl"
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
