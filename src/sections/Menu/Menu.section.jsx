import React, { useState } from "react";
import "./menu.css";
import SectionTitle from "../../components/Title/SectionTitle.component";
import MenuList from "../../components/Menu/MenuList.component";
import MenuItem from "../../components/Menu/MenuItem.component";
import { menu } from "../../utils/Data";

const allMenuList = ["All", ...new Set(menu.map((menu) => menu.category))];

const Menu = () => {
  const [menuList, setMenuList] = useState(allMenuList);
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category === "All") {
      setMenuItems(menu);
      return;
    }

    const navMenuItems = menu.filter((item) => item.category === category);
    setMenuItems(navMenuItems);
  };
  return (
    <section className="menu section">
      <div className="container">
        <div className="menu-header">
          <SectionTitle
            subtitle="Our Menu"
            title={
              <>
                Unlock the <span>Flavor Vault</span>
              </>
            }
          />
          <ul className="menu-list">
            <MenuList menuList={menuList} filterItems={filterItems} />
          </ul>
        </div>
        <div className="menu-container grid">
          <MenuItem menuItems={menuItems} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
