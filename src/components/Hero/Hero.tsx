// src/components/Hero/Hero.tsx
// export default function Hero() {
//     return (
//       <div className="min-h-[calc(100vh-48px)] flex flex-col justify-center items-center px-6 md:px-16">
//         <div className="w-full max-w-screen-2xl mx-auto">
//           <h1 className="text-[50px] md:text-[90px] lg:text-[125px] font-medium leading-tight">
//             <span className="block w-full whitespace-nowrap">MATTHEW STEWART</span>
//           </h1>
          
//           <h2 className="text-base lg:text-xl text-gray-600 absolute bottom-0 left-0 right-0 mt-52">
//             Aspiring software engineer
//           </h2>
//         </div>
//       </div>
//     );
//   }

export default function Hero() {
    return (
      <div className="min-h-[calc(100vh-400px)] flex flex-col justify-center items-center px-6 md:px-16">
        <div className="w-full max-w-screen-2xl mx-auto text-center">
          <h1 className="text-[50px] md:text-[90px] lg:text-[125px] font-medium leading-tight">
            <span className="block w-full whitespace-nowrap">MATTHEW STEWART</span>
          </h1>
  
          <h2 className="text-base lg:text-xl text-gray-600 mt-4">
            Aspiring software engineer with a passion for development and creativity with 1 year experience in industry.
          </h2>
        </div>
      </div>
    );
  }