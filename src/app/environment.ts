export const firebaseConfig = {
    apiKey: "AIzaSyAtNvzmsg1krFeLXL0ec7Xnm6_s-i6tQQs",
    authDomain: "la2019-cf990.firebaseapp.com",
    databaseURL: "https://la2019-cf990.firebaseio.com",
    projectId: "la2019-cf990",
    storageBucket: "la2019-cf990.appspot.com",
    messagingSenderId: "266454096388",
    appId: "1:266454096388:web:6257971113468a2f24f351"
};

export const snapshotToArray = snapshot => {
    let returnArray = [];
    snapshot.forEach(element => {
        let item = element.val()
        item.key = element.key;
        returnArray.push(item)
    });
    return returnArray
}