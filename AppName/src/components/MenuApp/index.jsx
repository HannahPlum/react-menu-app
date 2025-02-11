import "C:/dig3716c/moduleFive/react-menu-app/AppName/src/App.css";
import Menu from "C:/dig3716c/moduleFive/react-menu-app/AppName/src/components/Menu";

const MenuApp = ({ menuData }) => {
  console.log(menuData);
  return (
    <div className="menu-app">
      {menuData.map((menu) => (
        <Menu
          key={menu.menuName}
          menuName={menu.menuName}
          menuItems={menu.menuItems}
        />
      ))}
    </div>
  );
};
export default MenuApp;
