import React, { useState, useEffect } from 'react';
import { getSnippetById, updateSnippet, deleteSnippet } from '../api/api';

const Snippet = ({ match, history }) => {
    const [snippet, setSnippet] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedCode, setUpdatedCode] = useState('');

    useEffect(() => {
        const fetchSnippet = async () => {
            const fetchedSnippet = await getSnippetById(match.params.id);
            setSnippet(fetchedSnippet);
            setUpdatedCode(fetchedSnippet.code);
        };

        fetchSnippet();
    }, [match.params.id]);

    const handleUpdate = async () => {
        const updatedSnippet = await updateSnippet(snippet._id, { ...snippet, code: updatedCode });
        setSnippet(updatedSnippet);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await deleteSnippet(snippet._id);
        history.push('/'); // Redirect to the main page
    };

    return (
        <div>
            {snippet && (
                <>
                    <h2>{snippet.author.username}</h2>
                    {isEditing ? (
                        <textarea value={updatedCode} onChange={(e) => setUpdatedCode(e.target.value)} />
                    ) : (
                        <pre>{snippet.code}</pre>
                    )}
                    <p>{snippet.language}</p>
                    {isEditing ? (
                        <button onClick={handleUpdate}>Save</button>
                    ) : (
                        <button onClick={() => setIsEditing(true)}>Edit</button>
                    )}
                    <button onClick={handleDelete}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Snippet;
