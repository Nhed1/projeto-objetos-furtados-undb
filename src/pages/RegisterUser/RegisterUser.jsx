import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../components/Sidebar/Sidebar";
import RegisterForm from "./RegisterForm";
import DeleteUserForm from "./DeleteUserForm";
import ShowUsers from "./ShowUsers";

export default function RegisterUser() {
  const [activeNav, setActiveNav] = useState("register");
  console.log(activeNav);

  function GetNav() {
    if (activeNav == "register") {
      return <RegisterForm />;
    }
    if (activeNav == "delete") {
      return <DeleteUserForm />;
    }
    if (activeNav == "all") {
      return <ShowUsers />;
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Flex h="100vh" w="90vw">
      <Sidebar setActiveNav={setActiveNav} />
      <Flex
        h="100%"
        ml="100px"
        w="100%"
        mt="50px"
        justifyContent="center"
        alignItems="flex-start"
      >
        <GetNav />
      </Flex>
    </Flex>
  );
}
