import {
    Content,
    fetchOneEntry,
    type BuilderContent,
  } from '@builder.io/sdk-react-native';
  import { usePathname } from 'expo-router';
  import { useEffect, useState } from 'react';
  import { ScrollView, Text, View } from 'react-native';
  
  const BUILDER_API_KEY = '386ea53f10e94443946f4d024a731d71';
  const MODEL_NAME = 'page';
  
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
          console.log("data", data)
        })
        .catch((err) => console.error('Error fetching Builder Content: ', err));
    }, []);
  
    return (
      <ScrollView style={{ padding: 20 }}>
        <Text>
          Hello from your React Native codebase. Below is your Builder content:
        </Text>
        {content ? (
          <Content
            apiKey={BUILDER_API_KEY}
            model={MODEL_NAME}
            content={content}
            blocksWrapper={View}
            contentWrapper={View}
          />
        ) : (
          <Text>Not Found.</Text>
        )}
      </ScrollView>
    );
  };
  