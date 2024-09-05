import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";
import APIClient from "../services/api-client";

interface ITrailer {
    data: { 480: string, max: string},
    id: number,
    name: string,
    prview: string
}


const useTrailer = (gameId: number) =>{
    const apiClient = new APIClient<ITrailer>(`/games/${gameId}/movies`)

    return (
        useQuery({
            queryKey: ['trailer', gameId],
            queryFn: apiClient.getAll
          
        })
    )
} 

export default useTrailer;