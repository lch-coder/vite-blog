import{_ as s,c as a,o as n,a as l}from"./app.9c2bc79d.js";const i=JSON.parse('{"title":"el-radio \u9ED8\u8BA4\u503C\u9009\u4E0D\u4E2D","description":"","frontmatter":{},"headers":[{"level":2,"title":"el-radio \u9ED8\u8BA4\u503C\u9009\u4E0D\u4E2D","slug":"el-radio-\u9ED8\u8BA4\u503C\u9009\u4E0D\u4E2D"}],"relativePath":"frontEnd/elementPlus/el-radio.md","lastUpdated":1660228798000}'),p={name:"frontEnd/elementPlus/el-radio.md"},o=l(`<h2 id="el-radio-\u9ED8\u8BA4\u503C\u9009\u4E0D\u4E2D" tabindex="-1">el-radio \u9ED8\u8BA4\u503C\u9009\u4E0D\u4E2D <a class="header-anchor" href="#el-radio-\u9ED8\u8BA4\u503C\u9009\u4E0D\u4E2D" aria-hidden="true">#</a></h2><p>\u4F20\u53C2\u7C7B\u578B\u662F number \u7C7B\u578B\uFF0Clabel \u524D\u9762\u9700\u8981\u52A0:</p><div class="language-javascript"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5355\u9009\u6846</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h4</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6574\u6570\u7C7B\u578B</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">h3</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u5982\u679C\u5355\u9009\u6846\u7684\u503C\u662Fnumber,\u5355\u9009\u6846\u7684lable\u9700\u8981\u8BBE\u7F6E\u6210:lable=&quot;1&quot;</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-form-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u72B6\u6001</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prop</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-radio-group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form.status1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @change=&quot;getRadioData&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">                    &lt;el-radio :label=&quot;1&quot;&gt;\u7981\u7528&lt;/el-radio&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">                    &lt;el-radio :label=&quot;2&quot;&gt;\u6B63\u5E38&lt;/el-radio&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">                &lt;/el-radio-group&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            &lt;/el-form-item&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            &lt;h3&gt;\u5B57\u7B26\u4E32\u7C7B\u578B&lt;/h3&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">            &lt;el-form-item </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u72B6\u6001</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">prop</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-radio-group</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">form.status2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @change=&quot;getRadioData&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">                    &lt;el-radio </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u7981\u7528</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-radio</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">el-radio</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u6B63\u5E38</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-radio</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-radio-group</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-form-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">el-form</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">export default </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">data</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        return {</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">status1</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#F07178;">status2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    methods: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">getRadioData</span><span style="color:#A6ACCD;">(val) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">\u83B7\u5F97\u7684\u5355\u9009\u6846\u503C\u662F\uFF1A</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> typeof val)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">scoped</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,3),t=[o];function e(c,D,r,F,y,C){return n(),a("div",null,t)}var d=s(p,[["render",e]]);export{i as __pageData,d as default};
