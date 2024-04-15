import React, { useState, useEffect } from "react";
import { Link as RouterLink } from 'react-router-dom';
import List from '../components/List';
import './Profile.css';

function Profile({ userName }) {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});
    const items = [
        { field: 'Github', value: <a href={profile.html_url} target="_blank" rel="noopener noreferrer">{profile.html_url}</a> },
        { field: 'Name', value: profile.name },
        { field: 'Company', value: profile.company },
        { field: 'Location', value: profile.location },
        { field: 'Bio', value: profile.bio }
    ];

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            const result = await response.json();
            if (result) {
                setProfile(result);
                setLoading(false);
            }
        }
        fetchData();
    }, [userName]);

    return (
        <div className='Profile-container'>
            <h2>About me</h2>
            {loading ? <span>Loading...</span> :
                <div>
                    <img
                        className='Profile-avatar'
                        src={profile.avatar_url}
                        alt={profile.name}
                    />
                    <List items={items} />
                </div>
            }
        </div>
    );
}

export default Profile;
