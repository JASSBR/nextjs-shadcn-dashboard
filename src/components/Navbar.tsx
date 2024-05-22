'use client'
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
 
export function MyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 

 
  return (
    <div className="  max-h-[768px]  ">
      <Navbar  placeholder='Navbar' className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div className="flex items-center gap-x-2">
            <div className="bg-black p-4 rounded-full">
            <svg width="40" height="40" viewBox="0 0 66 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5309 52.8771C33.4681 53.2425 33.3292 53.5906 33.1234 53.899C32.9176 54.2074 32.6493 54.4692 32.336 54.6674C32.0226 54.8657 31.6712 54.9959 31.3043 55.0498C30.9375 55.1037 30.5634 55.08 30.2063 54.9802C29.5162 54.7843 28.8338 54.5626 28.1592 54.315C21.155 51.7405 15.5731 46.5922 12.441 39.8196C9.30896 33.047 9.00186 25.4595 11.5757 18.4553C16.8908 3.99704 32.9778 -3.44449 47.4361 1.87251C54.4396 4.44699 60.0222 9.59471 63.1542 16.3679C66.2863 23.1411 66.5934 30.728 64.0189 37.7322C63.1798 40.0225 62.0443 42.193 60.6414 44.1883C60.4268 44.491 60.151 44.7453 59.8318 44.9347C59.5127 45.1241 59.1573 45.2444 58.7887 45.2877C58.4202 45.3311 58.0466 45.2966 57.6922 45.1864C57.3379 45.0763 57.0106 44.8929 56.7315 44.6483C56.2394 44.2201 55.9229 43.625 55.8431 42.9776C55.7633 42.3301 55.9257 41.676 56.2992 41.1412C58.2993 38.3032 59.6198 35.0432 60.1586 31.6133C60.6974 28.1834 60.4401 24.6756 59.4066 21.3611C58.373 18.0465 56.5909 15.0141 54.1981 12.4984C51.8053 9.98265 48.8659 8.051 45.6073 6.85283C33.6442 2.45461 20.3029 8.83514 16.2917 21.0449C14.4654 26.6164 14.8728 32.6792 17.4279 37.9563C19.9831 43.2334 24.4866 47.3128 29.9898 49.3353C30.5379 49.5367 31.0949 49.7173 31.6562 49.8765C32.2843 50.0565 32.8235 50.4628 33.1697 51.0169C33.5159 51.571 33.6446 52.2337 33.5309 52.8771Z" fill="#FC6D42"/>
<path d="M28.1911 89.4158C25.0367 89.413 21.9055 88.8764 18.9302 87.8287C11.8883 85.3612 6.22831 80.2984 2.99368 73.5737C-0.240949 66.8489 -0.662584 59.267 1.80555 52.2251C2.60966 49.9221 3.71215 47.7345 5.08486 45.7181C5.29488 45.4122 5.56677 45.1539 5.88294 44.9598C6.19911 44.7656 6.55251 44.64 6.92029 44.5911C7.28806 44.5421 7.66201 44.571 8.01794 44.6757C8.37387 44.7804 8.70386 44.9586 8.98655 45.1989C9.48539 45.6195 9.81099 46.2098 9.90068 46.8562C9.99038 47.5025 9.83782 48.1591 9.47238 48.6997C7.65545 51.3607 6.42759 54.379 5.87091 57.5527C5.31423 60.7264 5.44156 63.9824 6.24439 67.1029C7.04722 70.2235 8.50703 73.1366 10.5262 75.6476C12.5454 78.1586 15.0775 80.2096 17.953 81.6633C20.8286 83.1171 23.9814 83.9402 27.2006 84.0775C30.4198 84.2149 33.6312 83.6633 36.6202 82.4598C39.6091 81.2562 42.3066 79.4284 44.5323 77.0985C46.7581 74.7686 48.4607 71.9903 49.5264 68.9495C53.6559 57.1727 47.4308 44.2335 35.6578 40.1066C35.2846 39.9757 34.907 39.8548 34.525 39.7435C33.8973 39.5581 33.3604 39.1469 33.0178 38.5891C32.6753 38.0313 32.5513 37.3665 32.6698 36.7228C32.9518 35.1829 34.5017 34.2087 36.0051 34.6461C36.478 34.7845 36.9466 34.9351 37.411 35.0979C51.948 40.1953 59.6305 56.1646 54.5363 70.7021C52.0682 77.7441 47.0054 83.404 40.2806 86.638C36.511 88.4614 32.3785 89.4109 28.1911 89.4158Z" fill="white"/>
<path d="M30.2907 61.9445C30.7891 60.3864 29.9301 58.7191 28.372 58.2207C26.8138 57.7222 25.1466 58.5812 24.6481 60.1394L21.5751 69.7451C21.0767 71.3032 21.9357 72.9705 23.4939 73.4689C25.052 73.9674 26.7193 73.1084 27.2177 71.5502L30.2907 61.9445Z" fill="#C4FF0F"/>
</svg>


            </div>
            <div className="text-3xl font-bold	">
            <span className="text-black	">Sway</span>
            <span className="text-orange-600">Board</span>
            </div>
          </div>
          <div>
            <span  className="font-semibold	bg-orange-600 rounded-full py-3 px-9 cursor-pointer	text-white  text-xl">ReTry</span>
          </div>
        </div>
       
      </Navbar>
      
    </div>
  );
}