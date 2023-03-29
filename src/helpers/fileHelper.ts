
import fs, { unlink } from 'fs';

export const fileRead = (file: string) => {
    return fs.readFileSync(file);
}

export const fileDelete = (file: string) => {
    return fs.unlink(file, () => {
        
    });
}