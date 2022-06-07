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
    <Flex>
      <Sidebar setActiveNav={setActiveNav} />
      <Flex ml="200px">
        <GetNav />
      </Flex>
    </Flex>
  );
}
