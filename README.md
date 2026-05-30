# 子どものためのプロンプトライブラリ（社会科）

小学校4年生以上の社会科で使う、子ども向けAIプロンプトライブラリです。
入力した内容に合わせて、Gemini用・NotebookLM用のプロンプトが自動で変わります。
学習問題をもとに、調べるヒント・自分の考えづくり・考えのブラッシュアップ・まとめを支援します。

## ブラッシュアップ方針

### 子ども視点の課題

- 何を書けばよいかわからない子が、最初の一文で止まりやすい。
- 空欄が多いと、学習内容ではなく入力作業でつまずく。
- AIの返事をそのまま写す使い方になりやすい。

### 教師視点の課題

- AI活用の目的が「答えを出すこと」に寄ると、社会科の見方・考え方が育ちにくい。
- 学力差への配慮がないと、支援が必要な子ほど使いにくい。
- 授業中に評価する観点が見えにくい。

### 改善したこと

- 子どもが入力すると、右側のプロンプトが自動更新される作成画面に変更。
- Gemini用とNotebookLM用で、同じ入力から別のプロンプトを生成。
- 調べるヒント・考えをつくる・考えを深める・まとめるの4場面で探せるように整理。
- 学習指導要領解説と教育出版の年間指導計画を参考に、単元別の活用例を追加。
- 各カードに先生向けメモを残し、授業者がねらいを確認できるようにした。
- フィードバック用Googleフォームを接続済み。

## 参考にした考え方

- 小学校学習指導要領解説 社会編の、社会的事象の見方・考え方、調べまとめる技能、考えたことを説明・議論する力。
- 教育出版 令和6年度版『小学社会』年間指導計画・評価計画（案）の、4年「健康なくらしとまちづくり」、5年「国土・食料生産」、6年「政治・歴史」などの学習過程。

参考URL:
- https://www.mext.go.jp/a_menu/shotou/new-cs/1387014.htm
- https://www.kyoiku-shuppan.co.jp/textbook/shou/shakai/document/ducu1/r6plan.html

## ファイル構成

```text
.
├── index.html
├── assets/
│   ├── classroom-ai-social-studies.png
│   ├── manual-step-choose.png
│   └── manual-step-copy.png
└── gas/
    └── create-feedback-form.gs
```

## 使い方

1. `index.html` をブラウザで開きます。
2. Gemini / NotebookLM のどちらで使うか選びます。
3. 学習場面に合うカードを選びます。
4. テーマや気づいたことを入力します。
5. 自動で変わったプロンプトをコピーします。
6. Gemini または NotebookLM に貼り付けて使います。

## Googleフォームの作り方

1. Google Apps Script を新規作成します。
2. `gas/create-feedback-form.gs` の中身を貼り付けます。
3. `createPromptLibraryFeedbackForm()` を実行します。
4. ログに表示される `Published URL` をコピーします。
5. `index.html` のフィードバックリンクに貼り付けます。

現在の公開フォームURL:
https://docs.google.com/forms/d/e/1FAIpQLSfyw3Alsnns-Zy_L-aO4uw1-FHgvkFMe-s3refbxZAsZ2U-1Q/viewform

## GitHub Pages

GitHubに公開後、リポジトリの Settings → Pages から、`main` ブランチの root を公開元に設定するとWebサイトとして公開できます。

## 注意

AIの返答は必ず教科書・資料・先生の説明と照らし合わせて使う前提です。  
このライブラリは、答えを作る道具ではなく、問い・根拠・見直しを支援するための教材です。
