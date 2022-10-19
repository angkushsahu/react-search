import "./app.css";
import { useMemo, useState } from "react";
import Items from "./items";

function App() {
    const [search, setSearch] = useState("");
    const [newItemText, setNewItemText] = useState("");
    const [items, setItems] = useState([]);

    const filteredItems = useMemo(
        () =>
            items.filter((item) =>
                item.toLowerCase().includes(search.toLowerCase())
            ),
        [items, search]
    );

    function addItem(e) {
        e.preventDefault();
        setItems((prev) => [...prev, newItemText]);
        setNewItemText("");
    }

    return (
        <main className="root">
            <form onSubmit={addItem}>
                <section className="input_container">
                    <label htmlFor="newItem">New Item : </label>
                    <input
                        type="text"
                        name="newItem"
                        id="newItem"
                        placeholder="Add new item ...."
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                    />
                    <button type="submit" className="submit_button">
                        Add
                    </button>
                </section>
            </form>
            <section className="input_container">
                <label htmlFor="search">Search : </label>
                <input
                    type="text"
                    name="text"
                    id="text"
                    placeholder="Search ...."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>
            <Items items={filteredItems} />
        </main>
    );
}

export default App;
