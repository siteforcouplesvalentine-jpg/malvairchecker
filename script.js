// 🛡️ Adam's Dragon Shield - Pro Logic Script
function scanUrl() {
    const linkInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    
    if (!linkInput) {
        resultDiv.innerHTML = "Please enter a URL first! ⚠️";
        return;
    }

    // 1. Link Deconstruction
    const url = new URL(linkInput.startsWith('http') ? linkInput : 'http://' + linkInput);
    const host = url.hostname.toLowerCase();
    
    let riskScore = 0;
    let detections = [];

    // 2. Direct IP & Hacker Tunnel Detection
    const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    const tunnels = ['ngrok', 'localtunnel', 'localhost.run', 'trycloudflare'];

    if (ipPattern.test(host)) {
        riskScore += 95;
        detections.push("Direct IP Access (Danger ❌)");
    }

    if (tunnels.some(t => host.includes(t))) {
        riskScore += 90;
        detections.push("Hacker Tunnel/Localhost 🚩");
    }

    // 3. E-commerce & Brand Phishing Logic
    const brands = ['amazon', 'flipkart', 'meesho', 'myntra'];
    brands.forEach(brand => {
        if (linkInput.includes(brand) && !linkInput.includes('.com') && !linkInput.includes('.in')) {
            riskScore += 85;
            detections.push(`Fake ${brand} Link Detected 🎣`);
        }
    });

    // 4. Result Display Logic
    if (riskScore >= 50) {
        // High Risk Alert with Call Feature
        resultDiv.innerHTML = `
            <div class="danger-box" style="background: #ff3b30; color: white; padding: 15px; border-radius: 8px; text-align: center;">
                <h3 style="margin: 0;">🚨 DANGER DETECTED!</h3>
                <p style="margin: 10px 0;">Risk Score: ${riskScore}% | Reasons: ${detections.join(", ")}</p>
                <button onclick="window.location.href='tel:1930'" style="background: white; color: #ff3b30; border: none; padding: 10px; border-radius: 5px; font-weight: bold; width: 100%; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.2);">
                    📞 CALL 1930 & REPORT
                </button>
            </div>
        `;
    } else {
        // Safe Result
        resultDiv.innerHTML = `
            <div style="background: #4CAF50; color: white; padding: 15px; border-radius: 8px; text-align: center;">
                <h3 style="margin: 0;">✅ SITE IS SAFE</h3>
                <p style="margin: 5px 0;">Low Risk: ${riskScore}%</p>
            </div>
        `;
    }
}
