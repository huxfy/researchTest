

const scriptElmList = document.getElementsByTagName("script");
console.log('此处取script标签不合适，执行时会阻塞 HTML 解析，此时 HTML 包含的所有 script 数量：', scriptElmList.length);

const alreadyInsert = {}

function forEachElm(elmList, cb) {
    for (let i = 0; i < elmList.length; i++) {
        cb(elmList[i])
    }
}

forEachElm(scriptElmList, (elm) => {
    alreadyInsert[elm.src] = true;

    elm.addEventListener('readystatechange', (event) => {
        console.log(event.target.src, event.target.readyState)
    })
})

window._define = (deps, factory) => {
    let currentScript;
    const scriptElmList = document.getElementsByTagName("script");
    const newInsertElmList = [];
    forEachElm(scriptElmList, (scriptElm) => {
        if (!(scriptElm.src in alreadyInsert)) {
            newInsertElmList.push(scriptElm);
            alreadyInsert[scriptElm.src] = true;
        }
    })

    // 尝试 Kris Zyp 的说法，对于增量标签是否走amd，需要有特殊标识，否则难以判断
    console.log('此时执行 define 时，增量 insert 的 script 标签：', newInsertElmList)

    if (document.currentScript && false) {
        // 直接获取当前正在执行的script标签
        const moduleName = document.currentScript.src.split('/').pop().replace('.js', '');
        console.log('current module:', moduleName);
    } else {

    }
}