import { openDB } from 'idb';

const DATABASE_NAME = 'jate';
const DATABASE_VERSION = 1;
const STORE_NAME = 'jate';

const initdb = async () =>
  openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      if (db.objectStoreNames.contains(STORE_NAME)) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB(DATABASE_NAME, DATABASE_VERSION);
  const tx = jateDb.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);
  const request = store.put({ id: 1, value: content }); // Here, we are always updating the entry with id: 1
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// Method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB(DATABASE_NAME, DATABASE_VERSION);
  const tx = jateDb.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const request = store.get(1); // This gets the entry with id: 1
  const result = await request;
  console.log('result.value', result?.value);
  return result?.value;
};

// Start the database
initdb();
