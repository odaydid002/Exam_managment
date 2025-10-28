import NavElement from './navElement';
import NavContainer from './navContainer';
import NavElContainer from './navElementsContainer';

function Navigator() {
    return ( 
        <NavContainer classNames="ease-in-out pos-abs pos-center-v mrl">
            <NavElContainer title="Main">
                <NavElement onClick={()=>{alert("Home")}} id="el1" icon="fa-solid fa-house" title="Home"></NavElement>
                <NavElement onClick={()=>{alert("Calendar")}} id="el2" icon="fa-regular fa-calendar" title="Calendar"></NavElement>
            </NavElContainer>
            <NavElContainer title="System" classNames="mrta">
                <NavElement onClick={()=>{alert("Settings")}} id="el2" icon="fa-solid fa-gear" title="Settings"></NavElement>
                <NavElement onClick={()=>{alert("Notification")}} id="el2" icon="fa-regular fa-bell" title="Notification"></NavElement>
            </NavElContainer>
        </NavContainer>
     );
}

export default Navigator;