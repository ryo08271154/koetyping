import { Sentence } from "@/lib/sentences";
import { sentenceList } from "@/data/sentenceList";

import { NextResponse } from "next/server";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({ adapter });

export async function POST(req: Request) {
  const { sentences, score }: { sentences: Sentence[]; score: number } =
    await req.json();
  if (sentences.length === 0 || score === 0) {
    return NextResponse.json({ success: false });
  }
  if (sentences.length > 50) {
    return NextResponse.json({ success: false });
  }
  let totalScore = 0;
  for (const sentence of sentences) {
    //scoreが一致するか確認する
    totalScore += sentence.score;

    if (
      sentenceList.filter((s) => s.sentence === sentence.sentence)[0].score !==
      sentence.score
    ) {
      return NextResponse.json({ success: false });
    }
  }
  if (totalScore !== score) {
    return NextResponse.json({ success: false });
  }

  await prisma.score.create({
    data: {
      score: score,
    },
  });

  return NextResponse.json({
    success: true,
    sentences: sentences,
    score: score,
  });
}

export async function GET() {
  const scores = await prisma.score.findMany({
    orderBy: {
      score: "desc",
    },
  });
  return NextResponse.json({ scores });
}
