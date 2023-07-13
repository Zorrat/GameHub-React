import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoadng } = useGenres();
  if (error) return null;

  if (isLoadng)
    return (
      <Stack>
        {[...Array(15)].map((_, i) => (
          <Skeleton key={i} height={10}></Skeleton>
        ))}
      </Stack>
    );
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="8"
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={genre.id == selectedGenre?.id ? "xl" : "lg"}
              fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
