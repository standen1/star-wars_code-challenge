import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { API_URL } from "@/constants";
import styles from "./ContactForm.module.css";
import { useFormik } from "formik";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  phoneNumber: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .test(
      "phone-number-length",
      "Phone number should be 10 digits",
      (value) => {
        console.log(value);
        return value?.replace(/\D/g, "").length === 10;
      }
    ),
  message: yup.string().required("Message is required"),
});

const ContactInner = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, SetShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const { firstName, email, lastName, message, phoneNumber } = data;

      const formData = new FormData();
      formData.set("your-last-name", lastName);
      formData.set("your-first-name", firstName);
      formData.set("your-email", email);
      formData.set("phoneNumber", phoneNumber);
      formData.append("your-message", message);
      const response = await axios.post(API_URL.contactForm, formData);

      if (response.status === 200) {
        showMessage();
        reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const showMessage = () => {
    SetShowSuccess(true);

    setTimeout(() => {
      SetShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact-form" className="container pt-14">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Get In Touch
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className={styles.ContactForm} onSubmit={formik.handleSubmit} >
            <div className={styles.formFlex}>
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium leading-6 text-gray-900">
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="first_name"
                    name="first_name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="block text-sm font-medium leading-6 text-rose-500">
                  {formik.errors.firstName ? formik.errors.firstName : null}
                </p>
              </div>
            
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="block text-sm font-medium leading-6 text-rose-500">
                  {formik.errors.lastName ? formik.errors.lastName : null}
                </p>
              </div>
            </div>

            <div className={styles.formFlex}>
            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  onChange={formik.handleChange}
                  value={formik.values.phoneNumber}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="block text-sm font-medium leading-6 text-rose-500">
                {formik.errors.phoneNumber ? formik.errors.phoneNumber : null}
              </p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="w-full">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="block text-sm font-medium leading-6 text-rose-500">
                {formik.errors.email ? formik.errors.email : null}
              </p>
            </div>
          </div>
          <div className={styles.formFullWidth}>
            <div>
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="block text-sm font-medium leading-6 text-rose-500">
                {formik.errors.message ? formik.errors.message : null}
              </p>
            </div>
          </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            
          </p>
        </div>
      </div>
    </section>
  )};

export default ContactInner;
