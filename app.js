// TODO

const { useState } = React;

const GroceryList = (props) => (
  <ul>
    {props.items.map((item => (
      <GroceryListItem item={item}/>
    )))}
  </ul>
);

const GroceryListItem = (props) => {
  const[isHover, setIsHover] = useState(false);

  const style = {
    fontWeight: isHover ? 'bold' : 'normal',
  };

  return (
    <
      li
      style={style}
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
    >
      {props.item}
    </li>
  );
}

ReactDOM.render(
  <GroceryList items={['cucumbers','kale']}/>,
  document.getElementById('app')
);
