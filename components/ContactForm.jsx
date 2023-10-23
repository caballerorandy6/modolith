import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return <form onSubmit={handleSubmit}>ContactForm</form>;
};

export default ContactForm;
