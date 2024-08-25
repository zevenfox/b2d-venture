import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-16 bg-[#0C1A2A] flex justify-between items-center px-8 md:px-16">
      {/* Logo Section */}
      <div className="text-[#A8FF35] text-xl font-bold">
        B2D <span className="text-white">venture</span>
      </div>

      {/* Menu Section */}
      <div className="flex space-x-6 text-white">
        <button className="hover:text-[#A8FF35]">Register as Start up</button>
        <button className="hover:text-[#A8FF35]">Login</button>
        <button className="px-4 py-2 border border-white rounded-full hover:border-[#A8FF35] hover:text-[#A8FF35]">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// import React from 'react';
// import { Navbar, Typography, IconButton, MobileNav } from '@material-tailwind/react';

// export default function Navbar() {
//   const [openNav, setOpenNav] = React.useState(false);

//   React.useEffect(() => {
//     window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
//   }, []);

//   const navList = (
//     <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       <li className="p-1 font-normal text-white">
//         <a href="#" className="flex items-center">
//           Register as Start up
//         </a>
//       </li>
//       <li className="p-1 font-normal text-white">
//         <a href="#" className="flex items-center">
//           Login
//         </a>
//       </li>
//       <li className="p-1 font-normal text-white">
//         <a href="#" className="flex items-center">
//           Sign Up
//         </a>
//       </li>
//     </ul>
//   );

//   return (
//     <Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4 bg-transparent backdrop-blur-lg">
//       <div className="flex items-center justify-between text-white">
//         <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-bold text-[#A8FF35]">
//           B2D <span className="text-white">venture</span>
//         </Typography>
//         <div className="flex items-center gap-4">
//           <div className="mr-4 hidden lg:block">{navList}</div>
//           <IconButton
//             variant="text"
//             className="ml-auto h-6 w-6 text-white hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//             ripple={false}
//             onClick={() => setOpenNav(!openNav)}
//           >
//             {openNav ? (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 className="h-6 w-6"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </IconButton>
//         </div>
//       </div>
//       <MobileNav open={openNav}>{navList}</MobileNav>
//     </Navbar>
//   );
// }