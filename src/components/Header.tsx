import React from 'react';
import SearchBar from "./Filter"


type HeaderProps = {
    title: string;
    searchTerm: string;
    onSearch: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ title, searchTerm, onSearch }) => {
    return (
        <header>
            <h1>{title} </h1>
            <div style={{ flex: 1 }}>
                <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
            </div>
        </header>
    );
};

export default Header;