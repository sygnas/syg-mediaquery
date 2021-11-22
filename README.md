# syg-mediaquery

Javascript でメディアクエリーの管理を簡単にする。

## Description
メディアクエリーを登録して、チェックを簡単にするもの。

## History

- 2021.11.22　ver.2.0.0
  - TypeScript で書き直し。
  - メソッド名を全て変更。


## Usage

### Install

```sh
npm install --save @sygnas/mediaquery
```

### JavaScript
```JavaScript
import mediaquery from '@sygnas/mediaquery';

// メディアクエリーを設定
mediaquery.setMedia('pc', 'screen and (min-width: 801px)');
mediaquery.setMedia('sp', 'screen and (max-width: 800px)');

if (mediaquery.isMedia('pc')) {
  console.log("メディアクエリー PC に該当");
}

console.log(mediaquery.getHitMedias());
// ["pc"]
```

## Methods

### getQueryString()

メディアクエリーとして指定した文字列を取得。

#### 戻り値

文字列を含むオブジェクト。


### setMedia(name, value)

メディアクエリーの名前と文字列を登録する。

```
mediaquery.setMedia('pc', 'screen and (min-width: 801px)');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | メディアクエリー名 |
| value | String | クエリー文字列 |

初期状態では下記の3つが登録されている。

```
medias: {
  large: 'screen and (min-width:801px)',
  tablet: 'screen and (min-width:601px) and (max-width:800px)',
  mobile: 'screen and (max-width:600px)'
},
```

### resetMedias(medias)

メディアクエリーの一覧をまとめて登録。
既に登録されているものは削除される。

```
mediaquery.resetMedias({
  pc: 'screen and (min-width: 801px)',
  sp: 'screen and (max-width: 800px)'
});
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| medias | Object | key: メディアクエリー名 / value: クエリー文字列 |

### isMedia(name)

指定したメディアクエリー名に該当するかを判定。

```
const is_pc = mediaquery.isMedia('pc');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | 登録したメディアクエリー名 |

#### 戻り値

指定したメディアクエリー名に該当するなら `true`。
それ以外は `false` を返す。


### getHitMedias()

該当するメディアクエリー名の配列を取得。

```
const hit_medias = mediaquery.getHitMedias();
```

#### 戻り値

該当するメディアクエリーの名前の Array。


## License
MIT