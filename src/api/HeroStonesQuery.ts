import { useQuery } from "@tanstack/react-query"
import axios from "axios"
export const useHeroStonesQuery = ()=> {
    return useQuery({
        queryKey: ["hero-stones"],
        queryFn: async () => {
            const res = await axios.get("http://localhost:3000/hero-stones")
            return res.data;
        }
    })
} 