import { Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import ButtonSubmit from "../../components/ButtonSubmit";

export default function DeleteUserForm() {
  return (
    <form>
      <FormControl padding="20px" display="flex" flexDir="column" gap="20px">
        <Flex flexDir="column">
          <FormLabel htmlFor="id">
            Digite o id do item que irá deletar
          </FormLabel>
          <Input id="id" type="text"></Input>
        </Flex>
        <ButtonSubmit />
      </FormControl>
    </form>
  );
}
