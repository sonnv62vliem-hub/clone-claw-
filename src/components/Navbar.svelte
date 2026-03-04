<script>
  import { onMount } from 'svelte';
  
  export let currentPath = '/';
  
  const navLinks = [
    { href: '/', label: 'Trang chủ' },
    { href: '/posts', label: 'Bài viết' },
    { href: '/markdown-for-agents', label: 'Markdown' },
  ];
  
  let isDark = false;
  let mounted = false;
  
  onMount(() => {
    mounted = true;
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark = saved === 'lobsterglass-dark';
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      isDark = false;
      document.documentElement.setAttribute('data-theme', 'lobsterglass-light');
    }
  });
  
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

<nav class="site-navbar glass-nav">
  <div class="nav-inner">
    <a href="/" class="logo">
      <img src="https://claw.ai.vn/_app/immutable/assets/claw-logo-white.DrH5uhX1.png" alt="OpenClaw" class="logo-icon logo-dark" />
      <img src="https://claw.ai.vn/_app/immutable/assets/claw-logo-red.DgE5HcFa.png" alt="OpenClaw" class="logo-icon logo-light" />
      <span class="logo-text">claw.ai.vn</span>
    </a>
    
    <div class="nav-links">
      {#each navLinks as link}
        <a 
          href={link.href} 
          class="nav-link {isActive(link.href) ? 'active' : ''}"
        >
          {link.label}
        </a>
      {/each}
    </div>
    
    <div class="nav-actions">
      <div class="desktop-switcher">
        {#if mounted}
          <button 
            class="theme-toggle" 
            on:click={toggleTheme}
            aria-label={isDark ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
          >
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
          </button>
        {/if}
      </div>
      
      <label for="app-drawer" class="mobile-toggle drawer-button" aria-label="Menu">
        <span class="hamburger"></span>
      </label>
    </div>
  </div>
</nav>
