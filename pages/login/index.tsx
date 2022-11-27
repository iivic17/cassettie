import Link from "next/link";
import { AuthTemplate } from "../../components";
import { LoginForm } from "../../components/login-form";
import { TextBody, TextHeading } from "../../design";

const Login = () => {
  return (
    <AuthTemplate>
      <TextHeading variant="l" className="text-white">
        Login
      </TextHeading>
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
