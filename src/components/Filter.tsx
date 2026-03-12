import React from 'react';

type SearchBarProps = {
    searchTerm: string;
    onSearch: (rvalue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
    return (
        <div>
            <input
                value={searchTerm}
                autoFocus
                type="text"
                id="search"
                className="search"
                autoComplete="off"
                placeholder="Поиск товаров на сайте..."
                onChange={(e) => onSearch(e.target.value)}>
            </input>
        </div>
    )
}

export default SearchBar;