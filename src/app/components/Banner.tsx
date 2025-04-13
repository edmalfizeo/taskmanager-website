import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-[#00e19b] py-6 mt-10 md:-mt-17">
      <div className="max-w-6xl mx-auto px-4 ">
        <div
          className="flex flex-nowrap md:flex-wrap justify-start md:justify-between items-center gap-6 
                     overflow-x-auto md:overflow-visible 
                     whitespace-nowrap scrollbar-hide"
        >
          <Image
            src="/logos/googlesvg.svg"
            alt="Google"
            width={100}
            height={24}
            className="h-6 md:h-8 w-auto shrink-0"
          />
          <Image
            src="/logos/slacksvg.svg"
            alt="Slack"
            width={100}
            height={24}
            className="h-6 md:h-8 w-auto shrink-0"
          />
          <Image
            src="/logos/discordsvg.svg"
            alt="Agworld"
            width={100}
            height={24}
            className="h-6 md:h-8 w-auto shrink-0"
          />
          <Image
            src="/logos/riotintosvg.svg"
            alt="Rio Tinto"
            width={70}
            height={24}
            className="h-6 md:h-4 w-auto shrink-0"
          />
          <Image
            src="/logos/herokusvg.svg"
            alt="Heroku"
            width={100}
            height={24}
            className="h-6 md:h-8 w-auto shrink-0"
          />
        </div>
      </div>
    </section>
  );
}
