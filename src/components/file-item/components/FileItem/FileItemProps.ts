import { PaperProps } from "../../../paper/components/PaperProps";


export interface FileItemValidator {
    /**
     * The maximum file size allowed in bytes
     */
    maxFileSize?: number;
    /**
     * The list of allowed mime types according to MDN
     * input accept prop
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept
     */
    types?: string[];
    /**
     * Wheher this file was picked exeeding the maximum
     * amount of files
     */
    exeedsAmount?: boolean;
    /**
     * Whether the total file size
     * have been already exeeded
     */
    exeedsTotalFileSize?: boolean;
}
export interface FileItemProps extends PaperProps {
    /**
     * The actual file
     */
    file?: File;
    /**
     * A function of what to do when close button is pressed or clicked
     */
    onDelete?: Function;
    /**
     * A function of what to do when "see" label is pressed or clicked
     */
    onSee?: Function;
    /**
     * Whether to see as grid or inline (horizontal list)
     */
    //view?: "inline" | "grid";
    /**
     * individual validator for each file
     */
    validator?: FileItemValidator;
    /**
     * identifier for the file
     */
    id?: string | number;
    /**
     * Whether to see a preview when the file is an image
     * Makes visible the "view" button that will give
     * The image url
     * Also it only will be visible when file is valid
     */
    preview?: boolean;
    /**
    * whether to show a valid or rejected message
    * by def. valid is false (if not present, is false too)
    * This value wil affect image preview,
    * If not valid, the preview will not be shown, nor the view button
    */
    valid?: boolean;
    /**
     * whether to show the info layer or not
     * also whether to make visible the info button or not 
     */
    info?: boolean;

    fileName?: "bottom" | "inside";

}
export const FileItemPropsDefault: FileItemProps = {
    onDelete: undefined,
    file: undefined,
    color: "#071e25",
    validator: undefined,
    id: undefined,
    style: { },
    preview: false,
    valid: false,
    info: false,
    fileName: "bottom"
}