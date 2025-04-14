import Image from "next/image";

export default function AboutApp() {
  return (
    <section className="mt-5 flex justify-center min-h-screen px-4 font-jakarta">
      <div className="flex gap-10 items-center">
        <div className="flex flex-col gap-5 ">
          <div>
            <button className="font-regular bg-emerald-400 py-4 px-6 rounded-full">
              About App
            </button>
          </div>

          <h2 className="text-6xl font-bold text-left">
            Approach For <br />
            Efficient Task <br />
            Management
          </h2>

          <h3 className="font-manrope text-left ">
            An efficient task management approach <br />
            involves prioritizing, organizing, and using <br />
            the right tools to stay productive.
          </h3>

          <div className="flex flex-col mt-5 gap-5">
            <div className="flex gap-5">
              <Image
                src="/icons/check_icon.svg"
                alt="about Image 1"
                width={50}
                height={50}
                className=""
              />
              <div>
                <h2 className="font-bold">Smart Scheduling</h2>
                <h3>Lorem ipsum dolor sit amet,</h3>
              </div>
            </div>
            <div className="flex gap-5">
              <Image
                src="/icons/check_icon.svg"
                alt="about Image 1"
                width={50}
                height={50}
                className=""
              />
              <div>
                <h2 className="font-bold">Real-time Collaboration </h2>
                <h3>Lorem ipsum dolor sit amet,</h3>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/images/aboutImage1.svg"
          alt="about Image 1"
          width={650}
          height={650}
          className="rounded-lg md:-mt-10"
        />
      </div>
    </section>
  );
}
