import { useQuery } from "@tanstack/react-query";
import { ITrailer } from "../entities/Trailer";
import APIClient from "../services/api-client";



const useTrailer = (gameId: number) => {
    const apiClient = new APIClient<ITrailer>(`/games/${gameId}/movies`)

    return (
        useQuery({
            queryKey: ['trailer', gameId],
            queryFn: apiClient.getAll
          
        })
    )
} 

export default useTrailer;