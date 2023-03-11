import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const personalDetails = {
    name: "David Danielian",
    location: "Watertown, MA",
    tagline: "I'm a Developer",
    email: "daviddanielian3@gmail.com",
    availability: "Open for work",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in psychology allows me to approach each project with a deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <AnimatedRoutes personalDetails={personalDetails} />
      </ThemeProvider>
    </>
  );
}

export default App;
