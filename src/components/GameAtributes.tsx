import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import { Platform } from "../entities/Platform";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
    game: Game;
}



const GameAtributes = ({game}: Props) => {

    return (
        <SimpleGrid columns={2} as='dl'>
        <DefinitionItem term="Platform">
            {game.parent_platforms?.map(({platform}) =>
                (<Text
                    key={platform.id}
                >
                    {platform.name}
                </Text>))
            }
        </DefinitionItem>
        <DefinitionItem term="Metascore">
            <CriticScore score={game.metacritic} />
        </DefinitionItem>
        <DefinitionItem term="Genres">
            {game.genres.map( (genre) => 
                <Text key={genre.id}>{genre.name}</Text>
            )}
        </DefinitionItem>
        <DefinitionItem term="Publisher">
            {game.publishers?.map((p) => <Text key={p.id}>{p.name}</Text>)}
        </DefinitionItem>
    </SimpleGrid>
    )
}

export default GameAtributes;