# スクロールして要素が画面内に入ったときにふわっと表示する

使い方はアクションを追加したい要素に「class="ob"」をつける
これを任意のクラスに変えたい場合は以下の箇所を修正する

```javascript:main.js
function scroll() {
  new scrollAction('.ob'); //この .ob を好きなクラスに変更すればok
}
```

```css:style.css
.ob.inview {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.6s;
}

.ob {
  opacity: 0;
  transform: translateY(-5%);
}

/*それぞれの .ob をmain.jsで変更したクラスに変える */
```

また、横並びの要素のように同時に画面内に入るパターンでは、HTML で記述した順番に 200ms のディレイがかかって表示される
