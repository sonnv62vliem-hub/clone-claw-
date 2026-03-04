<script>
  let email = '';
  let status = '';
  
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    status = 'loading';
    // Simulate submit
    await new Promise(r => setTimeout(r, 800));
    status = 'success';
    email = '';
  }
</script>

<footer class="site-footer">
  <div class="footer-divider"></div>
  <div class="footer-inner">
    <div class="glass-terminal subscribe-terminal">
      <div class="terminal-glow"></div>
      <div class="terminal-titlebar">
        <div class="macos-dots">
          <span class="dot dot-close"></span>
          <span class="dot dot-minimize"></span>
          <span class="dot dot-expand"></span>
        </div>
        <span class="titlebar-text">newsletter@openclaw</span>
      </div>
      <div class="terminal-body">
        <div class="subscribe-copy mt-1 mb-2">
          Đăng ký để nhận tin OpenClaw và deal khuyến mãi AI chọn lọc
        </div>
        
        {#if status === 'success'}
          <div class="subscribe-success">
            <span class="term-prompt">✓</span>
            <span>Đăng ký thành công! Cảm ơn bạn.</span>
          </div>
        {:else}
          <form class="subscribe-form" on:submit={handleSubmit}>
            <div class="form-helper">
              <label for="footer-agree-terms">Tôi đồng ý điều khoản sử dụng</label>
              <input type="text" id="footer-agree-terms" name="agreeTerms" value="" autocomplete="off" tabindex="-1" />
            </div>
            <div class="subscribe-row">
              <span class="term-prompt">&gt;</span>
              <input 
                type="email" 
                name="email"
                class="subscribe-input text-base"
                placeholder="you@email.com"
                bind:value={email}
                required
              />
              <button type="submit" class="subscribe-btn btn rounded-lg btn-sm" disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </div>
          </form>
        {/if}
      </div>
    </div>
    
    <p class="footer-text">
      <img src="https://claw.ai.vn/_app/immutable/assets/claw-logo-white.DrH5uhX1.png" alt="OpenClaw" class="lobster-logo logo-dark" />
      <img src="https://claw.ai.vn/_app/immutable/assets/claw-logo-red.DgE5HcFa.png" alt="OpenClaw" class="lobster-logo logo-light" />
      OpenClaw Vietnam Community
    </p>
    <p class="footer-sub">© 2026 claw.ai.vn</p>
  </div>
</footer>

<style>
  .subscribe-success {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    color: #2a9d8f;
  }
</style>
