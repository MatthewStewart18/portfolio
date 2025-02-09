// // src/components/Experience/ExperienceCard.tsx
// interface ExperienceCardProps {
//     company: string;
//     description: string;
//     period: string;
//     details: string;
//     position: string;
//     location: string;
//     industry: string;
//     website?: string;
//   }
  
//   export function ExperienceCard({
//     company,
//     description,
//     period,
//     details,
//     position,
//     location,
//     industry,
//     website
//   }: ExperienceCardProps) {
//     return (
//       <div className="grid grid-cols-1 gap-y-8">
//         <div className="grid grid-cols-2 lg:grid-cols-12 gap-8">
//           {/* Left Column */}
//           <div className="col-span-1 lg:col-span-3">
//             <h3 className="text-3xl font-medium mb-4">{company}</h3>
//             <p className="text-base mb-2">{description}</p>
//             <p className="text-base">{period}</p>
//           </div>
  
//           {/* Middle Column - Info Grid */}
//           <div className="col-span-1 lg:col-span-3 grid grid-cols-2 h-fit gap-y-4">
//             <p className="text-gray-600">Position</p>
//             <p className="text-right">{position}</p>
            
//             <p className="text-gray-600">Location</p>
//             <p className="text-right">{location}</p>
            
//             <p className="text-gray-600">Industry</p>
//             <p className="text-right">{industry}</p>
            
//             {website && (
//               <>
//                 <p className="text-gray-600">Website</p>
//                 <a 
//                   href={`https://${website}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-right group"
//                 >
//                   {website}
//                   <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
//                 </a>
//               </>
//             )}
//           </div>
  
//           {/* Right Column */}
//           <div className="col-span-2 lg:col-span-6 lg:col-start-7">
//             <div className="text-base text-gray-600 whitespace-pre-line">
//               {details}
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

// src/components/Experience/ExperienceCard.tsx
interface ExperienceCardProps {
  company: string;
  description: string;
  period: string;
  details: string;
  position: string;
  location: string;
  industry: string;
  website?: string;
}

export function ExperienceCard({
  company,
  description,
  period,
  details,
  position,
  location,
  industry,
  website
}: ExperienceCardProps) {
  return (
    // Mobile layout (visible only on small screens)
    <div>
      <div className="md:hidden flex flex-col space-y-8">
        {/* Company Info Section */}
        <div className="space-y-2">
          <h3 className="text-3xl font-medium">{company}</h3>
          <p className="text-base">{description}</p>
          <p className="text-base">{period}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-y-4 border-t border-b border-gray-200 py-6">
          <p className="text-gray-600">Position</p>
          <p className="text-right">{position}</p>
          
          <p className="text-gray-600">Location</p>
          <p className="text-right">{location}</p>
          
          <p className="text-gray-600">Industry</p>
          <p className="text-right">{industry}</p>
          
          {website && (
            <>
              <p className="text-gray-600">Website</p>
              <a 
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-right group"
              >
                {website}
                <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
              </a>
            </>
          )}
        </div>

        {/* Details Section */}
        <div className="text-base text-gray-600 whitespace-pre-line">
          {details}
        </div>
      </div>

      {/* Desktop layout (visible only on md screens and up) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-3">
          <h3 className="text-2xl font-medium mb-4">{company}</h3>
          {/* <p className="text-base mb-2">{description}</p> */}
          <p className="text-base">{period}</p>
        </div>

        {/* Middle Column - Info Grid */}
        <div className="lg:col-span-3 grid grid-cols-2 h-fit gap-y-4">
          <p className="text-gray-600">Position</p>
          <p className="text-right">{position}</p>
          
          <p className="text-gray-600">Location</p>
          <p className="text-right">{location}</p>
          
          <p className="text-gray-600">Industry</p>
          <p className="text-right">{industry}</p>
          
          {website && (
            <>
              <p className="text-gray-600">Website</p>
              <a 
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-right group"
              >
                {website}
                <div className="h-[2px] w-full bg-current transform origin-left transition-transform group-hover:scale-x-100" />
              </a>
            </>
          )}
        </div>

        {/* Right Column */}
        <div className="lg:col-span-6 lg:col-start-7">
          <div className="text-base text-gray-600 whitespace-pre-line">
            {details}
          </div>
        </div>
      </div>
    </div>
  );
}