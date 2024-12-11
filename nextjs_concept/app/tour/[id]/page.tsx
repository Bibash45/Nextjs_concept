import React from "react";
import imagee1 from "@/images/image1.jpg";
import Image from "next/image";
type Url = string;
const url: Url = "https://www.course-api.com/images/tours/tour-1.jpeg";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>
      <h1 className="text-4xl">ID: {id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* local images  */}
        <div>
          <Image
            src={imagee1}
            alt="maps"
            priority={true}
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
          />
          <h2>local image</h2>
        </div>
        {/* remote images */}
        <div>
          <Image
            src={url}
            alt="tour"
            priority={true}
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
          />
          <h2>remote images</h2>
        </div>
      </section>
    </div>
  );
};

export default Page;
