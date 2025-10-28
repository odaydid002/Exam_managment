import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavElement from './components/navigators/navElement';
import NavContainer from './components/navigators/navContainer';
import NavElContainer from './components/navigators/navElementsContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>,
)
