import Link from "next/link";
import { AuthTemplate, LoginForm } from "../../components";
import { TextBody } from "../../design";

const Login = () => {
  return (
    <AuthTemplate heading="Login">
      <LoginForm className="mt-8" />
      <div className="mt-7 flex flex-row items-center justify-center gap-2">
        <TextBody variant="m" className="text-white">
          Don&apos;t have an account?
        </TextBody>
        <TextBody variant="m" className="text-red" as={Link} href="/sign-up">
          Sign Up
        </TextBody>
      </div>
    </AuthTemplate>
  );
};

export default Login;
