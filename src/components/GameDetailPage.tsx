import { Game } from "../hooks/useGames";



interface Props {
    game: Game
}

const GameDetailPage = ({ game }: Props) => {
    return <h1 style={{color: "red"}}>{game.name}</h1>
}

export default GameDetailPage;