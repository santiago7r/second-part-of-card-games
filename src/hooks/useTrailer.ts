import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";
import APIClient from "../services/api-client";

interface ITrailer {
    data: { 480: string, max: string},
    id: number,
    name: string,
    prview: string
}


const useTrailer = ({id}: ITrailer) =>{
    const apiClient = new APIClient<ITrailer>(`/games/${id}/movies`)

    return (
        useQuery({
            queryKey: ['trailer', id],
            queryFn: apiClient.getAll
          
        })
    )
} 

export default useTrailer;