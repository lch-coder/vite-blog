import{_ as s,c as n,o as a,a as l}from"./app.fd8ae02a.js";const i=JSON.parse('{"title":"\u54CD\u5E94\u5F0F API\uFF1A\u6838\u5FC3","description":"","frontmatter":{},"headers":[{"level":2,"title":"ref","slug":"ref"}],"relativePath":"frontEnd/vue/ref.md","lastUpdated":1660897901000}'),p={name:"frontEnd/vue/ref.md"},o=l(`<h1 id="\u54CD\u5E94\u5F0F-api\uFF1A\u6838\u5FC3" tabindex="-1">\u54CD\u5E94\u5F0F API\uFF1A\u6838\u5FC3 <a class="header-anchor" href="#\u54CD\u5E94\u5F0F-api\uFF1A\u6838\u5FC3" aria-hidden="true">#</a></h1><h2 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h2><p>\u63A5\u53D7\u4E00\u4E2A\u5185\u90E8\u503C\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u3001\u53EF\u66F4\u6539\u7684 ref \u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u53EA\u6709\u4E00\u4E2A\u6307\u5411\u5176\u5185\u90E8\u503C\u7684\u5C5E\u6027 <code>.value</code>\u3002</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u4E00\u822C\u7528\u6765\u5B9A\u4E49\u57FA\u672C\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u3002\u6CE8\u610F\u8FD9\u91CC\u8BF4\u7684\u662F\u4E00\u822C\uFF0C\u5E76\u4E0D\u662F\u8BF4ref\u5C31\u4E0D\u80FD\u5B9A\u4E49\u5F15\u7528\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u3002</p><p>\u5982\u679C\u5C06\u4E00\u4E2A\u5BF9\u8C61\u8D4B\u503C\u7ED9 ref\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5BF9\u8C61\u5C06\u901A\u8FC7 <code>reactive()</code> \u8F6C\u4E3A\u5177\u6709\u6DF1\u5C42\u6B21\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u3002\u8FD9\u4E5F\u610F\u5473\u7740\u5982\u679C\u5BF9\u8C61\u4E2D\u5305\u542B\u4E86\u5D4C\u5957\u7684 ref\uFF0C\u5B83\u4EEC\u5C06\u88AB\u6DF1\u5C42\u5730\u89E3\u5305\u3002</p><p>\u82E5\u8981\u907F\u514D\u8FD9\u79CD\u6DF1\u5C42\u6B21\u7684\u8F6C\u6362\uFF0C\u8BF7\u4F7F\u7528 <code>shallowRef()</code> \u6765\u66FF\u4EE3\u3002</p></div><p>\u4F7F\u7528ref\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u5728setup\u51FD\u6570\u4E2D\u4F7F\u7528\u9700\u8981\u52A0\u4E0A.value\uFF0C\u4F46\u5728\u6A21\u677F\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> @click=&quot;decrease&quot;&gt;decrease&lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;span&gt;count: {{</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">}}&lt;/span&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;button @click=&quot;plus&quot;&gt;plus&lt;/button&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/template&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;script&gt;</span></span>
<span class="line"><span style="color:#C792EA;">import</span><span style="color:#89DDFF;"> {</span><span style="color:#A6ACCD;"> defineComponent</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> ref </span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">from</span><span style="color:#89DDFF;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">default</span><span style="color:#89DDFF;"> defineComponent({</span></span>
<span class="line"><span style="color:#89DDFF;">  setup() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    const count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    const </span><span style="color:#82AAFF;">plus</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    const </span><span style="color:#82AAFF;">decrease</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">--</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    return </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      count</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      plus</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      decrease</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/script&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u4F7F\u7528ref\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">This is a root element</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onMounted </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">    const root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">null</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onMounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u83B7\u53D6\u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">console</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">root</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &lt;div&gt;This is a root element&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      root</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u5728v-for\u4E2D\u4F7F\u7528ref\u83B7\u53D6\u591A\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(item, index) in 5</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :key=&quot;index&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    :ref=&quot;(el) =&gt; (root[index] = el)&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    This is a root element</span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> item </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> ref</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onMounted </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">setup</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u521B\u5EFA</span></span>
<span class="line"><span style="color:#A6ACCD;">    const root </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onMounted</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">// \u83B7\u53D6\u591A\u4E2A\u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">console</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">root</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">value</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    return {</span></span>
<span class="line"><span style="color:#A6ACCD;">      root</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,10),e=[o];function t(c,r,D,F,y,A){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};
