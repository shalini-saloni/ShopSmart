#!/bin/bash

# Start both backend and frontend development servers.
# Run this script from the repository root: ./scripts/start.sh

set -e

ROOT_DIR="$(cd "$(dirname "$0")"/.. && pwd)"

cd "$ROOT_DIR/server"
echo "Starting backend server..."
npm run dev &
BACKEND_PID=$!

echo "Starting frontend server..."
cd "$ROOT_DIR/client"
npm run dev &
FRONTEND_PID=$!

cleanup() {
  echo "Stopping servers..."
  kill "$BACKEND_PID" "$FRONTEND_PID" 2>/dev/null || true
  wait "$BACKEND_PID" 2>/dev/null || true
  wait "$FRONTEND_PID" 2>/dev/null || true
  exit 0
}

trap cleanup SIGINT SIGTERM EXIT

echo "Backend PID: $BACKEND_PID"
echo "Frontend PID: $FRONTEND_PID"
echo "Press Ctrl+C to stop."

wait
