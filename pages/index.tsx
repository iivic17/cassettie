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
    <div className="flex max-w-lg flex-1 flex-col items-center justify-center gap-4 rounded-xl bg-blue-medium px-9 py-12">
      <div className="aspect-1 w-20 rounded-full bg-blue-light" />
      <TextHeading className="mt-3 text-center text-white" variant="l">
        Lorem ipsum dolor sit amet.
      </TextHeading>
      <TextBody className="text-white" variant="s"></TextBody>
      <TextBody
        variant="m"
        className="max-w-md text-center text-heading-l font-light leading-6 text-white"
        as={Link}
        href=""
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, veniam
        eius laborum quas accusantium recusandae nulla sed aperiam fugiat qui
        commodi. Deleniti, dolorem. Consectetur in quisquam enim at labore fuga
        minima beatae laudantium magni sint eveniet sed laborum nostrum
        exercitationem, consequatur impedit commodi voluptatum dolorum voluptas
        tempora saepe ipsum? Accusantium dicta dolorum nobis officiis commodi
        voluptate ratione ipsum illo distinctio.
      </TextBody>
      <Button>Text</Button>
    </div>
    <div className="flex max-w-lg flex-1 flex-col items-center justify-center gap-4 rounded-xl bg-blue-medium px-9 py-12">
      <div className="aspect-1 w-20 rounded-full bg-red" />
      <TextHeading className="mt-3 text-center text-white" variant="xs">
        Lorem ipsum dolor sit amet.
      </TextHeading>
      <TextBody
        variant="s"
        className="max-w-md text-center text-body-s font-light leading-6 text-white"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, veniam
        eius laborum quas accusantium recusandae nulla sed aperiam fugiat qui
        commodi. Deleniti, dolorem. Consectetur in quisquam enim at labore fuga
        minima beatae laudantium magni sint eveniet sed laborum nostrum
        exercitationem, consequatur impedit commodi voluptatum dolorum voluptas
        tempora saepe ipsum? Accusantium dicta dolorum nobis officiis commodi
        voluptate ratione ipsum illo distinctio.
      </TextBody>
    </div>
  </div>
);

export default Home;
