import NavElement from './navElement';
import NavContainer from './navContainer';
import NavElContainer from './navElementsContainer';

function Navigator(props) {
    return ( 
        <NavContainer id={props.id} classNames={props.classNames}>
            <NavElContainer navState={props.navState} title="Main">
                <NavElement onClick={()=>{alert("Home")}} id="el1" icon="fa-solid fa-house" title="Home"></NavElement>
                <NavElement onClick={()=>{alert("Calendar")}} id="el2" icon="fa-regular fa-calendar" title="Calendar"></NavElement>
            </NavElContainer>
            <NavElContainer navState={props.navState} title="System" classNames="mrta">
                <NavElement onClick={()=>{alert("Settings")}} id="el2" icon="fa-solid fa-gear" title="Settings"></NavElement>
                <NavElement onClick={()=>{alert("Notification")}} id="el2" icon="fa-regular fa-bell" title="Notification"></NavElement>
            </NavElContainer>
        </NavContainer>
     );
}

export default Navigator;