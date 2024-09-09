import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "./ExpandableText";
import GameAtributes from "./GameAtributes";
import GameTrailer from "./GameTrailer";
import Screenshots from "./Screenshots";


const GameDetailPage = () => {

    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner />;

    if(error || !game) throw error;

    return (
        <>
            <Grid
                templateAreas={`"header video"
                                "atributes screenshots"`}
                gridTemplateRows={'auto auto'}
                gridTemplateColumns={'1fr 1fr'}
            >
                <GridItem area={'header'}>
                    <Heading>{game.name} </Heading>
                    <ExpandableText>{game.description_raw}</ExpandableText>
                </GridItem>
                <GridItem area={'video'}>
                    <GameTrailer gameId={game.id} />
                </GridItem>
                <GridItem area={'atributes'}>
                    <GameAtributes game={game} />
                </GridItem>
                <GridItem area={'screenshots'}>
                    <Screenshots gameId={game.id} />
                </GridItem>
            </Grid>
        </>
    )
}

export default GameDetailPage;