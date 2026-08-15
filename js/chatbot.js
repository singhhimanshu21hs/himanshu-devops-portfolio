/* =========================================================
   DEVOPS PORTFOLIO CHATBOT ASSISTANT ENGINE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // Target Chatbot Elements
    const chatBtn = document.getElementById("chatBtn");
    const chatWindow = document.querySelector(".chat-window");
    const chatInput = document.getElementById("chatInput");
    const chatBody = document.querySelector(".chat-body");
    const chatClose = document.getElementById("chatClose");

    if (!chatBtn || !chatWindow || !chatInput || !chatBody) return;

    /* =========================================================
       1. TOGGLE CHAT WINDOW & FOCUS
    ========================================================= */
    const toggleChat = () => {
        const isOpen = chatWindow.classList.toggle("open");
        chatBtn.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            chatInput.focus();
            if (chatBody.children.length === 0) {
                sendBotResponse("Hello! 👋 I'm the portfolio assistant. Ask me about DevOps, Cloud (AWS/Azure), CI/CD, Kubernetes, or Infrastructure as Code!");
            }
        }
    };

    chatBtn.addEventListener("click", toggleChat);
    chatClose?.addEventListener("click", toggleChat);

    /* =========================================================
       2. MESSAGE UTILITY FUNCTIONS
    ========================================================= */
    const appendMessage = (text, sender) => {
        const msgDiv = document.createElement("div");
        msgDiv.className = `chat-message ${sender}-message`;
        
        const bubble = document.createElement("div");
        bubble.className = "message-bubble";
        bubble.textContent = text;
        
        msgDiv.appendChild(bubble);
        chatBody.appendChild(msgDiv);
        
        // Auto-scroll to latest message
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const showTypingIndicator = () => {
        const typingDiv = document.createElement("div");
        typingDiv.className = "chat-message bot-message typing-indicator-wrapper";
        typingDiv.id = "chatTypingIndicator";
        typingDiv.innerHTML = `
            <div class="message-bubble typing">
                <span></span><span></span><span></span>
            </div>
        `;
        chatBody.appendChild(typingDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    };

    const removeTypingIndicator = () => {
        const indicator = document.getElementById("chatTypingIndicator");
        indicator?.remove();
    };

    const sendBotResponse = (response) => {
        showTypingIndicator();
        setTimeout(() => {
            removeTypingIndicator();
            appendMessage(response, "bot");
        }, 600);
    };

    /* =========================================================
       3. INTENT RECOGNITION & RESPONSE ENGINE
    ========================================================= */
    const processQuery = (query) => {
        const q = query.toLowerCase().trim();

        if (!q) return;

        // User message render
        appendMessage(query, "user");
        chatInput.value = "";

        // Keyword Matching
        if (q.includes("docker") || q.includes("container")) {
            sendBotResponse("Docker isolates applications into lightweight containers, standardizing build and runtime environments across dev, testing, and production.");
        } 
        else if (q.includes("kubernetes") || q.includes("k8s") || q.includes("orchestrat")) {
            sendBotResponse("Kubernetes automates container orchestration—handling scaling, rolling updates, self-healing, service discovery, and cluster health.");
        } 
        else if (q.includes("aws") || q.includes("azure") || q.includes("cloud")) {
            sendBotResponse("Cloud platforms provide scalable infrastructure. Core expertise includes compute (EC2/VMs), storage (S3/Blob), networking (VPC/VNets), IAM, and managed Kubernetes.");
        } 
        else if (q.includes("ci/cd") || q.includes("jenkins") || q.includes("action") || q.includes("pipeline")) {
            sendBotResponse("CI/CD automates code integration, unit testing, image generation, and multi-environment deployments using Jenkins, GitHub Actions, and GitLab CI.");
        } 
        else if (q.includes("terraform") || q.includes("iac") || q.includes("ansible")) {
            sendBotResponse("Infrastructure as Code (IaC) with Terraform enables declarative cloud provisioning, while Ansible automates configuration management and server setup.");
        } 
        else if (q.includes("linux") || q.includes("bash") || q.includes("script")) {
            sendBotResponse("Proficient in Linux administration (Bash, SSH, file permissions, systemd) and shell scripting for server maintenance and cron automation.");
        } 
        else if (q.includes("experience") || q.includes("job") || q.includes("work") || q.includes("skill")) {
            sendBotResponse("Specialized in building resilient DevOps pipelines, cloud infrastructure provisioning, containerization, and monitoring setup.");
        } 
        else if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) {
            sendBotResponse("You can connect directly through the Contact section below or via LinkedIn!");
        } 
        else {
            sendBotResponse("I can help with questions on DevOps automation, Cloud (AWS/Azure), Docker, Kubernetes, CI/CD, Terraform, or Linux administration!");
        }
    };

    /* =========================================================
       4. INPUT LISTENERS
    ========================================================= */
    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            processQuery(chatInput.value);
        }
    });
});