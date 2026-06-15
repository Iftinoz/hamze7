# Hamze7 - NativeScript Android App

A modern cross-platform Android mobile application built with NativeScript and TypeScript.

## Features
- 🚀 Built with NativeScript
- 📱 Native Android experience
- 📘 TypeScript for type safety
- 🎨 Material Design styling
- ⚡ Fast performance

## Prerequisites

- Node.js (v14 or higher)
- NativeScript CLI: `npm install -g nativescript`
- Android SDK (API level 21+)
- Java Development Kit (JDK 11+)

## Installation

```bash
# Install dependencies
npm install

# Setup NativeScript
ns doctor
```

## Development

```bash
# Run on Android device/emulator
npm start

# Build release APK
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── app.component.ts      # Main component
│   ├── app.component.html    # UI template
│   └── app.component.css     # Styles
└── main.ts                   # Application entry point
```

## Building for Production

```bash
# Build production APK
ns build android --release

# Build AAB (Android App Bundle)
ns build android --release --aab
```

## Deployment

To publish your app to Google Play Store:

1. Create a keystore file
2. Sign your release APK/AAB
3. Upload to Google Play Console

## Resources

- [NativeScript Documentation](https://docs.nativescript.org/)
- [NativeScript Community](https://nativescript.org/)
- [Android Developer Docs](https://developer.android.com/)

## License

MIT

## Author

Iftinoz
