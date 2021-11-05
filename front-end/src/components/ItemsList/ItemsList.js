import Item from '../Item/Item'

const ItemsList = (props) => {
    let items = props.list
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(item => <Item key={item.id} details={item} img="https://picsum.photos/200" />)
    return (
        <div>
            {items}
        </div>
    )
}

export default ItemsList;
