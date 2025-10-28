function NavElContainer(props) {
    const styles = {
        height: 'fit-content',
    }
    return ( 
        <div className={`pdv flex column ${props.classNames}`} style={styles}>
            <p className={`ease-in-out curs-default text-a-c c-text-l s pdv`}>
                {props.title}
            </p>
            {props.children}
        </div>
     );
}

export default NavElContainer;