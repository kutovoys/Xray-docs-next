import{d as o}from"./app.484747b6.js";const e={},n=o('<h1 id="log-configuration" tabindex="-1"><a class="header-anchor" href="#log-configuration" aria-hidden="true">#</a> Log Configuration</h1><p>Log configuration controls how Xray outputs logs.</p><p>Xray has two types of logs: access logs and error logs. You can configure the output method for each type of log separately.</p><h2 id="logobject" tabindex="-1"><a class="header-anchor" href="#logobject" aria-hidden="true">#</a> LogObject</h2><p>LogObject corresponds to the <code>log</code> item in the configuration file.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;log&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;access&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file_path&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token string">&quot;file_path&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;loglevel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;warning&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;dnsLog&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><blockquote><p><code>access</code>: string</p></blockquote><p>The file path for the access log. The value is a valid file path, such as <code>&quot;/var/log/Xray/access.log&quot;</code> (Linux) or <code>&quot;C:\\\\Temp\\\\Xray\\\\_access.log&quot;</code> (Windows). When this item is not specified or is an empty value, the log is output to stdout.</p><ul><li>The special value <code>none</code> disables access logs.</li></ul><blockquote><p><code>error</code>: string</p></blockquote><p>The file path for the error log. The value is a valid file path, such as <code>&quot;/var/log/Xray/error.log&quot;</code> (Linux) or <code>&quot;C:\\\\Temp\\\\Xray\\\\_error.log&quot;</code> (Windows). When this item is not specified or is an empty value, the log is output to stdout.</p><ul><li>The special value <code>none</code> disables error logs.</li></ul><blockquote><p><code>loglevel</code>: &quot;debug&quot; | &quot;info&quot; | &quot;warning&quot; | &quot;error&quot; | &quot;none&quot;</p></blockquote><p>The log level for error logs, indicating the information that needs to be recorded. The default value is <code>&quot;warning&quot;</code>.</p><ul><li><code>&quot;debug&quot;</code>: Output information used for debugging the program. Includes all <code>&quot;info&quot;</code> content.</li><li><code>&quot;info&quot;</code>: Runtime status information, etc., which does not affect normal use. Includes all <code>&quot;warning&quot;</code> content.</li><li><code>&quot;warning&quot;</code>: Information output when there are some problems that do not affect normal operation but may affect user experience. Includes all <code>&quot;error&quot;</code> content.</li><li><code>&quot;error&quot;</code>: Xray encountered a problem that cannot be run normally and needs to be resolved immediately.</li><li><code>&quot;none&quot;</code>: Do not record any content.</li></ul><blockquote><p><code>dnsLog</code>: bool</p></blockquote><p>Whether to enable DNS query logs, for example: <code>DOH//doh.server got answer: domain.com -&gt; [ip1, ip2] 2.333ms</code>.</p>',17);e.render=function(o,e){return n};export default e;