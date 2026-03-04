<script>
  export let tabs = [];
  export let activeTab = 0;
  
  function setActive(index) {
    activeTab = index;
  }
</script>

<div class="tabs-container">
  <div class="tabs-header">
    {#each tabs as tab, index}
      <button 
        class="tab-button" 
        class:active={activeTab === index}
        on:click={() => setActive(index)}
      >
        {#if tab.icon}
          <span class={tab.icon}></span>
        {/if}
        {tab.label}
      </button>
    {/each}
  </div>
  
  <div class="tabs-content">
    {#each tabs as tab, index}
      {#if activeTab === index}
        <div class="tab-panel">
          <slot name={tab.id} />
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .tabs-container {
    margin: 1.5rem 0;
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
  }
  
  .tabs-header {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
    border-bottom: 1px solid var(--glass-border);
  }
  
  :global([data-theme="dark"]) .tabs-header {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .tab-button {
    flex: 1;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    color: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
  
  .tab-button:hover {
    background: rgba(0, 0, 0, 0.05);
    color: var(--text-primary);
  }
  
  :global([data-theme="dark"]) .tab-button:hover {
    background: rgba(255, 255, 255, 0.05);
  }
  
  .tab-button.active {
    background: var(--glass-bg);
    color: var(--color-primary, #e63946);
    border-bottom: 2px solid var(--color-primary, #e63946);
  }
  
  .tabs-content {
    padding: 1rem;
  }
  
  .tab-panel {
    animation: fadeIn 0.2s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>
