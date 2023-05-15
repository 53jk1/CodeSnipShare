import React, { useState, useEffect } from 'react';
import { getAllSnippets } from '../api/api';

const MainPage = () => {
    const [snippets, setSnippets] = useState([]);

    useEffect(() => {
        const fetchSnippets = async () => {
            const fetchedSnippets = await getAllSnippets();
            setSnippets(fetchedSnippets);
        };

        fetchSnippets();
    }, []);

    return (
        <div>
            <h1>Welcome to CodeSnipShare!</h1>
            {snippets.map(snippet => (
                <div key={snippet._id}>
                    <h2>{snippet.author.username}</h2>
                    <pre>{snippet.code}</pre>
                    <p>{snippet.language}</p>
                </div>
            ))}
        </div>
    );
};

export default MainPage;
