import Link from "next/link";
import { AuthTemplate } from "../../components";
import { Input, TextBody, TextHeading, Button } from "../../design";

const SignUp = () => {
  return (
    <AuthTemplate>
      <TextHeading variant="l" className="text-white">
        Sign Up
      </TextHeading>
      <div className="mt-8 flex flex-col gap-3">
        <Input placeholder="Email address" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Repeat password" type="password" />
      </div>
      <Button className="mt-10">Create an account</Button>
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

export default SignUp;
