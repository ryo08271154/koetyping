import { sentenceList, WordData } from "../data/sentenceList";

export type Word = WordData & { completed: boolean };

export type Sentence = {
  sentence: string;
  words: Word[];
  score: number;
  difficulty: number;
  completed: boolean;
};

const sentences = sentenceList;

export function getRandomSentence(): Sentence {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return {
    ...sentences[randomIndex],
    completed: false,
    words: sentences[randomIndex].words.map((word) => ({
      ...word,
      completed: false,
    })),
  };
}

function consumeRemaining(
  remaining: string,
  word: WordData,
): { isTextMatch: boolean; isYomiMatch: boolean; remaining: string } {
  const isTextMatch = remaining.startsWith(word.text);
  const isYomiMatch = remaining.startsWith(word.yomi);
  if (isTextMatch) {
    remaining = remaining.slice(word.text.length);
  } else if (isYomiMatch) {
    remaining = remaining.slice(word.yomi.length);
  }
  return { isTextMatch, isYomiMatch, remaining };
}

export function judge(input: string, target: Sentence): Sentence {
  const filterWords: Word[] = [];
  let failed = false;
  let count = 0;
  let remaining = input;
  let isFirstMatch = true;

  if (input === target.sentence) {
    return {
      ...target,
      words: target.words.map((word) => ({ ...word, completed: true })),
      completed: true,
    };
  }

  for (const word of target.words) {
    //最初だけ
    if (isFirstMatch) {
      isFirstMatch = false;
      const textIndex = remaining.indexOf(word.text);
      const yomiIndex = remaining.indexOf(word.yomi);
      if (textIndex !== -1) {
        remaining = remaining.slice(textIndex);
      } else if (yomiIndex !== -1) {
        remaining = remaining.slice(yomiIndex);
      }
    }

    //すでに前の単語で失敗している場合は、残りの単語もすべて失敗とする
    if (failed) {
      filterWords.push({ ...word, completed: false });
      continue;
    }

    const result = consumeRemaining(remaining, word);
    remaining = result.remaining;

    if (word.completed) {
      count++;
      filterWords.push(word);
      continue;
    }

    if (result.isTextMatch || result.isYomiMatch) {
      count++;
      filterWords.push({ ...word, completed: true });
    } else {
      failed = true;
      filterWords.push({ ...word, completed: false });
    }
  }

  //すべての単語を言ったか確認
  const completed = count === target.words.length;

  return { ...target, words: filterWords, completed: completed };
}
