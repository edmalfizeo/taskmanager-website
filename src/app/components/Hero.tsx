import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center min-h-screen px-4"
    >
      <div className="flex flex-col-reverse md:flex-row items-center text-center gap-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold">
            Simplifying Task <br />
            Management <br />
            Boosts <br /> Productivity
          </h1>
          <h3 className="text-lg md:text-xl">
            By adopting effective strategies and tools, you can simplify your
            workflow, making it easier to stay organized and achieve your goals
            efficiently.
          </h3>
          <div className="flex items-center justify-center md:justify-start gap-5">
            <a href="">
              <Image
                src="/icons/googleplay_button.svg"
                alt="google button"
                width={150}
                height={150}
              />
            </a>
            <a href="">
              <Image
                src="/icons/apple_button.svg"
                alt="apple button"
                width={150}
                height={150}
              />
            </a>
          </div>
        </div>
        <Image
          src="/images/Image_hero.svg"
          alt="Hero Image"
          width={550}
          height={550}
          className="rounded-lg"
        />
      </div>

      <div className="flex  mt-10 md:mt-20 gap-10 items-center justify-center">
        <div>
          <h2 className="font-bold text-xl md:text-3xl">20K+</h2>
          <h3 className="text-sm md:text-lg">Downloads</h3>
        </div>
        <div>
          <h2 className="font-bold text-xl md:text-3xl">4.4K</h2>
          <h3 className="text-sm md:text-lg">Over Rating</h3>
        </div>
        <div>
          <h2 className="font-bold text-xl md:text-3xl">15K</h2>
          <h3 className="text-sm md:text-lg">Active Users</h3>
        </div>
      </div>
    </section>
  );
}
