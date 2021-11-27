# syg-mediaquery

Javascript でメディアクエリーの管理を簡単にする。

## Description
メディアクエリーを登録して、チェックを簡単にするもの。

## History

- 2021.11.27　ver.2.1.0
  - ブラウザ用を削除
  - 出力先を見直し
  - メソッド名一部変更
- 2021.11.22　ver.2.0.0
  - TypeScript で書き直し。
  - メソッド名を全て変更。

---

## Usage

### Install

```sh
npm install --save @sygnas/mediaquery
```

### JavaScript
```JavaScript
import Mediaquery from '@sygnas/mediaquery';

// メディアクエリーを設定
Mediaquery.addMedia('pc', 'screen and (min-width: 801px)');
Mediaquery.addMedia('sp', 'screen and (max-width: 800px)');

if (Mediaquery.isMedia('pc')) {
  console.log("メディアクエリー PC に該当");
}

console.log(Mediaquery.getHitMedias());
// ["pc"]
```

---
## Methods

### getMedias

```
static getMedias(): object
```

メディアクエリーとして指定した文字列を取得。


### addMedia

```
static addMedia(name: string, value: string): void
```

メディアクエリーの名前と文字列を登録する。

```
Mediaquery.addMedia('pc', 'screen and (min-width: 801px)');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | メディアクエリー名 |
| value | String | クエリー文字列 |


### removeMedia

```
static removeMedia(name: string): void
```

メディアクエリーを削除する。

```
Mediaquery.removeMedia('pc');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | メディアクエリー名 |


### isMedia

```
static isMedia(name: string): boolean
```

指定したメディアクエリー名に該当するかを判定。

```
const is_pc = Mediaquery.isMedia('pc');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | 登録したメディアクエリー名 |

#### 戻り値

指定したメディアクエリー名に該当するなら `true`。
それ以外は `false` を返す。


### getHitMedias

```
static getHitMedias(): string[]
```

該当するメディアクエリー名の配列を取得。

```
const hit_medias = Mediaquery.getHitMedias();
```


## License
MIT