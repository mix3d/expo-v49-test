import React from "react";
import { Button } from "react-native";
import { Link } from "expo-router";
import type { RegisteredComponent } from "@builder.io/sdk-react-native";
import {
  SharedButtonProps,
  SharedButtonInput,
} from "./AssumedMonoRepoSharedFile";

const SharedButton: React.FC<SharedButtonProps & { attributes: object }> = ({
  url,
  text,
  attributes,
}) => {
  // TODO: better validation on the url string to address TS errors
  if (url) {
    return (
      <Link {...attributes} href={url as any}>
        {text}
      </Link>
    );
  }

  return <Button {...attributes} title={text}></Button>;
};

// TODO: Make sure this definition is shared between Web & Mobile
export const SharedButtonDefinition: RegisteredComponent = {
  component: SharedButton,
  ...SharedButtonInput,
};

export default SharedButton;
