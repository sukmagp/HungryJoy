import React, { useContext } from "react";
import { Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
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
      .min(5, "Minimal panjang password harus 5 karakter")
      .required("Password Harus diisi"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password konfirmasi tidak sama"),
  })
  .required();

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [status, setStatus] = React.useState(statusList.idle);
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    setStatus(statusList.process);
    const { data } = await signUp(formData);
    if (data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach((field) =>
        setError(field, {
          type: "server",
          message: data.fields[field]?.properties?.message,
        })
      );
      setStatus(statusList.error);
      return;
    }
    setStatus(statusList.success);
  };

  // const [fname, setFullname] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [confirmpass, setConfirmpass] = useState();

  // const register = async() => {
  //   let result = await signUp({fname, email, password, confirmpass})
  //   console.log(result);
  //   localStorage.setItem('token', result.data.token);
  //   if (result.data.token){
  //     navigate('/Auth')
  //   }else{
  //     alert(result.data.message)
  //   }

  // }

  return (
    <BoxContainer>
      <FormContainer>
        {status === statusList.success ? (
          <Alert variant="success">
            Registrasi berhasil silahkan{" "}
            <Alert.Link onClick={() => navigate.push('/Auth')}>Login</Alert.Link> dengan email dan password anda
          </Alert>
        ) : null}
        <Input
          onSubmit={handleSubmit(onSubmit)}
          type="text"
          placeholder="Full Name"
          isInvalid={errors.email}
          {...register("full_name")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.full_name?.message}
        </Form.Control.Feedback>

        <Input
          onSubmit={handleSubmit(onSubmit)}
          type="email"
          placeholder="Email"
          isInvalid={errors.email}
          {...register("email")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>

        <Input
          onSubmit={handleSubmit(onSubmit)}
          type="password"
          placeholder="Password"
          isInvalid={errors.password}
          {...register("password")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>

        <Input
          onSubmit={handleSubmit(onSubmit)}
          type="password"
          placeholder="Comfirm Your Password"
          isInvalid={errors.password_confirmation}
          {...register("password_confirmation")}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password_confirmation?.message}
        </Form.Control.Feedback>
      </FormContainer>

      <Marginer direction="vertical" margin={10} />
      <SubmitButton 
      type="submit"
      disabled={status === statusList.process}>
        { status === statusList.process ? 'Memproses...' : 'Register'}
      </SubmitButton>
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
