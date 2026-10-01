# Expo Product Explorer

An Expo app that demonstrates a small product discovery experience. The home
screen includes a featured product, an interactive button, and the author
identity required for the class activity.

## Run locally

```bash
npm install
npm start
```

Press `w` for the web preview or scan the QR code with Expo Go on a device.

## Expo MCP guidance

The official Expo MCP documentation is available at
<https://docs.expo.dev/mcp/>. Expo MCP can provide current Expo documentation
and project-aware guidance to compatible AI clients. This project uses the
official documentation as the source for Expo development guidance.

## CI

The workflow in `.github/workflows/expo-ci.yml` installs dependencies, runs
Expo Doctor, and exports a web bundle on pushes and pull requests.
