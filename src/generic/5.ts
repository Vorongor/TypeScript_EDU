/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair {
  key;
  value;
}

const stringKeyValuePair: Partial<KeyValuePair> = {
  key: "example",
  value: 42,
};

const numberKeyValuePair: Partial<KeyValuePair> = {
  key: 123,
  value: true,
};

export {};
