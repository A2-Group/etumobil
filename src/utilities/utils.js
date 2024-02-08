import {Directory, Filesystem} from '@capacitor/filesystem';
import CryptoJS from 'crypto-js';
import {SecureStoragePlugin} from 'capacitor-secure-storage-plugin';

const secureStorage = SecureStoragePlugin;

export async function writeOwnerStudentIDToFile(student_ID) {
    const key = "1234567890123456";
    const encrypted_ID = CryptoJS.AES.encrypt(student_ID, key)
    await Filesystem.writeFile({
        path: 'owner.txt',
        data: encrypted_ID.toString(),
        directory: Directory.Library,
    })
    await secureStorage.set({key: 'key', value: key});
}

export async function readOwnerStudentIDFromFile() {
    let file = await Filesystem.readFile({
        path: 'owner.txt',
        directory: Directory.Library,
    });
    const key = await secureStorage.get({key: 'key'});
    const decrypted_ID = CryptoJS.AES.decrypt(file.data, key.value);
    return decrypted_ID.toString(CryptoJS.enc.Utf8);
}

export async function isOwnerStudentIDFileExists() {
    try {
        await Filesystem.stat({
            path: 'owner.txt',
            directory: Directory.Library
        });
        return true;
    } catch (error) {
        return false;
    }
}



export function hexToRGBA(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}





