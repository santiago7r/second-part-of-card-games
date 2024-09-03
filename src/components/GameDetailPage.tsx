import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";


const GameDetailPage = () => {
    const [showMore, setShowMore] = useState(false);

    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    const text = game?.description_raw;

    if (isLoading) return <Spinner />;

    if(error || !game) throw error;

    return (
        <>
            <Heading>{game.name} </Heading>
            <Text>{showMore ? text : `${text?.substring(0, 250)}`}</Text>
            <Button onClick={() => setShowMore(!showMore)}>
                {showMore ? "Show less" : "Show more"}
            </Button>

        </>
    )
}

export default GameDetailPage;