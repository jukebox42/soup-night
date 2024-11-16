"use client"
import { useEffect, useState } from "react";
import {Button, FormControl, Grid2 as Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { addGuest } from "#/db/guests";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [fullNameValid, setFullNameValid] = useState(true)
  const [count, setCount] = useState("2");
  const [isError, setIsError] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const validName = fullName !== "" && fullName.length <= 200;
    setFullNameValid(validName)
    const validCount = count !== "" && /^[0-4]/.test(count);
    setIsDisabled(!validName || !validCount);
  }, [fullName, count])

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFullName(value);
  }
  const onCountChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    setCount(value);
  }

  const onClick = async () => {
    setIsSubmitting(true);
    const newGuest = await addGuest(fullName, parseInt(count));
    if (!newGuest?.id) {
      console.error("ERROR", newGuest);
      setIsError(true);
    }
    if (parseInt(count) > 0) {
      router.push("/success");
      return;
    }
    router.push("/skip");
  }

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h2" color="secondary">Soup Night</Typography>
      </Grid>
      <Grid size={12}>
        <Typography variant="body1">
          1/18/2025
          <Typography color="secondary" component="span"> | </Typography>
          4:00 PM
        </Typography>
      </Grid>
      <Grid size={12}>
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={fullName}
          onChange={onNameChange}
          disabled={isSubmitting}
          error={fullName !== "" && !fullNameValid}
        />
      </Grid>
      <Grid size={12} sx={{ textAlign: "left" }}>
        <FormControl fullWidth>
          <InputLabel>Adults</InputLabel>
          <Select
            value={count}
            label="Adults"
            onChange={onCountChange}
            disabled={isSubmitting}
          >
            <MenuItem value={0}>Cannot Attend</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={12}>
        <Button
          disabled={isDisabled || isSubmitting}
          variant="contained"
          size="large"
          onClick={onClick}
        >
          RSVP
        </Button>
      </Grid>
      {isError && (
        <Grid size={12}>
          <Typography variant="body1" color="error">
          There was an error. Try again.
          </Typography>
        </Grid>
      )}
      <Grid size={12}>
        <Typography variant="body1">
          BYOB
          <Typography color="secondary" component="span"> | </Typography>
          Attire: Casual
          <Typography color="secondary" component="span"> | </Typography>
          Kids welcome
        </Typography>
      </Grid>
    </Grid>
  );
}