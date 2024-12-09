"use client"
import { Button, Grid2 as Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const Error = () => {
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="body1" color="error">
          There was an error. Try again.
        </Typography>
      </Grid>
      <Grid size={12}>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.refresh()}
        >
          Retry
        </Button>
      </Grid>
    </Grid>
  );
}