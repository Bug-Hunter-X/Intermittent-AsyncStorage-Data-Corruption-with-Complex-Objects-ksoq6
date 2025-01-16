# React Native AsyncStorage Data Corruption Bug

This repository demonstrates a bug related to data corruption when using AsyncStorage in React Native to store and retrieve complex JavaScript objects. The bug manifests as inconsistent data retrieval, where elements within nested arrays may be missing or reordered after retrieval.  The problem is intermittent, making it difficult to reliably reproduce.

## Bug Description

The core issue is the inconsistency in how AsyncStorage handles the serialization and deserialization of complex objects. While simple data types are stored and retrieved without issues, nested objects and arrays sometimes experience corruption.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run the application on a simulator or physical device.
4. Observe the console logs for inconsistencies in the retrieved data.  The bug is intermittent, so you may need to repeat steps 3-4 multiple times.

## Solution

The recommended solution involves using a JSON.stringify/JSON.parse approach to manage complex objects within AsyncStorage. This ensures reliable storage and retrieval without any data corruption.

## Disclaimer

This bug and its solution are meant for educational purposes to illustrate potential issues with AsyncStorage and demonstrate a robust handling approach.  Always thoroughly test your data storage mechanisms within your applications.