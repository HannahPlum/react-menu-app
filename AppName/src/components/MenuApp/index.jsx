import "/src/App.css";
import Menu from "/src/components/Menu";

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
