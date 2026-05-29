# 社会科AIおたすけ（小4以上）

小学校4年生以上の社会科で、AIを「答えを出す道具」ではなく、問い・資料読み取り・まとめ・話し合いを支える道具として使うためのサイトです。

## 改修方針

子どもが最初の画面で迷わないように、トップページは「プロンプト一覧」ではなく、社会科の学習過程に沿った「今やることを押す」画面にしました。

- 子ども用トップ: `つかむ・調べる・まとめる・いかす` の4ボタン
- 先生向けページ: 運用方針、写真資料の扱い、話し合い支援、参考資料
- 活用事例ページ: 小4以上の単元に限定した事例
- 言葉辞典: わからない言葉を調べる外部リンク
- フィードバック: Googleフォーム

## ファイル構成

```text
.
├── index.html
├── cases/
│   └── index.html
├── teacher/
│   └── index.html
├── assets/
│   ├── classroom-ai-social-studies.png
│   ├── hero-kids.png
│   ├── manual-new-home.png
│   ├── manual-new-tool.png
│   └── 画像生成プロンプト.md
├── gas/
│   └── create-feedback-form.gs
└── README.md
```

`assets/hero-kids.png` はトップページ右側のヒーローイラストです。ファイルがない場合でも、ページ内蔵のSVGマスコットが表示されます。

## 子ども向けの使い方

1. トップで、今やることを選びます。
2. テーマと、気づいたこと・困っていることを入力します。
3. 「AIに送る文をコピー」を押します。
4. Gemini または NotebookLM に貼り付けます。
5. AIの返事はそのまま写さず、教科書・資料・ノートと照らし合わせます。

## 活用事例

事例は増やしすぎず、学習過程ごとに代表例を置いています。

- つかむ: 小4「水はどこから」
- 調べる: 小5「米づくりのさかんな地域」
- まとめる: 小5「自動車工業」
- いかす: 小6「日本国憲法と政治」
- いかす: 小6「明治維新と新しい国づくり」

## 関連リンク

社会科の言葉辞典:
https://a-tozak.github.io/shakai-kotoba-jiten/

フィードバックフォーム:
https://docs.google.com/forms/d/e/1FAIpQLSfyw3Alsnns-Zy_L-aO4uw1-FHgvkFMe-s3refbxZAsZ2U-1Q/viewform

## Googleフォームの作り方

1. Google Apps Script を新規作成します。
2. `gas/create-feedback-form.gs` の中身を貼り付けます。
3. `createPromptLibraryFeedbackForm()` を実行します。
4. ログに表示される `Published URL` をコピーします。
5. `index.html` のフォームリンクに貼り付けます。
