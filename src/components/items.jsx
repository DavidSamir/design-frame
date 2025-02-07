import React, { useState } from 'react';
import './items.scss';

function App() {
    const items = Array.from({ length: 10 }, (_, index) => index + 1);
    const [selectedItems, setSelectedItems] = useState([]);

    const toggleSelection = (item) => {
        setSelectedItems((prevSelected) =>
            prevSelected.includes(item)
                ? prevSelected.filter((selected) => selected !== item)
                : [...prevSelected, item]
        );
    };

    return (
        <>
            <h4 className='pag-head'>
                <span>{items.length} products</span>
                <span className='grayed'>{selectedItems.length} selected</span>
            </h4>
            <div className="items">
                {items.map((item, idx) => {
                    const isSelected = selectedItems.includes(item);
                    return (
                        <div
                            className={`item ${isSelected ? 'selected' : ''}`}
                            key={item}
                            style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                            onClick={() => toggleSelection(item)}
                        >
                            <span className="check-indicator">
                                <svg
                                    width="10"
                                    height="8"
                                    viewBox="0 0 10 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.625 1.37457L3.375 6.62457L0.75 3.99957"
                                        stroke="white"
                                        strokeLinecap="square"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <img src={`/imgs/items/${item}.png`} alt={`Item ${item}`} />
                            <h4>
                                <span className="grayed">PRODUCT Name HERE</span> £250
                            </h4>
                        </div>
                    );
                })}
            </div>
            <footer className='active'>
                NEXT
            </footer>
        </>
    );
}

export default App;
