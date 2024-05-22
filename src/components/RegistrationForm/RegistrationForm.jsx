import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from '../../redux/auth/operations';

import css from './RagistrationForm.module.css';
import { Link } from "react-router-dom";

export default function RagistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        .unwrap()
        .then((originalPromiseResult) => {
          toast.success(`${originalPromiseResult.user.name} welcome!`);
        })
        .catch(() => {
          toast.error("Sorry, something's wrong, leads data again!!!");
        });
      actions.resetForm();
    };

    return (
      <div className={css.container}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          onSubmit={handleSubmit}
        >
          <Form className={css.form} autoComplete="off">
            <label className={css.label}>
              <p className={css.text}>
                Name<span className={css.labelSpan}> *</span>
              </p>
              <Field type="text" name="name" className={css.input}
               title="The name must contain only letters"
               placeholder="Enter name ..."
               required/>
            </label>
            <label className={css.label}>
              <p className={css.text}>
                Email<span className={css.labelSpan}> *</span>
              </p>
              <Field type="email" name="email" className={css.input} 
              title="An email address can have letters, numbers, and an apostrophe, followed by '@' and a domain name, like john@example."
              placeholder="Enter email ..."
              required/>
            </label>
            <label className={css.label}>
              <p className={css.text}>
                Password<span className={css.labelSpan}> *</span>
              </p>
              <Field type="password" name="password" className={css.input} 
              title="The password needs to have at least one number, one uppercase letter, one lowercase letter, and should be at least 8 characters long. For instance, Password123, SecretPassword."
              placeholder="Enter password ..."
              required/>
            </label>
            <button type="submit" className={css.btnRegister}>Register</button>
            <Link to="/login" className={css.textLink}>Have acount? LogIn</Link>
          </Form>
        </Formik>
      </div>

    );
}
