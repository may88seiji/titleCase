##考え方
・split(' ')で文章を単語に切り分けて変数tに入れる。
・charAt(0).toUpperCase()で単語の一文字目を大文字にして用意した配列aにpushする。
・substring(1).toLowerCase()で単語の二文字目から残り部分を小文字にして配列aにpushする。
・for文　i で文章の単語数だけ処理を繰り返す。
最後に配列aの単語をjoin(' ')で文章にする。



