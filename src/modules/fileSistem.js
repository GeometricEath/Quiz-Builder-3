/* eslint-disable no-console */
import { createQuize } from "@/modules/QuizConverter";

// import parser from './xmlparser'
// const mime = require('mime/lite');


function saveProject() {

}
function saveFile(quizData, quizName) {
    let xml = createQuize( quizData, quizName);
    const MIME_TYPE = "text/xml";
    let blob = new Blob([xml], { type: MIME_TYPE });
    let blobURL = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "quizes";
    link.href = blobURL;
    link.click();
}
function createImagePath() {
    // let extension = mime.getExtension(obj.type); Получает расширение
    // let imgName = 'img' + data.id + '.' + extension;
    // data.path = path.join('don', quizeName, imgName);
}

export {
    saveProject,
    saveFile,
    createImagePath
}


