//DBConfig.js|tsx

export const DBConfig = {
  name: "crypt-system",
  version: 1,
  objectStoresMeta: [
    {
      store: "people",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "email", keypath: "email", options: { unique: false } },
      ],
    },
  ],
};
