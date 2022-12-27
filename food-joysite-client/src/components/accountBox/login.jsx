import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  BoldLink,
  BoxContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { signIn } from "../../app/api/auth";
import { userLogin } from "../../app/features/Auth/actions";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email harus valid")
      .required("Email harus diisi"),
    password: yup
      .string()
      .min(4, "Password minimal 4 karakter")
      .required("Password harus diisi"),
  })
  .required();

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.password) {
    errors.password = 'Required';
  }
  console.log(errors);
  return errors;
};

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);

  const {
    // register,
    // handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const [status, setStatus] = React.useState(statusList.idle);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      login(values);
    },
  });

  const login = async (values) => {
    
    let result = await signIn(values);
    console.log(result);
    localStorage.setItem("token", result.data.token);
    dispatch(userLogin({user: result.data.user, token: result.data.token}));
    if (result.data.token) {
      navigate("/");
    } else {
      alert(result.data.message);
    }
  };

  return (
        <BoxContainer>
          <Form onSubmit={formik.handleSubmit}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

          <Marginer direction="vertical" margin={10} />
          <MutedLink href="#">Forget your password?</MutedLink>
          <Marginer direction="vertical" margin="1.6em" />
          <SubmitButton type="submit">
            Sign In
          </SubmitButton>
          </Form>

          <Marginer direction="vertical" margin="1em" />
          <MutedLink href="#">
            Don't have an account?{" "}
            <BoldLink href="#" onClick={switchToSignup}>
              Sign Up
            </BoldLink>
          </MutedLink>
        </BoxContainer>
  );
}
