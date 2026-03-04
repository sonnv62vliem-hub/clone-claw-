<script>
  import { onMount } from 'svelte';
  
  let activeTab = 0;
  let tabsContainer;
  
  onMount(() => {
    if (typeof window !== 'undefined') {
      // Add click handlers for tabs
      const tabs = tabsContainer?.querySelectorAll('.tab-item');
      tabs?.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          setActiveTab(index);
        });
      });
    }
  });
  
  function setActiveTab(index) {
    activeTab = index;
    
    // Update tab contents visibility
    const contents = tabsContainer?.querySelectorAll('.tab-content');
    contents?.forEach((content, i) => {
      if (i === index) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
    
    // Update tab buttons
    const buttons = tabsContainer?.querySelectorAll('.tab-item');
    buttons?.forEach((button, i) => {
      if (i === index) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
</script>

<div class="tabs-block" bind:this={tabsContainer}>
  <div class="tabs-list">
    <button class="tab-item active">Cài đặt</button>
    <button class="tab-item">Sử dụng</button>
    <button class="tab-item">Cấu hình</button>
  </div>
  
  <div class="tab-content active">
    <slot name="tab-0" />
  </div>
  <div class="tab-content">
    <slot name="tab-1" />
  </div>
  <div class="tab-content">
    <slot name="tab-2" />
  </div>
</div>

<style>
  .tabs-block {
    margin: 1.5rem 0;
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
  }
  
  .tabs-list {
    display: flex;
    background: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid var(--glass-border);
  }
  
  :global([data-theme="dark"]) .tabs-list {
    background: rgba(255, 255, 255, 0.03);
  }
  
  .tab-item {
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
    position: relative;
  }
  
  .tab-item:hover {
    background: rgba(0, 0, 0, 0.05);
    color: var(--text-primary);
  }
  
  :global([data-theme="dark"]) .tab-item:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .tab-item.active {
    background: var(--glass-bg);
    color: var(--color-primary, #e63946);
  }
  
  .tab-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--color-primary, #e63946);
  }
  
  .tab-content {
    display: none;
    padding: 1rem;
  }
  
  .tab-content.active {
    display: block;
    animation: fadeIn 0.2s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
