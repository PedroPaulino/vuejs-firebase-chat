// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set , onValue} from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig =  ({
  apiKey: "AIzaSyB1MXBkbikCRX4OrkbSKKJEPeXzOhHBtMk",
  authDomain: "firevuechat-c7c71.firebaseapp.com",
  databaseURL: "https://firevuechat-c7c71-default-rtdb.firebaseio.com",
  projectId: "firevuechat-c7c71",
  storageBucket: "firevuechat-c7c71.appspot.com",
  messagingSenderId: "795389738936",
  appId: "1:795389738936:web:77ebd2cf7ade2e5abf194d"
});
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

/*const insert = (username, content) => {
    set(ref(database, "messages"), {
      username: username,
      content: content,
    });
  }
*/
/*const starCountRef = ref(database, 'messages');

const tempMessages = onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    let messages = [];

    Object.keys(data).forEach(key => {
        messages.push({
            id: key,
            username: data[key].username,
            content: data[key].content
        })
    })

    return messages;

});
*/


console.log("DB")

export default database ;

