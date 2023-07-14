import React, { ReactNode, createContext, useState } from "react";
import { EmotionProps } from "../component/Emotion";

export type PropsEmotionContext = {
  currentEmotion: string;
  setCurrentEmotion: React.Dispatch<React.SetStateAction<string>>;
};

type Props = {
  children: ReactNode;
};

const DEFAULT_EMOJI = {
  currentEmotion: "neutro",
  setCurrentEmotion: () => {},
};

const EmojiContext = createContext<PropsEmotionContext>(DEFAULT_EMOJI);

const EmojiContextProvider: React.FC<Props> = ({ children }) => {
  const [currentEmotion, setCurrentEmotion] = useState(
    DEFAULT_EMOJI.currentEmotion
  );
  return (
    <EmojiContext.Provider
      value={{
        currentEmotion,
        setCurrentEmotion,
      }}
    >
      {children}
    </EmojiContext.Provider>
  );
};

export { EmojiContextProvider };
export default EmojiContext;
