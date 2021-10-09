const fs = require('fs');
// const inJs = require('./studentInfo.json')

const addData = (id, name, grade, subject) => {
    const info = loadInfo()

    const addId = info.filter((obj) => {
        return obj.id === id
    })


    if (addId.length === 0) {
        info.push({
            id,
            name,
            grade,
            subject
        })
        saveInfo(info)
        console.log("Adding  Success");
    } else {
        console.log("Something went wrong adding id!");
    }

}
//////////////////////////////




const removeData = (id) => {
    const info = loadInfo()


    const infoIm = info.filter((data) => {

        return data.id !== id
    })

    saveInfo(infoIm)
    console.log('Done !')
}


///////////////////////////////////




const readInfo = (id) => {
    const info = loadInfo()
    const infoIm = info.find((obj) => {

        return obj.id === id
    })
    if (infoIm) {
        console.log(infoIm)

    } else {
        console.log('Something went wrong With id!')
    }
}



/////////////////////////////////////////////////////////////////


const infoList = () => {
    const info = loadNotes()
    info.forEach((infoIm) => {
        console.log("Name : " + infoIm.name + " ,  grade : " + infoIm.grade)
    })
}





const loadInfo = () => {

    try {
        const dataBuffer = fs.readFileSync('studentInfo.json').toString();
        return JSON.parse(dataBuffer)
    } catch (e) {
        return []
    }

}


const saveInfo = (info) => {
    const saveData = JSON.stringify(info)

    fs.writeFileSync('studentInfo.json', saveData)
}


module.exports = {
    addData,
    removeData,
    readInfo,
    infoList
}