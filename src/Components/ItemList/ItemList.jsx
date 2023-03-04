import { Item } from "../Item/Item"
export const ItemList = ({prods}) => {
    return (
      <>
          {prods.map(element => <Item item={element} key={element.id}/>)}
      </>
    )
  }