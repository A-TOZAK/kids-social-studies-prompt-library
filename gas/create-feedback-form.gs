/**
 * 子どものためのプロンプトライブラリ用フィードバックフォームを作成します。
 *
 * 使い方:
 * 1. Google Apps Script の新規プロジェクトを作る
 * 2. このファイルの内容を貼り付ける
 * 3. createPromptLibraryFeedbackForm() を実行する
 * 4. ログに出た Published URL を index.html の FEEDBACK_FORM_URL に貼る
 */
function createPromptLibraryFeedbackForm() {
  const form = FormApp.create('子どものためのプロンプトライブラリ フィードバック');
  form.setDescription(
    '社会科のAIプロンプトライブラリを、子どもにとってより使いやすくするためのフォームです。授業で使って気づいたことを教えてください。'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(true);
  form.setConfirmationMessage('ありがとうございました。いただいた声をもとに、子どもが使いやすいプロンプトへ改善します。');

  form.addMultipleChoiceItem()
    .setTitle('回答者')
    .setChoiceValues(['教師', '児童', '保護者', 'その他'])
    .setRequired(true);

  form.addListItem()
    .setTitle('対象学年')
    .setChoiceValues(['1年', '2年', '3年', '4年', '5年', '6年', '特別支援学級', '複数学年', 'その他'])
    .setRequired(false);

  form.addCheckboxItem()
    .setTitle('使ったプロンプト')
    .setChoiceValues([
      '学習の問いをつくる',
      '何を書けばよいか相談する',
      '自分の予想をつくる',
      '調べ方を決める',
      '地図・グラフ・写真を読み取る',
      '二つの地域・時代・仕事をくらべる',
      '原因と結果のつながりを考える',
      'ノートの考えを直す',
      '学習のまとめをつくる',
      '学習をふり返る',
      'まだ使っていない'
    ])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('子どもにとっての使いやすさ')
    .setChoiceValues(['とても使いやすい', 'まあ使いやすい', '少しむずかしい', 'かなりむずかしい'])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle('学力が低い子・書くことが苦手な子への配慮')
    .setChoiceValues(['十分ある', 'ある程度ある', 'まだ足りない', 'かなり足りない'])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('子どもがつまずいたところ')
    .setHelpText('入力の量、言葉の難しさ、AIの返事の読み取りなど、気づいたことを書いてください。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('よかったところ')
    .setHelpText('子どもの反応、授業で使いやすかった場面、学習が深まったところなどを書いてください。')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('追加してほしいプロンプトや改善案')
    .setRequired(false);

  form.addTextItem()
    .setTitle('連絡先（任意）')
    .setHelpText('返信が必要な場合だけ入力してください。')
    .setRequired(false);

  const spreadsheet = SpreadsheetApp.create('子どものためのプロンプトライブラリ フィードバック回答');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  const publishedUrl = form.getPublishedUrl();
  const editUrl = form.getEditUrl();
  const spreadsheetUrl = spreadsheet.getUrl();

  PropertiesService.getScriptProperties().setProperties({
    PROMPT_LIBRARY_FORM_ID: form.getId(),
    PROMPT_LIBRARY_FORM_URL: publishedUrl,
    PROMPT_LIBRARY_FORM_EDIT_URL: editUrl,
    PROMPT_LIBRARY_RESPONSE_SHEET_URL: spreadsheetUrl
  });

  Logger.log('Published URL: ' + publishedUrl);
  Logger.log('Edit URL: ' + editUrl);
  Logger.log('Responses Spreadsheet: ' + spreadsheetUrl);

  return {
    publishedUrl: publishedUrl,
    editUrl: editUrl,
    spreadsheetUrl: spreadsheetUrl
  };
}

/**
 * すでに作成したフォームのURLを再表示します。
 */
function logPromptLibraryFeedbackFormUrls() {
  const props = PropertiesService.getScriptProperties();
  Logger.log('Published URL: ' + props.getProperty('PROMPT_LIBRARY_FORM_URL'));
  Logger.log('Edit URL: ' + props.getProperty('PROMPT_LIBRARY_FORM_EDIT_URL'));
  Logger.log('Responses Spreadsheet: ' + props.getProperty('PROMPT_LIBRARY_RESPONSE_SHEET_URL'));
}
