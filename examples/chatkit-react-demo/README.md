# ChatKit React Demo

A minimal React + Vite example that mounts the `ChatKit` component from `@xpert-ai/chatkit-react` so you can quickly verify UI rendering and end-to-end calls.

## Quick start
```bash
cd examples/chatkit-react-demo
npm install
npm run dev
```

## API configuration
- `VITE_CHATKIT_API_URL` – ChatKit endpoint (defaults to `http://127.0.0.1:8000/chatkit`).
- `VITE_CHATKIT_API_DOMAIN_KEY` – domain allowlist key (use any non-empty string locally, defaults to `domain_pk_local_dev`).
- `VITE_CHATKIT_GREETING` – optional start screen greeting.

For a working backend, you can reuse the FastAPI server from `examples/customer-support/backend`:
```bash
cd examples/customer-support/backend
uv sync
export XPERTAI_API_KEY="sk-proj-..."
uv run uvicorn app.main:app --reload --port 8000
```
Then run the Vite dev server (on port 5173 by default) in this folder.
