import Link from "next/link";
import { Input, TextBody, TextHeading } from "../design";
import { Button } from "../design/button";
import Image from "next/image";

const Home = () => (
  <div className="flex h-screen w-full items-center justify-center gap-10 bg-blue-dark">
    <div className="flex max-w-lg flex-1 flex-col items-center justify-center gap-4 rounded-xl bg-blue-medium px-9 py-12">
      <div className="flex aspect-1 w-20 items-center justify-center rounded-full bg-blue-light">
        <Image
          src="/assets/icon-bookmark-empty.svg"
          alt="icon"
          width={30}
          height={30}
        />
      </div>
      <TextHeading className="text-white" variant="m">
        Lorem ipsum dolor sit amet
      </TextHeading>
      <TextBody variant="s" as="p" className="text-clip text-center text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam facere
        illo, ullam iure nostrum unde, repellendus temporibus quod, incidunt
        optio consectetur enim perferendis assumenda itaque eum in ducimus
        tempora?
      </TextBody>
      <Input placeholder="Email address" type="email" />
      <Input placeholder="Password" type="password" />
      <Button className="mt-6">Lorem ipsum dolor sit amet.</Button>
    </div>
  </div>
);

export default Home;
