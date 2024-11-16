"use client"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, CircularProgress, Grid2 as Grid, Typography } from "@mui/material";
import Form from "./ui/Form";
import { checkCode } from "#/db/code";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const validateCode = async (code: string) => {
    const response = await checkCode(code);
    if (response.error) {
      console.error("ERROR", response.error);
      setIsError(true);
      return
    }
    if (!response.success) {
      router.push("/error");
      return
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      router.push("/error");
      return;
    }
    
    validateCode(code);
  }, []);

  if (isError) {
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

  if (isLoading) {
    return (
      <CircularProgress color="secondary" size="5rem" />
    );
  }

  return (
    <Form />
  );
}
