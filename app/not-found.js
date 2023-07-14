import Link from 'next/link';
import { Box, Typography, Button } from '@mui/material';
 
export default function NotFound() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: 120, fontWeight: "bold", mb: 4 }}
        >
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Oops! Page not found.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </Typography>
        <Link to='/'>
        <Button variant="contained" color="primary">
          Go to Home
        </Button>
        </Link>
      </Box>
  </>
  )
}