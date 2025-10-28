import styles from './navigator.module.css';

function NavElement(props) {
    return ( 
        <div id={props.id} onClick={props.onClick} className={`pdv flex a-center overflow-h ${styles.navEl} ${props.classNames}`}>
            <div className={`flex center ${styles.iconHolder}`}>
                <i className={`${props.icon}`}></i>
            </div>
            <h5 className='c-text m w-400'>{props.title}</h5>
        </div>
     );
}

export default NavElement;