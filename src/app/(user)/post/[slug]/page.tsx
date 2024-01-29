import { groq } from "next-sanity";
import { Post } from "../../../../../types";
import { client, urlFor } from "@/lib/createClient";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";
interface Props {
  params: {
    slug: string;
  };
}
export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`[_type == 'post']{
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};
const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
  } `;

  const post: Post = await client.fetch(query, { slug });
  // console.log(post);

  return (
    <Container className="mb-10">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            alt="main image"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            alt="author image"
            width={200}
            height={200}
            className="w-32 h-32 rounded-full object-cove   r"
          />
          <p className="text-3xl text-[#5442ae]">{post?.author?.name}</p>
          <p className="text-center tracking-wide text-sm">
            {post?.author?.description}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-gray-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaGithub />
            </Link>

            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-[#bc1888] text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaInstagram />
            </Link>
            <Link
              href={"https://www.youtube.com/channel/UChkOsij0dhgft0GhHRauOAA"}
              target="blank"
              className="w-10 h-10 bg-blue-500 text-white text-xl rounded-full flex items-center justify-center hover:bg-[#5442ae] duration-200"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body} components={RichText} />
      </div>
    </Container>
  );
};

export default SlugPage;
