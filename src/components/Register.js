import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before making a request

        try {
            const response = await axios.post(process.env.REACT_APP_BASE_URL + '/register', {
                username,
                password,
                firstName,
                lastName
            });

            const result = response.data;
            console.log(result);
            alert(result.message);

            if (result.status === true) {
                // เปลี่ยนเส้นทางไปหน้าล็อคอิน
                window.location.href = '/signin';
            }
        } catch (err) {
            console.log(err);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <Container maxWidth="xs">
            <Box 
                component="form" 
                onSubmit={handleSubmit} 
                sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>

                {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}

                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    sx={{ mt: 2 }}
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
}

export default Register;
