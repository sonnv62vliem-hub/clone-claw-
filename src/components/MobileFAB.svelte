<script>
  import { onMount } from 'svelte';
  
  export let currentPath = '/';
  
  let isOpen = false;
  let isDark = false;
  let mounted = false;
  
  const fabLinks = [
    { href: '/markdown-for-agents', label: 'Markdown', icon: 'icon-[lucide--terminal]' },
    { href: '/posts', label: 'Bài viết', icon: 'icon-[lucide--newspaper]' },
    { href: '/', label: 'Trang chủ', icon: 'icon-[lucide--house]' },
  ];
  
  onMount(() => {
    mounted = true;
    const saved = localStorage.getItem('theme');
    isDark = saved === 'lobsterglass-dark';
  });
  
  function toggleMenu() {
    isOpen = !isOpen;
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  function toggleTheme() {
    isDark = !isDark;
    const theme = isDark ? 'lobsterglass-dark' : 'lobsterglass-light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  
  function isActive(href) {
    if (href === '/') return currentPath === '/';
    return currentPath.startsWith(href);
  }
</script>

<div class="mobile-fab {isOpen ? 'open' : ''}">
  <div class="fab-items">
    <!-- Theme toggle -->
    <div class="fab-item fab-theme-item" style="--i: 0">
      <span class="fab-glass-btn fab-glass-theme">
        {#if mounted}
          <button class="theme-toggle" on:click={toggleTheme} aria-label={isDark ? 'Chuyển sang sáng' : 'Chuyển sang tối'}>
            <div style="width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;">
              {#if isDark}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
                </svg>
              {:else}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  <path d="M5 3v4"/>
                  <path d="M19 17v4"/>
                  <path d="M3 5h4"/>
                  <path d="M17 19h4"/>
                </svg>
              {/if}
            </div>
          </button>
        {/if}
      </span>
    </div>
    
    <!-- Nav links -->
    {#each fabLinks as link, i}
      <a 
        href={link.href} 
        class="fab-item {isActive(link.href) ? 'active' : ''}" 
        style="--i: {i + 1}"
        on:click={() => isOpen = false}
      >
        <span class="fab-glass-btn">
          <span class="{link.icon} h-5 w-5"></span>
          <span class="fab-label">{link.label}</span>
        </span>
      </a>
    {/each}
  </div>
  
  <div class="fab-trigger-row">
    <button class="fab-scroll-top" on:click={scrollToTop} aria-label="Lên đầu trang">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </button>
    
    <button class="fab-trigger" on:click={toggleMenu} aria-label="Mở menu" aria-expanded={isOpen}>
      <span class="icon-open">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="4" x2="20" y1="12" y2="12"/>
          <line x1="4" x2="20" y1="6" y2="6"/>
          <line x1="4" x2="20" y1="18" y2="18"/>
        </svg>
      </span>
      <span class="icon-close">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M18 6 6 18"/>
          <path d="m6 6 12 12"/>
        </svg>
      </span>
    </button>
  </div>
</div>
