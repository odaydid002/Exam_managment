import unitime from "../assets/logo.png";

export default function Logo(props) {

    const styles = {
        marginTop: `${props.mt}em`,
        marginBottom: `${props.mb}em`,
        marginRight: `${props.mr}em`,
        marginLeft: `${props.ml}em`,
        paddingTop: `${props.pt}em`,
        paddingBottom: `${props.pb}em`,
        paddingLeft: `${props.pl}em`,
        paddingRight: `${props.pr}em`,
        width: `${props.width?props.width+"px":"100%"}`,
        borderRadius: "8px",
    }

    return (
        <img style={styles} src={unitime} alt="Logo"/>
    )
}
