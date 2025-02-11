import MenuItem from "C:/dig3716c/moduleFive/react-menu-app/AppName/src/components/MenuItem";

const Menu = ({ menuName, menuItems }) => {
  console.log(menuItems);
  return (
    <div className="menu">
      <h1>{menuName} Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <MenuItem
            key={item.itemId}
            itemId={item.itemId}
            itemPrice={item.itemPrice}
            itemName={item.itemName}
            itemDescription={item.itemDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
