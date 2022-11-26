import Link from "next/link";
import { AuthTemplate } from "../../components";
import { Input, TextBody, TextHeading, Button } from "../../design";

const Login = () => {
  return (
    <AuthTemplate>
      <TextHeading variant="l" className="text-white">
        Login
      </TextHeading>
      <div className="mt-8 flex flex-col gap-3">
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Password" type="password" />
      </div>
      <Button className="mt-10">Login to your account</Button>
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
