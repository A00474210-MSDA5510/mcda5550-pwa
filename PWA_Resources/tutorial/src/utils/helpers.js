import { db } from './db'

export function getAllStudentsFromDB() {
    return db.students.toArray().then((data) => {
        return data
    })
}

export function addStudentToDB(name, num, city) {
    console.log(name, num, city);
    db.students.put({ num, name, city })
        .then(() => true)
        .catch(err => {
            alert("Ouch... " + err)
        })
}