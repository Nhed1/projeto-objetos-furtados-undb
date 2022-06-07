import { Flex, IconButton } from "@chakra-ui/react";
import React, { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { GoPlusSmall } from "react-icons/go";
import { AiFillDelete } from "react-icons/ai";
import { MdBallot } from "react-icons/md";
import NavItem from "./NavItem";

export default function Sidebar({ setActiveNav }) {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      w={navSize == "small" ? "75px" : "200px"}
      borderRadius={navSize == "small" ? "15px" : "30px"}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex
        alignItems={navSize == "small" ? "center" : "flex-start"}
        flexDirection="column"
        p="5%"
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
        />
        <NavItem
          navSize={navSize}
          icon={GoPlusSmall}
          title="Registrar"
          setActiveNav={setActiveNav}
          activeNav="register"
        />
        <NavItem
          navSize={navSize}
          icon={AiFillDelete}
          title="Deletar"
          setActiveNav={setActiveNav}
          activeNav="delete"
        />
        <NavItem
          navSize={navSize}
          icon={MdBallot}
          title="Mostrar todos"
          setActiveNav={setActiveNav}
          activeNav="all"
        />
      </Flex>
    </Flex>
  );
}
