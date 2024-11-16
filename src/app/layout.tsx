import type { Metadata } from "next";
import theme from "#/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Paper } from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Soup Night",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div className="look-in-here" dangerouslySetInnerHTML={{__html: "<!-- Fooled you. -->"}} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{ height: "calc(100vh - 10px)", m: "5px", border: "1px solid #DE9B72" }}
          >
            <Box
              sx={{ height: "calc(100vh - 23px)", m: "5px", border: "5px solid #DE9B72" }}
            >
              <Box
                sx={{ height: "calc(100vh - 43px)", m: "5px", p: "5px", border: "1px solid #DE9B72", position: "relative" }}
              >
                <Image src="/corner-decoration.jpg" alt="decoration" width="48" height="48" className={styles.tl} priority />
                <Image src="/corner-decoration.jpg" alt="decoration" width="48" height="48" className={styles.tr} priority />
                <Image src="/corner-decoration.jpg" alt="decoration" width="48" height="48" className={styles.bl} priority />
                <Image src="/corner-decoration.jpg" alt="decoration" width="48" height="48" className={styles.br} priority />
                <Paper elevation={0} sx={{ p: 5, textAlign: "center" }}>
                  <Suspense>
                    {children}
                  </Suspense>
                </Paper>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
