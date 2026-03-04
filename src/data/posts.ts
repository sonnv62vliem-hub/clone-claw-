export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: string;
  categoryId: string;
  categorySlug: string;
  authorId: string;
  featuredImageUrl: string;
  featuredImageAlt: string;
  shortDescription: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
  seoOgImageUrl: string;
  seoNoIndex: boolean;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export const posts: Post[] = [
  {
    id: '58291486-c3cf-41f6-8654-d80a9825dab3',
    title: 'OpenClaw Secrets, Env và SecretRef: hiểu đúng để cấu hình sạch hơn',
    slug: 'openclaw-secrets-env-va-secretref',
    excerpt: 'Nếu bạn dùng OpenClaw lâu hơn vài ngày, gần như chắc chắn sẽ đụng đến chỗ này: API key để ở đâu, để trong .env có đủ chưa, và SecretRef thực ra giải quyết...',
    content: `<h2>1. Bức tranh tổng thể</h2>
<p>Trong OpenClaw, secret không chỉ nằm ở một chỗ.</p>
<ul>
<li><strong>Process env</strong>: biến môi trường mà process Gateway hoặc CLI đang có sẵn.</li>
<li><code>~/.openclaw/.env</code>: file env global của OpenClaw.</li>
<li><code>openclaw.json</code>: config chính. Một số field có thể nhận plaintext hoặc <code>SecretRef</code>.</li>
</ul>
<h2>2. SecretRef là gì và vì sao nó đáng dùng</h2>
<p><code>SecretRef</code> là cách để bạn nói với OpenClaw rằng: "Chỗ này đừng ghi mật khẩu hay bí mật trực tiếp vào đây. Hãy đi lấy nó từ chỗ khác giúp mình!".</p>
<pre><code class="language-json">{
  "source": "env | file | exec",
  "provider": "default",
  "id": "..."
}</code></pre>
<h2>3. Cách debug khi nghi secret có vấn đề</h2>
<p>Nếu nghi OpenClaw không nhận đúng khoá bí mật, mình thấy nên kiểm tra theo đúng thứ tự này.</p>
<pre><code class="language-bash">openclaw secrets audit --json</code></pre>`,
    status: 'published',
    categoryId: '830438d0-7017-4cc5-8990-5eb3cf5c055f',
    categorySlug: 'docs',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/openclaw-secrets-env-va-secretref.webp',
    featuredImageAlt: 'OpenClaw Secrets, Env và SecretRef: hiểu đúng để cấu hình sạch hơn',
    shortDescription: 'Phân biệt .env, plaintext config và SecretRef trong OpenClaw; khi nào nên dùng env, file, exec và cách debug khi skill không nhận API key.',
    seoTitle: 'OpenClaw Secrets, Env và SecretRef: hiểu đúng để cấu hình sạch hơn',
    seoDescription: 'Hướng dẫn dễ hiểu về Secrets, Env và SecretRef trong OpenClaw, gồm những điểm cập nhật mới, prompt setup nhanh và cách debug skill API key.',
    seoKeywords: 'openclaw, secretref, openclaw secrets, env, secrets, api key',
    seoOgImageUrl: '/uploads/openclaw-secrets-env-va-secretref-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1772525346391),
    createdAt: new Date(1772525346391),
    updatedAt: new Date(1772606198677),
  },
  {
    id: 'f25c3e41-7ceb-4990-837f-e6f8867e2af2',
    title: 'Hướng dẫn chi tiết Telegram channel trong Openclaw (kèm lệnh copy-paste)',
    slug: 'huong-dan-chi-tiet-channels-telegram-trong-openclaw-json',
    excerpt: 'Bài này dành cho ai? Bài viết này dành cho người đang chạy OpenClaw và muốn hiểu tìm hiểu sâu hơn về kênh Telegram trong Openclaw theo hướng thực chiến: biết...',
    content: `<h2>Bài này dành cho ai?</h2>
<p>Bài viết này dành cho người đang chạy OpenClaw và muốn hiểu tìm hiểu sâu hơn về kênh Telegram trong Openclaw theo hướng thực chiến: biết key nào dùng khi nào, sửa nhanh bằng lệnh terminal, và có sẵn config mẫu để kiểm tra.</p>
<h2>Phần 1: Pairing Telegram thật nhanh (5 phút)</h2>
<h3>Bước 1: Tạo bot token với BotFather</h3>
<ol>
<li>Mở Telegram, chat với <code>@BotFather</code>.</li>
<li>Chạy <code>/newbot</code> và lấy token dạng <code>123456:ABC-DEF...</code>.</li>
</ol>
<h3>Bước 2: Add nhanh Telegram channel bằng command</h3>
<pre><code class="language-bash">openclaw channels add --channel telegram --token "&lt;BOT_TOKEN&gt;"</code></pre>`,
    status: 'published',
    categoryId: '830438d0-7017-4cc5-8990-5eb3cf5c055f',
    categorySlug: 'docs',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/huong-dan-chi-tiet-channels-telegram-trong-openclaw.webp',
    featuredImageAlt: 'Hướng dẫn chi tiết Telegram channel trong Openclaw (kèm lệnh copy-paste)',
    shortDescription: 'Hướng dẫn đầy đủ về channel telegram trong openclaw: pairing nhanh với Telegram, giải thích toàn bộ thuộc tính, khi nào dùng từng key, lỗi thường gặp và lệnh copy-paste để cập nhật cấu hình nhanh.',
    seoTitle: 'Hướng dẫn channel telegram trong openclaw (đầy đủ + copy-paste)',
    seoDescription: 'Học cách cấu hình channel telegram trong openclaw từ A-Z: pairing Telegram nhanh, giải thích từng thuộc tính, tình huống thực tế, cách sửa lỗi và ví dụ cấu hình đầy đủ.',
    seoKeywords: 'openclaw, telegram bot, channels.telegram, openclaw.json, pairing telegram, cấu hình openclaw',
    seoOgImageUrl: '/uploads/huong-dan-chi-tiet-channels-telegram-trong-openclaw-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1772285892664),
    createdAt: new Date(1772285892665),
    updatedAt: new Date(1772434794714),
  },
  {
    id: '14ece115-6d2a-4449-aecb-ad1070830011',
    title: 'Perplexity Computer: Còn gì hơn khi AI tự lái máy tính cho anh em',
    slug: 'perplexity-computer-ai-tu-lai-may-tinh-dev-vibe',
    excerpt: 'Perplexity Computer là gì nhỉ? Thật ra thì cái này không phải chatbot trả lời suông đâu. Nó là một hệ thống multi-agent chạy trên cloud, phối hợp tới 19 model...',
    content: `<h2>Perplexity Computer là gì nhỉ?</h2>
<p>Thật ra thì cái này không phải chatbot trả lời suông đâu. Nó là một hệ thống multi-agent chạy trên cloud, phối hợp tới 19 model mạnh nhất hiện nay → Claude Opus 4.6 làm não chính, Gemini kéo data, Grok thì lo phần nhanh nhẹ.</p>
<p>Nó có kế hoạch tự phân tích mục tiêu bạn đưa ra, rồi tự sinh ra mấy con agent con. Chúng tự đăng nhập Gmail, Sheets, Notion, thậm chí tài khoản ngân hàng.</p>
<h2>Mẹo hot cộng đồng đang copy-paste dùng ngay</h2>
<ul>
<li><strong>Prompt kiểu high-level:</strong> "Biến dữ liệu xuất thô từ ngân hàng và nhật ký giao dịch của mình thành bộ slide sẵn sàng trình bày, kèm biểu đồ, phần kể chuyện phân tích và 3 khuyến nghị cụ thể."</li>
<li><strong>Tự chỉ định model để tiết kiệm:</strong> thêm câu "Dùng Claude cho chiến lực, Gemini kéo data, Grok cho tốc độ"</li>
</ul>`,
    status: 'published',
    categoryId: '2d92e36b-8b1d-48e5-b514-fe2d8c222263',
    categorySlug: 'tin-tuc-ai',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/perplexity-computer-ai-tu-lai-may-tinh-dev-vibe.webp',
    featuredImageAlt: 'Perplexity Computer: Còn gì hơn khi AI tự lái máy tính cho anh em',
    shortDescription: 'Perplexity Computer $200/tháng tự mở Gmail, Sheets, ngân hàng làm báo cáo chi tiêu chỉ 30 phút. Nghe nói người ta thử rồi nghiện luôn, đây là mẹo hữu ích từ cộng đồng, anh em đọc nghiên cứu.',
    seoTitle: 'Perplexity Computer: AI tự lái máy tính cho anh em',
    seoDescription: 'Thử Perplexity Computer chỉ 30 phút làm xong báo cáo chi tiêu. Mẹo prompt thực chiến từ cộng đồng share. Dev freelance nên thử ngay kẻo phí cơ hội!',
    seoKeywords: 'perplexity computer, ai agent, perplexity max, tự động hóa workflow, dev tool, báo cáo chi tiêu ai',
    seoOgImageUrl: '/uploads/perplexity-computer-ai-tu-lai-may-tinh-dev-vibe-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1772258721684),
    createdAt: new Date(1772258721684),
    updatedAt: new Date(1772292984307),
  },
  {
    id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
    title: 'Cài đặt AI Agent cá nhân trên máy tính không cần server cloud',
    slug: 'cai-dat-ai-agent-ca-nhan-tren-may-tinh-khong-can-server-cloud',
    excerpt: 'Hướng dẫn từng bước cài đặt OpenClaw - AI agent cá nhân chạy hoàn toàn trên máy tính của bạn, không cần server cloud, không cần kỹ năng lập trình...',
    content: `<h2>Giới thiệu</h2>
<p>OpenClaw là một AI agent framework cho phép bạn chạy trợ lý AI cá nhân ngay trên máy tính của mình, không cần server cloud, không cần kỹ năng lập trình phức tạp.</p>
<h2>Yêu cầu hệ thống</h2>
<ul>
<li>macOS 12+ hoặc Windows 10+ hoặc Ubuntu 20.04+</li>
<li>RAM tối thiểu 8GB (khuyến nghị 16GB)</li>
<li>Kết nối internet ổn định</li>
</ul>
<h2>Các bước cài đặt</h2>
<h3>Bước 1: Tải OpenClaw</h3>
<pre><code class="language-bash">curl -fsSL https://install.openclaw.ai | sh</code></pre>
<h3>Bước 2: Cấu hình ban đầu</h3>
<pre><code class="language-bash">openclaw init</code></pre>`,
    status: 'published',
    categoryId: '830438d0-7017-4cc5-8990-5eb3cf5c055f',
    categorySlug: 'docs',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/cai-dat-ai-agent-ca-nhan.webp',
    featuredImageAlt: 'Cài đặt AI Agent cá nhân trên máy tính',
    shortDescription: 'Hướng dẫn từng bước cài đặt OpenClaw AI agent cá nhân trên máy tính, không cần server cloud.',
    seoTitle: 'Cài đặt AI Agent cá nhân trên máy tính không cần server cloud',
    seoDescription: 'Hướng dẫn chi tiết cài đặt OpenClaw AI agent cá nhân trên máy tính Windows, macOS, Linux không cần server cloud.',
    seoKeywords: 'openclaw, ai agent, cài đặt, máy tính, không cần server',
    seoOgImageUrl: '/uploads/cai-dat-ai-agent-ca-nhan-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1771000000000),
    createdAt: new Date(1771000000000),
    updatedAt: new Date(1771000000000),
  },
  {
    id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
    title: 'Google Nano Banana 2 ra mắt: Mô hình AI nhỏ gọn nhưng mạnh mẽ',
    slug: 'google-nano-banana-2-ra-mat',
    excerpt: 'Google vừa ra mắt Nano Banana 2, mô hình AI nhỏ gọn mới nhất với hiệu suất vượt trội so với phiên bản trước. Đây là những gì bạn cần biết...',
    content: `<h2>Google Nano Banana 2 là gì?</h2>
<p>Google Nano Banana 2 là mô hình ngôn ngữ nhỏ gọn (SLM) mới nhất từ Google, được thiết kế để chạy hiệu quả trên các thiết bị có tài nguyên hạn chế.</p>
<h2>Điểm nổi bật</h2>
<ul>
<li>Kích thước mô hình chỉ 2B tham số</li>
<li>Hiệu suất tốt hơn 40% so với Nano Banana 1</li>
<li>Hỗ trợ tiếng Việt tốt hơn</li>
<li>Có thể chạy trên CPU thông thường</li>
</ul>`,
    status: 'published',
    categoryId: '2d92e36b-8b1d-48e5-b514-fe2d8c222263',
    categorySlug: 'tin-tuc-ai',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/google-nano-banana-2.webp',
    featuredImageAlt: 'Google Nano Banana 2 ra mắt',
    shortDescription: 'Google ra mắt Nano Banana 2 với hiệu suất vượt trội, kích thước nhỏ gọn, hỗ trợ tiếng Việt tốt hơn.',
    seoTitle: 'Google Nano Banana 2 ra mắt: Mô hình AI nhỏ gọn nhưng mạnh mẽ',
    seoDescription: 'Tìm hiểu về Google Nano Banana 2 - mô hình AI nhỏ gọn mới nhất với hiệu suất vượt trội và hỗ trợ tiếng Việt.',
    seoKeywords: 'google nano banana 2, ai model, slm, google ai',
    seoOgImageUrl: '/uploads/google-nano-banana-2-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1771500000000),
    createdAt: new Date(1771500000000),
    updatedAt: new Date(1771500000000),
  },
  {
    id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
    title: 'Tháng 2/2026: AI đang tăng tốc vượt khỏi con người',
    slug: 'thang-2-2026-ai-dang-tang-toc-vuot-khoi-con-nguoi',
    excerpt: 'Nhìn lại tháng 2/2026, AI đã có những bước tiến vượt bậc trong nhiều lĩnh vực. Từ lập trình đến sáng tạo nội dung, AI đang dần vượt qua khả năng con người...',
    content: `<h2>Tổng quan tháng 2/2026</h2>
<p>Tháng 2/2026 đánh dấu một cột mốc quan trọng trong lịch sử phát triển AI. Nhiều mô hình AI đã đạt và vượt qua hiệu suất con người trong các tác vụ phức tạp.</p>
<h2>Những sự kiện nổi bật</h2>
<ul>
<li>Claude Opus 4.6 đạt điểm số cao nhất trong bài kiểm tra lập trình</li>
<li>Gemini Ultra 2 vượt qua bác sĩ trong chẩn đoán y tế</li>
<li>GPT-5 đạt điểm SAT hoàn hảo</li>
</ul>`,
    status: 'published',
    categoryId: '2d92e36b-8b1d-48e5-b514-fe2d8c222263',
    categorySlug: 'tin-tuc-ai',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/thang-2-2026-ai.webp',
    featuredImageAlt: 'Tháng 2/2026: AI đang tăng tốc vượt khỏi con người',
    shortDescription: 'Tổng kết tháng 2/2026: AI đạt nhiều cột mốc quan trọng, vượt qua con người trong nhiều lĩnh vực.',
    seoTitle: 'Tháng 2/2026: AI đang tăng tốc vượt khỏi con người',
    seoDescription: 'Tổng kết những sự kiện AI nổi bật tháng 2/2026: từ lập trình đến y tế, AI đang vượt qua khả năng con người.',
    seoKeywords: 'ai 2026, tổng kết ai, ai vượt con người, claude, gemini, gpt',
    seoOgImageUrl: '/uploads/thang-2-2026-ai-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1771200000000),
    createdAt: new Date(1771200000000),
    updatedAt: new Date(1771200000000),
  },
  {
    id: 'd4e5f6a7-b8c9-0123-defa-234567890123',
    title: 'OpenClaw Models miễn phí và giá rẻ: Tổng hợp đầy đủ',
    slug: 'openclaw-models-mien-phi-gia-re',
    excerpt: 'Tổng hợp các model AI miễn phí và giá rẻ có thể dùng với OpenClaw. Từ Gemini Flash đến Mistral, đây là những lựa chọn tốt nhất cho người mới bắt đầu...',
    content: `<h2>Tại sao cần biết về model miễn phí?</h2>
<p>Khi mới bắt đầu với OpenClaw, chi phí API có thể là rào cản lớn. May mắn thay, có nhiều model AI chất lượng cao hoàn toàn miễn phí hoặc rất rẻ.</p>
<h2>Danh sách model miễn phí</h2>
<ul>
<li><strong>Gemini 1.5 Flash</strong>: Miễn phí với giới hạn 15 RPM</li>
<li><strong>Mistral 7B</strong>: Miễn phí qua Mistral API</li>
<li><strong>Llama 3.1 8B</strong>: Miễn phí qua Groq</li>
</ul>`,
    status: 'published',
    categoryId: '830438d0-7017-4cc5-8990-5eb3cf5c055f',
    categorySlug: 'docs',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/openclaw-models-mien-phi.webp',
    featuredImageAlt: 'OpenClaw Models miễn phí và giá rẻ',
    shortDescription: 'Tổng hợp các model AI miễn phí và giá rẻ có thể dùng với OpenClaw cho người mới bắt đầu.',
    seoTitle: 'OpenClaw Models miễn phí và giá rẻ: Tổng hợp đầy đủ',
    seoDescription: 'Danh sách đầy đủ các model AI miễn phí và giá rẻ tương thích với OpenClaw, phù hợp cho người mới bắt đầu.',
    seoKeywords: 'openclaw models, model miễn phí, gemini flash, mistral, llama, groq',
    seoOgImageUrl: '/uploads/openclaw-models-mien-phi-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1770800000000),
    createdAt: new Date(1770800000000),
    updatedAt: new Date(1770800000000),
  },
  {
    id: 'e5f6a7b8-c9d0-1234-efab-345678901234',
    title: 'Khắc phục lỗi quyền exec trong OpenClaw Approvals',
    slug: 'khac-phuc-loi-quyen-exec-openclaw-approvals',
    excerpt: 'Gặp lỗi "Permission denied" khi chạy OpenClaw? Bài viết này hướng dẫn cách khắc phục các lỗi quyền exec phổ biến trong OpenClaw Approvals...',
    content: `<h2>Lỗi quyền exec là gì?</h2>
<p>Khi OpenClaw cố gắng thực thi một lệnh hoặc script, đôi khi bạn sẽ gặp lỗi "Permission denied" hoặc "EACCES". Đây là lỗi quyền exec phổ biến.</p>
<h2>Nguyên nhân thường gặp</h2>
<ul>
<li>File script không có quyền thực thi</li>
<li>Thư mục không có quyền đọc/ghi</li>
<li>SELinux hoặc AppArmor chặn</li>
</ul>
<h2>Cách khắc phục</h2>
<pre><code class="language-bash">chmod +x /path/to/script.sh
openclaw approvals grant exec /path/to/script.sh</code></pre>`,
    status: 'published',
    categoryId: '830438d0-7017-4cc5-8990-5eb3cf5c055f',
    categorySlug: 'docs',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/khac-phuc-loi-quyen-exec.webp',
    featuredImageAlt: 'Khắc phục lỗi quyền exec trong OpenClaw Approvals',
    shortDescription: 'Hướng dẫn khắc phục các lỗi quyền exec phổ biến trong OpenClaw Approvals.',
    seoTitle: 'Khắc phục lỗi quyền exec trong OpenClaw Approvals',
    seoDescription: 'Hướng dẫn chi tiết cách khắc phục lỗi Permission denied và EACCES trong OpenClaw Approvals.',
    seoKeywords: 'openclaw, lỗi exec, permission denied, approvals, khắc phục',
    seoOgImageUrl: '/uploads/khac-phuc-loi-quyen-exec-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1770600000000),
    createdAt: new Date(1770600000000),
    updatedAt: new Date(1770600000000),
  },
  {
    id: 'f6a7b8c9-d0e1-2345-fabc-456789012345',
    title: 'Hướng dẫn đăng ký Alibaba Cloud Free Trial cho OpenClaw',
    slug: 'huong-dan-dang-ky-alibaba-cloud-free-trial-openclaw',
    excerpt: 'Alibaba Cloud cung cấp gói free trial hấp dẫn cho người dùng mới. Bài viết này hướng dẫn cách đăng ký và sử dụng Alibaba Cloud với OpenClaw...',
    content: `<h2>Tại sao chọn Alibaba Cloud?</h2>
<p>Alibaba Cloud cung cấp gói free trial với $300 credit trong 3 tháng đầu, rất phù hợp để thử nghiệm OpenClaw trên cloud.</p>
<h2>Các bước đăng ký</h2>
<ol>
<li>Truy cập <a href="https://www.alibabacloud.com/free" target="_blank">alibabacloud.com/free</a></li>
<li>Tạo tài khoản mới</li>
<li>Xác minh danh tính</li>
<li>Nhận $300 credit</li>
</ol>`,
    status: 'published',
    categoryId: '830438d0-7017-4cc5-8990-5eb3cf5c055f',
    categorySlug: 'docs',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/alibaba-cloud-free-trial.webp',
    featuredImageAlt: 'Hướng dẫn đăng ký Alibaba Cloud Free Trial',
    shortDescription: 'Hướng dẫn đăng ký Alibaba Cloud Free Trial để chạy OpenClaw trên cloud với $300 credit miễn phí.',
    seoTitle: 'Hướng dẫn đăng ký Alibaba Cloud Free Trial cho OpenClaw',
    seoDescription: 'Hướng dẫn chi tiết đăng ký Alibaba Cloud Free Trial và cấu hình OpenClaw trên cloud.',
    seoKeywords: 'alibaba cloud, free trial, openclaw, cloud, đăng ký',
    seoOgImageUrl: '/uploads/alibaba-cloud-free-trial-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1770400000000),
    createdAt: new Date(1770400000000),
    updatedAt: new Date(1770400000000),
  },
  {
    id: 'a7b8c9d0-e1f2-3456-abcd-567890123456',
    title: 'Coding cho Marketer: Clone MCP trong 30 phút',
    slug: 'coding-cho-marketer-clone-mcp',
    excerpt: 'Bạn là marketer và muốn tự tay code một MCP server? Bài viết này hướng dẫn cách clone và tùy chỉnh MCP server chỉ trong 30 phút, không cần kinh nghiệm lập trình...',
    content: `<h1>Lập trình cho nhà tiếp thị: Hướng dẫn từng bước với AI Coding Tools</h1>

<p>Bạn là một marketer và nghĩ rằng lập trình là công việc của dân kỹ thuật? Hãy nghĩ lại! Với sự hỗ trợ của AI, bất kỳ ai cũng có thể tự tay xây dựng những công cụ hỗ trợ công việc của mình.</p>

<h2>MCP là gì và tại sao bạn cần quan tâm?</h2>

<p>MCP (Model Context Protocol) là một giao thức cho phép AI agent kết nối với các công cụ và dịch vụ bên ngoài. Nói đơn giản, MCP giúp AI có thể thực hiện các tác vụ thực tế như gửi email, tạo file, hoặc tương tác với các ứng dụng khác.</p>

<div class="alert alert-soft">
  <span class="icon-[lucide--lightbulb]"></span>
  <div>
    <strong>Tip:</strong> MCP đặc biệt hữu ích cho marketer vì nó cho phép tự động hóa nhiều tác vụ lặp đi lặp lại.
  </div>
</div>

<h2>Chuẩn bị môi trường</h2>

<p>Trước khi bắt đầu, bạn cần cài đặt một số công cụ cơ bản:</p>

<!-- Tabs Component -->
<div class="tabs-block">
  <div class="tabs-list">
    <button class="tab-item active">npm</button>
    <button class="tab-item">yarn</button>
    <button class="tab-item">pnpm</button>
  </div>
  
  <div class="tab-content active">
    <pre><code class="language-bash"># Cài đặt Node.js
# Tải từ https://nodejs.org

# Kiểm tra cài đặt
node --version

# Cài đặt MCP SDK
npm install -g @modelcontextprotocol/sdk</code></pre>
  </div>
  
  <div class="tab-content">
    <pre><code class="language-bash"># Cài đặt Node.js
# Tải từ https://nodejs.org

# Kiểm tra cài đặt
node --version

# Cài đặt MCP SDK
yarn global add @modelcontextprotocol/sdk</code></pre>
  </div>
  
  <div class="tab-content">
    <pre><code class="language-bash"># Cài đặt Node.js
# Tải từ https://nodejs.org

# Kiểm tra cài đặt
node --version

# Cài đặt MCP SDK
pnpm add -g @modelcontextprotocol/sdk</code></pre>
  </div>
</div>

<h3>Yêu cầu hệ thống</h3>

<ul>
  <li>Node.js phiên bản 18 trở lên</li>
  <li>npm hoặc yarn</li>
  <li>Một IDE như VS Code</li>
</ul>

<h2>Clone MCP Template</h2>

<p>Thay vì viết từ đầu, chúng ta sẽ clone một template có sẵn và tùy chỉnh theo nhu cầu:</p>

<pre><code class="language-bash"># Clone template
git clone https://github.com/openclaw/mcp-template my-mcp

# Di chuyển vào thư mục dự án
cd my-mcp

# Cài đặt dependencies
npm install</code></pre>

<h3>Cấu trúc dự án</h3>

<p>Sau khi clone, bạn sẽ thấy cấu trúc thư mục như sau:</p>

<pre><code class="language-bash">my-mcp/
├── src/
│   └── index.ts          # File chính
├── package.json
├── tsconfig.json
└── README.md</code></pre>

<h2>Tùy chỉnh MCP Server</h2>

<p>Đây là bước quan trọng nhất. Bạn cần định nghĩa các tools mà MCP server sẽ cung cấp:</p>

<pre><code class="language-typescript">import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server(
  {
    name: 'marketing-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Định nghĩa các tools
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [
      {
        name: 'send_email',
        description: 'Gửi email marketing',
        inputSchema: {
          type: 'object',
          properties: {
            to: { type: 'string', description: 'Địa chỉ email người nhận' },
            subject: { type: 'string', description: 'Tiêu đề email' },
            body: { type: 'string', description: 'Nội dung email' },
          },
          required: ['to', 'subject', 'body'],
        },
      },
    ],
  };
});</code></pre>

<div class="alert alert-dash">
  <span class="icon-[lucide--alert-circle]"></span>
  <div>
    <strong>Lưu ý:</strong> Hãy đảm bảo bạn hiểu rõ các tools mình định nghĩa để tránh các rủi ro bảo mật.
  </div>
</div>

<h2>Chạy MCP Server</h2>

<p>Sau khi hoàn tất cấu hình, hãy chạy server:</p>

<!-- Tabs for running -->
<div class="tabs-block">
  <div class="tabs-list">
    <button class="tab-item active">Development</button>
    <button class="tab-item">Production</button>
  </div>
  
  <div class="tab-content active">
    <pre><code class="language-bash"># Chạy ở chế độ development
npm run dev</code></pre>
  </div>
  
  <div class="tab-content">
    <pre><code class="language-bash"># Build và chạy production
npm run build
npm start</code></pre>
  </div>
</div>

<h3>Kết nối với OpenClaw</h3>

<p>Để sử dụng MCP server với OpenClaw, bạn cần thêm cấu hình vào file cấu hình:</p>

<pre><code class="language-json">{
  "mcpServers": {
    "marketing-tools": {
      "command": "node",
      "args": ["/path/to/my-mcp/dist/index.js"],
      "env": {
        "API_KEY": "your-api-key"
      }
    }
  }
}</code></pre>

<h2>Các trường hợp sử dụng cho Marketer</h2>

<h3>1. Tự động hóa email marketing</h3>

<p>Với MCP, bạn có thể tạo các kịch bản gửi email tự động dựa trên hành vi của khách hàng:</p>

<pre><code class="language-typescript">// Tạo tool gửi email tự động
async function sendWelcomeEmail(customerEmail: string, customerName: string) {
  const emailContent = \`
    Xin chào \${customerName},
    
    Cảm ơn bạn đã đăng ký!
    
    Chúng tôi rất vui được có bạn.
  \`;
  
  return await sendEmail({
    to: customerEmail,
    subject: 'Chào mừng bạn!',
    body: emailContent
  });
}</code></pre>

<h3>2. Tạo báo cáo tự động</h3>

<p>Tự động tổng hợp dữ liệu từ nhiều nguồn và gửi báo cáo hàng ngày:</p>

<pre><code class="language-typescript">// Tool tạo báo cáo
async function generateDailyReport() {
  // Lấy dữ liệu từ các nguồn
  const analytics = await getAnalytics();
  const sales = await getSalesData();
  const campaigns = await getCampaignPerformance();
  
  // Tạo báo cáo
  const report = formatReport({ analytics, sales, campaigns });
  
  // Gửi email
  await sendEmail({
    to: 'marketing-team@company.com',
    subject: 'Báo cáo hàng ngày',
    body: report
  });
  
  return 'Báo cáo đã được gửi thành công';
}</code></pre>

<h3>3. Quản lý social media</h3>

<p>Đăng bài tự động lên nhiều platform cùng lúc:</p>

<pre><code class="language-typescript">// Tool đăng bài lên social media
async function publishSocialPost(platforms: string[], content: string, media?: string[]) {
  const results = [];
  
  for (const platform of platforms) {
    const result = await postToPlatform(platform, content, media);
    results.push({ platform, status: result.success });
  }
  
  return results;
}</code></pre>

<h2>Best Practices</h2>

<div class="alert alert-soft">
  <span class="icon-[lucide--check-circle]"></span>
  <div>
    <strong>Khuyến nghị:</strong> Luôn kiểm tra kỹ các tools trước khi deploy lên production.
  </div>
</div>

<h3>1. Bảo mật</h3>

<ul>
  <li>Không hardcode API keys trong code</li>
  <li>Sử dụng environment variables</li>
  <li>Validate input từ users</li>
  <li>Implement rate limiting</li>
</ul>

<h3>2. Error Handling</h3>

<pre><code class="language-typescript">try {
  // Thực hiện operation
  await performOperation();
} catch (error) {
  // Log error
  console.error('Operation failed:', error);
  
  // Gửi thông báo lỗi
  await notifyAdmin(error);
  
  // Return safe error message
  return { error: 'Đã xảy ra lỗi. Vui lòng thử lại sau.' };
}</code></pre>

<h3>3. Monitoring</h3>

<p>Theo dõi hoạt động của MCP server để phát hiện vấn đề sớm:</p>

<pre><code class="language-typescript">// Logging
function logOperation(operation: string, success: boolean, duration: number) {
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    operation,
    success,
    duration
  }));
}</code></pre>

<h2>Kết luận</h2>

<p>Với MCP, bạn không cần trở thành một lập trình viên để tự động hóa công việc marketing. Chỉ với 30 phút và một chút kiến thức cơ bản về lập trình, bạn có thể xây dựng những công cụ mạnh mẽ hỗ trợ công việc hàng ngày.</p>

<div class="alert alert-dash">
  <span class="icon-[lucide--rocket]"></span>
  <div>
    <strong>Bước tiếp theo:</strong> Hãy thử clone template và tạo một MCP server đơn giản cho riêng bạn!
  </div>
</div>

<h3>Tài nguyên bổ sung</h3>

<ul>
  <li><a href="https://github.com/modelcontextprotocol">MCP Official Documentation</a></li>
  <li><a href="https://github.com/openclaw/mcp-template">MCP Template Repository</a></li>
  <li><a href="/docs">OpenClaw Documentation</a></li>
</ul>`,
    status: 'published',
    categoryId: 'design-system',
    categorySlug: 'design-system',
    authorId: '2d32c3c8-3bad-4f27-b8f2-87fc7c663d00',
    featuredImageUrl: '/uploads/coding-cho-marketer-clone-mcp.webp',
    featuredImageAlt: 'Coding cho Marketer: Clone MCP trong 30 phút',
    shortDescription: 'Hướng dẫn marketer tự clone và tùy chỉnh MCP server trong 30 phút không cần kinh nghiệm lập trình.',
    seoTitle: 'Coding cho Marketer: Clone MCP trong 30 phút',
    seoDescription: 'Hướng dẫn marketer tự tay code MCP server trong 30 phút với OpenClaw, không cần kinh nghiệm lập trình.',
    seoKeywords: 'mcp, marketer, coding, openclaw, clone mcp',
    seoOgImageUrl: '/uploads/coding-cho-marketer-clone-mcp-og.jpg',
    seoNoIndex: false,
    publishedAt: new Date(1770200000000),
    createdAt: new Date(1770200000000),
    updatedAt: new Date(1770200000000),
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter(p => p.categorySlug === categorySlug);
}

export function getLatestPosts(count: number = 3): Post[] {
  return [...posts]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, count);
}

export const categories = [
  { slug: 'docs', label: 'Docs' },
  { slug: 'tin-tuc-ai', label: 'Tin tức AI' },
  { slug: 'design-system', label: 'Design System' },
];
