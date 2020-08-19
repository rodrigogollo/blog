export default {
    FixedNavbar: {
        display: "flex",
        flexDirection: "row",
        width: "50vw",
        height: "6.5rem",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        backgroundColor: "rgba(0, 0, 0, 0.97)",
        color: "white",
        "& ul": {
            listStyle: "none",
            display: "flex",
            padding: "1rem"
        },
        "& li": {
            margin: "1rem",
            padding: "1rem",
            "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                cursor: "pointer"
            }
        }
    },
    textLink: {
        textDecoration: "none",
        color: "white"
    }
}
