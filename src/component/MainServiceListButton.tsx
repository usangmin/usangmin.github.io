
interface buttonProps{
    title : string
    buttonIndex : number
    activeButtonIndex : number
    setActiveButtonIndex : React.Dispatch<React.SetStateAction<number>>
    active : boolean
}

function MainServiceListButton(props:buttonProps){

    const onActive = () =>{
        props.setActiveButtonIndex(props.buttonIndex);
    }

    return(
        <button 
            className={`${props.active? 'active' : null}`}
            onClick = {onActive}
            key ={props.buttonIndex}
        >
            {props.title}
        </button>
    );
}

export default MainServiceListButton;