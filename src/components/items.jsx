import React, { useState } from 'react';
import './items.scss';

function FirstPage({ items, selectedItems, toggleSelection, onNext }) {
    const canProceed = selectedItems.length > 0;

    return (
        <div className="page first-page">
            <h4 className="pag-head">
                <span>{items.length} products</span>
                <span className="grayed">{selectedItems.length} selected</span>
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
            <footer
                className={canProceed ? "active" : "grayed"}
                onClick={() => {
                    if (canProceed) {
                        onNext();
                    }
                }}
            >
                NEXT
            </footer>
        </div>
    );
}


function SecondPage({ selectedItems }) {
    return (
        <div className="page second-page">
            <h4 className="pag-head-grid">
                <span>Your product selection</span>
                <p>EDIT</p>
            </h4>
            {selectedItems.length > 0 ? (
                <div className="selected-items-list">
                    {selectedItems.map(item => (
                        <div key={item} className="selected-item">
                            <img src={`/imgs/items/${item}.png`} alt={`Item ${item}`} />
                            <div>
                                <h4>
                                    <span className="grayed">PRODUCT Name HERE</span> £250
                                </h4>
                                <button className='active'>
                                    Ready!
                                </button>
                                <p>EDIT</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No items selected</p>
            )}
        </div>
    );
}

function App({ activePage, onNext, onBack }) {
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
        <div className="app">
            <div
                className="page-container"
                style={{
                    transform: activePage === 1 ? 'translateX(0%)' : 'translateX(-50%)'
                }}
            >
                <FirstPage
                    items={items}
                    selectedItems={selectedItems}
                    toggleSelection={toggleSelection}
                    onNext={onNext}
                />
                <SecondPage selectedItems={selectedItems} />
            </div>
        </div>
    );
}

export default App;
