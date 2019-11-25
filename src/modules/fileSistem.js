/* eslint-disable no-console */
import { createQuize } from "@/modules/QuizConverter";
import { EventBus } from '../plugins/EvenBus';

// import parser from './xmlparser'
// const mime = require('mime/lite');

EventBus.on('saveProject', saveProject);

function saveProject(data) {
    generateImageBlobURL(data);
}
function saveFile(quizData, quizName) {
    let xml = createQuize(quizData, quizName);
    const MIME_TYPE = "text/xml";
    let blob = new Blob([xml], { type: MIME_TYPE });
    let blobURL = window.URL.createObjectURL(blob);
    console.log(blobURL);
    const link = document.createElement("a");
    link.download = "quizes";
    link.href = blobURL;
    link.click();
}
function generateImageBlobURL(imageData) {
    const MIME_TYPE = imageData.split(',')[0].split(':')[1].split(';')[0];
    
    let blob = new Blob([imageData], { type: MIME_TYPE });
    let blobURL = window.URL.createObjectURL(blob);
    console.log(blobURL);
    const link = document.createElement("a");
    link.download = "image";
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


