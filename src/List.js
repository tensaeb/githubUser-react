import React, { useState, useEffect } from 'react'

const api = 'https://api.github.com/users';

const List = () => {
    const [users, setUsers] = useState([])
    const getUser = async () => {
        const response = await fetch(api)
        const users = await response.json()
        setUsers(users)
    }

    useEffect(() => {
        getUser()
        document.title = "Github Users"
    }, [])


    return (
        <div>
            <h2 id='title'>Github Users</h2>
            <ul className='users'>
                {users.map((user) => {
                    const { login, id, avatar_url, html_url } = user
                    return (
                        <li key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <h4>{login}</h4>
                                <a href={html_url}> Profile </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List
