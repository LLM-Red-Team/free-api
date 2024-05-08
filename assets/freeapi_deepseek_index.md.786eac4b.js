import{_ as a,o as n,c as e,x as s,a as l,N as p}from"./chunks/framework.0ff2fc97.js";const o="/free-api/assets/example-1.2bad8d5d.png",r="/free-api/assets/example-2.babaec66.png",t="/free-api/assets/example-0.c33b323e.png",C=JSON.parse('{"title":"DeepSeek Free 服务","description":"","frontmatter":{},"headers":[],"relativePath":"freeapi/deepseek/index.md","lastUpdated":1715140978000}'),c={name:"freeapi/deepseek/index.md"},i=s("h1",{id:"deepseek-free-服务",tabindex:"-1"},[l("DeepSeek Free 服务 "),s("a",{class:"header-anchor",href:"#deepseek-free-服务","aria-label":'Permalink to "DeepSeek Free 服务"'},"​")],-1),D=s("iframe",{src:"https://udify.app/chatbot/IWOnEupdZcfCN0y7",style:{width:"100%",height:"100%","min-height":"700px"},frameborder:"0",allow:"microphone"},null,-1),y=p('<hr><p><img src="https://img.shields.io/github/stars/llm-red-team/deepseek-free-api.svg" alt=""><img src="https://img.shields.io/github/forks/llm-red-team/deepseek-free-api.svg" alt=""><img src="https://img.shields.io/docker/pulls/vinlic/deepseek-free-api.svg" alt=""></p><p>支持高速流式输出、支持多轮对话，零配置部署，多路token支持。</p><p>与ChatGPT接口完全兼容。</p><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><ul><li><a href="#免责声明">免责声明</a></li><li><a href="#在线体验">在线体验</a></li><li><a href="#效果示例">效果示例</a></li><li><a href="#接入准备">接入准备</a><ul><li><a href="#多账号接入">多账号接入</a></li></ul></li><li><a href="#Docker部署">Docker部署</a><ul><li><a href="#Docker-compose部署">Docker-compose部署</a></li></ul></li><li><a href="#Render部署">Render部署</a></li><li><a href="#Vercel部署">Vercel部署</a></li><li><a href="#原生部署">原生部署</a></li><li><a href="#推荐使用客户端">推荐使用客户端</a></li><li><a href="#接口列表">接口列表</a><ul><li><a href="#对话补全">对话补全</a></li><li><a href="#userToken存活检测">userToken存活检测</a></li></ul></li><li><a href="#注意事项">注意事项</a><ul><li><a href="#Nginx反代优化">Nginx反代优化</a></li><li><a href="#Token统计">Token统计</a></li></ul></li><li><a href="#star-history">Star History</a></li></ul><h2 id="免责声明" tabindex="-1">免责声明 <a class="header-anchor" href="#免责声明" aria-label="Permalink to &quot;免责声明&quot;">​</a></h2><p><strong>逆向API是不稳定的，建议前往DeepSeek官方 <a href="https://platform.deepseek.com/" target="_blank" rel="noreferrer">https://platform.deepseek.com/</a> 付费使用API，避免封禁的风险。</strong></p><p><strong>本组织和个人不接受任何资金捐助和交易，此项目是纯粹研究交流学习性质！</strong></p><p><strong>仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！</strong></p><p><strong>仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！</strong></p><p><strong>仅限自用，禁止对外提供服务或商用，避免对官方造成服务压力，否则风险自担！</strong></p><h2 id="在线体验" tabindex="-1">在线体验 <a class="header-anchor" href="#在线体验" aria-label="Permalink to &quot;在线体验&quot;">​</a></h2><p><a href="https://udify.app/chat/IWOnEupdZcfCN0y7" target="_blank" rel="noreferrer">https://udify.app/chat/IWOnEupdZcfCN0y7</a></p><h2 id="效果示例" tabindex="-1">效果示例 <a class="header-anchor" href="#效果示例" aria-label="Permalink to &quot;效果示例&quot;">​</a></h2><h3 id="验明正身demo" tabindex="-1">验明正身Demo <a class="header-anchor" href="#验明正身demo" aria-label="Permalink to &quot;验明正身Demo&quot;">​</a></h3><p><img src="'+o+'" alt="验明正身"></p><h3 id="多轮对话demo" tabindex="-1">多轮对话Demo <a class="header-anchor" href="#多轮对话demo" aria-label="Permalink to &quot;多轮对话Demo&quot;">​</a></h3><p><img src="'+r+'" alt="多轮对话"></p><h2 id="接入准备" tabindex="-1">接入准备 <a class="header-anchor" href="#接入准备" aria-label="Permalink to &quot;接入准备&quot;">​</a></h2><p>从 <a href="https://chat.deepseek.com/" target="_blank" rel="noreferrer">DeepSeek</a> 获取userToken value</p><p>进入DeepSeek随便发起一个对话，然后F12打开开发者工具，从Application &gt; LocalStorage中找到<code>userToken</code>中的value值，这将作为Authorization的Bearer Token值：<code>Authorization: Bearer TOKEN</code></p><p><img src="'+t+`" alt="获取userToken"></p><h3 id="多账号接入" tabindex="-1">多账号接入 <a class="header-anchor" href="#多账号接入" aria-label="Permalink to &quot;多账号接入&quot;">​</a></h3><p>目前同个账号同时只能有<em>一路</em>输出，你可以通过提供多个账号的userToken value并使用<code>,</code>拼接提供：</p><p><code>Authorization: Bearer TOKEN1,TOKEN2,TOKEN3</code></p><p>每次请求服务会从中挑选一个。</p><h2 id="docker部署" tabindex="-1">Docker部署 <a class="header-anchor" href="#docker部署" aria-label="Permalink to &quot;Docker部署&quot;">​</a></h2><p>请准备一台具有公网IP的服务器并将8000端口开放。</p><p>拉取镜像并启动服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--init</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">8000</span><span style="color:#C3E88D;">:8000</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vinlic/deepseek-free-api:latest</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看服务实时日志</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">logs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="docker-compose部署" tabindex="-1">Docker-compose部署 <a class="header-anchor" href="#docker-compose部署" aria-label="Permalink to &quot;Docker-compose部署&quot;">​</a></h3><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#F07178;">deepseek-free-api</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vinlic/deepseek-free-api:latest</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">8000:8000</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">environment</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">-</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">TZ=Asia/Shanghai</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="render部署" tabindex="-1">Render部署 <a class="header-anchor" href="#render部署" aria-label="Permalink to &quot;Render部署&quot;">​</a></h3><p><strong>注意：部分部署区域可能无法连接deepseek，如容器日志出现请求超时或无法连接，请切换其他区域部署！</strong><strong>注意：免费账户的容器实例将在一段时间不活动时自动停止运行，这会导致下次请求时遇到50秒或更长的延迟，建议查看<a href="https://github.com/LLM-Red-Team/free-api-hub/#Render%E5%AE%B9%E5%99%A8%E4%BF%9D%E6%B4%BB" target="_blank" rel="noreferrer">Render容器保活</a></strong></p><ol><li><p>fork本项目到你的github账号下。</p></li><li><p>访问 <a href="https://dashboard.render.com/" target="_blank" rel="noreferrer">Render</a> 并登录你的github账号。</p></li><li><p>构建你的 Web Service（New+ -&gt; Build and deploy from a Git repository -&gt; Connect你fork的项目 -&gt; 选择部署区域 -&gt; 选择实例类型为Free -&gt; Create Web Service）。</p></li><li><p>等待构建完成后，复制分配的域名并拼接URL访问即可。</p></li></ol><h3 id="vercel部署" tabindex="-1">Vercel部署 <a class="header-anchor" href="#vercel部署" aria-label="Permalink to &quot;Vercel部署&quot;">​</a></h3><p><strong>注意：Vercel免费账户的请求响应超时时间为10秒，但接口响应通常较久，可能会遇到Vercel返回的504超时错误！</strong></p><p>请先确保安装了Node.js环境。</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">vercel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--registry</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">http://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#FFCB6B;">vercel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">login</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">https://github.com/LLM-Red-Team/deepseek-free-api</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"><span style="color:#FFCB6B;">vercel</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--prod</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="原生部署" tabindex="-1">原生部署 <a class="header-anchor" href="#原生部署" aria-label="Permalink to &quot;原生部署&quot;">​</a></h2><p>请准备一台具有公网IP的服务器并将8000端口开放。</p><p>请先安装好Node.js环境并且配置好环境变量，确认node命令可用。</p><p>安装依赖</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装PM2进行进程守护</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">i</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">pm2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>编译构建，看到dist目录就是构建完成</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">run</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>启动服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">start</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">dist/index.js</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--name</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">deepseek-free-api</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>查看服务实时日志</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">logs</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>重启服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>停止服务</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">deepseek-free-api</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="推荐使用客户端" tabindex="-1">推荐使用客户端 <a class="header-anchor" href="#推荐使用客户端" aria-label="Permalink to &quot;推荐使用客户端&quot;">​</a></h2><p>使用以下二次开发客户端接入free-api系列项目更快更简单，支持文档/图像上传！</p><p>由 <a href="https://github.com/Yanyutin753/lobe-chat" target="_blank" rel="noreferrer">Clivia</a> 二次开发的LobeChat <a href="https://github.com/Yanyutin753/lobe-chat" target="_blank" rel="noreferrer">https://github.com/Yanyutin753/lobe-chat</a></p><p>由 <a href="https://github.com/SuYxh" target="_blank" rel="noreferrer">时光@</a> 二次开发的ChatGPT Web <a href="https://github.com/SuYxh/chatgpt-web-sea" target="_blank" rel="noreferrer">https://github.com/SuYxh/chatgpt-web-sea</a></p><h2 id="接口列表" tabindex="-1">接口列表 <a class="header-anchor" href="#接口列表" aria-label="Permalink to &quot;接口列表&quot;">​</a></h2><p>目前支持与openai兼容的 <code>/v1/chat/completions</code> 接口，可自行使用与openai或其他兼容的客户端接入接口，或者使用 <a href="https://dify.ai/" target="_blank" rel="noreferrer">dify</a> 等线上服务接入使用。</p><h3 id="对话补全" tabindex="-1">对话补全 <a class="header-anchor" href="#对话补全" aria-label="Permalink to &quot;对话补全&quot;">​</a></h3><p>对话补全接口，与openai的 <a href="https://platform.openai.com/docs/guides/text-generation/chat-completions-api" target="_blank" rel="noreferrer">chat-completions-api</a> 兼容。</p><p><strong>POST /v1/chat/completions</strong></p><p>header 需要设置 Authorization 头部：</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#babed8;">Authorization: Bearer [userToken value]</span></span>
<span class="line"><span style="color:#babed8;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>请求数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">// model必须为deepseek_chat或deepseek_code</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">deepseek_chat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">messages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">user</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">你是谁？</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">// 如果使用SSE流请设置为true，默认false</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">stream</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>响应数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">model</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">deepseek_chat</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">object</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">chat.completion</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">choices</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">role</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">assistant</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> 我是DeepSeek Chat，一个由中国深度求索公司开发的智能助手，基于人工智能技术构建，旨在通过自然语言处理和机器学习算法来提供信息查询、对话交流和解答问题等服务。我的设计理念是遵循社会主义核心价值观，致力于为用户提供准确、安全、有益的信息和帮助。</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">finish_reason</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stop</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">usage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">prompt_tokens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">completion_tokens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">total_tokens</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">created</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1715061432</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="usertoken存活检测" tabindex="-1">userToken存活检测 <a class="header-anchor" href="#usertoken存活检测" aria-label="Permalink to &quot;userToken存活检测&quot;">​</a></h3><p>检测userToken是否存活，如果存活live未true，否则为false，请不要频繁（小于10分钟）调用此接口。</p><p><strong>POST /token/check</strong></p><p>请求数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">token</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9...</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>响应数据：</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">live</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><h3 id="nginx反代优化" tabindex="-1">Nginx反代优化 <a class="header-anchor" href="#nginx反代优化" aria-label="Permalink to &quot;Nginx反代优化&quot;">​</a></h3><p>如果您正在使用Nginx反向代理deepseek-free-api，请添加以下配置项优化流的输出效果，优化体验感。</p><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 关闭代理缓冲。当设置为off时，Nginx会立即将客户端请求发送到后端服务器，并立即将从后端服务器接收到的响应发送回客户端。</span></span>
<span class="line"><span style="color:#89DDFF;">proxy_buffering </span><span style="color:#BABED8;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启用分块传输编码。分块传输编码允许服务器为动态生成的内容分块发送数据，而不需要预先知道内容的大小。</span></span>
<span class="line"><span style="color:#89DDFF;">chunked_transfer_encoding </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启TCP_NOPUSH，这告诉Nginx在数据包发送到客户端之前，尽可能地发送数据。这通常在sendfile使用时配合使用，可以提高网络效率。</span></span>
<span class="line"><span style="color:#89DDFF;">tcp_nopush </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 开启TCP_NODELAY，这告诉Nginx不延迟发送数据，立即发送小数据包。在某些情况下，这可以减少网络的延迟。</span></span>
<span class="line"><span style="color:#89DDFF;">tcp_nodelay </span><span style="color:#BABED8;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置保持连接的超时时间，这里设置为120秒。如果在这段时间内，客户端和服务器之间没有进一步的通信，连接将被关闭。</span></span>
<span class="line"><span style="color:#89DDFF;">keepalive_timeout </span><span style="color:#BABED8;">120</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="token统计" tabindex="-1">Token统计 <a class="header-anchor" href="#token统计" aria-label="Permalink to &quot;Token统计&quot;">​</a></h3><p>由于推理侧不在deepseek-free-api，因此token不可统计，将以固定数字返回。</p><h2 id="star-history" tabindex="-1">Star History <a class="header-anchor" href="#star-history" aria-label="Permalink to &quot;Star History&quot;">​</a></h2><p><a href="https://star-history.com/#LLM-Red-Team/deepseek-free-api&amp;Date" target="_blank" rel="noreferrer"><img src="https://api.star-history.com/svg?repos=LLM-Red-Team/deepseek-free-api&amp;type=Date" alt="Star History Chart"></a></p>`,93),d=[i,D,y];function u(F,h,b,m,B,E){return n(),e("div",null,d)}const k=a(c,[["render",u]]);export{C as __pageData,k as default};
