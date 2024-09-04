import { Button, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import ExpandableText from "./ExpandableText";
import GameAtributes from "./GameAtributes";


const GameDetailPage = () => {

    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner />;

    if(error || !game) throw error;

    return (
        <>
            <Heading>{game.name} </Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAtributes game={game} />

        </>
    )
}

export default GameDetailPage;