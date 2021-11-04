import { fileSizeFormater } from "../components/file-item/utils";
import { LocalLabels } from "./localization";

/**
 * Russian translation for Dropzone component
 */
export const DropzoneEnglish: LocalLabels = {
    defaultLabel: "Перетащите сюда свои файлы.",
    uploadingMessage: (amountOfFiles) => { return `Выгрузка ${amountOfFiles} файлов`; },
    uploadFinished: (uploaded, rejected) => `Загружено файлов: ${uploaded}, отклоненных файлов: ${rejected}`,
    noFilesMessage: `Действительный файл не отсутствует для загрузки`,
    footer: {
        acceptAll: `Принимаются все типы файлов `,
        acceptCustom: (accept) => `Допустимые типы: ${accept}`
    },
    header: {
        uploadFilesMessage: "Отправить файлы",
        maxSizeMessage: (maxFileSize) => `Максимальный размер файла: ${maxFileSize} | `,
        validFilesMessage: (numberOfValidFiles, maxFiles) => ` Файлы ${numberOfValidFiles}/${maxFiles} | Действительно: ${numberOfValidFiles} | `
    },
    fakeuploadsuccess: "Файл был успешно загружен",
    fakeUploadError: "Ошибка при загрузке",
}

/**
 * Russian translation for FileItem component
 *
 */
export const FileItemEnglish: LocalLabels = {
    fullInfoLayer: {
        name: `Имя: `,
        size: "Размер: ",
        type: "Tип: "
    },
    status: {
        uploading: "Загрузка",
        success: "успех",
        valid: "годный",
        denied: "выкинутый",
        error: "ошибка"
    },
}

/**
 * Russian translation for Validation Errors
 */
export const ValidateErrorEnglish: LocalLabels = {
    maxSizeError: (maxSize) =>
        `Файл слишком большой. Максимально допустимый размер файла - ${fileSizeFormater(maxSize as number)}`,
    acceptError: `Тип файла не разрешен`,
    maxFileCount: (maxFiles) =>
        `Достигнуто максимальное количество файлов (${maxFiles})`
}