// import Image from 'next/image';

export default function Hero() {
  return (
    // className="pt-20 px-4 md:px-8 lg:px-16
    <section id="about" className="px-6 md:px-16 max-w-screen-2xl mx-auto">
      <div className="max-w-screen-xl mx-auto">
        {/* Text Content */}
        <div className="mb-8 md:mb-12">
          <div className="text-xs md:text-sm lg:text-base text-gray-600 max-w-xl md:max-w-2xl mx-auto space-y-4 md:space-y-6">
            <p className="text-justify">
              Hi, i&apos;m Matthew. I am currently in my final year of Computer Science at 
              Queen&apos;s University Belfast. My studies have deepened my interest in 
              Cloud computing as well as Artificial Intelligence.
            </p>

            <p className="text-justify">
              I previously worked as a Software Engineer at Rapid7, focusing on engineering systems that leveraged AI to collect and process web security advisory content for the InsightVM platform. This content enabled accurate fingerprinting and identification of vulnerabilities across customers environments globally.
            </p>

            <p className="text-justify">
              In my spare time I enjoy going to the gym, bouldering, playing football,
              surfing, hiking and keeping up to date with new advancements in the tech
              scene. Im always eager to explore new ideas through hands-on side projects.
            </p>
          </div>
        </div>

        {/* Images */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
          <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/images/me.jpg"
              alt="Matthew Stewart"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
            <Image
              src="/images/kiddo.JPG"
              alt="Matthew Stewart"
              fill
              className="object-cover"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}