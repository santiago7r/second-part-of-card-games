import { Box, SimpleGrid } from "@chakra-ui/react";
import { Platform } from "../entities/Platform";

interface Props {
    score: number;
    parent_platforms: { platform: Platform; }[];
}



const GameAtributes = ({score, parent_platforms}: Props) => {

    return (
        <SimpleGrid columns={[2, null, 2]} spacing='100px' marginY={3}>
            <Box bg='#121212' height='80px'>
                <div>Platforms</div>
                {parent_platforms.map((platformObj) => (
                    <ul key={platformObj.platform.id}>
                        <li>
                            {platformObj.platform.name}
                        </li>
                    </ul>
      ))}
            </Box>
            <Box bg='#121212' height='80px'>
                <div>Metascore</div>
                <div>{score}</div>
            </Box>
            <Box bg='#121212' height='80px'>
                <div>Genres</div>
                <div>Info</div>
            </Box>
            <Box bg='#121212' height='80px'>
                <div>Publishers</div>
                <div>Info</div>
            </Box>
        </SimpleGrid>
    )
}

export default GameAtributes;