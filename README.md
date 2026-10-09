# 玉石经营模拟器 · 官方网站

官网：https://zhuticheer.github.io/yidao-official-site/

猪老师工作室的手机竖屏玉石经营游戏官网。原生 HTML / CSS / JavaScript，无需安装依赖或构建。更新已有官网，不更换仓库或链接。

## 本次更新 · 2026-10-09

游戏已改名为「玉石经营模拟器」。官网标题、顶栏、分享元信息、获取区、页脚及二维码说明同步更名。首页仍用原宣传画的构图、人物、机器、玉料、背景和其他文案，仅替换主标题文字；桌面横图和手机版方图分别修改。

四张实机截图重新截取当前 UrhoX Lua 版本。旧 H5 视频已从页面及导航移除；没有拿旧视频冒充 Lua 实机。官网仍显示「敬请期待」，未放测试或后台入口。本次只更新官网，不修改游戏运行代码、数值、存档或录音。

## 本地预览与发布

`python -m http.server 4173 --bind 127.0.0.1`，访问 http://127.0.0.1:4173/。

GitHub Pages 使用 main 分支根目录，推送后发布。仓库仅包含官网与实际使用的优化宣传素材；不包含游戏源码、测试脚本、存档、原始大图或凭据。

## 获取入口

当前为「敬请期待」。公开玩家入口确认后更新 config.js 的 download.url；可选二维码填 download.qr。

## 素材与来源

|文件|来源|用途|
|---|---|---|
|hero-renamed.webp|原横版宣传图，仅用内置 Imagegen 更换主标题|桌面首屏、分享图片|
|hero-mobile-renamed.webp|原方形宣传图，仅用内置 Imagegen 更换主标题|手机首屏|
|shot-workshop-lua.webp|Lua 当前原生作坊截图|实机画廊|
|shot-result-lua.webp|Lua 当前原生开料结果截图|实机画廊|
|shot-market-lua.webp|Lua 当前原生黑市页截图|实机画廊|
|shot-collection-lua.webp|Lua 当前原生翡翠图鉴截图|实机画廊|
|icon.png|本项目已有游戏图标|网站图标、顶栏与获取区域|
|jade.webp、merchant.webp、collection.webp|本游戏玉料及人物素材|三个玩法页签|
|paper.webp、gold.webp|本游戏原有纸面及金色材质|官网背景与按钮|

原始宣传画、编辑原图、完整提示词及本地验收记录保留在游戏项目中；仅优化后的运行素材上传官网。页面标明宣传画为主题美术，实机图为当前 Lua 开发版本。美术归原权利人，无新增开源许可。
