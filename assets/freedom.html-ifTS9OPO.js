import{_ as p,r as c,o as l,c as d,a as t,b as e,d as o,w as s,e as a}from"./app-B5DkS5rI.js";const r={},i=a(`<h1 id="freedom" tabindex="-1"><a class="header-anchor" href="#freedom"><span>Freedom</span></a></h1><p>Freedom - это исходящий протокол, который можно использовать для отправки (обычных) данных TCP или UDP в любую сеть.</p><h2 id="outboundconfigurationobject" tabindex="-1"><a class="header-anchor" href="#outboundconfigurationobject"><span>OutboundConfigurationObject</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;domainStrategy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AsIs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:3366&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;userLevel&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;fragment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;packets&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tlshello&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;100-200&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interval&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10-20&quot;</span> <span class="token comment">// в миллисекундах</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proxyProtocol&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>domainStrategy</code>: &quot;AsIs&quot;<br> &quot;UseIP&quot; | &quot;UseIPv6v4&quot; | &quot;UseIPv6&quot; | &quot;UseIPv4v6&quot; | &quot;UseIPv4&quot;<br> &quot;ForceIP&quot; | &quot;ForceIPv6v4&quot; | &quot;ForceIPv6&quot; | &quot;ForceIPv4v6&quot; | &quot;ForceIPv4&quot;</p></blockquote><p>Значение по умолчанию: <code>&quot;AsIs&quot;</code>.</p><p>Если целевой адрес является доменным именем, настройте соответствующее значение для режима работы Freedom:</p>`,7),q=e("li",null,[o("При использовании "),e("code",null,'"AsIs"'),o(" Xray будет напрямую использовать системный стек для установления соединения, приоритет и выбор IP будут зависеть от системных настроек. По некоторым причинам UDP-соединения, использующие доменные имена, будут игнорировать системные настройки и отдавать приоритет IPv4.")],-1),v=a("<li><code>&quot;IPv4&quot;</code> означает попытку подключения только с использованием IPv4, <code>&quot;IPv4v6&quot;</code> - попытку подключения с использованием IPv4 или IPv6, но с предпочтением IPv4 для доменных имен с поддержкой обоих протоколов. (То же самое относится и к v4v6, но в обратном порядке, поэтому здесь не приводится).</li><li>Если в настройках встроенного DNS указан параметр <code>&quot;queryStrategy&quot;</code>, фактическое поведение будет объединено с этой опцией, и будут разрешаться только те типы IP, которые включены в обе опции. Например, <code>&quot;queryStrategy&quot;: &quot;UseIPv4&quot;</code> и <code>&quot;domainStrategy&quot;: &quot;UseIP&quot;</code> фактически эквивалентны <code>&quot;domainStrategy&quot;: &quot;UseIPv4&quot;</code>.</li><li>При использовании опций, начинающихся с <code>&quot;Use&quot;</code>, если результаты разрешения не соответствуют требованиям (например, доменное имя имеет только результат разрешения IPv4, но используется UseIPv6), будет выполнен откат к AsIs.</li><li>При использовании опций, начинающихся с <code>&quot;Force&quot;</code>, если результаты разрешения не соответствуют требованиям, соединение не будет установлено.</li>",4),m={class:"custom-container tip"},k=e("p",{class:"custom-container-title"},"СОВЕТ 1",-1),_=e("code",null,'"UseIP"',-1),P=e("code",null,'"ForceIP"',-1),b=e("code",null,"sendThrough",-1),h=e("code",null,"sendThrough",-1),I=e("code",null,"sendThrough",-1),g=a("<blockquote><p><code>redirect</code>: адрес_порт</p></blockquote><p>Freedom будет принудительно отправлять все данные на указанный адрес (а не на адрес, указанный во входящем соединении).</p><p>Его значение представляет собой строку, например: <code>&quot;127.0.0.1:80&quot;</code>, <code>&quot;:1234&quot;</code>.</p><p>Если адрес не указан, например, <code>&quot;:443&quot;</code>, Freedom не будет изменять исходный целевой адрес. Если порт равен <code>0</code>, например, <code>&quot;xray.com: 0&quot;</code>, Freedom не будет изменять исходный порт.</p><blockquote><p><code>userLevel</code>: number</p></blockquote>",5),y=e("code",null,"level",-1),f=a("<blockquote><p><code>fragment</code>: map</p></blockquote><p>Некоторые пары &quot;ключ-значение&quot; для управления исходящей TCP-фрагментацией, которые в некоторых случаях могут обмануть систему цензуры, например, обойти черный список SNI.</p><p><code>&quot;packets&quot;</code>: поддерживаются два режима фрагментации: &quot;1-3&quot; - это фрагментация потока TCP, применяемая к первым трем операциям записи данных на стороне клиента. &quot;tlshello&quot; - это фрагментация пакета TLS-рукопожатия.</p><p><code>&quot;length&quot;</code>: длина фрагмента пакета (в байтах).</p><p><code>&quot;interval&quot;</code>: интервал фрагментации (в миллисекундах).</p><blockquote><p><code>proxyProtocol</code>: number</p></blockquote><p>Протокол PROXY обычно используется в сочетании с <code>redirect</code> для перенаправления на Nginx или другой сервер, на котором включен протокол PROXY. Если сервер не поддерживает протокол PROXY, соединение будет разорвано.</p><p>Значение proxyProtocol - это номер версии протокола PROXY, возможные значения: <code>1</code> или <code>2</code>. Если не указано, используется значение по умолчанию - <code>0</code> (протокол не используется).</p>",8);function F(U,x){const u=c("I18nTip"),n=c("RouterLink");return l(),d("div",null,[t(u),i,e("ul",null,[q,e("li",null,[o("При указании других значений для разрешения будет использоваться "),t(n,{to:"/ru/config/dns.html"},{default:s(()=>[o("встроенный DNS-сервер")]),_:1}),o(" Xray-core. Если DNSObject отсутствует, будет использоваться системный DNS. Если существует несколько подходящих IP-адресов, ядро случайным образом выберет один IP-адрес в качестве целевого.")]),v]),e("div",m,[k,e("p",null,[o("При использовании режимов "),_,o(" или "),P,o(" и указании "),b,o(" в "),t(n,{to:"/ru/config/outbound.html#outboundobject"},{default:s(()=>[o("конфигурации исходящего соединения")]),_:1}),o(" Freedom будет автоматически определять необходимый тип IP (IPv4 или IPv6) на основе значения "),h,o(". Если вручную указать один тип IP (например, UseIPv4), но он не совпадает с локальным адресом, указанным в "),I,o(", соединение не будет установлено.")])]),g,e("p",null,[o("Уровень пользователя, для соединения будет использоваться "),t(n,{to:"/ru/config/policy.html#levelpolicyobject"},{default:s(()=>[o("локальная политика")]),_:1}),o(", соответствующая этому уровню пользователя.")]),e("p",null,[o("Значение userLevel соответствует значению "),y,o(" в разделе "),t(n,{to:"/ru/config/policy.html#policyobject"},{default:s(()=>[o("policy")]),_:1}),o(". Если не указано, используется значение по умолчанию - 0.")]),f])}const j=p(r,[["render",F],["__file","freedom.html.vue"]]);export{j as default};