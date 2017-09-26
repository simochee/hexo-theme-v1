# simochee's weblog

```
$ git clone https://github.com/simochee/hexo-base.git /path/to/hexo/themes
```

## 🔧　Submodules

- [Post sources](https://github.com/simochee/hexo-post-source)
- [Theme](http://github.com/simochee/hexo-theme-v1)

## 🐈　Install

このテーマを使うために、ベースに`hexo-renderer-pug`をインストールしてください。

```
$ yarn add hexo-renderer-pug
```

## `source`ディレクトリについて

`/path/to/theme/source`はテーマから見たルートディレクトリとなるが、この内容は`_src`の内容をGulpを通して動的に生成、または移動されたファイルのみとする。

**⚠️　`source`ディレクトリ内は手動で変更しないでください**

## 🏗　開発用コマンド

以下のコマンドで開発用のGulpが起動します。

```
$ yarn run dev
```