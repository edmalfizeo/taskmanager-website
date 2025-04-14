import Image from "next/image";

export default function AboutApp() {
  return (
    <section className="mt-20 px-4 font-jakarta space-y-24 max-w-6xl mx-auto">
      {/* BLOCO 1 - Imagem na direita (desktop) */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="w-full md:w-1/2 flex flex-col gap-5 ">
          <button className="font-regular bg-emerald-400 py-2 px-6 rounded-full self-start">
            About App
          </button>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Approach For <br />
            Efficient Task <br />
            Management
          </h2>

          <h3 className="font-manrope text-lg text-gray-600">
            An efficient task management approach <br />
            involves prioritizing, organizing, and using <br />
            the right tools to stay productive.
          </h3>

          <div className="flex flex-col mt-5 gap-5">
            <div className="flex gap-5 items-start">
              <Image
                src="/icons/check_icon.svg"
                alt=""
                width={50}
                height={50}
              />
              <div>
                <h2 className="font-bold">Smart Scheduling</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <Image
                src="/icons/check_icon.svg"
                alt=""
                width={50}
                height={50}
              />
              <div>
                <h2 className="font-bold">Real-Time Collaboration</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/aboutImage1.svg"
            alt="App screenshot"
            width={600}
            height={500}
            className=""
          />
        </div>
      </div>

      {/* BLOCO 2 - Imagem na esquerda (desktop) */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-40">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <button className="font-regular bg-emerald-400 py-2 px-6 rounded-full self-start">
            About App
          </button>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Master Your Tasks <br />
            And Streamline <br />
            Your Workflow
          </h2>

          <h3 className="font-manrope text-lg text-gray-600">
            An efficient task management approach <br />
            involves prioritizing, organizing, and using <br />
            the right tools to stay productive.
          </h3>

          <div className="flex flex-col mt-5 gap-5">
            <div className="flex gap-5 items-start">
              <Image
                src="/icons/check_icon.svg"
                alt=""
                width={50}
                height={50}
              />
              <div>
                <h2 className="font-bold">Time Management</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <Image
                src="/icons/check_icon.svg"
                alt=""
                width={50}
                height={50}
              />
              <div>
                <h2 className="font-bold">Prioritization</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/images/aboutImage2.svg"
            alt="App screenshot"
            width={500}
            height={400}
            className=" h-auto"
          />
        </div>
      </div>
    </section>
  );
}
