/* eslint-disable no-console */
import { createQuize } from "@/modules/QuizConverter";
import { EventBus } from '../plugins/EvenBus';
import store from '../store'
import JSZip from 'jszip'
import mime from 'mime/lite'

// import parser from './xmlparser'

EventBus.on('saveProject', saveProject);

function saveProject() {
    let questions = store.getters.questions;
    let quizName = store.getters.quizName;
    let zip = new JSZip();
    questions.forEach(questionData => {
        questionData.imagePath = createImagePath(questionData.image, questionData.id, quizName);
        let fileName = questionData.imagePath.split('\\')[2]
        zip.file(fileName, dataURLtoBlob(questionData.image));
    });
    const xml = createQuize(questions, quizName);
    zip.file('quiz.xml', xml)
    zip.generateAsync({ type: "blob" })
        .then(blob => {
            let blobURL = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.download = quizName;
            link.href = blobURL;
            link.click();
        })
}
function saveXmlAsFile(quizData, quizName) {
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
function saveImageFromDataURL(imageData) {
    fetch(imageData)
        .then(res => res.blob())
        .then(blob => {
            let blobURL = window.URL.createObjectURL(blob);
            console.log(blobURL);
            const link = document.createElement("a");
            link.download = "image";
            link.href = blobURL;
            link.click();
        })
}
function dataURLtoBlob(url) {
    return fetch(url)
        .then(res => { return res.blob() })
}
function createImagePath(dataURL, id, quizName) {
    const MIME_TYPE = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const extension = mime.getExtension(MIME_TYPE);
    console.log(MIME_TYPE);
    const imgName = 'img' + id + '.' + extension;
    const imgPath = `don\\${quizName}\\${imgName}`
    return imgPath;
}

export {
    saveProject,
    saveXmlAsFile,
    saveImageFromDataURL,
    createImagePath,
    dataURLtoBlob
}



