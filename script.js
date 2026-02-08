function checkLink() {
    const linkInput = document.getElementById('urlInput').value.trim();
    const resultDiv = document.getElementById('result');
    
    if (!linkInput) {
        alert("Enter a link, Adam!");
        return;
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = "🔍 Dragon is deconstructing the link...";
    resultDiv.style.background = "rgba(255,255,255,0.1)";
    resultDiv.style.color = "white";

    setTimeout(() => {
        try {
            // URL splitting logic (Adam's Concept)
            const url = new URL(linkInput.startsWith('http') ? linkInput : 'https://' + linkInput);
            const domain = url.hostname.toLowerCase();
            const path = url.pathname.toLowerCase();

            // Phishing keywords and Risky extensions
            const riskyExts = ['.sbs', '.xyz', '.top', '.link', '.gift', '.rocks'];
            const phishingTerms = ['login', 'verify', 'bank', 'free', 'reward', 'gift', 'update'];

            let riskScore = 0;

            // Check 1: Domain extension risk
            if (riskyExts.some(ext => domain.endsWith(ext))) riskScore += 50;

            // Check 2: Path keywords risk
            if (phishingTerms.some(term => path.includes(term) || domain.includes(term))) riskScore += 40;

            // Check 3: HTTPS Security
            if (!linkInput.startsWith('https://')) riskScore += 20;

            // Final Verdict
            if (riskScore >= 50) {
                resultDiv.innerHTML = `❌ DANGER! Malware/Phishing detected.<br>Domain: ${domain}<br>Risk Level: High`;
                resultDiv.style.background = "#ff4d4d";
            } else {
                resultDiv.innerHTML = `✅ SAFE! Dragon shield is active.<br>Domain: ${domain}<br>Status: Secure`;
                resultDiv.style.background = "#00ff88";
                resultDiv.style.color = "black";
            }

        } catch (e) {
            resultDiv.innerHTML = "⚠️ INVALID URL! Dragon cannot scan this.";
            resultDiv.style.background = "#f39c12";
        }
    }, 1500);
}
