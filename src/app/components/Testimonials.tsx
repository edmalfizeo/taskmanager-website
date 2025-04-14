import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="w-full py-20 px-6 bg-[url('/bg/waves.svg')] bg-cover bg-no-repeat font-jakarta mt-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What Our Happy Client Say
        </h2>
        <p className="text-gray-500 mb-12">
          Things That Make Us The Best Place To Start Trading
        </p>

        {/* Testimonials Wrapper */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center overflow-x-auto scrollbar-hide">
          <div className="relative min-w-[300px] max-w-[350px] flex flex-col items-center">
            {/* Avatar */}
            <div className="absolute top-0 z-20">
              <Image
                src="/images/client1.svg"
                alt="Client"
                width={80}
                height={80}
              />
            </div>

            {/* Card */}
            <div className="bg-white shadow-md rounded-2xl pt-14 pb-6 px-6 text-center z-10">
              <h3 className="font-semibold text-lg">Robin Ayala Doe</h3>
              <p className="text-sm text-gray-400 mb-2">CEO of Cooking</p>

              <Image
                src="/icons/stars.svg"
                alt="Stars"
                width={100}
                height={20}
                className="mb-4 mx-auto"
              />

              <p className="text-sm text-gray-600">
                “First class! I&apos;m the CEO of Cooking. It&apos;s the best
                company that I’ve used. There is no way that this app can fail!”
              </p>
            </div>
          </div>

          <div className="relative min-w-[300px] max-w-[350px] flex flex-col items-center">
            {/* Avatar */}
            <div className="absolute top-0 z-20">
              <Image
                src="/images/client2.svg"
                alt="Client"
                width={80}
                height={80}
              />
            </div>

            {/* Card */}
            <div className="bg-white shadow-md rounded-2xl pt-14 pb-6 px-6 text-center z-10">
              <h3 className="font-semibold text-lg">John De marli</h3>
              <p className="text-sm text-gray-400 mb-2">CEO of Cooking</p>

              <Image
                src="/icons/stars.svg"
                alt="Stars"
                width={100}
                height={20}
                className="mb-4 mx-auto"
              />

              <p className="text-sm text-gray-600">
                “any individuals have eaten in this kitchen and have proceeded
                to lead typical, solid lives. The route to a man’s heart is
                through his stomach.”
              </p>
            </div>
          </div>

          <div className="relative min-w-[300px] max-w-[350px] flex flex-col items-center">
            {/* Avatar */}
            <div className="absolute top-0 z-20">
              <Image
                src="/images/client3.svg"
                alt="Client"
                width={80}
                height={80}
              />
            </div>

            {/* Card */}
            <div className="bg-white shadow-md rounded-2xl pt-14 pb-6 px-6 text-center z-10">
              <h3 className="font-semibold text-lg">Rowhan Smith</h3>
              <p className="text-sm text-gray-400 mb-2">CEO of Cooking</p>

              <Image
                src="/icons/stars.svg"
                alt="Stars"
                width={100}
                height={20}
                className="mb-4 mx-auto"
              />

              <p className="text-sm text-gray-600">
                “You don’t need to cook extravagant or muddled perfect works of
                art, simply great sustenance from new fixings.”
              </p>
            </div>
          </div>
        </div>

        {/* Indicadores (bolinhas) */}
        <div className="mt-10 flex gap-2 justify-center">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-black rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </section>
  );
}
