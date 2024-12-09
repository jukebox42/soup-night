"use client"
import { useEffect, useState } from "react";
import { Prisma } from "@prisma/client";
import dayjs from "dayjs";
import { getGuests } from "#/db/guests";
import {
  Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

export const List = () => {
  const [rows, setRows] = useState<Prisma.GuestCreateInput[]>([]);

  const loadGuests = async () => {
    const guests = await getGuests();
    setRows(guests);
  }

  useEffect(() => {
    loadGuests();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography variant="h2" color="secondary">Soup Night</Typography>
      </Grid>
      <Grid size={12}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Count</TableCell>
                <TableCell>Signup</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.count}</TableCell>
                <TableCell>
                  <time dateTime={(row.createdAt as Date).toString()}>
                    {dayjs(row.createdAt as Date).format("MMMM D, YYYY")}
                  </time>
                </TableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}