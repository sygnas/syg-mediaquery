# syg-mediaquery
Check media query.
Javascript でメディアクエリーの管理を簡単にする。

## Description
メディアクエリーを登録して、チェックを簡単にするもの。

## Usage
### Install
```sh
npm install --save @sygnas/mediaquery
```

### Script
```JavaScript
import mediaquery from '@sygnas/mediaquery';

// メディアクエリーを設定
mediaquery.set_media('pc', 'screen and (min-width: 801px)');
mediaquery.set_media('sp', 'screen and (max-width: 800px)');

if (mediaquery.is_media('pc')) {
    console.log("メディアクエリー PC に該当");
}

console.log(mediaquery.get_hit_medias());
// ["pc"]
```

## Methods

### set_media(name, value)

メディアクエリーの名前と文字列を登録する。

```
mediaquery.set_media('pc', 'screen and (min-width: 801px)');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | メディアクエリー名 |
| value | String | クエリー文字列 |

初期状態では下記の3つが登録されている。

```
_medias: {
    large: 'screen and (min-width:801px)',
    tablet: 'screen and (min-width:601px) and (max-width:800px)',
    mobile: 'screen and (max-width:600px)'
},
```

### reset_medias(medias)

メディアクエリーの一覧をまとめて登録。
既に登録されているものは削除される。

```
mediaquery.reset_medias({
    pc: 'screen and (min-width: 801px)',
    sp: 'screen and (max-width: 800px)'
});
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| medias | Object | key: メディアクエリー名 / value: クエリー文字列 |

### is_media(name)

指定したメディアクエリー名に該当するかを判定。

```
const is_pc = mediaquery.is_media('pc');
```

| 引数 | 型 | 説明 |
| ---- | -- | ---- |
| name | String | 登録したメディアクエリー名 |

#### 戻り値

指定したメディアクエリー名に該当するなら `true`。
それ以外は `false` を返す。


### get_hit_medias()

該当するメディアクエリー名の配列を取得。

```
const hit_medias = mediaquery.get_hit_medias();
```

#### 戻り値

該当するメディアクエリーの名前の Array。


## License
MIT