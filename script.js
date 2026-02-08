/**
 * 🛡️ DRAGON SHIELD - ULTIMATE EDITION
 * Developed by Adam and his AI
 * Purpose: Digital India Cyber Security
 */

function checkLink() {
    const linkInput = document.getElementById('urlInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!linkInput) {
        alert("Commander Adam, please paste a link! 🐉");
        return;
    }

    // UI Feedback
    resultDiv.style.display = "block";
    resultDiv.innerHTML = "🔍 Dragon is deconstructing link & scanning IP layers...";
    resultDiv.style.background = "rgba(255, 255, 255, 0.1)";
    resultDiv.style.color = "white";

    setTimeout(() => {
        try {
            // 1. Link Deconstruction (Adam's Pro Logic)
            const url = new URL(linkInput.startsWith('http') ? linkInput : 'https://' + linkInput);
            const host = url.hostname.toLowerCase();
            const path = url.pathname.toLowerCase();

            let riskScore = 0;
            let detections = [];

            // 2. Direct IP & Hacker Tunnel Detection
            const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
            const tunnels = ['ngrok', 'localtunnel', 'localhost.run', 'trycloudflare', 'pagekite', 'telebit'];

            if (ipPattern.test(host)) {
                riskScore += 95;
                detections.push("Direct IP Access (Danger ❌)");
            }

            if (tunnels.some(t => host.includes(t))) {
                riskScore += 90;
                detections.push("Hacker Tunnel/Localhost 🚩");
            }

            // 3. E-commerce & Brand Phishing (iPhone/Gift Scams)
            const brands = ['amazon', 'flipkart', 'meesho', 'myntra', 'iphone', 'gift', 'winner'];
            const officialSuffix = ['.com', '.in', '.net'];

            brands.forEach(brand => {
                if (linkInput.includes(brand)) {
                    const isOfficial = officialSuffix.some(suffix => host.endsWith(brand + suffix));
                    if (!isOfficial) {
                        riskScore += 80;
                        detections.push(`Fake ${brand} Promotion detected`);
                    }
                }
            });

            // 4. Dangerous Extensions & Tracking
            const riskyExts = ['.sbs', '.xyz', '.top', '.online', '.site', '.link', '.free', '.rocks'];
            const trackers = ['iplogger', 'grabify', 'anshu'];

            if (riskyExts.some(ext => host.endsWith(ext))) {
                riskScore += 40;
                detections.push("Untrusted Extension");
            }

            if (trackers.some(t => host.includes(t) || path.includes(t))) {
                riskScore += 100;
                detections.push("IP Logger/Malware Tracker ⚠️");
            }

            // --- DISPLAY RESULT ---
            showFinalVerdict(resultDiv, riskScore, detections, host);

        } catch (e) {
            resultDiv.innerHTML = "⚠️ INVALID URL! Dragon cannot read this structure.";
            resultDiv.style.background = "#f39c12";
        }
    }, 1500);
}

function showFinalVerdict(div, score, reasons, domain) {
    if (score >= 60) {
        div.innerHTML = `❌ DANGER DETECTED! <br> <b>Risk Score: ${score}%</b> <br> Target: ${domain} <br> Reasons: ${reasons.join(' | ')}`;
        div.style.background = "#ff4d4d";
    } else if (score > 0) {
        div.innerHTML = `⚠️ WARNING! <br> <b>Risk Score: ${score}%</b> <br> Target: ${domain} <br> Adam, be careful with this link!`;
        div.style.background = "#f39c12";
    } else {
        div.innerHTML = `✅ SAFE! <br> Target: ${domain} <br> <b>Dragon Shield finds no threats.</b>`;
        div.style.background = "#00ff88";
        div.style.color = "black";
    }
}
