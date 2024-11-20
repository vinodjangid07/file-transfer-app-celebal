import { createContext, useState, useEffect } from "react";
import io from 'socket.io-client';

const AppContext = createContext();

const socket = io('http://localhost:5000');

const AppProvider = ({ children }) => {
    const [roomId, setRoomId] = useState('');
    const [enteredRoomId, setEnteredRoomId] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [receivedFiles, setReceivedFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleCreateRoom = () => {
        const newRoomId = Math.floor(100000 + Math.random() * 900000).toString();
        setRoomId(newRoomId);
        socket.emit('createRoom', newRoomId);
        console.log('Created Room ID:', newRoomId);
    }

    const handleEnterRoomId = (e) => {
        setEnteredRoomId(e.target.value);
        console.log('Entered Room ID:', e.target.value);
    }

    const handleConnect = () => {
        console.log('Connecting with Room ID:', enteredRoomId);
        socket.emit('joinRoom', enteredRoomId);
    }

    const handleFileUpload = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = {
                roomId: roomId || enteredRoomId,
                file: e.target.result,
                fileName: file.name
            };
            socket.emit('file', data);
            setUploadStatus('Upload successful');
        };
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
            setIsConnected(false);
        });

        socket.on('userJoined', (joinedRoomId) => {
            console.log(`User joined room: ${joinedRoomId}`);
            setIsConnected(true);
            if (!roomId) {
                setRoomId(joinedRoomId);
            }
        });

        socket.on('file', (data) => {
            setReceivedFiles((prevFiles) => [...prevFiles, data]);
            console.log('Received file:', data);
        });

        socket.on('error', (message) => {
            console.error(message);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('userJoined');
            socket.off('file');
            socket.off('error');
        };
    }, [roomId, enteredRoomId]);

    return (
        <AppContext.Provider value={{ roomId, handleCreateRoom, handleEnterRoomId, enteredRoomId, handleConnect, isConnected, handleFileUpload, receivedFiles, uploadStatus }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider };
