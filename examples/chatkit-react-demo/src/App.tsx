import { ChatKit, useChatKit } from "@xpert-ai/chatkit-react";
import { CHATKIT_API_DOMAIN_KEY, CHATKIT_API_URL, CHATKIT_GREETING } from "./config";
import "./index.css";

function App() {
  const chatkit = useChatKit({
    api: {
      url: CHATKIT_API_URL,
      domainKey: CHATKIT_API_DOMAIN_KEY,
    },
    theme: {
      colorScheme: "light",
      color: {
        accent: {
          primary: "#0f172a",
        },
      },
      radius: "xl",
    },
    startScreen: {
      greeting: CHATKIT_GREETING,
      prompts: [
        { label: "Try a greeting", prompt: "Hello! What can you do?" },
        { label: "Summarize docs", prompt: "Summarize the README for me." },
        { label: "Ask for code help", prompt: "How do I integrate ChatKit into React?" },
      ],
    },
    composer: {
      placeholder: "Ask anything about your app or codebase...",
    },
    threadItemActions: {
      feedback: false,
    },
    onError: ({ error }) => {
      // ChatKit already surfaces errors inline; keep console logging for debugging.
      console.error("ChatKit error", error);
    },
  });

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">ChatKit playground</p>
          <h1>ChatKit React Demo</h1>
          <p className="lede">
            Minimal page that mounts the <code>ChatKit</code> component for quick testing.
          </p>
        </div>
        <div className="meta">
          <span className="meta-label">API endpoint</span>
          <span className="meta-value">{CHATKIT_API_URL}</span>
        </div>
      </header>
      <main className="app-main">
        <ChatKit control={chatkit.control} className="chatkit-frame" />
      </main>
    </div>
  );
}

export default App;
