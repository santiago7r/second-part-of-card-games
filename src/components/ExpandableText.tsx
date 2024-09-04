import { Button, Text } from "@chakra-ui/react";
import { useState } from "react"

interface Props {
    children: string;
}

const ExpandableText = ({children} : Props) => {
    const [expanded, setExpanded] = useState(false);
    const limit = 300;

    if (children.length <= limit)
        return <Text>{children }</Text>;

    const text = expanded ? children : children.substring(0, limit) + '...';

    return (
        <Text>{text}
            <Button
                size='xs'
                fontWeight='blod'
                onClick={() => setExpanded(!expanded)}
                colorScheme='yellow'
                marginLeft={1}
            >
                {expanded ? 'Show less' : 'Read More'}
            </Button>
        </Text>
    )
}

export default ExpandableText;