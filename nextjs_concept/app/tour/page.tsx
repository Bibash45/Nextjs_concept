import Image from "next/image";
import Link from "next/link";
import React from "react";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

const fetchTours = async (): Promise<Tour[]> => {
  const url = "https://www.course-api.com/react-tours-project";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Failed to fetch tours");
  }
  return response.json();
};

const ToursPage = async () => {
  const tours: Tour[] = await fetchTours();

  return (
    <section>
      <h1 className="text-3xl mb-4">Tours</h1>
      {tours.map((tour) => (
        <div key={tour.id} className="mb-4 flex flex-col ">
          <Link href={`/tour/${tour.id}`}>
            <h2 className="text-2xl  text-blue text-white bg-green-500 my-3 text-center rounded-lg py-3 font-sans font-semibold transition hover:-translate-y-2 duration-300">
              {tour.name}
            </h2>
          </Link>
          <div className="flex flex-wrap items-center">
            <Image
              src={tour.image}
              alt={tour.name}
              width={300}
              height={200}
              priority
              className="w-68 h-52 object-contain"
            />
            <p className="text-sm mt-2 w-1/2 text-center m-auto text-justify bg-gray-200 rounded-sm p-3 shadow-md">
              {tour.info}
            </p>
          </div>
          <p className="text-lg font-semibold text-blue-600 ml-10">
            ${tour.price}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ToursPage;
