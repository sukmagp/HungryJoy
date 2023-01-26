import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useFormik } from "formik";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { signUp } from "../../app/api/auth";

const schema = yup
  .object({
    full_name: yup.string().required("Nama Lengkap harus diisi"),
    email: yup.string().email().required("Email harus valid"),
    password: yup
      .string()
      .min(5, "Minimal panjang password harus 8 karakter")
      .required("Password Harus diisi"),
  })
  .required();

// const statusList = {
//   idle: "idle",
//   process: "process",
//   success: "success",
//   error: "error",
// };

const validate = (values) => {
  const errors = {};

  if (!values.full_name) {
    errors.full_name = "Full name is required";
  } else if (values.full_name.length < 8) {
    errors.full_name = "Must be 8 characters or more";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 4) {
    errors.password = "Must be 4 characters or more";
  }

  // console.log(errors);
  return errors;
};

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);

  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const {
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const [status, setStatus] = React.useState(statusList.idle);
  // const navigate = useNavigate();

  const onSubmit = async (value) => {
    // setStatus(statusList.process);
    const { data } = await signUp(value);
    console.log(data);
    if (data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach((field) =>
        setError(field, {
          type: "server",
          message: data.fields[field]?.properties?.message,
        })
      );
      // setStatus(statusList.error);
      return;
    }else {
      alert("Your account success to register :)");
    }
    // setStatus(statusList.success);
  };

  return (
    <BoxContainer>
      <Form onSubmit={formik.handleSubmit}>
        <Input
          id="full_name"
          name="full_name"
          type="text"
          placeholder="Full Name"
          isInvalid={errors.full_name}
          onChange={formik.handleChange}
          value={formik.values.full_name}
          // {...register("full_name")}
        />
        {formik.errors.full_name ? <div>{formik.errors.full_name}</div> : null}

        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          isInvalid={errors.email}
          onChange={formik.handleChange}
          value={formik.values.email}
          // {...register("email")}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          isInvalid={errors.password}
          onChange={formik.handleChange}
          value={formik.values.password}
          // {...register("password")}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">
        Register
      </SubmitButton>
      </Form>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign in
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}

//how to create register in reactjs?
