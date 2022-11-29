import Link from "next/link";
import { AuthTemplate } from "../components";
import { TextBody, TextHeading } from "../design";

const Home = () => (
  <AuthTemplate heading="Home">
    <TextHeading variant="s" className="text-white">
      Mock page
    </TextHeading>
    <br />
    <div>
      <TextBody variant="s" className="text-white">
        Go to
      </TextBody>
      <TextBody
        variant="s"
        as={Link}
        href="/login"
        className="ml-1 cursor-pointer text-red"
      >
        login
      </TextBody>
    </div>
    <br />
    <div>
      <TextBody variant="s" className="text-white">
        Go to
      </TextBody>
      <TextBody
        variant="s"
        as={Link}
        href="/sign-up"
        className="ml-1 cursor-pointer text-red"
      >
        sign up
      </TextBody>
    </div>
  </AuthTemplate>
);

export default Home;
