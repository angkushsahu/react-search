export default function Items({ items }) {
    return (
        <section className="item_container">
            <h1>Items :</h1>
            {items.map((item, idx) => (
                <p key={idx}>{item}</p>
            ))}
        </section>
    );
}
