# 一刀切成首富 · 官方网站

官网：https://zhuticheer.github.io/yidao-official-site/

猪老师工作室的手机竖屏翡翠经营小游戏宣传官网。原生 HTML / CSS / JavaScript，无需安装依赖或构建。

## 本地预览

`python -m http.server 4173 --bind 127.0.0.1`，访问 http://127.0.0.1:4173/。

## 发布

GitHub Pages 使用 main 分支根目录，推送 main 后由 GitHub 发布。只包含官网与宣传素材，不包含游戏源码、存档、后台数据或测试扫码入口。

## 获取入口

当前显示「敬请期待」。确认玩家公开入口后修改 config.js 的 download.url；二维码放在 assets/，然后填写 download.qr。

## 来源

页面结构参考 xxxzzzfff2020/game-official-sites 的独立游戏官网方案，使用本游戏的独立视觉、文案和素材。美术及实机素材由游戏项目提供，素材权利归原权利人，无新增开源授权。

作坊截图为 v20.49；其他截图及约25秒视频来自 v20.36 开发版本。宣传图为主题美术，页面已注明。原始图片、录音和游戏版本保留在游戏项目，官网只使用优化后的资源。

## 素材清单

# 官网复用素材 · 2026-10-08

| 文件 | 来源 | 使用尺寸 | 用途 |
| --- | --- | --- | --- |
| hero.webp | `上架资料/横屏宣传图-1920x1080.jpg` | 1920×1080 | 桌面宣传首屏、分享图片 |
| hero-mobile.webp | `上架资料/方形宣传图.jpg` | 800×800 | 手机宣传首屏 |
| icon.png | `上架资料/icon.png` | 160×160 | 网站图标、顶部与获取区域 |
| shot-workshop.webp | `qa/review-hopper-roll/390-feed.png` | 390×844 | v20.49作坊截图 |
| shot-result.webp | `上架资料/02-开料结果.jpg` | 540×961 | 开料结果截图 |
| shot-market.webp | `上架资料/03-黑市拍卖.jpg` | 540×961 | 拍卖成交截图 |
| shot-collection.webp | `上架资料/04-翡翠图鉴.jpg` | 540×961 | 图鉴截图 |
| video-poster.webp | `上架资料/01-作坊-实机-v2036.jpg` | 540×960 | 实机视频封面，与视频版本一致 |
| jade.webp | `assesstyle/jade-v7/imperial-glass.webp` | 256×256 | 开料页签美术 |
| merchant.webp | `assesstyle/ui-v3/appraiser-0.webp` | 256×256 | 经营页签人物 |
| collection.webp | `assesstyle/jade-v7/spring-bean.webp` | 256×256 | 收藏页签美术 |
| paper.webp | `assesstyle/ui-v3/paper.webp` | 190×85 | 复用纸面纹理 |
| gold.webp | `assesstyle/ui-v3/gold-material.webp` | 175×53 | 复用金色按钮材质 |

gameplay.mp4：复用上架资料/实机录屏-v2036.mp4，540×960，约25秒，来自真实浏览器操作，不自动播放，preload=none。

宣传图及游戏美术来源为项目已有Imagegen资源；实机截图来自项目验收与上架素材。官网标注开发版本与宣传画性质。
