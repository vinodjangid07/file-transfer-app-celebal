import { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';

const AppContext = createContext();

const socket = io('http://localhost:5000');

const AppProvider = ({ children }) => {
    const [roomId, setRoomId] = useState();
    const [value, setValue] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    const handleonClick = () => {
        let Id = Math.floor(100000 + Math.random() * 900000).toString();
        setRoomId(Id);
        console.log('Created Room ID:', Id);
    }

    const onchange = (e) => {
        setValue(e.target.value);
    }

    const handleConnect = () => {
        console.log('Connecting with Room ID:', value, 'Current Room ID:', roomId);
        if (value === roomId) {
            setIsConnected(true);
            console.log("Connected");
            socket.emit('joinRoom', roomId);
        } else {
            console.log("Room ID does not match");
        }
    }

    const handleFileUpload = (file) => {
        if (isConnected) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = {
                    roomId,
                    file: e.target.result,
                    fileName: file.name
                };
                socket.emit('file', data);
            };
            reader.readAsDataURL(file);
        } else {
            console.log("Not connected to a room");
        }
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        socket.on('file', (data) => {
            console.log('Received file:', data);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('file');
        };
    }, []);

    return (
        <AppContext.Provider value={{ roomId, handleonClick, onchange, value, handleConnect, isConnected, handleFileUpload }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };
