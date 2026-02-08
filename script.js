// 🐉 DRAGON SHIELD - ADAM'S OFFICIAL LOGIC
function scanUrl() {
    const linkInput = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    
    // Check if input is empty
    if (!linkInput) {
        resultDiv.innerHTML = "<div style='color: yellow; padding: 10px;'>URL onnu type cheyyu muthe! ⚠️</div>";
        return;
    }

    // 1. Link Deconstruction (Adam's Pro Logic)
    let host = "";
    try {
        const url = new URL(linkInput.startsWith('http') ? linkInput : 'http://' + linkInput);
        host = url.hostname.toLowerCase();
    } catch (e) {
        resultDiv.innerHTML = "<div style='color: red; padding: 10px;'>Invalid Link aanu bro! ❌</div>";
        return;
    }
    
    let riskScore = 0;
    let detections = [];

    // 2. Direct IP & Hacker Tunnel Detection
    const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
    const tunnels = ['ngrok', 'localtunnel', 'localhost.run', 'trycloudflare', 'serveo.net'];

    if (ipPattern.test(host)) {
        riskScore += 95;
        detections.push("Direct IP Access (Danger ❌)");
    }

    if (tunnels.some(t => host.includes(t))) {
        riskScore += 90;
        detections.push("Hacker Tunnel/Localhost 🚩");
    }

    // 3. E-commerce Phishing Logic
    const brands = ['amazon', 'flipkart', 'meesho', 'myntra', 'iphone', 'gift'];
    const officialSuffix = ['.com', '.in', '.net', '.org'];
    
    brands.forEach(brand => {
        if (linkInput.toLowerCase().includes(brand)) {
            const isOfficial = officialSuffix.some(suffix => host.endsWith(brand + suffix));
            if (!isOfficial) {
                riskScore += 85;
                detections.push(`Fake ${brand} Phishing Link 🎣`);
            }
        }
    });

    // 4. Final Result & Call 1930 Feature
    if (riskScore >= 50) {
        resultDiv.innerHTML = `
            <div class="danger-box" style="background: #ff3b30; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 15px;">
                <h3 style="margin: 0;">🚨 DANGER DETECTED!</h3>
                <p style="margin: 10px 0; font-size: 14px;">Risk Score: ${riskScore}% <br>Reasons: ${detections.join(", ")}</p>
                <button onclick="window.location.href='tel:1930'" style="background: white; color: #ff3b30; border: none; padding: 12px; border-radius: 5px; font-weight: bold; width: 100%; cursor: pointer; font-size: 16px;">
                    📞 CALL 1930 & REPORT
                </button>
            </div>
        `;
    } else {
        resultDiv.innerHTML = `
            <div style="background: #4CAF50; color: white; padding: 15px; border-radius: 8px; text-align: center; margin-top: 15px;">
                <h3 style="margin: 0;">✅ SITE IS SAFE</h3>
                <p style="margin: 5px 0;">Low Risk: ${riskScore}% <br>Dragon Shield is Active 🐉</p>
            </div>
        `;
    }
}

