const CartWidget = () => {
    return (
        <div style={{ position: "relative", cursor: "pointer" }}>
            🛒
            <span
                style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    background: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                }}
            >
                3
            </span>
        </div>
    );
};

export default CartWidget;