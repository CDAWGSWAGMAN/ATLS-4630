export default function MyList(){
    const items=[
        {text: 'Hello! Im item 1', id: 1},
        {text: 'Hello! Im item 2', id: 2},
        {text: 'Hello! Im item 3', id: 3},
    ];
    const mappedItems = items.map(item => 
        <li key={item.id}>{item.text}</li>
    );
    return(
        <ul>{mappedItems}</ul>
    );

}