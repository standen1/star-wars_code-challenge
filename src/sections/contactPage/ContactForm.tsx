import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useForm } from "react-hook-form";
import { API_URL } from "@/constants";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phoneNumber: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
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
  subject: yup.string().required("Subject is required"),
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

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);

    try {
      const { name, email, subject, message, phoneNumber } = data;

      const formData = new FormData();
      formData.set("your-subject", subject);
      formData.set("your-name", name);
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

  return <section id="contact-form"></section>;
};

export default ContactInner;
