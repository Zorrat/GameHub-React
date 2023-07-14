import React from "react";
import { Game } from "../hooks/useGames";
import { Card, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojis from "./Emojis";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <HStack justifyContent="space-between" marginBottom="3">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIconList>
        <CriticScore score={game.metacritic} />
      </HStack>
      <Heading fontSize={"2xl"} marginBottom="1">
        {game.name} <Emojis rating={game.rating_top} />
      </Heading>
    </Card>
  );
};

export default GameCard;
