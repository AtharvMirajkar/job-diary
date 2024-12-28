import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Placeholder function for login
    console.log({ email, password });
  };

  const signUp = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box
        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md"
        sx={{ boxShadow: 3 }}
      >
        <Typography
          variant="h5"
          className="text-center mb-6 font-bold text-gray-700"
        >
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-4"
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-4"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="mt-6"
          onClick={handleLogin}
          sx={{ py: 1.5, mt: 1.5 }}
        >
          Login
        </Button>
        <Typography
          variant="body2"
          className="text-center mt-4 text-gray-600"
          sx={{ mt: 1.5 }}
        >
          Don't have an account?{" "}
          <Link
            component="button"
            onClick={signUp}
            underline="hover"
            className="text-blue-500"
          >
            Signup
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default Login;
