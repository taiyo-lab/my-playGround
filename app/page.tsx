// page.tsx
// use client
import { Box, Button, CircularProgress } from "@mui/material";
import { useState } from "react";

const page = () => {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count</p>
      <button>Increment</button>
      <Box>
        <p>Count</p>
        <p>Count</p>
        <p>Count</p>
        <p>Count</p>
        <p>Count</p>
        <p>Count</p>
      </Box>
      <CircularProgress />
      <Button border>PleaseMeClick</Button>
    </div>
  );
};

export default page;
