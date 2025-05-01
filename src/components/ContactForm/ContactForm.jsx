import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const initialValues = {
  contactName: "",
  phone: "",
};
const ContactFormScheme = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd({ id: nanoid(), name: values.contactName, number: values.phone });
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormScheme}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="contactName"></Field>
          <ErrorMessage name="contactName" component="span" />
        </div>
        <div>
          <label>Number</label>
          <Field type="tel" name="phone"></Field>
          <ErrorMessage name="phone" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
