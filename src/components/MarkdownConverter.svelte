<script>
  let url = '';
  let method = 'auto';
  let retainImages = false;
  let isLoading = false;
  let result = '';
  let error = '';
  
  const methods = [
    { value: 'auto', label: 'Auto', desc: 'Tự chọn đường đi phù hợp và tự fallback nếu cần' },
    { value: 'fast', label: 'Fast', desc: 'Ưu tiên pipeline nhanh để lấy markdown sớm và ổn định' },
    { value: 'slow', label: 'Slow', desc: 'Chỉ dùng Browser Rendering, chậm hơn nhưng ưu tiên giữ cấu trúc trang' },
  ];
  
  async function handleConvert(e) {
    e.preventDefault();
    if (!url) return;
    
    isLoading = true;
    error = '';
    result = '';
    
    try {
      // Simulate conversion (in real app, this would call an API)
      await new Promise(r => setTimeout(r, 1500));
      result = `# Kết quả chuyển đổi từ: ${url}\n\nĐây là nội dung markdown được trích xuất từ URL trên.\n\nTính năng này đang trong giai đoạn phát triển. Vui lòng đăng ký API để sử dụng đầy đủ.`;
    } catch (err) {
      error = 'Có lỗi xảy ra khi chuyển đổi. Vui lòng thử lại.';
    } finally {
      isLoading = false;
    }
  }
  
  function copyResult() {
    if (result) {
      navigator.clipboard.writeText(result);
    }
  }
  
  let subscribeEmail = '';
  let subscribeStatus = '';
  
  async function handleSubscribe(e) {
    e.preventDefault();
    if (!subscribeEmail) return;
    subscribeStatus = 'loading';
    await new Promise(r => setTimeout(r, 800));
    subscribeStatus = 'success';
    subscribeEmail = '';
  }
</script>

