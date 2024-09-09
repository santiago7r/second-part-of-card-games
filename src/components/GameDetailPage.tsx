import { Grid, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
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
        <SimpleGrid columns={{ base: 1, md: 2}} spacing={2}>
                <GridItem>
                    <Heading>{game.name} </Heading>
                    <ExpandableText>{game.description_raw}</ExpandableText>
                    <GameAtributes game={game} />
                </GridItem>
                <GridItem>
                    <GameTrailer gameId={game.id} />
                    <Screenshots gameId={game.id} />
                </GridItem>
        </SimpleGrid>
    )
}

export default GameDetailPage;