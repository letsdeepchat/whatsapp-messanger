import { useContext, useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Search, MoreVert } from '@mui/icons-material';
import { AccountContext } from '../../../context/AccountProvider';
import { defaultProfilePicture } from '../../../constants/data';

const Header = styled(Box)`
    height: 44px;
    background: #ededed;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Image = styled('img')({
    width: 40,
    height: 40,
    objectFit: 'cover',
    borderRadius: '50%'
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;

const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0.6);
    margin-left: 12px !important;
`;

const ChatHeader = ({ person }) => {
    const url = person.picture || defaultProfilePicture;
    const { activeUsers, socket } = useContext(AccountContext);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const currentSocket = socket.current;

        const handleTyping = ({ senderSub }) => {
            if (senderSub === person.sub) {
                setIsTyping(true);
            }
        };

        const handleStopTyping = ({ senderSub }) => {
            if (senderSub === person.sub) {
                setIsTyping(false);
            }
        };

        if (currentSocket) {
            currentSocket.on('typing', handleTyping);
            currentSocket.on('stopTyping', handleStopTyping);
        }

        return () => {
            if (currentSocket) {
                currentSocket.off('typing', handleTyping);
                currentSocket.off('stopTyping', handleStopTyping);
            }
        };
    }, [socket, person.sub]);

    const getStatus = () => {
        if (isTyping) return 'Typing...';
        return activeUsers?.some(user => user.sub === person.sub) ? 'Online' : 'Offline';
    };

    return (
        <Header>
            <Image src={url} alt="display picture" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{getStatus()}</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    );
};

export default ChatHeader;
