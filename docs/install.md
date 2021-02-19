# Install

1. [Fresh install](#fresh-install)
1. [Reset environment](#reset-environment)

## Fresh install

### Requirements

1. [yarn](https://yarnpkg.com/)

```
npm i -g yarn
```

2. [Cocoapods](https://cocoapods.org/)

```
gem install cocoapods -v 1.10.1
```

3. [Xcode](https://developer.apple.com/xcode/)

4. [Android Studio](https://developer.android.com/studio)


### Development

Install yarn packages using the following command:

```bash
yarn
```

#### iOS
Install pods

```bash
cd ios && pod install
```

Run application

```bash
react-native run-ios
```

Run application on a specific simulator. Example:
```bash
react-native run-ios --simulator="iPhone 11 Pro"
```

#### Android

1. Make sure that you have Android Virtual Device set up
2. Open `android/` folder with Android Studio
3. Wait untill Gradle sync will be finished
4. Update Gradle if is required (pop-up will show up)
5. Run Android virtual device
6. In main project folder run
```bash
react-native run-android
```

#### Set your .env file:

Local:

```
API_URL=https://api.github.com
```


### Debugging

1. Chrome debugger
   Press CMD+D on iOS or CMD+M on Android and press `Debug`, then page will be opened with access to JS console by DevTools.


## Reset environment
If you want to clear your environment (recommended after a RN upgrade), follow the guide below:

1. Remove `node_modules`
```bash
rm -rf node_modules
```

2. Remove `pods`
```bash
rm -rf ios/pods/
```

3. Remove build folders
```bash
rm -rf ios/build && rm -rf android/app/build
```

4. Follow the [fresh install guide](#fresh-install)
