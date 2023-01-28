
response = []
const userAction = async() => {
    response = await fetch('/vList').then(res => res.json());
    console.log("response>>>", response)
    addVideoList();
}

userAction();

function addVideoList(){
    let vlist = document.getElementById('vList');
    const child = document.createElement('ul');
    for (let item of response['data']){
        let ele = document.createElement('li');
        ele.innerText = item.vName;
        ele.style.cursor = 'pointer'
        ele.addEventListener('click', function(){ playMe(item.src)}, false);
        let br = document.createElement('br');
        child.append(ele);
        child.append(br);
    }
    vlist.appendChild(child);
}

function playMe(ele) {
    console.log("ele>>", ele)
    let vidEle = document.getElementById("video");
    vidEle.src = '/'+ ele;
}

