"use client"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, CircularProgress, Grid2 as Grid, Typography } from "@mui/material";
import Form from "./ui/Form";
import prisma from "#/db/prisma";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) {
      router.push("/error");
      return;
    }
    // do database check
    setTimeout(() => setIsLoading(false), 2000);

    // if there's an error matching the code
    // router.push("/error");
  }, [])

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
    )
  }

  return (
    <Form />
  )
}
