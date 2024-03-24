export default function TabButton({children, onSelect}){
    console.log(onSelect)
    return (
    <li>  
        <button onClick={onSelect}>{children}</button>
    </li>
    );
         // props에서 무조건 받는 children 속성을 사용하던지 Attribute를 사용하여 label이라는 속성을 직접받는 두가지 방법이 있다.
}