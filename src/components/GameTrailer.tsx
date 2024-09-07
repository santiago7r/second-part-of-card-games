import useTrailer from "../hooks/useTrailer";

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const { data, isLoading, error } = useTrailer(gameId);

    if (isLoading) return null;

    if (error) throw error;

    const vid = data?.results[0];

    if(!vid) return null

    return (
        <video 
            src={vid.data[480]}
            poster={data?.results[0]?.preview}
            controls
        />
    )


}

export default GameTrailer;