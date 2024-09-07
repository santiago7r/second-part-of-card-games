import { useQuery } from "@tanstack/react-query";
import { IscreenShot } from "../entities/Iscreenshot";
import APIClient from "../services/api-client";


const useScreenshot = (game_pk: string) => {
    const apiClient = new APIClient<IscreenShot>(`/games/${game_pk}/screenshots`);

    return (
        useQuery({
            queryKey: ['screenshots', game_pk],
            queryFn: apiClient.getAll
        })
    )
}

export default useScreenshot;