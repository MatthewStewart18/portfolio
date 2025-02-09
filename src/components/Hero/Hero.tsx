// src/components/Hero/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen px-4 md:px-8 lg:px16">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          {/* <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
              MATTHEW STEWART
            </h1> */}
          <div className='text-center mb-8'>
            <div className="text-xs md:text-sm lg:text-base text-gray-600 max-w-xl md:max-w-2xl mx-auto space-y-4 md:space-y-6 text-justify">
              <p>
                Hi, im Matthew. I am currently in my final year of Computer Science at 
                Queen's University Belfast. My studies have deepened my interest in 
                Cloud computing as well as Artificial Intelligence.
              </p>

              <p>
                I previously worked as a Software Engineer at Rapid7, focusing on leveraging 
                AI to automate the process of securing customers environments from common
                vulnerabilities and exposures.
              </p>

              <p>
                In my spare time I enjoy going to the gym, bouldering, playing football,
                surfing, hiking and keeping up to date with new advancements in the tech
                scene. Im always eager to explore new ideas through hands-on side projects.
              </p>
            </div>
          </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            <div className="aspect-[5/5] relative rounded-lg overflow-hidden bg-gray-100 ">
              <Image
                src="/images/me.jpg"
                alt="Matthew Stewart"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[5/5] relative rounded-lg overflow-hidden bg-gray-100">
              <Image
                src="/images/kiddo.jpg"
                alt="Matthew Stewart"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="min-h-[calc(100vh-48px)] flex items-center px-6 md:px-16">
//       <div className="w-full max-w-screen-2xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
//             MATTHEW STEWART
//           </h1>
//           <h2 className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
//             Hi, im Matthew. I am currently in my final year of Computer Science at 
//             Queen's University Belfast. My studies have deepened my interest in 
//             Cloud computing as well as Artificial Intelligence.

//             I previously worked as a Software Engineer at Rapid7, focusing on leveraging 
//             AI to automate the process of securing customers environments from common
//             vulnerabilities and exposures.

//             In my spare time I enjoy going to the gym, bouldering, playing football,
//             surfing, hiking and keeping up to date with new advancements in the tech
//             scene. Im always eager to explore new ideas through hands-on side projects.
//           </h2>
//         </div>

//         {/* Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
//           <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
//             <Image
//               src="/images/me.jpg"
//               alt="Matthew Stewart"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
//             <Image
//               src="/images/kiddo.JPG"
//               alt="Matthew Stewart"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// // src/components/Hero/Hero.tsx
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="px-6 md:px-16 pt-8">
//       <div className="max-w-screen-2xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
//             MATTHEW STEWART
//           </h1>
//           <h2 className="text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
            // Hi, im Matthew. I am currently in my final year of Computer Science at 
            // Queen's University Belfast. My studies have deepened my interest in 
            // Cloud computing as well as Artificial Intelligence.

            // I previously worked as a Software Engineer at Rapid7, focusing on leveraging 
            // AI to automate the process of securing customers environments from common
            // vulnerabilities and exposures.

            // In my spare time I enjoy going to the gym, bouldering, playing football,
            // surfing, hiking and keeping up to date with new advancements in the tech
            // scene. Im always eager to explore new ideas through hands-on side projects.
//           </h2>
//         </div>

//         {/* Images */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
//           <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
//             {
//               <Image
//               src="images/me.jpg"
//               alt="Matthew Stewart"
//               fill
//               className="object-cover"
//             />
//             }
//           </div>
//           <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gray-100">
//             {
//                 <Image
//                 src="images/kiddo.JPG"
//                 alt="Matthew Stewart"
//                 fill
//                 className="object-cover"
//               />
//             }
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }