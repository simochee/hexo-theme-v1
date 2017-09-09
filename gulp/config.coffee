# Gulpで使う設定
src = '_src/'        # ソースファイル
dist = 'source/temp/'     # コンパイル先
build = 'source/'    # リリース時

# ルートパス
root = require('path').join(__dirname, '../')

module.exports =
    # ルート
    root: root

    # フラグ
    isBuildFlag: false

    # 開発用ディレクトリ
    src:
        root: src
        html: src
        css: "#{src}stylesheets/"
        img: "#{src}images/"
        js: "#{src}javascripts/"
        lib: [
            "#{root}node_modules/jquery/dist/jquery.min.js"
        ]

    # コンパイル用のディレクトリ
    dist:
        root: dist
        html: dist
        css: "#{dist}stylesheets/"
        img: "#{dist}images/"
        js: "#{dist}javascripts/"

    # リリース用のディレクトリ
    build:
        root: build
        html: build
        css: "#{build}stylesheets/"
        img: "#{build}images/"
        js: "#{build}javascripts/"

    # copyするファイル
    copy: [
        '**/*.ico'
    ]