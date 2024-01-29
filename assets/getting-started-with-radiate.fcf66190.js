import{k as a,c as s,o as t,l as e}from"./index.9e6845b0.js";const p={class:"markdown-body"},o=e(`<h1 id="getting-started-with-radiate" tabindex="-1">Getting started with Radiate <a class="header-anchor" href="#getting-started-with-radiate"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h1><div class="text-lead"><p>A quick guide to getting started with Radiate - a WordPress plugin/theme framework inspired by Laravel.</p></div><p><img src="https://radiate-framework.github.io/social-preview.png" alt="Radiate logo"></p><p>Radiate is a framework I built for WordPress, heavily inspired by Laravel. All the APIs available are built around core WordPress functionality, but with nice OOP syntax to make the development experience similar to Laravel.</p><p>In this article, I will guide you through making a simple API that uses some of the functionality from the framework. As a massive Harry Potter fan, Let\u2019s create a HP API.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h2><p>Radiate installs with composer. Navigate to the plugin/theme directory of your WordPress installation and run the following command:</p><pre class="language-bash"><code class="language-bash"><span class="token function">composer</span> create-project radiate/plugin harry-potter-api
</code></pre><p>This will create a new plugin called <code>harry-potter-api</code>. In this directory, you will find everything you need to get started with the <code>Radiate</code> framework.</p><h2 id="api-routing" tabindex="-1">API Routing <a class="header-anchor" href="#api-routing"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h2><p>By default, Radiate uses the <code>api</code> namespace for REST endpoints. We can change that by updating the <code>namespace</code> method in the <code>App\\Providers\\RouteServiceProvider</code> class. Let\u2019s namespace all the Harry Potter routes with \u201Chp\u201D.</p><pre class="language-php"><code class="language-php"><span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">mapApiRoutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">namespace</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hp&#39;</span><span class="token punctuation">)</span> <span class="token comment">// changed from &quot;api&quot;</span>
        <span class="token operator">-&gt;</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;api&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">app</span><span class="token operator">-&gt;</span><span class="token function">basePath</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;routes/api.php&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><p>Now, lets create an API route. When a Witch or Wizard first arrives at Hogwarts, they get sorted into a house. Let\u2019s do that.</p><p>In your <code>routes/api.php</code> file, create a route called \u201Chogwarts/sort\u201D. For now, we\u2019ll return a random house:</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hogwarts/sort&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">collect</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Gryffindor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Hufflepuff&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Ravenclaw&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Slytherin&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><p>Now go to the WordPress API endpoint <code>/wp-json/hp/hogwarts/sort</code>. You should see the response as a random house!</p><h3 id="controllers" tabindex="-1">Controllers <a class="header-anchor" href="#controllers"><span class="sr-only">Jump to heading</span><span aria-hidden="true">#</span></a></h3><p>Instead of a <code>Closure</code>, we can use a dedicated <code>Controller</code> class. Using <code>wp-cli</code> we can use the Radiate command <code>make:controller</code>:</p><pre class="language-bash"><code class="language-bash">wp radiate make:controller HogwartsHouseController
</code></pre><p>This will create a controller located in <code>app/Http/Controllers</code>. We\u2019ll move the sorting logic into a method called <code>sort</code>. You can name the method as you please, but we\u2019ll keep it simple for the purposes of this example.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Plugin<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Routing<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">HogwartsHouseController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token comment">/**
     * Sort the user into a house.
     *
     * @return string
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">collect</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Gryffindor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Hufflepuff&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Ravenclaw&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Slytherin&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><p>Next, update the <code>routes/api.php</code> file to point the route to the newly created controller. Notice the second argument takes an array with the controller name and method name.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">Plugin<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers<span class="token punctuation">\\</span>HogwartsHouseController</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Route</span><span class="token punctuation">;</span>

<span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hogwarts/sort&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token class-name static-context">HogwartsHouseController</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;sort&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</span></code></pre><p>The above code is great, but every time the endpoint is requested, a different house will be returned. Not very magical! Lets use the <code>Request</code> object combined with the <code>Option</code> facade to help us return the same house once a user is sorted.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">Plugin<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Controllers</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Http<span class="token punctuation">\\</span>Request</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Routing<span class="token punctuation">\\</span>Controller</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Option</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Radiate<span class="token punctuation">\\</span>Support<span class="token punctuation">\\</span>Str</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">HogwartsHouseController</span> <span class="token keyword">extends</span> <span class="token class-name">Controller</span>
<span class="token punctuation">{</span>
    <span class="token comment">/**
     * Sort the user into a house.
     *
     * @param \\Radiate\\Http\\Request $request
     * @return string
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sort</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">snake</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hp_&#39;</span> <span class="token operator">.</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">Option</span><span class="token operator">::</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name static-context">Option</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token variable">$house</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span>
            <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Gryffindor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Hufflepuff&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Ravenclaw&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Slytherin&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name static-context">Option</span><span class="token operator">::</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$house</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token variable">$house</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</span></code></pre><p>Here we are taking the value of \u201Cname\u201D and using it as a key to store in the options table. Whenever the same name is passed to the request, the same house will be returned. There is one more thing we can do here to utilize the power of Radiate. Let\u2019s validate the input and bail early if the \u201Cname\u201D field is not valid.</p><pre class="language-php"><code class="language-php"><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">sort</span><span class="token punctuation">(</span><span class="token class-name type-declaration">Request</span> <span class="token variable">$request</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;required|string&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token class-name static-context">Str</span><span class="token operator">::</span><span class="token function">snake</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;hp_&#39;</span> <span class="token operator">.</span> <span class="token variable">$request</span><span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name static-context">Option</span><span class="token operator">::</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name static-context">Option</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$house</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span>
        <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;Gryffindor&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Hufflepuff&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Ravenclaw&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Slytherin&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name static-context">Option</span><span class="token operator">::</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token variable">$name</span><span class="token punctuation">,</span> <span class="token variable">$house</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token variable">$house</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</span></code></pre>`,27),c=[o],g="Getting started with Radiate",h="Getting started with Radiate // Ben Rutland Web",m="A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel.",f="https://radiate-framework.github.io/social-preview.png",w=["radiate","php","wordpress"],y="post",b=[{property:"og:title",content:"Getting started with Radiate // Ben Rutland Web"},{property:"og:description",content:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel."},{name:"description",content:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel."}],v={__name:"getting-started-with-radiate",setup(i,{expose:n}){return n({frontmatter:{name:"Getting started with Radiate",title:"Getting started with Radiate // Ben Rutland Web",description:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel.",thumbnail:"https://radiate-framework.github.io/social-preview.png",tags:["radiate","php","wordpress"],layout:"post",meta:[{property:"og:title",content:"Getting started with Radiate // Ben Rutland Web"},{property:"og:description",content:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel."},{name:"description",content:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel."}]}}),a({title:"Getting started with Radiate // Ben Rutland Web",meta:[{property:"og:title",content:"Getting started with Radiate // Ben Rutland Web"},{property:"og:description",content:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel."},{name:"description",content:"A quick guide to getting started with Radiate - a WordPress plugin and theme framework inspired by Laravel."}]}),(r,k)=>(t(),s("div",p,c))}};export{v as default,m as description,y as layout,b as meta,g as name,w as tags,f as thumbnail,h as title};