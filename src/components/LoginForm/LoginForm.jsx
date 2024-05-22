import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from './LoginForm.module.css';

export default function LoginForm() {
    const dispatch = useDispatch();
  
    const handleSubmit = (values, actions) => {
      dispatch(logIn(values))
        .unwrap()
        .then(() => {
          toast.success("Welcome");
        })
        .catch(() => {
          toast.error("Incorrect login or password. Try again!");
        });
      actions.resetForm();
    };
  
    return (
        <div className={css.containerLogIn}>
            <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
                <Form className={css.formLogIn} autoComplete="off">
                    <label className={css.labelLogIn}>
                        <p className={css.text}>
                            Email<span className={css.labelSpan}> *</span>
                        </p>
                    <Field className={css.inputLogIn} type="email" 
                        name="email" 
                        placeholder="Enter email ..."  
                        required 
                    />
                    </label>
                    <label className={css.labelLogIn}>
                            <p className={css.text}>
                                Password<span className={css.labelSpan}> *</span>
                            </p>
                        <Field className={css.inputLogIn} type="password" 
                            name="password" 
                            placeholder="Enter password ..."
                            required
                        />
                    </label>
                    <button className={css.btnLogIn} type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
    );
  }