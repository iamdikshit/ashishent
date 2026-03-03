// ─────────────────────────────────────────────
// User Confirmation Email HTML
// ─────────────────────────────────────────────
export default function buildUserEmail(data: {
    name: string;
    product: string;
    message: string;
    refId: string;
    submittedAt: string;
}): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>We received your inquiry – Ashish Enterprises</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'DM Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f1f5f9;-webkit-font-smoothing:antialiased;color:#1e293b}
  .wrap{width:100%;background:#f1f5f9;padding:40px 16px}
  .container{max-width:600px;margin:0 auto}
  .header{background:linear-gradient(135deg,#4f46e5 0%,#7c3aed 100%);border-radius:20px 20px 0 0;padding:40px 40px 36px;text-align:center;position:relative;overflow:hidden}
  .dot-bg{position:absolute;inset:0;background-image:radial-gradient(circle,rgba(255,255,255,.12) 1px,transparent 1px);background-size:20px 20px}
  .logo-wrap{display:inline-flex;align-items:center;gap:10px;margin-bottom:24px;position:relative}
  .logo-icon{width:40px;height:40px;background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.25);border-radius:10px;display:inline-flex;align-items:center;justify-content:center}
  .logo-text{font-size:22px;font-weight:700;color:#fff;letter-spacing:-.3px}
  .logo-dot{color:#a5b4fc}
  .check-circle{width:72px;height:72px;background:rgba(255,255,255,.15);border:2px solid rgba(255,255,255,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;position:relative}
  .h-title{font-size:26px;font-weight:700;color:#fff;line-height:1.3;margin-bottom:8px;position:relative}
  .h-sub{font-size:14px;color:rgba(255,255,255,.75);line-height:1.6;position:relative}
  .body{background:#fff;padding:40px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0}
  .greeting{font-size:16px;color:#1e293b;font-weight:600;margin-bottom:8px}
  .intro{font-size:14px;color:#475569;line-height:1.7;margin-bottom:28px}
  .ref-box{background:linear-gradient(135deg,#eef2ff,#f5f3ff);border:1px solid #c7d2fe;border-radius:14px;padding:18px 24px;text-align:center;margin-bottom:28px}
  .ref-label{font-size:11px;font-weight:700;color:#6366f1;text-transform:uppercase;letter-spacing:1.2px;margin-bottom:6px}
  .ref-id{font-size:20px;font-weight:700;color:#4f46e5;font-family:monospace;letter-spacing:1px}
  .ref-note{font-size:11px;color:#94a3b8;margin-top:4px}
  .sec-label{display:flex;align-items:center;gap:8px;margin-bottom:14px}
  .sec-line{flex:1;height:1px;background:linear-gradient(to right,#e2e8f0,transparent)}
  .sec-text{font-size:10px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.4px;white-space:nowrap}
  .summary-table{width:100%;border-collapse:collapse;margin-bottom:28px;border-radius:14px;overflow:hidden;border:1px solid #e2e8f0}
  .summary-table tr td{padding:12px 16px;font-size:13.5px;border-bottom:1px solid #f1f5f9;vertical-align:top}
  .summary-table tr:last-child td{border-bottom:none}
  .summary-table tr:nth-child(even) td{background:#f8fafc}
  .lbl{font-weight:600;color:#64748b;width:38%}
  .val{color:#1e293b;font-weight:500}
  .product-tag{display:inline-block;background:#eef2ff;border:1px solid #c7d2fe;color:#4f46e5;font-size:12px;font-weight:600;padding:5px 12px;border-radius:100px}
  .msg-block{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #6366f1;border-radius:12px;padding:16px 20px;margin-bottom:28px}
  .msg-block p{font-size:13.5px;color:#475569;line-height:1.7}
  .what-next{margin-bottom:28px}
  .step{display:flex;align-items:flex-start;gap:14px;padding:14px 0;border-bottom:1px solid #f1f5f9}
  .step:last-child{border-bottom:none}
  .step-num{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
  .step-title{font-size:13.5px;font-weight:600;color:#1e293b;margin-bottom:3px}
  .step-desc{font-size:12.5px;color:#64748b;line-height:1.5}
  .divider{height:1px;background:linear-gradient(to right,transparent,#e2e8f0 30%,#e2e8f0 70%,transparent);margin:28px 0}
  .cta-wrap{text-align:center;margin-bottom:28px}
  .cta-btn{display:inline-block;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff!important;text-decoration:none;font-size:14px;font-weight:700;padding:14px 36px;border-radius:12px;letter-spacing:.2px;margin-bottom:10px}
  .cta-secondary{display:inline-block;border:1px solid #c7d2fe;background:#eef2ff;color:#4f46e5!important;text-decoration:none;font-size:12px;font-weight:600;padding:9px 22px;border-radius:9px;margin-left:10px}
  .contact-strip{background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:18px 20px;text-align:center;margin-bottom:8px}
  .contact-strip p{font-size:13px;color:#475569;margin-bottom:10px}
  .contact-links{display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
  .contact-link{display:inline-flex;align-items:center;gap:5px;font-size:12.5px;font-weight:600;color:#4f46e5!important;text-decoration:none}
  .footer{background:#1e293b;border-radius:0 0 20px 20px;padding:32px 40px;text-align:center}
  .f-logo{font-size:16px;font-weight:700;color:#fff;margin-bottom:6px}
  .f-logo span{color:#818cf8}
  .f-tag{font-size:12px;color:#64748b;margin-bottom:20px}
  .f-links{margin-bottom:20px}
  .f-link{display:inline-block;font-size:12px;color:#94a3b8!important;text-decoration:none;margin:0 10px}
  .f-contact{font-size:12px;color:#475569;margin-bottom:16px;line-height:1.8}
  .f-contact a{color:#818cf8!important;text-decoration:none}
  .f-divider{height:1px;background:#334155;margin:20px 0}
  .f-fine{font-size:11px;color:#475569;line-height:1.7}
  @media(max-width:600px){.wrap{padding:20px 12px}.header,.body,.footer{padding:28px 20px}.h-title{font-size:20px}.contact-links{flex-direction:column;align-items:center}.cta-secondary{margin-left:0;margin-top:10px;display:block}}
</style>
</head>
<body>
<div class="wrap">
<div class="container">

  <!-- Header -->
  <div class="header">
    <div class="dot-bg"></div>
    <div class="logo-wrap">
      
      <span class="logo-text">Ashish Enterprises</span>
    </div>
   
    <div class="h-title">Inquiry Received!</div>
    <p class="h-sub">Thank you for reaching out to us.<br/>We'll get back to you within 24 hours.</p>
  </div>

  <!-- Body -->
  <div class="body">
    <p class="greeting">Dear ${data.name},</p>
    <p class="intro">
      Thank you for your interest in <strong>Ashish Enterprises</strong>. We have successfully received your inquiry and our team is already reviewing it. You can expect a response from us within <strong>24 business hours</strong>.
    </p>

    <!-- Reference ID -->
    <div class="ref-box">
      <div class="ref-label">Your Reference Number</div>
      <div class="ref-id">#${data.refId}</div>
      <div class="ref-note">Please use this reference in any future communication</div>
    </div>

    <!-- Inquiry Summary -->
    <div class="sec-label"><span class="sec-text">Your Inquiry Summary</span><div class="sec-line"></div></div>
    <table class="summary-table">
      <tr><td class="lbl">Product</td><td class="val"><span class="product-tag">${data.product || "General Inquiry"}</span></td></tr>
      <tr><td class="lbl">Submitted</td><td class="val">${data.submittedAt}</td></tr>
      <tr><td class="lbl">Reference</td><td class="val" style="color:#94a3b8;font-family:monospace;font-size:12px">#${data.refId}</td></tr>
    </table>

    <div class="sec-label"><span class="sec-text">Your Message</span><div class="sec-line"></div></div>
    <div class="msg-block"><p>${data.message}</p></div>

    <!-- What happens next -->
   

    <div class="divider"></div>

    <!-- CTA -->
    <div class="cta-wrap">
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/product" class="cta-btn">🧵 &nbsp; Explore Our Products</a>
      <a href="https://wa.me/+91 99583 94954" class="cta-secondary">💬 WhatsApp Us</a>
    </div>

    <!-- Contact strip -->
    <div class="contact-strip">
      <p>Need immediate assistance? Reach us directly:</p>
      <div class="contact-links">
      
        
        <a href="mailto:info@ashishent.com" class="contact-link">📧 info@ashishent.com</a>
          
      
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <div class="f-logo">Ashish Enterprises<span>.</span></div>
    <div class="f-tag">B-72, 2nd floor, Sector-69, Noida, UP-201301</div>
    <div class="f-links">
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}" class="f-link">Website</a>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/product" class="f-link">Products</a>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/contact" class="f-link">Contact</a>
    </div>
    <div class="f-contact">
  
      📧 <a href="mailto:info@ashishent.com">info@ashishent.com</a>
    </div>
    <div class="f-divider"></div>
    <div class="f-fine">
      You are receiving this email because you submitted an inquiry on our website.<br/>
      If this wasn't you, please ignore this email or <a href="mailto:info@ashishent.com" style="color:#818cf8">contact us</a>.<br/><br/>
      © ${new Date().getFullYear()} Ashish Enterprises. All rights reserved.
    </div>
  </div>

</div>
</div>
</body>
</html>`;
}
