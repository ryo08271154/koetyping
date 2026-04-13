export type WordData = {
  text: string;
  yomi: string;
};
export type SentenceData = {
  sentence: string;
  words: WordData[];
  score: number;
  difficulty: number;
};
export const sentenceList: SentenceData[] = [
  // --- 単語（漢字） ---
  {
    sentence: "時間",
    words: [{ text: "時間", yomi: "じかん" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "今日",
    words: [{ text: "今日", yomi: "きょう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "明日",
    words: [{ text: "明日", yomi: "あした" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "昨日",
    words: [{ text: "昨日", yomi: "きのう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "毎日",
    words: [{ text: "毎日", yomi: "まいにち" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "日本",
    words: [{ text: "日本", yomi: "にほん" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "東京",
    words: [{ text: "東京", yomi: "とうきょう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "大阪",
    words: [{ text: "大阪", yomi: "おおさか" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "京都",
    words: [{ text: "京都", yomi: "きょうと" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "地方",
    words: [{ text: "地方", yomi: "ちほう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "天気",
    words: [{ text: "天気", yomi: "てんき" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "晴れ",
    words: [{ text: "晴れ", yomi: "はれ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "雨",
    words: [{ text: "雨", yomi: "あめ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "風",
    words: [{ text: "風", yomi: "かぜ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "気温",
    words: [{ text: "気温", yomi: "きおん" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "朝",
    words: [{ text: "朝", yomi: "あさ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "昼",
    words: [{ text: "昼", yomi: "ひる" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "夜",
    words: [{ text: "夜", yomi: "よる" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "今",
    words: [{ text: "今", yomi: "いま" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "後",
    words: [{ text: "後", yomi: "あと" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "名前",
    words: [{ text: "名前", yomi: "なまえ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "年齢",
    words: [{ text: "年齢", yomi: "ねんれい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "住所",
    words: [{ text: "住所", yomi: "じゅうしょ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "電話",
    words: [{ text: "電話", yomi: "でんわ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "番号",
    words: [{ text: "番号", yomi: "ばんごう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "問題",
    words: [{ text: "問題", yomi: "もんだい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "回答",
    words: [{ text: "回答", yomi: "かいとう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "正解",
    words: [{ text: "正解", yomi: "せいかい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "不正解",
    words: [{ text: "不正解", yomi: "ふせいかい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "結果",
    words: [{ text: "結果", yomi: "けっか" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "開始",
    words: [{ text: "開始", yomi: "かいし" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "終了",
    words: [{ text: "終了", yomi: "しゅうりょう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "再開",
    words: [{ text: "再開", yomi: "さいかい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "中断",
    words: [{ text: "中断", yomi: "ちゅうだん" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "選択",
    words: [{ text: "選択", yomi: "せんたく" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "最大",
    words: [{ text: "最大", yomi: "さいだい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "最小",
    words: [{ text: "最小", yomi: "さいしょう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "平均",
    words: [{ text: "平均", yomi: "へいきん" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "合計",
    words: [{ text: "合計", yomi: "ごうけい" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "計算",
    words: [{ text: "計算", yomi: "けいさん" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "表示",
    words: [{ text: "表示", yomi: "ひょうじ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "非表示",
    words: [{ text: "非表示", yomi: "ひひょうじ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "追加",
    words: [{ text: "追加", yomi: "ついか" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "編集",
    words: [{ text: "編集", yomi: "へんしゅう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "確認",
    words: [{ text: "確認", yomi: "かくにん" }],
    score: 50,
    difficulty: 1,
  },

  // --- 短文（難易度1） ---
  {
    sentence: "今日は良い天気です",
    words: [
      { text: "今日は", yomi: "きょうは" },
      { text: "良い", yomi: "よい" },
      { text: "天気です", yomi: "てんきです" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "私は学校へ行きます",
    words: [
      { text: "私は", yomi: "わたしは" },
      { text: "学校へ", yomi: "がっこうへ" },
      { text: "行きます", yomi: "いきます" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "友達と遊びます",
    words: [
      { text: "友達と", yomi: "ともだちと" },
      { text: "遊びます", yomi: "あそびます" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "美味しいご飯を食べる",
    words: [
      { text: "美味しい", yomi: "おいしい" },
      { text: "ご飯を", yomi: "ごはんを" },
      { text: "食べる", yomi: "たべる" },
    ],
    score: 150,
    difficulty: 1,
  },
  {
    sentence: "公園で走ります",
    words: [
      { text: "公園で", yomi: "こうえんで" },
      { text: "走ります", yomi: "はしります" },
    ],
    score: 100,
    difficulty: 1,
  },

  // --- 短文（難易度2） ---
  {
    sentence: "新しいゲームを始める",
    words: [
      { text: "新しい", yomi: "あたらしい" },
      { text: "ゲームを", yomi: "げーむを" },
      { text: "始める", yomi: "はじめる" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "毎日練習しています",
    words: [
      { text: "毎日", yomi: "まいにち" },
      { text: "練習しています", yomi: "れんしゅうしています" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "速く入力したいです",
    words: [
      { text: "速く", yomi: "はやく" },
      { text: "入力したいです", yomi: "にゅうりょくしたいです" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "正確に文字を打つ",
    words: [
      { text: "正確に", yomi: "せいかくに" },
      { text: "文字を", yomi: "もじを" },
      { text: "打つ", yomi: "うつ" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "落ち着いて入力する",
    words: [
      { text: "落ち着いて", yomi: "おちついて" },
      { text: "入力する", yomi: "にゅうりょくする" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "練習の成果を感じる",
    words: [
      { text: "練習の", yomi: "れんしゅうの" },
      { text: "成果を", yomi: "せいかを" },
      { text: "感じる", yomi: "かんじる" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "最高記録を更新",
    words: [
      { text: "最高記録を", yomi: "さいこうきろくを" },
      { text: "更新", yomi: "こうしん" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "集中して挑戦",
    words: [
      { text: "集中して", yomi: "しゅうちゅうして" },
      { text: "挑戦", yomi: "ちょうせん" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "結果を確認する",
    words: [
      { text: "結果を", yomi: "けっかを" },
      { text: "確認する", yomi: "かくにんする" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "次の問題へ進む",
    words: [
      { text: "次の", yomi: "つぎの" },
      { text: "問題へ", yomi: "もんだいへ" },
      { text: "進む", yomi: "すすむ" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "今日も頑張ります",
    words: [
      { text: "今日も", yomi: "きょうも" },
      { text: "頑張ります", yomi: "がんばります" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "静かな部屋で練習",
    words: [
      { text: "静かな", yomi: "しずかな" },
      { text: "部屋で", yomi: "へやで" },
      { text: "練習", yomi: "れんしゅう" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "少しずつ上達する",
    words: [
      { text: "少しずつ", yomi: "すこしずつ" },
      { text: "上達する", yomi: "じょうたつする" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "楽しくタイピング",
    words: [
      { text: "楽しく", yomi: "たのしく" },
      { text: "タイピング", yomi: "たいぴんぐ" },
    ],
    score: 200,
    difficulty: 2,
  },
  {
    sentence: "最後まで頑張ろう",
    words: [
      { text: "最後まで", yomi: "さいごまで" },
      { text: "頑張ろう", yomi: "がんばろう" },
    ],
    score: 100,
    difficulty: 1,
  },

  // --- ひらがな単語 ---
  {
    sentence: "猫",
    words: [{ text: "猫", yomi: "ねこ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "犬",
    words: [{ text: "犬", yomi: "いぬ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "空",
    words: [{ text: "空", yomi: "そら" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "花",
    words: [{ text: "花", yomi: "はな" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "水",
    words: [{ text: "水", yomi: "みず" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "山",
    words: [{ text: "山", yomi: "やま" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "川",
    words: [{ text: "川", yomi: "かわ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "月",
    words: [{ text: "月", yomi: "つき" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "星",
    words: [{ text: "星", yomi: "ほし" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "雲",
    words: [{ text: "雲", yomi: "くも" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "桜",
    words: [{ text: "桜", yomi: "さくら" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "光",
    words: [{ text: "光", yomi: "ひかり" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "氷",
    words: [{ text: "氷", yomi: "こおり" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "蝶々",
    words: [{ text: "蝶々", yomi: "ちょうちょ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "胡瓜",
    words: [{ text: "胡瓜", yomi: "きゅうり" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "おにぎり",
    words: [{ text: "おにぎり", yomi: "おにぎり" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "太陽",
    words: [{ text: "太陽", yomi: "たいよう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "林檎",
    words: [{ text: "林檎", yomi: "りんご" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "電車",
    words: [{ text: "電車", yomi: "でんしゃ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "夕焼け",
    words: [{ text: "夕焼け", yomi: "ゆうやけ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "夏祭り",
    words: [{ text: "夏祭り", yomi: "なつまつり" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "正月",
    words: [{ text: "正月", yomi: "しょうがつ" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "天気予報",
    words: [{ text: "天気予報", yomi: "てんきよほう" }],
    score: 50,
    difficulty: 1,
  },
  {
    sentence: "富士山",
    words: [{ text: "富士山", yomi: "ふじさん" }],
    score: 50,
    difficulty: 1,
  },
  // --- カタカナ語 ---
  {
    sentence: "コンピューター",
    words: [{ text: "コンピューター", yomi: "こんぴゅーたー" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "スマートフォン",
    words: [{ text: "スマートフォン", yomi: "すまーとふぉん" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "インターネット",
    words: [{ text: "インターネット", yomi: "いんたーねっと" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "ヘッドフォン",
    words: [{ text: "ヘッドフォン", yomi: "へっどふぉん" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "アドベンチャー",
    words: [{ text: "アドベンチャー", yomi: "あどべんちゃー" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "キャラクター",
    words: [{ text: "キャラクター", yomi: "きゃらくたー" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "ゲームオーバー",
    words: [{ text: "ゲームオーバー", yomi: "げーむおーばー" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "チャレンジャー",
    words: [{ text: "チャレンジャー", yomi: "ちゃれんじゃー" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "パーフェクト",
    words: [{ text: "パーフェクト", yomi: "ぱーふぇくと" }],
    score: 100,
    difficulty: 1,
  },

  // --- 挨拶・日常会話 ---
  {
    sentence: "こんにちは",
    words: [{ text: "こんにちは", yomi: "こんにちわ" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "おはようございます",
    words: [{ text: "おはようございます", yomi: "おはようございます" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "こんばんは",
    words: [{ text: "こんばんは", yomi: "こんばんは" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "おやすみなさい",
    words: [{ text: "おやすみなさい", yomi: "おやすみなさい" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "ありがとうございます",
    words: [{ text: "ありがとうございます", yomi: "ありがとうございます" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "すみません",
    words: [{ text: "すみません", yomi: "すみません" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "いただきます",
    words: [{ text: "いただきます", yomi: "いただきます" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "ごちそうさまでした",
    words: [{ text: "ごちそうさまでした", yomi: "ごちそうさまでした" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "はじめまして",
    words: [{ text: "はじめまして", yomi: "はじめまして" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "よろしくお願いします",
    words: [
      { text: "よろしく", yomi: "よろしく" },
      { text: "お願いします", yomi: "おねがいします" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "元気ですか",
    words: [{ text: "元気ですか", yomi: "げんきですか" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "お名前は何ですか",
    words: [
      { text: "お名前は", yomi: "おなまえは" },
      { text: "何ですか", yomi: "なんですか" },
    ],
    score: 100,
    difficulty: 2,
  },
  {
    sentence: "今日は暑いですね",
    words: [
      { text: "今日は", yomi: "きょうは" },
      { text: "暑いですね", yomi: "あついですね" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "何時ですか",
    words: [{ text: "何時ですか", yomi: "なんじですか" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "トイレはどこですか",
    words: [
      { text: "トイレは", yomi: "といれは" },
      { text: "どこですか", yomi: "どこですか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "これはいくらですか",
    words: [
      { text: "これは", yomi: "これは" },
      { text: "いくらですか", yomi: "いくらですか" },
    ],
    score: 200,
    difficulty: 1,
  },
  {
    sentence: "少し待ってください",
    words: [
      { text: "少し", yomi: "すこし" },
      { text: "待ってください", yomi: "まってください" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "もう一度言ってください",
    words: [
      { text: "もう一度", yomi: "もういちど" },
      { text: "言ってください", yomi: "いってください" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "わかりました",
    words: [{ text: "わかりました", yomi: "わかりました" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "大丈夫ですか",
    words: [{ text: "大丈夫ですか", yomi: "だいじょうぶですか" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "手伝いましょうか",
    words: [{ text: "手伝いましょうか", yomi: "てつだいましょうか" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "どこから来ましたか",
    words: [
      { text: "どこから", yomi: "どこから" },
      { text: "来ましたか", yomi: "きましたか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "今日の天気はどうですか",
    words: [
      { text: "今日の", yomi: "きょうの" },
      { text: "天気は", yomi: "てんきは" },
      { text: "どうですか", yomi: "どうですか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "昼ご飯を一緒に食べませんか",
    words: [
      { text: "昼ご飯を", yomi: "ひるごはんを" },
      { text: "一緒に", yomi: "いっしょに" },
      { text: "食べませんか", yomi: "たべませんか" },
    ],
    score: 150,
    difficulty: 2,
  },
  {
    sentence: "明日は暇ですか",
    words: [
      { text: "明日は", yomi: "あしたは" },
      { text: "暇ですか", yomi: "ひまですか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "電話番号を教えてもらえますか",
    words: [
      { text: "電話番号を", yomi: "でんわばんごうを" },
      { text: "教えてもらえますか", yomi: "おしえてもらえますか" },
    ],
    score: 150,
    difficulty: 2,
  },
  {
    sentence: "今どこにいますか",
    words: [
      { text: "今", yomi: "いま" },
      { text: "どこにいますか", yomi: "どこにいますか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "お腹が空きました",
    words: [
      { text: "お腹が", yomi: "おなかが" },
      { text: "空きました", yomi: "すきました" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "疲れた",
    words: [{ text: "疲れた", yomi: "つかれた" }],
    score: 10,
    difficulty: 0,
  },
  {
    sentence: "週末は何をしますか",
    words: [
      { text: "週末は", yomi: "しゅうまつは" },
      { text: "何を", yomi: "なにを" },
      { text: "しますか", yomi: "しますか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "お土産を買ってきました",
    words: [
      { text: "お土産を", yomi: "おみやげを" },
      { text: "買ってきました", yomi: "かってきました" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "ちょっと寒くなってきましたエアコンをつけようかな",
    words: [
      { text: "ちょっと", yomi: "ちょっと" },
      { text: "寒くなってきました", yomi: "さむくなってきました" },
      { text: "エアコンを", yomi: "えあこんを" },
      { text: "つけようかな", yomi: "つけようかな" },
    ],
    score: 500,
    difficulty: 5,
  },
  {
    sentence: "先週末は何をしていましたか",
    words: [
      { text: "先週末は", yomi: "せんしゅうまつは" },
      { text: "何を", yomi: "なにを" },
      { text: "していましたか", yomi: "していましたか" },
    ],
    score: 150,
    difficulty: 2,
  },
  {
    sentence: "最近どうですか",
    words: [
      { text: "最近", yomi: "さいきん" },
      { text: "どうですか", yomi: "どうですか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "もう帰りますか",
    words: [
      { text: "もう", yomi: "もう" },
      { text: "帰りますか", yomi: "かえりますか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "気をつけて帰ってください",
    words: [
      { text: "気をつけて", yomi: "きをつけて" },
      { text: "帰ってください", yomi: "かえってください" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "またいつか会いましょう",
    words: [
      { text: "またいつか", yomi: "またいつか" },
      { text: "会いましょう", yomi: "あいましょう" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "お待たせしました",
    words: [{ text: "お待たせしました", yomi: "おまたせしました" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "それは残念でしたね",
    words: [
      { text: "それは", yomi: "それは" },
      { text: "残念でしたね", yomi: "ざんねんでしたね" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "本当によかったですね",
    words: [
      { text: "本当に", yomi: "ほんとうに" },
      { text: "よかったですね", yomi: "よかったですね" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "どうぞよろしくお願いいたします",
    words: [
      { text: "どうぞ", yomi: "どうぞ" },
      { text: "よろしく", yomi: "よろしく" },
      { text: "お願いいたします", yomi: "おねがいいたします" },
    ],
    score: 300,
    difficulty: 3,
  },
  {
    sentence: "お体に気をつけてください",
    words: [
      { text: "お体に", yomi: "おからだに" },
      { text: "気をつけてください", yomi: "きをつけてください" },
    ],
    score: 150,
    difficulty: 2,
  },
  {
    sentence: "久しぶりですね",
    words: [{ text: "久しぶりですね", yomi: "ひさしぶりですね" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "お元気でしたか",
    words: [{ text: "お元気でしたか", yomi: "おげんきでしたか" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "先ほどはありがとうございました",
    words: [
      { text: "先ほどは", yomi: "さきほどは" },
      { text: "ありがとうございました", yomi: "ありがとうございました" },
    ],
    score: 300,
    difficulty: 3,
  },
  {
    sentence: "何かお手伝いできることはありますか",
    words: [
      { text: "何か", yomi: "なにか" },
      { text: "お手伝いできることは", yomi: "おてつだいできることは" },
      { text: "ありますか", yomi: "ありますか" },
    ],
    score: 300,
    difficulty: 3,
  },
  {
    sentence: "ご迷惑をおかけしました",
    words: [
      { text: "ご迷惑を", yomi: "ごめいわくを" },
      { text: "おかけしました", yomi: "おかけしました" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "お時間をいただけますか",
    words: [
      { text: "お時間を", yomi: "おじかんを" },
      { text: "いただけますか", yomi: "いただけますか" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "後でまた連絡します",
    words: [
      { text: "後で", yomi: "あとで" },
      { text: "また", yomi: "また" },
      { text: "連絡します", yomi: "れんらくします" },
    ],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "ちょうど今から出かけるところです",
    words: [
      { text: "ちょうど", yomi: "ちょうど" },
      { text: "今から", yomi: "いまから" },
      { text: "出かけるところです", yomi: "でかけるところです" },
    ],
    score: 300,
    difficulty: 3,
  },

  // --- その他単語 ---
  {
    sentence: "プログラミング",
    words: [{ text: "プログラミング", yomi: "ぷろぐらみんぐ" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "タイピング",
    words: [{ text: "タイピング", yomi: "たいぴんぐ" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "エンターテイメント",
    words: [{ text: "エンターテイメント", yomi: "えんたーていめんと" }],
    score: 100,
    difficulty: 1,
  },
  {
    sentence: "人工知能",
    words: [{ text: "人工知能", yomi: "じんこうちのう" }],
    score: 100,
    difficulty: 1,
  },

  // --- 難読漢字・野菜 ---
  {
    sentence: "人参",
    words: [{ text: "人参", yomi: "にんじん" }],
    score: 150,
    difficulty: 2,
  },
  {
    sentence: "玉葱",
    words: [
      { text: "玉", yomi: "たま" },
      { text: "葱", yomi: "ねぎ" },
    ],
    score: 200,
    difficulty: 3,
  },
  {
    sentence: "椎茸",
    words: [
      { text: "椎", yomi: "しい" },
      { text: "茸", yomi: "たけ" },
    ],
    score: 200,
    difficulty: 3,
  },
  {
    sentence: "土竜",
    words: [{ text: "土竜", yomi: "もぐら" }],
    score: 200,
    difficulty: 4,
  },

  // --- 早口言葉 ---
  {
    sentence: "生麦生米生卵",
    words: [
      { text: "生麦", yomi: "なまむぎ" },
      { text: "生米", yomi: "なまごめ" },
      { text: "生卵", yomi: "なまたまご" },
    ],
    score: 400,
    difficulty: 4,
  },
  {
    sentence: "隣の客はよく柿食う客だ",
    words: [
      { text: "隣の", yomi: "となりの" },
      { text: "客は", yomi: "きゃくは" },
      { text: "よく", yomi: "よく" },
      { text: "柿食う", yomi: "かきくう" },
      { text: "客だ", yomi: "きゃくだ" },
    ],
    score: 400,
    difficulty: 4,
  },
  {
    sentence: "東京特許許可局",
    words: [{ text: "東京特許許可局", yomi: "とうきょうとっきょきょかきょく" }],
    score: 400,
    difficulty: 4,
  },
  {
    sentence: "赤巻紙青巻紙黄巻紙",
    words: [
      { text: "赤巻紙", yomi: "あかまきがみ" },
      { text: "青巻紙", yomi: "あおまきがみ" },
      { text: "黄巻紙", yomi: "きまきがみ" },
    ],
    score: 400,
    difficulty: 4,
  },
  {
    sentence: "この釘は引き抜きにくい釘だ",
    words: [
      { text: "この", yomi: "この" },
      { text: "釘は", yomi: "くぎは" },
      { text: "引き抜きにくい", yomi: "ひきぬきにくい" },
      { text: "釘だ", yomi: "くぎだ" },
    ],
    score: 400,
    difficulty: 4,
  },
];
