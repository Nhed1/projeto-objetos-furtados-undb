import { Flex, Link, Menu, MenuButton, Icon, Text } from "@chakra-ui/react";

export default function NavItem({
  navSize,
  icon,
  title,
  setActiveNav,
  activeNav,
}) {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
      onClick={() => setActiveNav(activeNav)}
    >
      <Menu>
        <Link
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", background: "#A3C8CA" }}
          W={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color="gray.500" />
              <Text ml={5} display={navSize == "small" ? "none" : "block"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
