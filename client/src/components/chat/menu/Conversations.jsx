import { useState, useEffect, useContext } from 'react';
import { Box, styled, Divider } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import Conversation from './Conversation';
import { getUsers } from '../../../service/api';

const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Conversations = ({ text }) => {
    const [users, setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers();
                // Ensure data is an array before filtering
                const filteredData = Array.isArray(data)
                    ? data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
                    : [];
                setUsers(filteredData);
            } catch (error) {
                console.error('Failed to fetch users:', error);
                setUsers([]); // Fallback to empty array
            }
        };
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        });

        // Cleanup: Remove event listener on unmount
        return () => {
            socket.current.off('getUsers');
        };
    }, [account, socket, setActiveUsers]); // Added socket and setActiveUsers

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub &&
                        <>
                            <Conversation user={user} />
                            {
                                users.length !== (index + 1) && <StyledDivider />
                            }
                        </>
                ))
            }
        </Component>
    )
}

export default Conversations;