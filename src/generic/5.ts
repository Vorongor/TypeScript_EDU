interface KeyValuePair<T, U> {
  key: T;
  value: U;
}

const stringKeyValuePair: KeyValuePair<string, number> = {
  key: "example",
  value: 42,
};

const numberKeyValuePair: KeyValuePair<number, boolean> = {
  key: 123,
  value: true,
};

export {};
