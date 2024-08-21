import { Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Heading>Oops...</Heading>
      {
      isRouteErrorResponse(error)
      ? 'Invalid page'
      : 'Unexpected error'
      }
    </>
  );
};

export default ErrorPage;