<div class="m4a-page">
  <!-- Hero Section -->
  <section class="m4a-hero m4a-section">
    <div class="hero-glow"></div>
    
    <p class="eyebrow">
      <span class="icon-[lucide--terminal] h-3.5 w-3.5"></span>
      Trích xuất web cho LLM
    </p>
    
    <h1 class="hero-title">
      <span class="hero-title-main">Markdown</span>
      <span class="hero-title-accent"> cho Agent</span>
    </h1>
    
    <p class="lead">
      Chuyển URL thành markdown sạch để OpenClaw và AI Agent xử lý nhanh, gọn, ít token.
    </p>
    
    <div class="token-pill">
      <span class="icon-[lucide--zap] h-4 w-4 token-highlight"></span>
      <span>
        Dùng Markdown giúp Agent phản hồi <strong class="token-highlight">nhanh hơn</strong> và
        tiết kiệm <strong class="token-highlight">token</strong>.
      </span>
    </div>
  </section>
  
  <!-- Convert Panel -->
  <section class="convert-panel m4a-section delay-1">
    <form method="POST" on:submit={handleConvert} class="convert-form">
      <div class="input-row">
        <label class="url-field">
          <span class="field-label-inline">URL cần chuyển đổi</span>
          <div class="join w-full">
            <input 
              name="url"
              type="text"
              inputmode="url"
              class="input join-item w-full text-base"
              bind:value={url}
              placeholder="https://example.com"
              aria-label="URL cần chuyển đổi"
              required
            />
            <div class="form-helper">
              <label for="m4a-convert-agree-terms">Tôi đồng ý điều khoản sử dụng</label>
              <input type="text" id="m4a-convert-agree-terms" name="agreeTerms" autocomplete="off" tabindex="-1" />
            </div>
            <button type="submit" class="convert-join-btn join-item" disabled={isLoading}>
              <span class="btn-text-full">{isLoading ? 'Đang chuyển...' : 'Chuyển đổi'}</span>
              <span class="btn-icon-only">
                <span class="icon-[lucide--arrow-right] h-4 w-4"></span>
              </span>
            </button>
          </div>
        </label>
      </div>
      
      <div class="controls-row">
        <div class="method-group">
          <span class="field-label">Phương thức</span>
          <div class="method-grid">
            {#each methods as m}
              <button 
                type="button" 
                class="method-option {method === m.value ? 'active' : ''}"
                aria-pressed={method === m.value}
                on:click={() => method = m.value}
              >
                <span>{m.label}</span>
                <small>{m.desc}</small>
              </button>
            {/each}
          </div>
        </div>
        
        <div class="options-stack">
          <label class="checkbox-field cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-sm" bind:checked={retainImages} />
            <span>Giữ lại URL hình ảnh trong kết quả markdown</span>
          </label>
        </div>
      </div>
    </form>
    
    <!-- Result -->
    {#if result}
      <div class="result-panel">
        <div class="result-header">
          <span class="result-title">Kết quả</span>
          <button class="copy-btn" on:click={copyResult}>
            <span class="icon-[lucide--copy] h-4 w-4"></span>
            Copy
          </button>
        </div>
        <pre class="result-content">{result}</pre>
      </div>
    {/if}
    
    {#if error}
      <div class="error-panel">{error}</div>
    {/if}
  </section>
  
  <!-- Built For Section -->
  <section class="built-for m4a-section delay-2">
    <h2>Phù Hợp Cho</h2>
    <div class="use-case-grid">
      <div>OpenClaw cần đọc web nhanh hơn nhờ context markdown gọn nhẹ</div>
      <div>Giảm token đầu vào để tiết kiệm quota và chi phí gọi LLM</div>
      <div>Pipeline RAG cần chunk tài liệu sạch, ít nhiễu HTML</div>
      <div>AI agent cần tóm tắt trang web ổn định và nhất quán</div>
      <div>Xây knowledge base từ URL cho tìm kiếm và nghiên cứu nội bộ</div>
      <div>Chuẩn bị dữ liệu markdown cho huấn luyện, di trú và static site</div>
    </div>
  </section>
  
  <!-- API Signup Panel -->
  <section class="api-signup-panel m4a-section delay-2">
    <div class="api-signup-head">
      <div class="api-signup-title-row">
        <h2>
          <span class="api-title-icon-wrap">
            <span class="api-title-icon icon-[lucide--key-round] h-5 w-5"></span>
            <span class="api-title-spark api-title-spark-1">✦</span>
            <span class="api-title-spark api-title-spark-2">✦</span>
          </span>
          Đăng ký sớm
        </h2>
      </div>
      
      <div class="api-stickers">
        <span class="sticker sticker-skill" style="--sticker-rotate: -2.5deg">
          <span class="sticker-shine"></span>
          <span class="sticker-icon icon-[lucide--puzzle] h-4 w-4"></span>
          <span class="sticker-text">Skill<br/>included</span>
        </span>
        <span class="sticker sticker-easy" style="--sticker-rotate: 1.8deg">
          <span class="sticker-shine"></span>
          <span class="sticker-icon icon-[lucide--zap] h-4 w-4"></span>
          <span class="sticker-text">Easy to<br/>install</span>
        </span>
        <span class="sticker sticker-free" style="--sticker-rotate: -1.2deg">
          <span class="sticker-shine"></span>
          <span class="sticker-icon icon-[lucide--gift] h-4 w-4"></span>
          <span class="sticker-text">Miễn phí<br/>giới hạn</span>
        </span>
      </div>
      
      <p class="api-signup-copy">
        Hiện tại API đang ở giai đoạn <strong class="token-highlight">limited miễn phí</strong>.
        Chúng tôi đang hoàn thiện sản phẩm và mong muốn nhận thêm feedback thực tế từ người dùng.
      </p>
      <p class="api-signup-copy">
        Mục tiêu của chúng tôi là giúp sản phẩm phù hợp hơn với nhu cầu cá nhân/tổ chức, được cập
        nhật thường xuyên và tiết kiệm thời gian cho bạn.
      </p>
    </div>
    
    {#if subscribeStatus === 'success'}
      <div class="subscribe-success-msg">
        <span class="term-prompt">✓</span>
        <span>Đăng ký thành công! Chúng tôi sẽ liên hệ sớm.</span>
      </div>
    {:else}
      <form class="api-signup-form subscribe-form" on:submit={handleSubscribe}>
        <div class="form-helper">
          <label for="m4a-subscribe-agree-terms">Tôi đồng ý điều khoản sử dụng</label>
          <input type="text" id="m4a-subscribe-agree-terms" name="agreeTerms" tabindex="-1" autocomplete="off" value="" />
        </div>
        <div class="subscribe-row">
          <span class="term-prompt">&gt;</span>
          <input 
            id="api-signup-email"
            type="email"
            name="email"
            class="subscribe-input text-base"
            placeholder="you@email.com"
            bind:value={subscribeEmail}
            required
          />
          <button type="submit" class="subscribe-btn api-signup-btn btn rounded-lg btn-sm" disabled={subscribeStatus === 'loading'}>
            {subscribeStatus === 'loading' ? '...' : 'Subscribe'}
          </button>
        </div>
        <p class="api-signup-helper label">Bảo mật thông tin, không spam</p>
        <div class="api-signup-progress-wrap">
          <progress class="progress w-full progress-warning" value="77" max="100"></progress>
          <p class="api-signup-progress-text">77/100 người đã đăng ký API</p>
        </div>
      </form>
    {/if}
  </section>
  
  <!-- Feedback Section -->
  <section class="m4a-section feedback-section">
    <button type="button" class="feedback-trigger">
      <span class="icon-[lucide--message-circle-plus] h-4 w-4"></span>
      <span>Gửi feedback cải thiện</span>
    </button>
  </section>
</div>

<style>
  .m4a-page {
    max-width: 720px;
    margin: 0 auto;
    padding: 1rem 0 3rem;
  }
  
  .m4a-section {
    margin-bottom: 3rem;
  }
  
  /* Hero */
  .m4a-hero {
    text-align: center;
    padding: 2rem 0;
    position: relative;
  }
  
  .hero-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 300px;
    background: radial-gradient(ellipse, var(--hero-glow) 0%, transparent 70%);
    pointer-events: none;
  }
  
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    text-transform: uppercase;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
  }
  
  .hero-title-main {
    color: var(--color-base-content);
  }
  
  .hero-title-accent {
    color: var(--color-primary, #e63946);
  }
  
  .lead {
    font-size: 1.1rem;
    color: var(--text-muted);
    max-width: 500px;
    margin: 0 auto 1.5rem;
    line-height: 1.7;
    position: relative;
    z-index: 1;
  }
  
  .token-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 2rem;
    font-size: 0.9rem;
    position: relative;
    z-index: 1;
  }
  
  .token-highlight {
    color: #f59e0b;
  }
  
  /* Convert Panel */
  .convert-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    backdrop-filter: var(--glass-blur);
    border-radius: 1rem;
    padding: 1.5rem;
  }
  
  .convert-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .url-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
  
  .field-label-inline {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
  }
  
  .join {
    display: flex;
    align-items: stretch;
  }
  
  .join-item:first-child {
    border-radius: 0.75rem 0 0 0.75rem;
  }
  
  .join-item:last-child {
    border-radius: 0 0.75rem 0.75rem 0;
  }
  
  .input {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    color: var(--color-base-content);
    outline: none;
    transition: border-color 0.2s;
    flex: 1;
  }
  
  .input:focus {
    border-color: var(--color-primary, #e63946);
  }
  
  .convert-join-btn {
    background: var(--color-primary, #e63946);
    color: white;
    border: none;
    padding: 0.75rem 1.25rem;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }
  
  .convert-join-btn:hover:not(:disabled) {
    background: #c1121f;
  }
  
  .convert-join-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .btn-icon-only {
    display: none;
  }
  
  @media (max-width: 480px) {
    .btn-text-full {
      display: none;
    }
    .btn-icon-only {
      display: flex;
    }
  }
  
  .controls-row {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .field-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-muted);
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .method-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    .method-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .method-option {
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    cursor: pointer;
    text-align: left;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .method-option span {
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .method-option small {
    font-size: 0.75rem;
    color: var(--text-muted);
    line-height: 1.4;
  }
  
  .method-option.active {
    border-color: var(--color-primary, #e63946);
    background: rgba(230, 57, 70, 0.08);
    color: var(--color-primary, #e63946);
  }
  
  .method-option.active small {
    color: rgba(230, 57, 70, 0.7);
  }
  
  .checkbox-field {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
  
  .checkbox {
    width: 16px;
    height: 16px;
    border: 1px solid var(--glass-border);
    border-radius: 0.25rem;
    cursor: pointer;
    accent-color: var(--color-primary, #e63946);
  }
  
  /* Result Panel */
  .result-panel {
    margin-top: 1.5rem;
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    overflow: hidden;
  }
  
  .result-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background: rgba(0,0,0,0.05);
    border-bottom: 1px solid var(--glass-border);
  }
  
  .result-title {
    font-weight: 600;
    font-size: 0.9rem;
  }
  
  .copy-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  .copy-btn:hover {
    background: rgba(230, 57, 70, 0.1);
    border-color: var(--color-primary, #e63946);
  }
  
  .result-content {
    padding: 1rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.85rem;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
    max-height: 400px;
    overflow-y: auto;
  }
  
  .error-panel {
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    background: rgba(230, 57, 70, 0.1);
    border: 1px solid rgba(230, 57, 70, 0.3);
    border-radius: 0.75rem;
    color: var(--color-primary, #e63946);
    font-size: 0.9rem;
  }
  
  /* Built For */
  .built-for h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1.25rem;
    text-align: center;
  }
  
  .use-case-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0.75rem;
  }
  
  .use-case-grid > div {
    padding: 1rem;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--text-muted);
  }
  
  /* API Signup */
  .api-signup-panel {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    backdrop-filter: var(--glass-blur);
    border-radius: 1rem;
    padding: 1.5rem;
  }
  
  .api-signup-head {
    margin-bottom: 1.5rem;
  }
  
  .api-signup-title-row h2 {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .api-title-icon-wrap {
    position: relative;
    display: inline-flex;
    align-items: center;
  }
  
  .api-title-icon {
    color: var(--color-primary, #e63946);
  }
  
  .api-title-spark {
    position: absolute;
    font-size: 0.6rem;
    color: #f59e0b;
    animation: sparkle 2s ease-in-out infinite;
  }
  
  .api-title-spark-1 { top: -4px; right: -4px; }
  .api-title-spark-2 { bottom: -4px; left: -4px; animation-delay: 1s; }
  
  @keyframes sparkle {
    0%, 100% { opacity: 0.3; transform: scale(0.8); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  .api-stickers {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  
  .sticker {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.75rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    transform: rotate(var(--sticker-rotate, 0deg));
    overflow: hidden;
  }
  
  .sticker-shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%);
    pointer-events: none;
  }
  
  .sticker-skill {
    background: linear-gradient(135deg, #457b9d, #1d3557);
    color: white;
  }
  
  .sticker-easy {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }
  
  .sticker-free {
    background: linear-gradient(135deg, #2a9d8f, #1a7a6e);
    color: white;
  }
  
  .sticker-icon {
    display: block;
  }
  
  .sticker-text {
    line-height: 1.3;
  }
  
  .api-signup-copy {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  
  .api-signup-form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .subscribe-row {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .term-prompt {
    font-family: 'Space Mono', monospace;
    color: var(--color-primary, #e63946);
    font-weight: 700;
  }
  
  .subscribe-input {
    flex: 1;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--glass-border);
    outline: none;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    color: var(--color-base-content);
    padding: 0.25rem 0;
  }
  
  .subscribe-input::placeholder {
    color: var(--text-muted);
  }
  
  .subscribe-btn {
    background: var(--color-primary, #e63946);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  
  .subscribe-btn:hover:not(:disabled) {
    background: #c1121f;
  }
  
  .api-signup-helper {
    font-size: 0.8rem;
    color: var(--text-muted);
  }
  
  .api-signup-progress-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .progress {
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background: var(--glass-border);
    overflow: hidden;
    appearance: none;
  }
  
  .progress::-webkit-progress-bar {
    background: var(--glass-border);
    border-radius: 4px;
  }
  
  .progress-warning::-webkit-progress-value {
    background: #f59e0b;
    border-radius: 4px;
  }
  
  .api-signup-progress-text {
    font-size: 0.8rem;
    color: var(--text-muted);
    font-family: 'Space Mono', monospace;
  }
  
  .subscribe-success-msg {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    color: #2a9d8f;
    padding: 0.75rem;
    background: rgba(42, 157, 143, 0.1);
    border-radius: 0.5rem;
  }
  
  /* Feedback */
  .feedback-section {
    text-align: center;
  }
  
  .feedback-trigger {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    font-size: 0.85rem;
    cursor: pointer;
    color: var(--text-muted);
    transition: all 0.2s;
  }
  
  .feedback-trigger:hover {
    border-color: var(--color-primary, #e63946);
    color: var(--color-primary, #e63946);
  }
  
  .form-helper {
    display: none;
  }
</style>
