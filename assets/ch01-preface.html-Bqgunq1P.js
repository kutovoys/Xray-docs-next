import{_ as s,r as o,o as p,c as r,a,e as t}from"./app-B5DkS5rI.js";const e="/Xray-docs-next/assets/ch01-img01-choice-DrFC1LCY.png",i={},l=t('<h1 id="【глава-1】-простыми-словами" tabindex="-1"><a class="header-anchor" href="#【глава-1】-простыми-словами"><span>【Глава 1】 Простыми словами</span></a></h1><h2 id="_1-1-для-кого-эта-документация" tabindex="-1"><a class="header-anchor" href="#_1-1-для-кого-эта-документация"><span>1.1 Для кого эта документация?</span></a></h2><p>В двух словах: для <strong>① новичков без опыта</strong> <strong>② желающих научиться настраивать свой собственный VPS</strong>.</p><h2 id="_1-2-для-кого-эта-документация-не-предназначена" tabindex="-1"><a class="header-anchor" href="#_1-2-для-кого-эта-документация-не-предназначена"><span>1.2 Для кого эта документация не предназначена?</span></a></h2><p>В том числе, но не ограничиваясь: для всевозможных гуру и экспертов, для тех, кто слишком ленив, чтобы во всём разбираться самостоятельно, для тех, кто уже умеет настраивать VPS, для тех, кто точно решил пользоваться платными VPN-сервисами, для тех, кто предпочитает использовать готовые скрипты... Короче говоря, если у вас есть технические знания или вы не хотите настраивать всё сами, можете смело закрывать эту статью. Скорее всего, она покажется вам бесполезной и даже может вызвать раздражение, а оно вам надо?</p><h2 id="_1-3-важное-замечание-и-другие-примечания" tabindex="-1"><a class="header-anchor" href="#_1-3-важное-замечание-и-другие-примечания"><span>1.3 Важное замечание и другие примечания</span></a></h2><p><strong>Важное замечание:</strong></p><p>Я не являюсь техническим экспертом, поэтому в этой статье неизбежны пробелы и неточности. Если вы обнаружите какие-либо ошибки, пожалуйста, дайте мне знать об этом деликатно, без лишних эмоций.</p><p><strong>Отказ от ответственности:</strong></p><p>Пожалуйста, относитесь к информации, представленной в этой статье, критически и проверяйте её самостоятельно. Я не несу никакой ответственности за любые проблемы или негативные последствия, возникшие в результате использования информации из этой статьи.</p><p><strong>Предупреждение о многословности:</strong></p><p>Поскольку эта статья предназначена для <strong>новичков без опыта</strong>, многие вещи будут объяснены максимально подробно. Поэтому будьте готовы к тому, что текст будет довольно многословным.</p><h2 id="_1-4-почему-самостоятельная-настроика-—-это-сложно" tabindex="-1"><a class="header-anchor" href="#_1-4-почему-самостоятельная-настроика-—-это-сложно"><span>1.4 Почему самостоятельная настройка — это сложно?</span></a></h2><p>Чтобы ответить на этот вопрос, нужно немного углубиться в историю вопроса.</p><p>Во-первых, обход блокировок существует уже почти двадцать лет (Шок! Ужас!). Сначала для этого достаточно было пары манипуляций (поправить файл hosts, подключиться по SSH), потом понадобились веб-прокси, затем — собственные протоколы (например, Shadowsocks) и так далее.</p><p>По мере того, как технологии блокировок совершенствовались на протяжении последних десятилетий, для самостоятельного обхода блокировок теперь нужно уметь:</p><ul><li>Разбираться в основных командах Linux.</li><li>Понимать принципы работы сетевых протоколов.</li><li>Иметь технические навыки и средства для покупки и управления VPS.</li><li>Иметь технические навыки и средства для покупки и управления доменными именами.</li><li>Уметь получать TLS-сертификаты.</li><li>И многое другое.</li></ul><p>Всё это превратило некогда простую задачу в пугающее испытание для новичков.</p><p>Во-вторых, о проблемах новичков.</p><p>Начинающим пользователям без технического бэкграунда, чтобы разобраться во всех этих премудростях, приходится изучать огромные массивы информации, разбросанной по всему интернету: блогам, форумам, группам в мессенджерах, репозиториям на GitHub, видео на YouTube и так далее.</p><p>Вся эта информация часто оказывается противоречивой, неполной или попросту неверной. Новичкам остаётся только гадать, кому верить и как всё это работает на самом деле.</p><p>В итоге вместо нехватки информации новички сталкиваются с её избытком. После нескольких (скорее всего, неудачных) попыток разобраться во всём этом, их энтузиазм угасает. А если по пути им ещё и «посчастливится» обратиться за помощью не в то место, их могут ещё и высмеять: «Ну ты и нуб, проще уж платным VPN пользоваться, зачем изобретать велосипед?» или «Сначала Linux изучи, потом приходи».</p><p>В такие моменты остаётся только горько усмехнуться.</p><h2 id="_1-5-«почему-бы-просто-не-пользоваться-платным-vpn-»" tabindex="-1"><a class="header-anchor" href="#_1-5-«почему-бы-просто-не-пользоваться-платным-vpn-»"><span>1.5 «Почему бы просто не пользоваться платным VPN?»</span></a></h2><p>Во-первых, я хотел бы спросить у любителей подобных советов: разве платные VPN — это панацея?</p><p>Во-вторых, я считаю, что «не знать» и «не хотеть знать» — это две большие разницы. Конечно, инфантилы, которые хотят всё и сразу, не прилагая никаких усилий, вызывают только раздражение. Но люди, которые искренне хотят разобраться во всём сами, не заслуживают презрения и издёвок. Именно эта нетерпимость к новичкам и побудила меня написать эту статью.</p><p>Давайте разберёмся, в чём плюсы и минусы платных VPN-сервисов.</p><p><strong>Плюсы:</strong></p><ol><li><strong>Простота использования:</strong> сканирование QR-кода, добавление правил в один клик и т.д.</li><li><strong>Большой выбор серверов:</strong> доступ к ресурсам разных стран и регионов; например, выделенные серверы с низкой задержкой (iplc), серверы для онлайн-игр и т.д.</li><li><strong>Множество точек подключения:</strong> выше устойчивость к блокировкам, если один сервер заблокируют, можно подключиться к другому.</li></ol><p><strong>Риски:</strong></p><p>За удобство приходится платить, и в случае с платными VPN-сервисами риски следующие:</p><ol><li><strong>VPN-провайдер имеет полный доступ к вашим данным:</strong> всё, что вы делаете в интернете, <strong>обязательно</strong> проходит и <strong>с большой вероятностью</strong> хранится на серверах провайдера. Эти данные никак не защищены пользовательским соглашением или законом о защите персональных данных <strong>(вас могут отслеживать и записывать всё, что вы делаете)</strong>.</li><li><strong>Отсутствие регулирования рынка:</strong> высока вероятность нарваться на мошенников <strong>(провайдер может в любой момент исчезнуть с вашими деньгами)</strong>.</li><li><strong>Давление со стороны регулирующих органов:</strong> крупные VPN-провайдеры, с одной стороны, кажутся более надёжными, но, с другой стороны, чаще привлекают к себе внимание властей. В 2020 году было несколько случаев закрытия и прекращения работы крупных VPN-провайдеров, что привело к серьёзным неудобствам для пользователей <strong>(провайдер может быть вынужден прекратить работу)</strong>.</li><li><strong>Непрозрачность технических решений:</strong> качество предоставляемых услуг может сильно варьироваться, не редки случаи обмана <strong>(низкая скорость, частые обрывы связи, невозможность подключения)</strong>.</li></ol><h2 id="_1-6-так-стоит-ли-настраивать-vpn-самостоятельно" tabindex="-1"><a class="header-anchor" href="#_1-6-так-стоит-ли-настраивать-vpn-самостоятельно"><span>1.6 Так стоит ли настраивать VPN самостоятельно?</span></a></h2><p>Теперь, когда вы знаете о плюсах и минусах платных VPN, решать вам. В конце концов, лучший вариант — тот, который подходит именно вам.</p><p><img src="'+e+'" alt="Выбор за вами!"></p><ol><li><p>Если вы решили воспользоваться платным VPN, можете закрыть эту статью.</p></li><li><p>Если же вы решили настроить всё самостоятельно, продолжайте чтение!</p></li></ol><p>Цель этой статьи — стать отправной точкой для новичков, предоставить подробное пошаговое руководство по настройке VPN-сервера на VPS, начиная <strong>с ввода первой команды</strong> и заканчивая <strong>успешным подключением к заблокированным ресурсам</strong>.</p><p>В процессе настройки вы познакомитесь с основными командами Linux, что станет хорошей базой для дальнейшего изучения этой операционной системы.</p><h2 id="_1-7-немного-лирики" tabindex="-1"><a class="header-anchor" href="#_1-7-немного-лирики"><span>1.7 Немного лирики</span></a></h2><ol><li>В интернете много дезинформации, поэтому важно научиться критически мыслить, не поддаваться на провокации и не верить всему, что пишут.</li><li>Искренне надеюсь, что, получив доступ к свободному интернету, вы сможете узнавать больше нового, наслаждаться разнообразным контентом, знакомиться с интересными людьми и находить единомышленников.</li><li>Ваша личность в интернете — это всё ещё вы. Добиться полной анонимности крайне сложно, поэтому не забывайте о законах вашей страны и стран, IP-адреса которых вы используете. Всегда помните о собственной безопасности.</li></ol><h2 id="_1-8-ваш-прогресс" tabindex="-1"><a class="header-anchor" href="#_1-8-ваш-прогресс"><span>1.8 Ваш прогресс</span></a></h2><blockquote><p>⬛⬜⬜⬜⬜⬜⬜⬜ 12.5%</p></blockquote>',42);function h(c,g){const n=o("I18nTip");return p(),r("div",null,[a(n),l])}const _=s(i,[["render",h],["__file","ch01-preface.html.vue"]]);export{_ as default};