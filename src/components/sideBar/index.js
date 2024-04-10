import { React } from "react";
import { NavLink, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex text-gray-900 ">
      <aside className="flex w-[59px] h-[893px] flex-col items-center border-r border-primary-blue bg-primary-blue">
        <nav className="flex flex-1 flex-col  pt-1">
          <NavLink
            to="/home"
            className={`group relative p-5 ${
              isActive("/home")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 stroke-current group-hover:text-black transform motion-safe:hover:scale-125"
              width="24"
              height="24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/new-order"
            className={` group relative p-5 ${
              isActive("/new-order")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 stroke-current group-hover:text-black transform motion-safe:hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/quick-check"
            className={`group relative p-5 ${
              isActive("/quick-check")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 stroke-current group-hover:text-black transform motion-safe:hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/tracker"
            className={`group relative p-5 ${
              isActive("/tracker")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 stroke-current group-hover:text-black transform motion-safe:hover:scale-125"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/my-docs"
            className={`group relative p-5 ${
              isActive("/my-docs")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white  group-hover:text-black transform motion-safe:hover:scale-125"
              stroke="currentColor"
            >
              <path
                d="M9.078 16.5512L3.42859 10.7942L4.83793 9.37015L9.078 13.6544L18.305 4.33127L19.7143 5.7553L9.078 16.5512ZM4.56088 20.592H18.582V18.5472H4.56088V20.592Z"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="white"
              />
            </svg>
          </NavLink>
          <NavLink
            to="/my-profile"
            className={` group relative p-5 ${
              isActive("/my-profile")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              width="30"
              height="50"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 stroke-current group-hover:text-black transform motion-safe:hover:scale-125"
            >
              <path d="M2.60419 22.4581C2.18752 22.4581 1.82294 22.2844 1.51044 21.9369C1.19794 21.5894 1.04169 21.1841 1.04169 20.7208V7.98034C1.04169 7.51705 1.19794 7.11168 1.51044 6.76421C1.82294 6.41674 2.18752 6.24301 2.60419 6.24301H14.0625C14.4792 6.24301 14.8438 6.41674 15.1563 6.76421C15.4688 7.11168 15.625 7.51705 15.625 7.98034V20.7208C15.625 21.1841 15.4688 21.5894 15.1563 21.9369C14.8438 22.2844 14.4792 22.4581 14.0625 22.4581H2.60419ZM2.60419 19.2151C3.45488 18.5974 4.37068 18.1341 5.35158 17.8252C6.33249 17.5164 7.32641 17.3619 8.33335 17.3619C9.3403 17.3619 10.3342 17.5164 11.3151 17.8252C12.296 18.1341 13.2118 18.5974 14.0625 19.2151V7.98034H2.60419V19.2151ZM8.33335 19.0993C7.41321 19.0993 6.53648 19.2296 5.70315 19.4902C4.86981 19.7508 4.09724 20.161 3.38544 20.7208H13.2813C12.5347 20.161 11.7361 19.7508 10.8854 19.4902C10.0347 19.2296 9.18405 19.0993 8.33335 19.0993ZM8.33335 15.8273C7.53474 15.8273 6.85332 15.5136 6.28908 14.8862C5.72485 14.2589 5.44273 13.5012 5.44273 12.6132C5.44273 11.7253 5.72485 10.9676 6.28908 10.3402C6.85332 9.71285 7.53474 9.39916 8.33335 9.39916C9.13196 9.39916 9.81339 9.71285 10.3776 10.3402C10.9419 10.9676 11.224 11.7253 11.224 12.6132C11.224 13.5012 10.9419 14.2589 10.3776 14.8862C9.81339 15.5136 9.13196 15.8273 8.33335 15.8273ZM8.33335 14.2926C8.75002 14.2926 9.10592 14.1334 9.40106 13.8149C9.6962 13.4964 9.84377 13.0958 9.84377 12.6132C9.84377 12.1499 9.6962 11.7542 9.40106 11.4261C9.10592 11.0979 8.75002 10.9338 8.33335 10.9338C7.89933 10.9338 7.53908 11.0979 7.25262 11.4261C6.96617 11.7542 6.82294 12.1499 6.82294 12.6132C6.82294 13.0958 6.96617 13.4964 7.25262 13.8149C7.53908 14.1334 7.89933 14.2926 8.33335 14.2926ZM18.2292 22.4581V6.24301H19.7917V22.4581H18.2292ZM22.3959 22.4581V6.24301H23.9584V22.4581H22.3959Z" />
            </svg>
          </NavLink>
          <NavLink
            to="/more"
            className={` group relative p-5 ${
              isActive("/more")
                ? "bg-white text-black "
                : "bg-transparent text-white"
            } hover:bg-white`}
          >
            <svg
              width="28"
              height="27"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-current group-hover:text-black transform motion-safe:hover:scale-125"
            >
              <path
                d="M7.78443 13.8873C7.78443 15.4828 6.44162 16.8656 4.89222 16.8656C3.34281 16.8656 2 15.4828 2 13.8873C2 12.2918 3.34281 10.909 4.89222 10.909C6.44162 10.909 7.78443 12.2918 7.78443 13.8873ZM16.3922 13.8873C16.3922 15.4828 15.0494 16.8656 13.5 16.8656C11.9506 16.8656 10.6078 15.4828 10.6078 13.8873C10.6078 12.2918 11.9506 10.909 13.5 10.909C15.0494 10.909 16.3922 12.2918 16.3922 13.8873ZM25 13.8873C25 15.4828 23.6572 16.8656 22.1078 16.8656C20.5584 16.8656 19.2156 15.4828 19.2156 13.8873C19.2156 12.2918 20.5584 10.909 22.1078 10.909C23.6572 10.909 25 12.2918 25 13.8873Z"
                fill="white"
              />
            </svg>
          </NavLink>
        </nav>
      </aside>
    </div>
  );
}

export default SideBar;
