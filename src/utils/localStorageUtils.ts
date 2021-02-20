import merge from 'lodash/merge'

const storageKey = 'state'

export const saveState = (state: any, saveToSessionStorage = false) => {
  try {
    const serializedState = JSON.stringify(state)

    const storage: Storage = saveToSessionStorage ? sessionStorage : localStorage
    storage.setItem(storageKey, serializedState)
  } catch {
    throw new Error('Failed to save data to browser storage')
  }
}

export const loadState = () => {
  const parseStorageData = (storageData: any) => (storageData ? JSON.parse(storageData) : {})

  try {
    const serializedLocalStorageParsed = parseStorageData(localStorage.getItem(storageKey))
    const serializedSessionStorageParsed = parseStorageData(sessionStorage.getItem(storageKey))

    return merge(serializedSessionStorageParsed, serializedLocalStorageParsed)
  } catch (err) {
    return undefined
  }
}
