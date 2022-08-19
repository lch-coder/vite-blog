import{_ as s,c as n,o as a,a as p}from"./app.fd8ae02a.js";const i=JSON.parse('{"title":"Grid \u5E03\u5C40","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/css/grid.md","lastUpdated":1660897901000}'),l={name:"frontEnd/css/grid.md"},o=p(`<h1 id="grid-\u5E03\u5C40" tabindex="-1">Grid \u5E03\u5C40 <a class="header-anchor" href="#grid-\u5E03\u5C40" aria-hidden="true">#</a></h1><p><strong>1.\u4EC0\u4E48\u662F Grid \u5E03\u5C40</strong></p><p><code>Grid</code> \u5E03\u5C40\u5373\u7F51\u683C\u5E03\u5C40\uFF0C\u662F\u4E00\u79CD\u65B0\u7684 css \u6A21\u578B\uFF0C\u4E00\u822C\u662F\u5C06\u4E00\u4E2A\u9875\u9762\u5212\u5206\u6210\u51E0\u4E2A\u4E3B\u8981\u7684\u533A\u57DF\uFF0C\u5B9A\u4E49\u8FD9\u4E9B\u533A\u57DF\u7684\u5927\u5C0F\u3001\u4F4D\u7F6E\u548C\u5C42\u6B21\u7B49\u5173\u7CFB\uFF0C\u662F\u76EE\u524D\u552F\u4E00\u4E00\u79CD css \u4E8C\u7EF4\u5E03\u5C40\u3002</p><p><strong>2.\u548C flex \u5E03\u5C40\u7684\u533A\u522B</strong></p><p>Grig \u5E03\u5C40\u548C flex \u5E03\u5C40\u65F6\u6709\u5B9E\u8D28\u6027\u7684\u533A\u522B\u7684\uFF0C<code>flex</code> <strong>\u5E03\u5C40\u662F\u4E00\u7EF4\u5E03\u5C40</strong>\uFF0C\u53EA\u80FD\u5904\u7406\u4E00\u4E2A\u7EF4\u5EA6\u4E0A\u7684\u5E03\u5C40\uFF0C\u4E00\u884C\u6216\u8005\u662F\u4E00\u5217\uFF0C\u4F46\u662F <code>Grid</code> <strong>\u5E03\u5C40\u662F\u4E8C\u7EF4\u5E03\u5C40</strong>\uFF0C\u5C06\u5BB9\u5668\u5212\u5206\u6210\u4E86 \u201C\u884C\u201D \u548C\u201D \u5217\u201D\uFF0C\u4EA7\u751F\u4E86\u4E00\u4E2A\u4E2A\u7684\u7F51\u683C\uFF0C\u53EF\u4EE5\u5C06\u7F51\u683C\u5143\u7D20\u653E\u5728\u884C\u548C\u5217\u76F8\u5173\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u4ECE\u800C\u8FBE\u5230\u4E86\u5E03\u5C40\u7684\u76EE\u7684\u3002</p><p>flex \u5E03\u5C40\u793A\u4F8B\uFF1A</p><p>grid \u5E03\u5C40\u793A\u4F8B\uFF1A</p><p><strong>3.Grid \u5E03\u5C40\u7684\u57FA\u672C\u6982\u5FF5</strong></p><p>\u9996\u5148\u6211\u4EEC\u5148\u770B\u4E00\u4E2A\u5C0F\u4F8B\u5B50\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u4F8B\u5B50\u6F14\u793A\u4E00\u4E9B\u57FA\u7840\u6982\u5FF5</p><div class="language-html"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/* \u58F0\u660E\u4E00\u4E2A\u5BB9\u5668 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/* \u58F0\u660E\u5217\u7684\u5BBD\u5EA6\uFF0C\u6570\u5B573\u8868\u793A\u91CD\u590D\u6B21\u6570\uFF0C\u5373\u67093\u5217\u5BBD\u5EA6\u4E3A200px */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/* \u58F0\u660E\u884C\u95F4\u8DDD\u548C\u5217\u95F4\u8DDD */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">grid-gap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">/* \u5206\u522B\u8868\u793A\u4E24\u884C\u7684\u9AD8\u5EA6 */</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">one</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">19caad</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">two</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">8cc7b5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">three</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">d1ba74</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">four</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">bee7e9</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">five</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">e6ceac</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">six</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ecad9e</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrapper</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">one item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">One</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">two item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Two</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">three item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Three</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">four item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Four</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">five item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Five</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">six item</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Six</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><p><strong>4.\u5BB9\u5668\u5C5E\u6027</strong></p><p>display:grid;\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000//\u9ED8\u8BA4\u662F\u5757\u5143\u7D20</p><p>display:inline-grid;\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000//\u884C\u5185\u5757\u5143\u7D20</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u8BBE\u7F6E\u4E3A grid \u540E\uFF0C\u5B50\u5143\u7D20\u7684 float,display: inline-block,display: table-cell\u3001vertical-align \u548C column-*\u7B49\u8BBE\u7F6E\u90FD\u5C06\u5931\u6548\u3002</p></div><p>grid-template-columns\uFF1A\u5B9A\u4E49\u6BCF\u4E00\u5217\u7684\u5217\u5BBD;</p><p>grid-template-columns\uFF1A100px 100px 100px;\u3000\u3000\u3000\u3000\u3000\u3000//\u603B\u5171\u4E09\u5217\uFF0C\u6BCF\u5217\u5217\u5BBD\u662F 100px</p><p>grid-template-rows\uFF1A\u5B9A\u4E49\u6BCF\u4E00\u884C\u7684\u884C\u9AD8;</p><p>grid-template-rows\uFF1A100px 100px 100px;\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000//\u4ECE\u4E0A\u81F3\u4E0B\uFF0C\u6BCF\u884C\u9AD8\u5EA6\u4E3A 100px</p><p>//\u9664\u4E86\u4F7F\u7528\u50CF\u7D20\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u767E\u5206\u6BD4\uFF1B</p><p>\u62D3\u5C55\uFF1A</p><p>\u91CD\u590D\u5199\u503C\u5F88\u9EBB\u70E6\uFF0C\u53EF\u4EE5\u7528 repeat \u51FD\u6570</p><p>repeat(\u6B21\u6570\uFF0C\u5927\u5C0F)</p><p>\u4F8B\u5982\uFF1Arepeat(3,100px);\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000//\u91CD\u590D 3 \u6B21\uFF0C\u6BCF\u6B21 100px</p><p>repeat \u5199\u6CD5\uFF1A</p><p>grid-template-columns\uFF1Arepeat(3,100px);</p><p>grid-template-rows\uFF1Arepeat(3,100px);</p><p>\u4E5F\u53EF\u4EE5\u91CD\u590D\u67D0\u4E00\u79CD\u4E0D\u56FA\u5B9A\u5927\u5C0F\u6A21\u5F0F\uFF1B</p><p>\u4F8B\u5982\uFF1A</p><p>grid-template-columns\uFF1A100px 80px 100px;</p><p>\u6539\u5199\u6210\uFF1A</p><p>grid-template-columns\uFF1Arepeat(2,100px 80px);\u3000\u3000\u3000\u3000//\u4EE3\u8868\u91CD\u590D 2 \u6B21 100px 80px \u7684\u6A21\u5F0F\uFF1B\u4E5F\u5C31\u662F 4 \u5217\uFF1B</p><p>\u7B49\u540C\u4E8E\uFF1A</p><p>grid-template-columns\uFF1A100px 80px 100px 80px;</p><p><strong>5.\u5173\u952E\u5B57</strong></p><p>auto-fill\uFF1A\u5982\u679C\u5BB9\u5668\u5927\u5C0F\u4E0D\u56FA\u5B9A\uFF0C\u9879\u76EE\u5927\u5C0F\u56FA\u5B9A\uFF0C\u53EF\u4EE5\u7528 auto-fill \u5173\u952E\u5B57\u81EA\u52A8\u586B\u5145\uFF1B</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">     display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">     grid-template-columns: repeat(auto-fill, 100px);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>fr\uFF1A\u5982\u679C\u4E24\u5217\u7684\u5BBD\u5EA6\u5206\u522B\u4E3A 1fr \u548C 2fr\uFF0C\u5C31\u8868\u793A\u540E\u8005\u662F\u524D\u8005\u7684\u4E24\u500D\u3002</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">     display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">     grid-template-columns: 1fr 2fr;</span></span>
<span class="line"><span style="color:#A6ACCD;">     grid-template-rows: repeat(3, 100px 80px);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>minmax\uFF1A\u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u6700\u5C0F\u503C,\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u6700\u5927\u503C</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">     display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">     grid-template-columns: 1fr 5fr minmax(100px, 1fr);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>auto\uFF1A\u81EA\u9002\u5E94</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">.wrapper {</span></span>
<span class="line"><span style="color:#A6ACCD;">     display: grid;</span></span>
<span class="line"><span style="color:#A6ACCD;">     grid-template-columns: 100px auto 100px;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>\u95F4\u8DDD</p><p>row-gap:\u884C\u95F4\u8DDD\uFF1Bcolum-gap:\u5217\u95F4\u8DDD\uFF1B</p><p>\u7B80\u5199\uFF1A</p><p>gap:20px 20px;</p><p>row-gap \u548C column-gap \u7B80\u5199\u5F62\u5F0F\uFF1B</p><p>gap \u7701\u7565\u4E86\u7B2C\u4E8C\u4E2A\u503C\uFF0C\u6D4F\u89C8\u5668\u8BA4\u4E3A\u7B2C\u4E8C\u4E2A\u503C\u7B49\u4E8E\u7B2C\u4E00\u4E2A\u503C\u3002</p>`,49),e=[o];function t(c,r,D,F,y,C){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{i as __pageData,d as default};