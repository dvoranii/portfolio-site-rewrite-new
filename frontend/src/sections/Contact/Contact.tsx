import * as S from "./Contact.styles";

import { useState, useRef, useEffect } from "react";
import { useRecaptcha } from "../../Hooks/useReCaptcha";
import { useCsrfToken } from "../../Hooks/useCSRF";

import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Checkmark from "./Checkmark/Checkmark";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const Contact = () => {
  const csrfToken = useCsrfToken();
  const recaptchaToken = useRecaptcha(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      console.log("Form validation failed", errors);
      return;
    }

    if (!recaptchaToken) {
      console.log("reCAPTCHA token not ready");
      alert("Please wait for reCAPTCHA to load and try again.");
      return;
    }

    setIsLoading(true);

    const sanitizedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify({
          ...sanitizedData,
          recaptchaToken,
        }),
        credentials: "include",
        mode: "cors",
      });

      const result = await response.json();

      if (result.status === "success") {
        console.log("Form submission successful");
        setIsSuccess(true);
      } else {
        console.log("Form submission failed:", result);
        // You can add error handling here
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.log("An error occurred during form submission:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
      console.log("Loading state set to false");
    }
  };

  return (
    <S.ContactOuter id="contact">
      <S.ContactInner>
        <S.ContactTitle>Let&apos;s Connect!</S.ContactTitle>
        <S.ContactDescription>
          Want to inquire about a project or employment opportunity?
          <br />
          Fill out the form below and I will return your message shortly.
        </S.ContactDescription>

        <S.ContactForm onSubmit={handleSubmit}>
          <S.InputRow>
            <S.InputWrapper>
              <S.NameInput
                ref={nameInputRef}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && (
                <S.ErrorMessage>Please enter a valid name</S.ErrorMessage>
              )}
            </S.InputWrapper>

            <S.InputWrapper>
              <S.EmailInput
                ref={emailInputRef}
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && (
                <S.ErrorMessage>
                  Please enter a valid email (<i>123@example.com</i>)
                </S.ErrorMessage>
              )}
            </S.InputWrapper>
          </S.InputRow>

          <S.MessageTextarea
            name="message"
            placeholder="Message (Optional)"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          />

          <S.ButtonRow>
            {!isLoading && !isSuccess && (
              <S.SendButton type="submit" disabled={!recaptchaToken}>
                Send
              </S.SendButton>
            )}
            {isLoading && (
              <S.LoadingWrapper>
                <LoadingSpinner />
              </S.LoadingWrapper>
            )}
            {!isLoading && isSuccess && (
              <S.CheckWrapper>
                <Checkmark />
                <S.MessageSent>Sent!</S.MessageSent>
              </S.CheckWrapper>
            )}

            <S.OutlookText>
              Have Outlook?
              <br />
              Simply click{" "}
              <S.OutlookLink href="mailto:ildidvorani@gmail.com">
                here
              </S.OutlookLink>
            </S.OutlookText>
          </S.ButtonRow>
        </S.ContactForm>
      </S.ContactInner>
    </S.ContactOuter>
  );
};

export default Contact;
