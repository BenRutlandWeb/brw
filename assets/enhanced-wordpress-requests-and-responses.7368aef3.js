import{_ as s}from"./wp-rest-api.225bc106.js";import{k as a,c as e,o as t,l as p}from"./index.ad11daf3.js";const o={class:"markdown-body"},c=p('<h1 id="enhanced-wordpress-rest-requests-and-responses" tabindex="-1">Enhanced WordPress REST Requests and Responses <a class="header-anchor" href="#enhanced-wordpress-rest-requests-and-responses"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h1><div class="text-lead"><p>How to extend WordPress Request and Response objects.</p></div><p><img src="'+s+`" alt="Enhanced WordPress REST Requests and Responses"></p><p>Why extend the <a href="https://developer.wordpress.org/reference/classes/wp_rest_request/" class="external-link" target="_blank" rel="nofollow noopener noreferrer external"><code>WP_REST_Request</code></a> and <a href="https://developer.wordpress.org/reference/classes/wp_rest_response/" class="external-link" target="_blank" rel="nofollow noopener noreferrer external"><code>WP_REST_Response</code></a> classes?</p><p>I am not a fan of WordPress\u2019 coding standards* with snake-cased methods and properties. I also like to use strict typing to make my code more reliable and simpler to debug.</p><p>By extending these core classes, we can use type hints, camel-casing and even add nice helper methods and still benefit from the parent class implementation within the REST API.</p><p><small>* This is my personal opinion, feel free to use whatever coding standard you prefer.</small></p><hr><p>Firstly let\u2019s discuss what we want from our <code>Request</code> and <code>Response</code> objects.</p><h2 id="request" tabindex="-1">Request <a class="header-anchor" href="#request"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h2><ul><li>Ways to interact with the request inputs: <code>get</code>, <code>boolean</code>, <code>has</code></li><li>The ability to validate the request</li></ul><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token variable">$request</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;email&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">boolean</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;remember&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;password&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">hasHeader</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;content-type&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><h2 id="response" tabindex="-1">Response <a class="header-anchor" href="#response"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h2><ul><li>A simple way to return content, status codes and headers</li><li>The ability to automatically convert content to the desired format</li></ul><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token variable">$response</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;Unauthorized.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token variable">$response</span><span class="token operator">-&gt;</span><span class="token function">setStatus</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token variable">$response</span><span class="token punctuation">;</span>
</span></code></pre><p>I cannot stand WordPress\u2019 coding standards, in particular snake-cased methods and properties. We\u2019ll make some nicer methods to wrap default behaviour.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Request</span> <span class="token keyword">extends</span> <span class="token class-name">WP_REST_Request</span>
<span class="token punctuation">{</span>
    <span class="token comment">/**
     * Get all inputs
     *
     * @return array
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">get_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</span></code></pre><h2 id="response-1" tabindex="-1">Response <a class="header-anchor" href="#response-1"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h2><p>The <code>WP_REST_Response</code> class extends <a href="https://developer.wordpress.org/reference/classes/wp_http_response/" class="external-link" target="_blank" rel="nofollow noopener noreferrer external"><code>WP_HTTP_Response</code></a>.</p><p>This class has getter/setter methods for the data, status and headers of the response, which we will use to improve our <code>Response</code> class.</p><p>Where possible, I will be using Laravel method names as this is already in my developer flow, but there\u2019s no hard rules.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">Response</span> <span class="token keyword">extends</span> <span class="token class-name">WP_REST_Response</span>
<span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword type-declaration">string</span> <span class="token variable">$statusText</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">int</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">get_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">statusText</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">statusText</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setStatusCode</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">set_status</span><span class="token punctuation">(</span><span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">set_status</span><span class="token punctuation">(</span><span class="token keyword type-hint">int</span> <span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">void</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">set_status</span><span class="token punctuation">(</span><span class="token variable">$code</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">statusText</span> <span class="token operator">=</span> <span class="token function">get_status_header_desc</span><span class="token punctuation">(</span><span class="token variable">$status</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">content</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">mixed</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">get_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><h2 id="response-factory" tabindex="-1">Response factory <a class="header-anchor" href="#response-factory"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h2><p>There are a few types of responses we might want to return so we can build a <code>ResponseFactory</code> class to handle these cases.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">ResponseFactory</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">make</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
    <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">json</span><span class="token punctuation">(</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$status</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$headers</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name return-type">Response</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$headers</span> <span class="token operator">=</span> <span class="token function">array_merge</span><span class="token punctuation">(</span>
            <span class="token variable">$headers</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Content-Type&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;application/json&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">,</span> <span class="token variable">$status</span><span class="token punctuation">,</span> <span class="token variable">$headers</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><p>You can use the factory like:</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ResponseFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;text&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Hello World!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><p>Or create a helper function that will reduce boilerplate:</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">function</span> <span class="token function-definition function">response</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token keyword type-hint">mixed</span> <span class="token variable">$content</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token keyword type-hint">int</span> <span class="token variable">$status</span> <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword type-hint">array</span> <span class="token variable">$headers</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token class-name">Response</span><span class="token operator">|</span><span class="token class-name">ResponseFactory</span>
<span class="token punctuation">{</span>
    <span class="token variable">$factory</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResponseFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">func_num_args</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$factory</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token variable">$factory</span><span class="token operator">-&gt;</span><span class="token function">make</span><span class="token punctuation">(</span><span class="token variable">$content</span><span class="token punctuation">,</span> <span class="token variable">$status</span><span class="token punctuation">,</span> <span class="token variable">$headers</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> <span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;text&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Hello World!&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre>`,29),l=[c],y="Enhanced WordPress REST Requests and Responses",w="Enhanced WordPress REST Requests and Responses // Ben Rutland Web",m="How to extend WordPress Request and Response objects",f="/img/wp-rest-api.png",b=["php","wordpress"],R="post",v=[{property:"og:title",content:"Enhanced WordPress REST Requests and Responses // Ben Rutland Web"},{property:"og:description",content:"How to extend WordPress Request and Response objects"},{name:"description",content:"How to extend WordPress Request and Response objects"}],q={__name:"enhanced-wordpress-requests-and-responses",setup(r,{expose:n}){return n({frontmatter:{name:"Enhanced WordPress REST Requests and Responses",title:"Enhanced WordPress REST Requests and Responses // Ben Rutland Web",description:"How to extend WordPress Request and Response objects",thumbnail:"/img/wp-rest-api.png",tags:["php","wordpress"],layout:"post",meta:[{property:"og:title",content:"Enhanced WordPress REST Requests and Responses // Ben Rutland Web"},{property:"og:description",content:"How to extend WordPress Request and Response objects"},{name:"description",content:"How to extend WordPress Request and Response objects"}]}}),a({title:"Enhanced WordPress REST Requests and Responses // Ben Rutland Web",meta:[{property:"og:title",content:"Enhanced WordPress REST Requests and Responses // Ben Rutland Web"},{property:"og:description",content:"How to extend WordPress Request and Response objects"},{name:"description",content:"How to extend WordPress Request and Response objects"}]}),(k,d)=>(t(),e("div",o,l))}};export{q as default,m as description,R as layout,v as meta,y as name,b as tags,f as thumbnail,w as title};
