import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
    gameId: number
}

const Screenshots = ({gameId}: Props) => {
    const {data, error, isLoading} = useScreenshot(gameId);

    if (isLoading) return null;

    if (error) throw error;

    console.log('data', data)

    return (
        <SimpleGrid columns={{ base: 1, md: 2}} spacing={2}>
            {data?.results.map((imageData) => <Image key={imageData.id} src={imageData.image} />)}
        </SimpleGrid>
    )
}

export default Screenshots;