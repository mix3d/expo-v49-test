import React from "react";
import type { RegisteredComponent } from "@builder.io/sdk-react";
import Link from "next/link";

import {
  SharedButtonProps,
  SharedButtonInput,
} from "./AssumedMonoRepoSharedFile";

const SharedButton: React.FC<SharedButtonProps & { attributes: object }> = ({
  url,
  text,
  attributes,
}) => {
  const className = `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${attributes.className}`;

  if (url) {
    console.log(`url: "${url}", ${typeof url}`);
    return (
      <Link {...attributes} href={url} className={className}>
        {text}
      </Link>
    );
  }

  return (
    <button {...attributes} className={className}>
      {text}
    </button>
  );
};

// TODO: Make sure this definition is shared between Web & Mobile
export const SharedButtonDefinition: RegisteredComponent = {
  component: SharedButton,
  ...SharedButtonInput,
};

export default SharedButton;
