import Link from "next/link";
import { AuthTemplate, SignUpForm } from "../../components";
import { TextBody } from "../../design";

const Login = () => {
  return (
    <AuthTemplate heading="Sign Up">
      <SignUpForm className="mt-8" />
      <div className="mt-7 flex flex-row items-center justify-center gap-2">
        <TextBody variant="m" className="text-white">
          Already have an account?
        </TextBody>
        <TextBody variant="m" className="text-red" as={Link} href="/login">
          Login
        </TextBody>
      </div>
    </AuthTemplate>
  );
};

export default Login;
