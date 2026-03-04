<script>
  export let post;
  export let index = 0;
  
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }
  
  $: delay = (index + 1) * 0.05;
  $: href = `/${post.categorySlug}/${post.slug}`;
</script>

<a 
  href={href}
  class="post-card"
  style="animation-delay: {delay}s"
>
  {#if post.featuredImageUrl}
    <figure class="card-image">
      <img 
        src={post.featuredImageUrl.startsWith('/') ? `https://claw.ai.vn${post.featuredImageUrl}` : post.featuredImageUrl}
        alt={post.featuredImageAlt || post.title}
        loading="lazy"
      />
      <div class="image-overlay"></div>
    </figure>
  {/if}
  
  <div class="card-body">
    {#if post.categorySlug}
      <div class="card-category">{post.categorySlug}</div>
    {/if}
    
    <h3 class="card-title">{post.title}</h3>
    
    {#if post.excerpt}
      <p class="card-excerpt">{post.excerpt}</p>
    {/if}
    
    <div class="card-footer">
      {#if post.publishedAt}
        <span class="card-date">{formatDate(post.publishedAt)}</span>
      {/if}
      <span class="card-read-more">Đọc thêm →</span>
    </div>
  </div>
</a>
