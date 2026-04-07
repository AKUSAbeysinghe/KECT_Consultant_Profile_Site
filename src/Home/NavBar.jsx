import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navRef = useRef();

  const scrollToSection = (linkId) => {
    const el = document.getElementById(linkId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkClick = (linkId) => {
    setIsOpen(false);
    setActiveLink(linkId);

    switch (linkId) {
      case "services":
      case "about":
      case "credential":
      case "team":
      case "contact":
        navigate(`/${linkId}`);
        break;
      default:
        if (!isHomePage) {
          navigate("/");
          sessionStorage.setItem("scrollTo", linkId);
        } else {
          if (linkId === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            scrollToSection(linkId);
          }
        }
    }
  };

  const handleAboutSubLink = (subId) => {
    sessionStorage.setItem("aboutScrollTo", subId);
    navigate("/about");
    setIsOpen(false);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const homepageTarget = sessionStorage.getItem("scrollTo");
    const aboutTarget = sessionStorage.getItem("aboutScrollTo");

    if (currentPath === "/" && homepageTarget) {
      setTimeout(() => {
        scrollToSection(homepageTarget);
        sessionStorage.removeItem("scrollTo");
      }, 100);
    } else if (currentPath === "/about" && aboutTarget) {
      setTimeout(() => {
        scrollToSection(aboutTarget);
        sessionStorage.removeItem("aboutScrollTo");
      }, 100);
    }

    if (currentPath === "/") {
      setActiveLink("home");
    } else if (currentPath.startsWith("/about")) {
      setActiveLink("about");
    } else if (currentPath.startsWith("/credential")) {
      setActiveLink("credential");
    } else if (currentPath.startsWith("/team")) {
      setActiveLink("team");
    } else if (currentPath.startsWith("/contact")) {
      setActiveLink("contact");
    } else if (
      currentPath === "/services" ||
      currentPath === "/all-iso" ||
      currentPath.startsWith("/iso") ||
      currentPath === "/gmpMain" ||
      currentPath === "/hacpMain" ||
      currentPath === "/ceMain" ||
      currentPath === "/fssc22000Main" ||
      currentPath === "/additional-services" ||
       currentPath === "/administration" ||
         currentPath === "/hr" ||
          currentPath === "/mrm" ||
           currentPath === "/inventory" 
    ) {
      setActiveLink("services");
    } else {
      setActiveLink("home");
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenMobileSubmenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sections = ["home", "about", "services", "credential", "team", "contact"];

  const aboutSubSections = [
    { title: "Who We Are", id: "who-we-are" },
    { title: "Chairman’s Profile", id: "chairmans-profile" },
    { title: "Our Process", id: "our-process" },
    { title: "Our Clients", id: "our-clients" },
    { title: "Testimonials", id: "testimonials" },
  ];

  const subServices = [
    {
      title: "ISO Services",
      route: "/all-iso",
      submenu: [
        { title: "ISO 9001:2015", route: "/iso9001Main" },
        { title: "ISO 13485:2016", route: "/iso1385Main" },
        { title: "ISO 14001:2015", route: "/iso14001Main" },
        { title: "ISO 15189:2012", route: "/iso15189Main" },
        { title: "ISO 15378:2017", route: "/iso15378Main" },
        { title: "ISO 17025:2017", route: "/iso17025Main" },
        { title: "ISO 18404:2015", route: "/iso18404Main" },
        { title: "ISO 19011:2018", route: "/iso19011Main" },
        { title: "ISO 22000:2018", route: "/iso22000Main" },
        { title: "ISO 22301:2019", route: "/iso22301Main" },
        { title: "ISO 22716:2007", route: "/iso22716Main" },
        { title: "ISO 27001:2022", route: "/iso27001Main" },
        { title: "ISO 37001:2016", route: "/iso37001Main" },
        { title: "ISO 45001:2018", route: "/iso45001Main" },
      ],
    },
    { title: "GMP Service", route: "/gmpMain" },
    { title: "HACCP", route: "/hacpMain" },
    { title: "CE Marking", route: "/ceMain" },
    { title: "FSSC 22000", route: "/fssc22000Main" },
    {
      title: "Management Services",
      route: "/additional-services",
      submenu: [
        { title: "Administration", route: "/administration" },
        { title: "Human Resources (HR)", route: "/hr" },
        { title: "MR Meetings (MRM)", route: "/mrm" },
        { title: "Inventory Management", route: "/inventory" },
      ],
    },
  ];

  return (
    <nav ref={navRef} className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-full px-6 py-2 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleLinkClick("home")}
        >
          <img src={logo} alt="Logo" className="h-12 object-contain mr-2" />
          <span className="text-xl font-bold text-[#003B73]">KECT Consultants</span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-3xl text-[#003B73] font-bold focus:outline-none"
          >
            &#9776;
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center text-lg">
          {sections.map((section) => {
            const isActive = activeLink === section;

            if (section === "about") {
              return (
                <div key="about" className="relative group">
                  <button
                    onClick={() => handleLinkClick("about")}
                    className={`hover:underline underline-offset-4 hover:bg-blue-100 px-2 py-1 rounded ${
                      isActive
                        ? "text-[#003B73] font-semibold"
                        : "text-gray-600 hover:text-[#003B73]"
                    }`}
                  >
                    About
                  </button>

                 <div
  className="absolute left-0 top-full z-50 w-[150px] 
    invisible opacity-0 group-hover:visible group-hover:opacity-100 
    transition duration-200 p-[4px] rounded-md"
  style={{
    background: 'linear-gradient(to right, #35b0cfff, #60a5fa)',
  }}
>
  <div className="bg-white rounded-md">
                    {aboutSubSections.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleAboutSubLink(item.id)}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer"
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              );
            }

            if (section === "services") {
              return (
                <div key="services" className="relative group">
                  <button
                    onClick={() => handleLinkClick("services")}
                    className={`hover:underline underline-offset-4 hover:bg-blue-100 px-2 py-1 rounded ${
                      isActive
                        ? "text-[#003B73] font-semibold"
                        : "text-gray-600 hover:text-[#003B73]"
                    }`}
                  >
                    Services
                  </button>
<div
  className="absolute left-0 top-full z-50 w-[150px] 
    invisible opacity-0 group-hover:visible group-hover:opacity-100 
    transition duration-200 p-[4px] rounded-md"
  style={{
    background: 'linear-gradient(to right, #35b0cfff, #60a5fa)',
  }}
>
  <div className="bg-white rounded-md">
    {subServices.map((item) => (
      <div
        key={item.title}
        className="relative px-2 py-2 text-sm text-gray-700 hover:bg-blue-100 cursor-pointer group/item"
      >
        {item.submenu ? (
          <>
            <Link to={item.route} className="block">
              {item.title}
            </Link>
           <div
  className="absolute top-0 left-full -translate-x-3 bg-white shadow rounded-md invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 transition duration-200 w-[180px] max-h-[70vh] overflow-y-auto z-50 whitespace-nowrap iso-submenu-scroll"
>
  {item.submenu.map((subItem) => (
    <Link
      key={subItem.title}
      to={subItem.route}
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
    >
      {subItem.title}
    </Link>
  ))}
</div>

          </>
        ) : (
          <Link to={item.route} className="block text-gray-700">
            {item.title}
          </Link>
        )}
      </div>
    ))}
  </div>
</div>

                </div>
              );
            }

            return (
              <button
                key={section}
                onClick={() => handleLinkClick(section)}
                className={`hover:underline underline-offset-4 hover:bg-blue-100 px-2 py-1 rounded ${
                  isActive
                    ? "text-[#003B73] font-semibold"
                    : "text-gray-600 hover:text-[#003B73]"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            );
          })}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-4 py-4 space-y-4 text-lg">
            {sections.map((section) => {
              if (section === "about") {
                return (
                  <div key="about" className="flex flex-col">
                    <button
                      onClick={() =>
                        setActiveLink(activeLink === "about" ? "home" : "about")
                      }
                      className={`text-left flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded ${
                        activeLink === "about"
                          ? "text-[#003B73] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      About
                      <span className="ml-2 text-xl">
                        {activeLink === "about" ? "−" : "+"}
                      </span>
                    </button>
                    {activeLink === "about" && (
                      <div className="flex flex-col gap-3 mt-2 px-2">
                        {aboutSubSections.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => {
                              handleAboutSubLink(item.id);
                            }}
                            className="text-gray-600 hover:text-[#003B73] text-left"
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (section === "services") {
                return (
                  <div key="services" className="flex flex-col relative">
                    <button
                      onClick={() =>
                        setActiveLink(activeLink === "services" ? "home" : "services")
                      }
                      className={`text-left flex items-center justify-between hover:bg-blue-100 px-2 py-1 rounded ${
                        activeLink === "services"
                          ? "text-[#003B73] font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      Services
                      <span className="ml-2 text-xl">
                        {activeLink === "services" ? "−" : "+"}
                      </span>
                    </button>

                    {activeLink === "services" && (
                      <div className="flex flex-col gap-3 mt-2 px-2">
                        {subServices.map((item) => {
                          const hasSubmenu = !!item.submenu;
                          const isExpanded = openMobileSubmenu === item.title;

                          return (
                            <div key={item.title} className="flex flex-col min-w-max">
                              <div className="flex justify-between items-center">
                                <Link
                                  to={item.route}
                                  onClick={() => setIsOpen(false)}
                                  className="whitespace-nowrap px-3 py-1 rounded bg-blue-100 text-blue-700 text-sm hover:bg-blue-200"
                                >
                                  {item.title}
                                </Link>
                                {hasSubmenu && (
                                  <button
                                    onClick={() =>
                                      setOpenMobileSubmenu(
                                        isExpanded ? null : item.title
                                      )
                                    }
                                    className="ml-2 px-2 py-1 text-blue-700 text-sm font-semibold rounded hover:bg-blue-200"
                                  >
                                    {isExpanded ? "−" : "+"}
                                  </button>
                                )}
                              </div>

                              {hasSubmenu && isExpanded && (
                                <div className="flex flex-col mt-1 space-y-1 px-4">
                                  {item.submenu.map((subItem) => (
                                    <Link
                                      key={subItem.title}
                                      to={subItem.route}
                                      onClick={() => setIsOpen(false)}
                                      className="whitespace-nowrap px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-xs hover:bg-blue-100"
                                    >
                                      {subItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={section}
                  onClick={() => handleLinkClick(section)}
                  className={`text-left hover:bg-blue-100 px-2 py-1 rounded ${
                    activeLink === section
                      ? "text-[#003B73] font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
