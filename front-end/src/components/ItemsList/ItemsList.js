import Item from '../Item/Item'

const ItemsList = (props) => {
    const items = props.list
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => <Item saved={props.saved} user={props.user} key={item.id} details={item} img="https://picsum.photos/200" />)
        
    return (
        <div>
            {items}
        </div>
    )
}

export default ItemsList;
