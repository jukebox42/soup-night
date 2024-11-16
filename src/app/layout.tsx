import type { Metadata } from "next";
import theme from "#/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Container, CssBaseline, Paper } from "@mui/material";
import styles from "./page.module.css";
import { Suspense } from "react";
import { CornerImage } from "./ui/CornerImage";

export const metadata: Metadata = {
  title: "Soup Night",
  description: "",
};

const bc = "#DE9B72";
const sp = "5px";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <div className="secret-codes" dangerouslySetInnerHTML={{__html: "<!-- Fooled you. -->"}} />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="sm" sx={{ p: 0 }}>
            <Box
              sx={{ height: "calc(100svh - 10px)", m: sp, border: `1px solid ${bc}` }}
            >
              <Box
                sx={{ height: "calc(100svh - 23px)", m: sp, border: `${sp} solid ${bc}` }}
              >
                <Box
                  sx={{
                    height: "calc(100svh - 43px)",
                    m: sp,
                    p: sp,
                    border: `1px solid ${bc}`,
                    position: "relative"
                  }}
                >
                  <CornerImage className={styles.tl} />
                  <CornerImage className={styles.tr} />
                  <CornerImage className={styles.bl} />
                  <CornerImage className={styles.br} />
                  <Paper elevation={0} sx={{ p: 5, textAlign: "center" }}>
                    <Suspense>
                      {children}
                    </Suspense>
                  </Paper>
                </Box>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
