import Link from "next/link";
import { Input, TextBody, TextHeading } from "../design";
import { Button } from "../design/button";

const Home = () => (
  <div className="flex h-screen w-full items-center justify-center gap-10 bg-blue-dark">
    <div className="flex max-w-lg flex-1 flex-col items-center justify-center gap-4 rounded-xl bg-blue-medium px-9 py-12">
      <div className="aspect-1 w-20 rounded-full bg-red" />
      <TextHeading className="mt-3 text-center text-white" variant="l">
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Incidunt sint non fugit rem odio, repellat et
        blanditiis porro natus asperiores!
      </TextHeading>
      <TextBody className="text-heading-l text-white" variant="m" as="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
        asperiores quaerat blanditiis eveniet possimus dolorem quas odio,
        mollitia veniam iure excepturi reprehenderit sint fuga! Facilis autem
        aperiam at, vitae recusandae similique.
      </TextBody>
      <Input />
    </div>
  </div>
);

export default Home;
