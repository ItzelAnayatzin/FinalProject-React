import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"
export const ItemList = ({prods, template}) => {
    return (
      <>
        {
          template === 'item' 
          ? 
          prods.map(element => <Item item={element} key={element.id}/>)
          :
          prods.map(element => <ItemCart item={element} key={element.id}/>)
        }
      </>
    )
  }