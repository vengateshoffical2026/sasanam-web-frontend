import { BrowserRouter, Route, Routes } from "react-router-dom"
import HeroStones from "./pages/HeroStones"
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HeroStones />} />
        
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}


export default App
