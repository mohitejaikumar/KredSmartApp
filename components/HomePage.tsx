import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Button,
} from "react-native";
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const StyledView = styled(View)
const StyledText = styled(Text)


export function HomePage() {
  return (
    <StyledView className="flex flex-col items-center pb-6 bg-white max-w-[360px]">
      <StyledView className="flex gap-5 justify-between self-stretch px-6 py-2 w-full text-sm leading-4 whitespace-nowrap bg-stone-50 text-neutral-500">
        <StyledView
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ec2a268e0558fd6ee03f5a95154bdd0a5645b061ec3ff1d76204fb1368f9330?apiKey=2ea34b46751a4a27af43fd1d1256e872&"
          className="shrink-0 w-14 aspect-[3.45]"
        />
      </StyledView>
      <StyledView className="mt-12 text-2xl font-semibold leading-8 text-center text-sky-950">
        <Text>Welcome to KredSmart</Text>
      </StyledView>
      <StyledView
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/798c98a8abb31957ad5a7e25ae1b80d37ba906a3429aa4919c7957bd586ce1fd?apiKey=2ea34b46751a4a27af43fd1d1256e872&"
        className="mt-4 max-w-full aspect-[5.88] w-[141px]"
      />
      <Image source={require('@/assets/images/main.png')}></Image>
      <StyledView
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a9bfb954cc99f37f88a952324f5d93b52cdfd5ce392568b37210345784a1069?apiKey=2ea34b46751a4a27af43fd1d1256e872&"
        className="mt-20 w-60 max-w-full aspect-[1.23]"
      />
      <StyledView className="mt-10 text-2xl font-semibold leading-9 text-center text-sky-950">
        <Text>Save on spendings with our free analytics</Text>
      </StyledView>
      <StyledView className="flex gap-3 px-5 mt-7">
        <StyledView className="shrink-0 w-full h-3 bg-violet-800 rounded-full" />
        <StyledView className="shrink-0 w-full h-3 bg-white rounded-full border border-gray-400 border-solid stroke-[1px]" />
        <StyledView className="shrink-0 w-full h-3 bg-white rounded-full border border-gray-400 border-solid stroke-[1px]" />
      </StyledView>
      <Button

  title="Get Started"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
    </StyledView>
  );
}

