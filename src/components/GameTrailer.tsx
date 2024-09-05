import useTrailer from "../hooks/useTrailer";

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const { data, isLoading, error } = useTrailer(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <video 
            src={data?.results[0].data[480]}
            poster={data?.results[0].preview}
            controls
        />
    )


}

export default GameTrailer;