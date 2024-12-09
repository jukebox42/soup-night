"use client"
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { Error } from "../ui/Error";
import { checkCode } from "#/db/code";
import { List } from "../ui/List";

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
    return <Error />;
  }

  if (isLoading) {
    return (
      <CircularProgress color="secondary" size="5rem" />
    );
  }

  return (
    <List />
  );
}
