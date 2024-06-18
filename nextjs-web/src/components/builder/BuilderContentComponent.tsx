"use client"
import {
    Content,
    fetchOneEntry,
    type BuilderContent,
  } from '@builder.io/sdk-react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { SharedButtonDefinition } from './SharedButton';
  
  const BUILDER_API_KEY = '386ea53f10e94443946f4d024a731d71';
  const MODEL_NAME = 'page';

  const customComponents = [SharedButtonDefinition]
  
 export const BuilderContentComponent = () => {
    const path = usePathname();
    const [content, setContent] = useState<BuilderContent | null>(null);

    console.log(path)
  
    useEffect(() => {
      fetchOneEntry({
        model: MODEL_NAME,
        apiKey: BUILDER_API_KEY,
        userAttributes: {
          urlPath: path || '/',
        },
      })
        .then((data) => {
          setContent(data);
        })
        .catch((err) => console.error('Error fetching Builder Content: ', err));
    }, []);
  
    return (
      <div>
        <p>
          Hello from your Next.js codebase. Below is your Builder content:
        </p>
        {content ? (
          <Content
            apiKey={BUILDER_API_KEY}
            model={MODEL_NAME}
            content={content}
            customComponents={customComponents}
          />
        ) : (
          <p>Not Found.</p>
        )}
      </div>
    );
  };
  