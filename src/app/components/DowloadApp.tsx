import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="relative bg-[url('/bg/waves2.svg')] bg-cover bg-no-repeat text-white py-20 mt-50">
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold mb-4 font-jakarta">
          Love Our Application? <br />
          Download Now
        </h2>
        <p className="mb-8 text-sm md:text-lg text-gray-300 font-manrope">
          Frybix Delivered Blazing Fast Performance, Striking Word Solution
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a href="#" aria-label="Download on Google Play">
            <Image
              src="/icons/google-play-badge.svg"
              alt="Get it on Google Play"
              width={150}
              height={50}
              className="h-auto"
            />
          </a>
          <a href="#" aria-label="Download on App Store">
            <Image
              src="/icons/app-store-badge.svg"
              alt="Download on the App Store"
              width={150}
              height={50}
              className="h-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
