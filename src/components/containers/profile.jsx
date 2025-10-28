function Profile(props) {
    const styles = {
        width: `${props.width}px`,
        marginTop: `${props.mt}em`,
        marginBottom: `${props.mb}em`,
        marginRight: `${props.mr}em`,
        marginLeft: `${props.ml}em`,
        paddingTop: `${props.pt}em`,
        paddingBottom: `${props.pb}em`,
        paddingLeft: `${props.pl}em`,
        paddingRight: `${props.pr}em`,
        flex: "0 0 auto",
    };
    return ( 
        <div id={props.id} style={styles} className={`flex center overflow-h circle`}>
            <img className="full" src={props.image} alt="Profile" />
        </div>
     );
}

export default Profile;