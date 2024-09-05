import useTrailer from "../hooks/useTrailer";

interface Props {
    gameId: number;
}

const GameTrailer = ({gameId}: Props) => {
    const { data, isLoading, error } = useTrailer(gameId);


}

export default GameTrailer;