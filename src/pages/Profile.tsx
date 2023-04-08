import React, {
  EventHandler,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import UserOrders from "../components/UserOrders";
import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import ProfileDashboard from "../components/ProfileDashboard";
import OrderDetailTable from "../components/OrderDetailTable";
import { useAppSelector } from "../hooks/reduxHooks";
import { selectCart } from "../redux/reducers/cartReducer";
import ProfileOrderDetail from "../components/ProfileOrderDetail";
import { selectProfile } from "../redux/reducers/profileReducer";

const Profile = () => {
  const { sectionPath, sectionParam } = useParams();
  const navigation = useNavigate();
  const [menuStatus, setMenuStatus] = useState(false);
  const [autoTabChanger, setAutoTabChanger] = useState<string>("");
  const hoverEffectRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const dashboardRef = useRef<HTMLLIElement>(null);
  const cart = useAppSelector(selectCart);
  const profile = useAppSelector(selectProfile);
  useEffect(()=>{
    !profile.userName && navigation("/login")
  },[])
  useEffect(() => {
    if (!sectionPath) {
      navigation("/profile/dashboard", { replace: false });
    }
    // dashboardRef.current && setChangedTab(dashboardRef.current.getBoundingClientRect())
    if (sectionPath && !autoTabChanger && containerRef.current) {
      containerRef.current.childNodes.forEach((value, key) => {
        if (value.textContent?.toLowerCase() === sectionPath.toLowerCase() && containerRef.current) {
          changeTab(containerRef.current.children[key].getBoundingClientRect())
        }
      });
    }
  }, [sectionPath]);

  const clickTabChanging: MouseEventHandler = (e) => {
    if (hoverEffectRef.current && containerRef.current) {
      const clickedElement = e.currentTarget.getBoundingClientRect();
      changeTab(clickedElement);
    }
  };
  const changeTab = (clickedElement: DOMRect) => {
    if (hoverEffectRef.current && containerRef.current) {
      const containerElement = containerRef.current.getBoundingClientRect();
      hoverEffectRef.current.style.top = `${Math.abs(
        containerElement.y - clickedElement.y
      )}px`;
      hoverEffectRef.current.style.height = `${clickedElement.height}px`;
      hoverEffectRef.current.style.width = `${clickedElement.width}px`;
      hoverEffectRef.current.style.left = `${Math.abs(
        containerElement.x - clickedElement.x
      )}px`;
        setMenuStatus(false)
    }
  };
  return (
    <section className="flex flex-col items-center min-h-screen w-full px-3 md:px-2 relative">
      <section
        className={`flex z-10 absolute h-screen w-[70vw] flex-col bg-persianGreen top-0 right-0 max-w-xs rounded-l-xl transition-all duration-200 ${
          menuStatus ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <span
          ref={hoverEffectRef}
          className="w-full absolute bg-white flex rounded-xl transition-all duration-200"
        ></span>
        <span
          className={`flex items-center justify-center absolute rounded-l-full w-10 h-10 top-5 -left-10 bg-persianGreen cursor-pointer `}
          onClick={() => setMenuStatus(!menuStatus)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className={`w-6 h-6 relative left-[2px] ${
              menuStatus ? "rotate-180 " : "rotate-0"
            } transition-transform duration-200`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <ul
          ref={containerRef}
          className="flex flex-col w-full py-2 px-3 relative z-30"
        >
          <li
            ref={dashboardRef}
            className="flex items-center p-2 w-full cursor-pointer mb-3"
            onClick={clickTabChanging}
          >
            <Link
              className="flex items-center w-full h-full"
              to="/profile/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                />
              </svg>

              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className="flex items-center p-2 w-full cursor-pointer mb-3"
            onClick={clickTabChanging}
          >
            <Link
              className="flex items-center w-full h-full"
              to="/profile/orders"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>
              <span>Orders</span>
            </Link>
          </li>
        </ul>
      </section>
      <section className="flex flex-col w-full items-center relative h-full max-w-7xl">
        <div className="w-full flex items-center mb-8 p-2">
          <p className="flex justify-start items-center relative">
            <span className="font-semibold capitalize">
              {sectionPath}
              {sectionParam && ` - ${sectionParam}`}
            </span>
            <span className="flex absolute w-full h-[2px] rounded-lg bg-yellow -bottom-1"></span>
          </p>
        </div>
        {sectionPath === "dashboard" && <ProfileDashboard />}
        {sectionPath === "orders" && sectionParam === undefined && (
          <UserOrders />
        )}
        {sectionPath === "orders" && sectionParam !== undefined && (
          <ProfileOrderDetail />
        )}
      </section>
    </section>
  );
};

export default Profile;
