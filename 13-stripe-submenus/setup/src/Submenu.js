import React from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    position,
    pageData: { page, links },
  } = useGlobalContext();
  //John maneja la posición del submenu con useRef() y .style. Además crea un state para cambiar las clases col-#. Lo hice de otra manera sólo para ensayar.
  // const submenuElem = useRef();

  // const [columns,setColumns]=useState('col-2')

  const { center, bottom } = position;
  // useEffect(() => {
  //   submenuElem.current.style.left = `${center}px`;
  //   submenuElem.current.style.top = `${bottom}px`;
  // }, [position]);

  return (
    <aside
      className={isSubmenuOpen ? "submenu show" : "submenu"}
      // ref={submenuElem}
      style={{ top: `${bottom}px`, left: `${center}px` }}
    >
      <h4>{page}</h4>
      <div
        className={`submenu-center ${
          links.length > 3 ? "col-4" : links.length === 3 ? "col-3" : "col-2"
        }`}
      >
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
