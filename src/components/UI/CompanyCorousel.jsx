// import React, { useState } from 'react';
// import { FaAmazon, FaApple, FaGoogle, FaMicrosoft, FaFacebook, FaTwitter, FaSpotify, FaDropbox } from 'react-icons/fa';
// import { SiNetflix, SiAdobe, SiSalesforce, SiShopify } from 'react-icons/si';

// export default function CompanyCarousel() {
//   const [isPaused, setIsPaused] = useState(false);

//   const companies = [
//     { name: 'Amazon', icon: FaAmazon, color: 'text-orange-500' },
//     { name: 'Apple', icon: FaApple, color: 'text-gray-700' },
//     { name: 'Google', icon: FaGoogle, color: 'text-blue-500' },
//     { name: 'Microsoft', icon: FaMicrosoft, color: 'text-blue-600' },
//     { name: 'Facebook', icon: FaFacebook, color: 'text-blue-700' },
//     { name: 'Netflix', icon: SiNetflix, color: 'text-red-600' },
//     { name: 'Twitter', icon: FaTwitter, color: 'text-sky-500' },
//     { name: 'Spotify', icon: FaSpotify, color: 'text-green-500' },
//     { name: 'Adobe', icon: SiAdobe, color: 'text-red-700' },
//     { name: 'Salesforce', icon: SiSalesforce, color: 'text-blue-400' },
//     { name: 'Shopify', icon: SiShopify, color: 'text-green-600' },
//     { name: 'Dropbox', icon: FaDropbox, color: 'text-blue-500' },
//   ];

//   // Duplicate companies for seamless loop
//   const duplicatedCompanies = [...companies, ...companies];

//   return (
//     <section className="bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-16">
//       <div className="w-full max-w-7xl">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4">
//             In Collaboration With
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Trusted by leading companies worldwide
//           </p>
//         </div>

//         <div className="relative overflow-hidden">
//           {/* Gradient overlays */}
//           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-100 to-transparent z-10 pointer-events-none"></div>
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>

//           {/* Carousel container */}
//           <div
//             className="flex"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <div
//               className={`flex gap-16 ${isPaused ? '' : 'animate-scroll'}`}
//               style={{
//                 animation: isPaused ? 'none' : 'scroll 30s linear infinite',
//               }}
//             >
//               {duplicatedCompanies.map((company, index) => {
//                 const Icon = company.icon;
//                 return (
//                   <div
//                     key={index}
//                     className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
//                   >
//                     <div className="w-24 h-24 flex items-center justify-center bg-white rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
//                       <Icon className={`text-5xl ${company.color} transition-all duration-300`} />
//                     </div>
//                     <p className="mt-4 text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {company.name}
//                     </p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           @keyframes scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
          
//           .animate-scroll {
//             animation: scroll 30s linear infinite;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }

import React, { useState } from 'react';
import { FaAmazon, FaApple, FaGoogle, FaMicrosoft, FaFacebook, FaTwitter, FaSpotify, FaDropbox } from 'react-icons/fa';
import { SiNetflix, SiAdobe, SiSalesforce, SiShopify } from 'react-icons/si';

export default function CompanyCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  const companies = [
    { name: 'Amazon', icon: FaAmazon, color: '#0CAFFF' },
    { name: 'Apple', icon: FaApple, color: '#f1f1f1' },
    { name: 'Google', icon: FaGoogle, color: '#0CAFFF' },
    { name: 'Microsoft', icon: FaMicrosoft, color: '#098FCC' },
    { name: 'Facebook', icon: FaFacebook, color: '#0CAFFF' },
    { name: 'Netflix', icon: SiNetflix, color: '#0CAFFF' },
    { name: 'Twitter', icon: FaTwitter, color: '#0CAFFF' },
    { name: 'Spotify', icon: FaSpotify, color: '#098FCC' },
    { name: 'Adobe', icon: SiAdobe, color: '#0CAFFF' },
    { name: 'Salesforce', icon: SiSalesforce, color: '#098FCC' },
    { name: 'Shopify', icon: SiShopify, color: '#0CAFFF' },
    { name: 'Dropbox', icon: FaDropbox, color: '#098FCC' },
  ];

  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <div className="flex items-center justify-center py-16" style={{ backgroundColor: '#000' }}>
      <div className="w-full max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#f1f1f1' }}>
            In Collaboration With
          </h2>
          <p className="text-lg" style={{ color: 'rgba(241, 241, 241, 0.7)' }}>
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #000 0%, transparent 100%)'
            }}
          ></div>
          <div 
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to left, #000 0%, transparent 100%)'
            }}
          ></div>

          {/* Carousel container */}
          <div
            className="flex"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex gap-16 ${isPaused ? '' : 'animate-scroll'}`}
              style={{
                animation: isPaused ? 'none' : 'scroll 30s linear infinite',
              }}
            >
              {duplicatedCompanies.map((company, index) => {
                const Icon = company.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 flex flex-col items-center justify-center group cursor-pointer"
                  >
                    <div 
                      className="w-24 h-24 flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(69, 69, 69, 0.5)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(69, 69, 69, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(69, 69, 69, 0.5)';
                      }}
                    >
                      <Icon 
                        className="text-5xl transition-all duration-300" 
                        style={{ color: company.color }}
                      />
                    </div>
                    <p 
                      className="mt-4 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ color: '#f1f1f1' }}
                    >
                      {company.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}