// import axios from 'axios'
// import fileDownload from 'js-file-download'
import { saveAs } from "file-saver";


function Resume() {
  

    const saveFile = () => {
      saveAs(
        "https://github.com/leftyloosey/aquinas-dol-guldur/blob/main/public/resume.txt",
        "resume.txt"
      );
      }

        // const handleClick = (url, filename) => {
        //   axios.get(url, {
        //     responseType: 'blob',
        //   })
        //   .then((res) => {
        //     console.log(res.data,filename)
        //     fileDownload(res.data, filename)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //     alert(err)
        //   })
        // }
    
    return (
        <div className="container-fluid">
          <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className="App">
            {/* <button onClick={() => {handleClick('https://github.com/leftyloosey/aquinas-dol-guldur/blob/main/resume.txt', 'resume.txt')}}>
                download</button> */}
            <button onClick={saveFile}>
                download</button>


          </div>
        </div>
    )

}

export default Resume