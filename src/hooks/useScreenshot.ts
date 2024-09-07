import { useQuery } from "@tanstack/react-query";
import { IscreenShot } from "../entities/Iscreenshot";
import APIClient from "../services/api-client";


const useScreenshot = (gameId: number) => {
    const apiClient = new APIClient<IscreenShot>(`/games/${gameId}/screenshots`);

    return useQuery({
            queryKey: ['screenshots', gameId],
            queryFn: apiClient.getAll
        })
}

export default useScreenshot;