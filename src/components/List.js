function List({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <span>{item.field}: </span>
                    {item.value}
                </li>
            ))}
        </ul>
    );
}

export default List;
